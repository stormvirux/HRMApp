/* =============================================================
 * bootstrap-collapse.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
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
!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n=this.dimension(),i=e.camelCase(["scroll",n].join("-")),r=this.$parent&&this.$parent.find(".in");r&&r.length&&(t=r.data("collapse"),r.collapse("hide"),t||r.data("collapse",null)),this.$element[n](0),this.transition("addClass","show","shown"),this.$element[n](this.$element[0][i])},hide:function(){var e=this.dimension();this.reset(this.$element[e]()),this.transition("removeClass","hide","hidden"),this.$element[e](0)},reset:function(e){var t=this.dimension();this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element.addClass("collapse")},transition:function(t,n,i){var r=this,o=function(){"show"==n&&r.reset(),r.$element.trigger(i)};this.$element.trigger(n)[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,o):o()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},e.fn.collapse=function(n){return this.each(function(){var i=e(this),r=i.data("collapse"),o="object"==typeof n&&n;r||i.data("collapse",r=new t(this,o)),"string"==typeof n&&r[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e(function(){e("body").on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n,i=e(this),r=i.attr("data-target")||t.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),o=e(r).data("collapse")?"toggle":i.data();e(r).collapse(o)})})}(window.jQuery);