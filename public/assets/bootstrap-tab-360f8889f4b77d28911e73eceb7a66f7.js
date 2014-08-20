/* ========================================================
 * bootstrap-tab.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
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
 * ======================================================== */
!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t,n,i=this.element,r=i.closest("ul:not(.dropdown-menu)"),o=i.attr("data-target");o||(o=i.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),i.parent("li").hasClass("active")||(t=r.find(".active a").last()[0],i.trigger({type:"show",relatedTarget:t}),n=e(o),this.activate(i.parent("li"),r),this.activate(n,n.parent(),function(){i.trigger({type:"shown",relatedTarget:t})}))},activate:function(t,n,i){function r(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}var o=n.find("> .active"),a=i&&e.support.transition&&o.hasClass("fade");a?o.one(e.support.transition.end,r):r(),o.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var i=e(this),r=i.data("tab");r||i.data("tab",r=new t(this)),"string"==typeof n&&r[n]()})},e.fn.tab.Constructor=t,e(function(){e("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})})}(window.jQuery);