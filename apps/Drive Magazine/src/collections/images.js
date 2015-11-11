/**
 * @Description: App collection.
 * @Author: wangyuhao
 * @Date: 14-10-15
 * @Company: China EKai
 * @Copyright: All rights Reserved, Designed By EKai
 *               Copyright(C) 2005-2014
 */
define(function (require, exports, module) {
    var Backbone = require('backbone');
    var Image= require('../models/image');

    module.exports = Backbone.Collection.extend({
        model: Image,
        url: function () {
            return ;
        },
        parse: function (response) {
            return response.apps;
        }
    });
});