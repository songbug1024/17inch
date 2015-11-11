/**
 * @Description: Broadcast main view.
 * @Author: fuwensong
 * @Date: 14-10-13
 * @Company: China EKai
 * @Copyright: All rights Reserved, Designed By EKai
 *               Copyright(C) 2005-2014
 */
define(function (require, exports, module) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var store = require('store');
    var topivi = require('topivi');

    var Template = require('../../templates/lately/main.tpl');
    var ChannelCollection = require('../../collections/lately-channel');
    var FooterPlayView = require('../footer-play');
    var ChannelListView = require('../channel-list');
    var Settings = require('../../settings.json');
    var localKeys = Settings.STORAGE_KEYS;

    module.exports = Backbone.View.extend({
        className: 'main',
        template: _.template(Template),
        events: {
            'tap .header .clear': 'clearAllClickEvent',
            'swipeleft .listview>.item': 'itemSwipeLeftEvent',
            'swiperight .listview>.item': 'itemSwipeRightEvent'
        },
        constructor: function () {
            Backbone.View.apply(this, arguments);
        },
        initialize: function (options) {
            this.pageName = options.fromPage;
            this.collection = new ChannelCollection();
            this.channelListView = new ChannelListView({
                collection: this.collection,
                scrollSelector: '.page.lately>.main>.content'
            });
            this.footerView = new FooterPlayView({
                fromPage: this.pageName
            });
            this.listenTo(this.collection, 'remove', this.removeItemEvent);
        },
        render: function () {
            this.$el.empty();
            this.$el.html(this.template({
                title: '最近收听'
            }));
            this.renderChannels();
            return this;
        },
        renderChannels: function () {
            var self = this;
            var storedChannels = store.get(localKeys.lately_played_channels);
            storedChannels = storedChannels || {}
            storedChannels = _.values(storedChannels);
            this.collection.reset(storedChannels);

            this.channelListView.pageName = this.pageName;
            this.$el.find('>.content').append(this.channelListView.render().el);
            this.$el.find('>.footer').append(this.footerView.render().el);
        },
        clearAllClickEvent: function () {
            if (this.collection.length <= 0) {
                return;
            }
            var self = this;
            var dialog = new topivi.dialog.confirm('', {
                content: '你确定要删除所有收听记录吗？',
                onOkClick: function () {
                    removeAllLatelyChannels();
                    self.footerView.stopPlay();
                    self.render();
                },
                removeAfterClose: true,
                useMask: true,
                closeGesture: 'clickmask'
            });
            dialog.el.addClass('qtfm');
            dialog.open();
        },
        itemSwipeLeftEvent: function (e) {
            var itemEl = $(e.currentTarget);
            if (itemEl.hasClass('deleting')) {
                return;
            }
            itemEl.addClass('deleting');
            itemEl.append("<div class='delete-btn'></div>");
            itemEl.find('.delete-btn').fadeIn(300);
        },
        itemSwipeRightEvent: function (e) {
            var itemEl = $(e.currentTarget);
            if (!itemEl.hasClass('deleting')) {
                return;
            }
            itemEl.removeClass('deleting');
            itemEl.find('.delete-btn').remove();
        },
        removeItemEvent: function (model) {
            removeFromLatelyChannels(model.id);
            if (model.id === this.footerView.model.id) {
                removeLateChannel();
                this.footerView.stopPlay();
                this.footerView.render();
            }
        }
    });
    var removeAllLatelyChannels = function () {
        store.remove(localKeys.last_played_channel);
        store.remove(localKeys.lately_played_channels);
    };
    var removeLateChannel = function () {
        store.remove(localKeys.last_played_channel);
    };
    var removeFromLatelyChannels = function (channelId) {
        var channels = store.get(localKeys.lately_played_channels);
        channels = channels || {};
        channels[channelId] = undefined;
        store.set(localKeys.lately_played_channels, channels);
    };
});