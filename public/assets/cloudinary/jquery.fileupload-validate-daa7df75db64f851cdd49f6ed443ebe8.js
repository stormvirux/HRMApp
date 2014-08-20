/*
 * jQuery File Upload Validation Plugin 1.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload-process"],e):e(window.jQuery)}(function(e){"use strict";e.blueimp.fileupload.prototype.options.processQueue.push({action:"validate",always:!0,acceptFileTypes:"@",maxFileSize:"@",minFileSize:"@",maxNumberOfFiles:"@",disabled:"@disableValidation"}),e.widget("blueimp.fileupload",e.blueimp.fileupload,{options:{getNumberOfFiles:e.noop,messages:{maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small"}},processActions:{validate:function(t,n){if(n.disabled)return t;var i=e.Deferred(),r=this.options,o=t.files[t.index],a=r.getNumberOfFiles();return a&&"number"===e.type(n.maxNumberOfFiles)&&a+t.files.length>n.maxNumberOfFiles?o.error=r.i18n("maxNumberOfFiles"):!n.acceptFileTypes||n.acceptFileTypes.test(o.type)||n.acceptFileTypes.test(o.name)?n.maxFileSize&&o.size>n.maxFileSize?o.error=r.i18n("maxFileSize"):"number"===e.type(o.size)&&o.size<n.minFileSize?o.error=r.i18n("minFileSize"):delete o.error:o.error=r.i18n("acceptFileTypes"),o.error||t.files.error?(t.files.error=!0,i.rejectWith(this,[t])):i.resolveWith(this,[t]),i.promise()}}})});