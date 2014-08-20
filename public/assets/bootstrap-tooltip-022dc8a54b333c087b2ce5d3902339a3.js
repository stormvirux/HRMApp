/* ===========================================================
 * bootstrap-tooltip.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
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
!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,i){var r,o;this.type=t,this.$element=e(n),this.options=this.getOptions(i),this.enabled=!0,"manual"!=this.options.trigger&&(r="hover"==this.options.trigger?"mouseenter":"focus",o="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(r,this.options.selector,e.proxy(this.enter,this)),this.$element.on(o,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);n.options.delay&&n.options.delay.show?(n.hoverState="in",setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show()},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);n.options.delay&&n.options.delay.hide?(n.hoverState="out",setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},show:function(){var e,t,n,i,r,o,a;if(this.hasContent()&&this.enabled){switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),o="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(o),e.remove().css({top:0,left:0,display:"block"}).appendTo(t?this.$element:document.body),n=this.getPosition(t),i=e[0].offsetWidth,r=e[0].offsetHeight,t?o.split(" ")[1]:o){case"bottom":a={top:n.top+n.height,left:n.left+n.width/2-i/2};break;case"top":a={top:n.top-r,left:n.left+n.width/2-i/2};break;case"left":a={top:n.top+n.height/2-r/2,left:n.left-i};break;case"right":a={top:n.top+n.height/2-r/2,left:n.left+n.width}}e.css(a).addClass(o).addClass("in")}},setContent:function(){var e=this.tip();e.find(".tooltip-inner").html(this.getTitle()),e.removeClass("fade in top bottom left right")},hide:function(){function t(){var t=setTimeout(function(){n.off(e.support.transition.end).remove()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.remove()})}var n=this.tip();n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?t():n.remove()},fixTitle:function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title),e=e.toString().replace(/(^\s*|\s*$)/,"")},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},e.fn.tooltip=function(n){return this.each(function(){var i=e(this),r=i.data("tooltip"),o="object"==typeof n&&n;r||i.data("tooltip",r=new t(this,o)),"string"==typeof n&&r[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}(window.jQuery);