/* ==========================================================
 * bootstrap-carousel.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.carousel.defaults,n),this.options.slide&&this.slide(this.options.slide)};t.prototype={cycle:function(){return this.interval=setInterval(e.proxy(this.next,this),this.options.interval),this},to:function(t){var n=this.$element.find(".active"),i=n.parent().children(),r=i.index(n),o=this;if(!(t>i.length-1||0>t))return this.sliding?this.$element.one("slid",function(){o.to(t)}):r==t?this.pause().cycle():this.slide(t>r?"next":"prev",e(i[t]))},pause:function(){return clearInterval(this.interval),this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(t,n){var i=this.$element.find(".active"),r=n||i[t](),o=this.interval,a="next"==t?"left":"right",s="next"==t?"first":"last",l=this;return this.sliding=!0,o&&this.pause(),r=r.length?r:this.$element.find(".item")[s](),!e.support.transition&&this.$element.hasClass("slide")?(this.$element.trigger("slide"),i.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")):(r.addClass(t),r[0].offsetWidth,i.addClass(a),r.addClass(a),this.$element.trigger("slide"),this.$element.one(e.support.transition.end,function(){r.removeClass([t,a].join(" ")).addClass("active"),i.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)})),o&&this.cycle(),this}},e.fn.carousel=function(n){return this.each(function(){var i=e(this),r=i.data("carousel"),o="object"==typeof n&&n;r||i.data("carousel",r=new t(this,o)),"number"==typeof n?r.to(n):"string"==typeof n||(n=o.slide)?r[n]():r.cycle()})},e.fn.carousel.defaults={interval:5e3},e.fn.carousel.Constructor=t,e(function(){e("body").on("click.carousel.data-api","[data-slide]",function(t){var n,i=e(this),r=e(i.attr("data-target")||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")),o=!r.data("modal")&&e.extend({},r.data(),i.data());r.carousel(o),t.preventDefault()})})}(window.jQuery);