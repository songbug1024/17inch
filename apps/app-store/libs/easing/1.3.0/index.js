define("easing",["jquery"],function(n,t,e){var u=n("jquery");u.easing.jswing=u.easing.swing,u.extend(u.easing,{def:"easeOutQuad",swing:function(n,t,e,a,r){return u.easing[u.easing.def](n,t,e,a,r)},easeInQuad:function(n,t,e,u,a){return u*(t/=a)*t+e},easeOutQuad:function(n,t,e,u,a){return-u*(t/=a)*(t-2)+e},easeInOutQuad:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t+e:-u/2*(--t*(t-2)-1)+e},easeInCubic:function(n,t,e,u,a){return u*(t/=a)*t*t+e},easeOutCubic:function(n,t,e,u,a){return u*((t=t/a-1)*t*t+1)+e},easeInOutCubic:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t+e:u/2*((t-=2)*t*t+2)+e},easeInQuart:function(n,t,e,u,a){return u*(t/=a)*t*t*t+e},easeOutQuart:function(n,t,e,u,a){return-u*((t=t/a-1)*t*t*t-1)+e},easeInOutQuart:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t+e:-u/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(n,t,e,u,a){return u*(t/=a)*t*t*t*t+e},easeOutQuint:function(n,t,e,u,a){return u*((t=t/a-1)*t*t*t*t+1)+e},easeInOutQuint:function(n,t,e,u,a){return(t/=a/2)<1?u/2*t*t*t*t*t+e:u/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(n,t,e,u,a){return-u*Math.cos(t/a*(Math.PI/2))+u+e},easeOutSine:function(n,t,e,u,a){return u*Math.sin(t/a*(Math.PI/2))+e},easeInOutSine:function(n,t,e,u,a){return-u/2*(Math.cos(Math.PI*t/a)-1)+e},easeInExpo:function(n,t,e,u,a){return 0==t?e:u*Math.pow(2,10*(t/a-1))+e},easeOutExpo:function(n,t,e,u,a){return t==a?e+u:u*(-Math.pow(2,-10*t/a)+1)+e},easeInOutExpo:function(n,t,e,u,a){return 0==t?e:t==a?e+u:(t/=a/2)<1?u/2*Math.pow(2,10*(t-1))+e:u/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(n,t,e,u,a){return-u*(Math.sqrt(1-(t/=a)*t)-1)+e},easeOutCirc:function(n,t,e,u,a){return u*Math.sqrt(1-(t=t/a-1)*t)+e},easeInOutCirc:function(n,t,e,u,a){return(t/=a/2)<1?-u/2*(Math.sqrt(1-t*t)-1)+e:u/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(1==(t/=a))return e+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i))+e},easeOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(1==(t/=a))return e+u;if(i||(i=.3*a),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return s*Math.pow(2,-10*t)*Math.sin(2*(t*a-r)*Math.PI/i)+u+e},easeInOutElastic:function(n,t,e,u,a){var r=1.70158,i=0,s=u;if(0==t)return e;if(2==(t/=a/2))return e+u;if(i||(i=.3*a*1.5),s<Math.abs(u)){s=u;var r=i/4}else var r=i/(2*Math.PI)*Math.asin(u/s);return 1>t?-.5*s*Math.pow(2,10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i)+e:s*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*a-r)*Math.PI/i)*.5+u+e},easeInBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),u*(t/=a)*t*((r+1)*t-r)+e},easeOutBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),u*((t=t/a-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(n,t,e,u,a,r){return void 0==r&&(r=1.70158),(t/=a/2)<1?u/2*t*t*(((r*=1.525)+1)*t-r)+e:u/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e},easeInBounce:function(n,t,e,a,r){return a-u.easing.easeOutBounce(n,r-t,0,a,r)+e},easeOutBounce:function(n,t,e,u,a){return(t/=a)<1/2.75?7.5625*u*t*t+e:2/2.75>t?u*(7.5625*(t-=1.5/2.75)*t+.75)+e:2.5/2.75>t?u*(7.5625*(t-=2.25/2.75)*t+.9375)+e:u*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(n,t,e,a,r){return r/2>t?.5*u.easing.easeInBounce(n,2*t,0,a,r)+e:.5*u.easing.easeOutBounce(n,2*t-r,0,a,r)+.5*a+e}}),e.exports=u.easing});