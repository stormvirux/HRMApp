/* =============================================================
 * bootstrap-scrollspy.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
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
 * ============================================================== */
!function(e){"use strict";function t(t,n){var i,r=e.proxy(this.process,this),o=e(e(t).is("body")?window:t);this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=o.on("scroll.scroll.data-api",r),this.selector=(this.options.target||(i=e(t).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body").on("click.scroll.data-api",this.selector,r),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){this.targets=this.$body.find(this.selector).map(function(){var t=e(this).attr("href");return/^#\w/.test(t)&&e(t).length?t:null}),this.offsets=e.map(this.targets,function(t){return e(t).position().top})},process:function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.offsets,i=this.targets,r=this.activeTarget;for(e=n.length;e--;)r!=i[e]&&t>=n[e]&&(!n[e+1]||t<=n[e+1])&&this.activate(i[e])},activate:function(e){var t;this.activeTarget=e,this.$body.find(this.selector).parent(".active").removeClass("active"),t=this.$body.find(this.selector+'[href="'+e+'"]').parent("li").addClass("active"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active")}},e.fn.scrollspy=function(n){return this.each(function(){var i=e(this),r=i.data("scrollspy"),o="object"==typeof n&&n;r||i.data("scrollspy",r=new t(this,o)),"string"==typeof n&&r[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e(function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);