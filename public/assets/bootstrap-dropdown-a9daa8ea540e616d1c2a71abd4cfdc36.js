/* ============================================================
 * bootstrap-dropdown.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
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
!function(e){"use strict";function t(){e(n).parent().removeClass("open")}var n='[data-toggle="dropdown"]',i=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};i.prototype={constructor:i,toggle:function(){var n,i,r=e(this),o=r.attr("data-target");return o||(o=r.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),n=e(o),n.length||(n=r.parent()),i=n.hasClass("open"),t(),!i&&n.toggleClass("open"),!1}},e.fn.dropdown=function(t){return this.each(function(){var n=e(this),r=n.data("dropdown");r||n.data("dropdown",r=new i(this)),"string"==typeof t&&r[t].call(n)})},e.fn.dropdown.Constructor=i,e(function(){e("html").on("click.dropdown.data-api",t),e("body").on("click.dropdown.data-api",n,i.prototype.toggle)})}(window.jQuery);