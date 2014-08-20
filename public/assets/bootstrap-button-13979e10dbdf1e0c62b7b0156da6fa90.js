/* ============================================================
 * bootstrap-button.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
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
 * ============================================================ */
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype={constructor:t,setState:function(e){var t="disabled",n=this.$element,i=n.data(),r=n.is("input")?"val":"html";e+="Text",i.resetText||n.data("resetText",n[r]()),n[r](i[e]||this.options[e]),setTimeout(function(){"loadingText"==e?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},toggle:function(){var e=this.$element.parent('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")}},e.fn.button=function(n){return this.each(function(){var i=e(this),r=i.data("button"),o="object"==typeof n&&n;r||i.data("button",r=new t(this,o)),"toggle"==n?r.toggle():n&&r.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(function(){e("body").on("click.button.data-api","[data-toggle^=button]",function(t){e(t.target).button("toggle")})})}(window.jQuery);