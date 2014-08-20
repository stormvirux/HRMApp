/* ===================================================
 * bootstrap-transition.js v2.0.0
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
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
!function(e){e(function(){"use strict";e.support.transition=function(){var t=document.body||document.documentElement,n=t.style,i=void 0!==n.transition||void 0!==n.WebkitTransition||void 0!==n.MozTransition||void 0!==n.MsTransition||void 0!==n.OTransition;return i&&{end:function(){var t="TransitionEnd";return e.browser.webkit?t="webkitTransitionEnd":e.browser.mozilla?t="transitionend":e.browser.opera&&(t="oTransitionEnd"),t}()}}()})}(window.jQuery);