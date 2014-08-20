/*
 * Cloudinary's jQuery library - v1.0.19
 * Copyright Cloudinary
 * see https://github.com/cloudinary/cloudinary_js
 */
!function(e){"use strict";if("function"==typeof define&&define.amd)define(["jquery","jquery.ui.widget","jquery.iframe-transport","jquery.fileupload"],e);else{var t=window.jQuery;e(t),t(function(){void 0!==t.fn.cloudinary_fileupload&&t("input.cloudinary-fileupload[type=file]").cloudinary_fileupload()})}}(function(e){"use strict";function t(e){if(null===e||"undefined"==typeof e)return"";var t,n,i=e+"",r="",o=0;t=n=0,o=i.length;for(var a=0;o>a;a++){var s=i.charCodeAt(a),l=null;128>s?n++:l=s>127&&2048>s?String.fromCharCode(s>>6|192,63&s|128):String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128),null!==l&&(n>t&&(r+=i.slice(t,n)),r+=l,t=n=a+1)}return n>t&&(r+=i.slice(t,o)),r}function n(e){e=t(e);var n="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",i=0,r=0,o=0;i=-1^i;for(var a=0,s=e.length;s>a;a++)o=255&(i^e.charCodeAt(a)),r="0x"+n.substr(9*o,8),i=i>>>8^r;return i=-1^i,0>i&&(i+=4294967296),i}function i(e,t,n){var i=e[t];return delete e[t],"undefined"==typeof i?n:i}function r(t){return t?e.isArray(t)?t:[t]:[]}function o(e){return"undefined"!=typeof e&&(""+e).length>0}function a(t){for(var n=r(t.transformation),i=!0,o=0;o<n.length;o++)i=i&&"string"==typeof n[o];if(i)return[];delete t.transformation;for(var a=[],o=0;o<n.length;o++){var s=n[o];a.push("string"==typeof s?"t_"+s:u(e.extend({},s)))}return a}function s(e){var t=i(e,"size");if(t){var n=t.split("x");e.width=n[0],e.height=n[1]}}function l(e){var t=e.width,n=e.height,i=e.overlay||e.underlay,r=e.crop,o=!i&&!e.angle&&"fit"!=r&&"limit"!=r&&"lfill"!=r;o&&(t&&!e.html_width&&"auto"!==t&&parseFloat(t)>=1&&(e.html_width=t),n&&!e.html_height&&parseFloat(n)>=1&&(e.html_height=n)),r||i||(delete e.width,delete e.height)}function u(e){var t=a(e);s(e),l(e);var n=[];for(var r in b){var u=i(e,r);o(u)&&(x[r]&&(u=x[r](u)),o(u)&&n.push(b[r]+"_"+u))}n.sort();var c=i(e,"raw_transformation");o(c)&&n.push(c);var d=n.join(",");return o(d)&&t.push(d),t.join("/")}function c(e){if(!e.match(/^https?:\//)){var t=document.location.protocol+"//"+document.location.host;"?"==e[0]?t+=document.location.pathname:"/"!=e[0]&&(t+=document.location.pathname.replace(/\/[^\/]*$/,"/")),e=t+e}return e}function d(t,r){r=r||{};var a=i(r,"type","upload");"fetch"==a&&(r.fetch_format=r.fetch_format||i(r,"format"));var s=u(r),l=i(r,"resource_type","image"),d=i(r,"version"),p=i(r,"format"),f=i(r,"cloud_name",e.cloudinary.config().cloud_name);if(!f)throw"Unknown cloud_name";var h=i(r,"private_cdn",e.cloudinary.config().private_cdn),m=i(r,"secure_distribution",e.cloudinary.config().secure_distribution),v=i(r,"cname",e.cloudinary.config().cname),b=i(r,"cdn_subdomain",e.cloudinary.config().cdn_subdomain),x=i(r,"shorten",e.cloudinary.config().shorten),w=i(r,"secure","https:"==window.location.protocol),C=i(r,"protocol",e.cloudinary.config().protocol),k=i(r,"trust_public_id");if("fetch"==a&&(t=c(t)),t.match(/^https?:/)){if("upload"==a||"asset"==a)return t;t=encodeURIComponent(t).replace(/%3A/g,":").replace(/%2F/g,"/")}else t=encodeURIComponent(decodeURIComponent(t)).replace(/%3A/g,":").replace(/%2F/g,"/"),p&&(k||(t=t.replace(/\.(jpg|png|gif|webp)$/,"")),t=t+"."+p);var T=w?"https://":"file:"===window.location.protocol?"file://":"http://";if(T=C?C+"//":T,f.match(/^\//)&&!w)T="/res"+f;else{var E=!h;if(w)m&&m!=g||(m=h?f+"-res.cloudinary.com":y),E=E||m==y,T+=m;else{var D=b?"a"+(n(t)%5+1)+".":"",N=v||(h?f+"-res.cloudinary.com":"res.cloudinary.com");T+=D+N}E&&(T+="/"+f)}x&&"image"==l&&"upload"==a&&(l="iu",a=void 0),t.search("/")>=0&&!t.match(/^v[0-9]+/)&&!t.match(/^https?:\//)&&!o(d)&&(d=1);var A=[T,l,a,s,d?"v"+d:"",t].join("/").replace(/([^:])\/+/g,"$1/");return A}function p(e){return 10*Math.ceil(e/10)}function f(t,n){e.cloudinary.config("dpr")&&!n.dpr&&(n.dpr=e.cloudinary.config("dpr"));var r=d(t,n),o=i(n,"html_width"),a=i(n,"html_height");return o&&(n.width=o),a&&(n.height=a),r}function h(t,n,i){var r=n[t]||e.cloudinary.config(t);return"undefined"==typeof r&&(r=i),r}var m="d3jpl91pxevbkh.cloudfront.net",g="cloudinary-a.akamaihd.net",v="res.cloudinary.com",y=v,b={angle:"a",background:"b",border:"bo",color:"co",color_space:"cs",crop:"c",default_image:"d",delay:"dl",density:"dn",dpr:"dpr",effect:"e",fetch_format:"f",flags:"fl",gravity:"g",height:"h",opacity:"o",overlay:"l",page:"pg",prefix:"p",quality:"q",radius:"r",transformation:"t",underlay:"u",width:"w",x:"x",y:"y"},x={angle:function(e){return r(e).join(".")},background:function(e){return e.replace(/^#/,"rgb:")},border:function(t){if(e.isPlainObject(t)){var n=""+(t.width||2),i=(t.color||"black").replace(/^#/,"rgb:");t=n+"px_solid_"+i}return t},color:function(e){return e.replace(/^#/,"rgb:")},dpr:function(e){return e=e.toString(),"auto"===e?"1.0":e.match(/^\d+$/)?e+".0":e},effect:function(e){return r(e).join(":")},flags:function(e){return r(e).join(".")},transformation:function(e){return r(e).join(".")}},w=null,C=null,k=!1,T={};e.cloudinary={CF_SHARED_CDN:m,OLD_AKAMAI_SHARED_CDN:g,AKAMAI_SHARED_CDN:v,SHARED_CDN:y,config:function(t,n){if(w||(w={},e('meta[name^="cloudinary_"]').each(function(){w[e(this).attr("name").replace("cloudinary_","")]=e(this).attr("content")})),"undefined"!=typeof n)w[t]=n;else{if("string"==typeof t)return w[t];t&&(w=t)}return w},url:function(t,n){return n=e.extend({},n),d(t,n)},url_internal:d,transformation_string:function(t){return t=e.extend({},t),u(t)},image:function(t,n){n=e.extend({},n);var i=f(t,n),r=e("<img/>").data("src-cache",i).attr(n).cloudinary_update(n);return r},facebook_profile_image:function(t,n){return e.cloudinary.image(t,e.extend({type:"facebook"},n))},twitter_profile_image:function(t,n){return e.cloudinary.image(t,e.extend({type:"twitter"},n))},twitter_name_profile_image:function(t,n){return e.cloudinary.image(t,e.extend({type:"twitter_name"},n))},gravatar_image:function(t,n){return e.cloudinary.image(t,e.extend({type:"gravatar"},n))},fetch_image:function(t,n){return e.cloudinary.image(t,e.extend({type:"fetch"},n))},sprite_css:function(t,n){return n=e.extend({type:"sprite"},n),t.match(/.css$/)||(n.format="css"),e.cloudinary.url(t,n)},responsive:function(t){C=e.extend(C||{},t),e("img.cld-responsive, img.cld-hidpi").cloudinary_update(C);var n=h("responsive_resize",C,!0);if(n&&!k){C.resizing=k=!0;var i=null;e(window).on("resize",function(){function t(){i&&(clearTimeout(i),i=null)}function n(){e("img.cld-responsive").cloudinary_update(C)}function r(){t(),setTimeout(function(){t(),n()},o)}var o=h("responsive_debounce",C,100);o?r():n()})}},calc_stoppoint:function(t,n){var i=e(t).data("stoppoints")||e.cloudinary.config().stoppoints||p;if("function"==typeof i)return i(n);"string"==typeof i&&(i=e.map(i.split(","),function(e){return parseInt(e)}));for(var r=i.length-2;r>=0&&i[r]>=n;)r--;return i[r+1]},device_pixel_ratio:function(){var e=window.devicePixelRatio||1,t=T[e];return t||(t=e.toString(),t.match(/^\d+$/)&&(t+=".0"),T[e]=t),t}},e.fn.cloudinary=function(t){return this.filter("img").each(function(){var n=e.extend({width:e(this).attr("width"),height:e(this).attr("height"),src:e(this).attr("src")},e(this).data(),t),r=i(n,"source",i(n,"src")),o=f(r,n);e(this).data("src-cache",o).attr({width:n.width,height:n.height})}).cloudinary_update(t),this},e.fn.cloudinary_update=function(t){t=t||{};var n=h("responsive_use_stoppoints",t,"resize"),i=n===!1||"resize"==n&&!t.resizing;return this.filter("img").each(function(){t.responsive&&e(this).addClass("cld-responsive");var n={},r=e(this).data("src-cache")||e(this).data("src");if(r){var o=e(this).hasClass("cld-responsive")&&r.match(/\bw_auto\b/);if(o){var a=e(this).parent()[0],s=a?a.clientWidth:0;if(0==s)return;var l=i?s:e.cloudinary.calc_stoppoint(this,s),u=e(this).data("width")||0;l>u?e(this).data("width",l):l=u,r=r.replace(/\bw_auto\b/g,"w_"+l),n.width=null,n.height=null}n.src=r.replace(/\bdpr_(1\.0|auto)\b/g,"dpr_"+e.cloudinary.device_pixel_ratio()),e(this).attr(n)}}),this};var E=null;e.fn.webpify=function(t,n){var i=this;if(t=t||{},n=n||t,!E){E=e.Deferred();var r=new Image;r.onerror=E.reject,r.onload=E.resolve,r.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}return e(function(){E.done(function(){e(i).cloudinary(e.extend({},n,{format:"webp"}))}).fail(function(){e(i).cloudinary(t)})}),this},e.fn.fetchify=function(t){return this.cloudinary(e.extend(t,{type:"fetch"}))},e.fn.fileupload&&(e.cloudinary.delete_by_token=function(t,n){n=n||{};var i=n.url;if(!i){var r=n.cloud_name||e.cloudinary.config().cloud_name;i="https://api.cloudinary.com/v1_1/"+r+"/delete_by_token"}var o=e.support.xhrFileUpload?"json":"iframe json";return e.ajax({url:i,method:"POST",data:{token:t},headers:{"X-Requested-With":"XMLHttpRequest"},dataType:o})},e.fn.cloudinary_fileupload=function(t){var n=!this.data("blueimpFileupload");if(n&&(t=e.extend({maxFileSize:2e7,dataType:"json",headers:{"X-Requested-With":"XMLHttpRequest"}},t)),this.fileupload(t),n&&(this.bind("fileuploaddone",function(t,n){if(!n.result.error){if(n.result.path=["v",n.result.version,"/",n.result.public_id,n.result.format?"."+n.result.format:""].join(""),n.cloudinaryField&&n.form.length>0){var i=[n.result.resource_type,n.result.type,n.result.path].join("/")+"#"+n.result.signature,r=e(t.target).prop("multiple"),o=function(){e("<input></input>").attr({type:"hidden",name:n.cloudinaryField}).val(i).appendTo(n.form)};if(r)o();else{var a=e(n.form).find('input[name="'+n.cloudinaryField+'"]');a.length>0?a.val(i):o()}}e(t.target).trigger("cloudinarydone",n)}}),this.bind("fileuploadstart",function(t){e(t.target).trigger("cloudinarystart")}),this.bind("fileuploadstop",function(t){e(t.target).trigger("cloudinarystop")}),this.bind("fileuploadprogress",function(t,n){e(t.target).trigger("cloudinaryprogress",n)}),this.bind("fileuploadprogressall",function(t,n){e(t.target).trigger("cloudinaryprogressall",n)}),this.bind("fileuploadfail",function(t,n){e(t.target).trigger("cloudinaryfail",n)}),this.bind("fileuploadalways",function(t,n){e(t.target).trigger("cloudinaryalways",n)}),!this.fileupload("option").url)){var i=t.cloud_name||e.cloudinary.config().cloud_name,r="https://api.cloudinary.com/v1_1/"+i+"/upload";this.fileupload("option","url",r)}return this},e.fn.cloudinary_upload_url=function(e){this.fileupload("option","formData").file=e,this.fileupload("add",{files:[e]}),delete this.fileupload("option","formData").file},e.fn.unsigned_cloudinary_upload=function(t,n,i){i=i||{},n=e.extend({},n)||{},n.cloud_name&&(i.cloud_name=n.cloud_name,delete n.cloud_name);for(var r in n){var o=n[r];e.isPlainObject(o)?n[r]=e.map(o,function(e,t){return t+"="+e}).join("|"):e.isArray(o)&&(n[r]=o.length>0&&e.isArray(o[0])?e.map(o,function(e){return e.join(",")}).join("|"):o.join(","))}n.callback||(n.callback="/cloudinary_cors.html"),n.upload_preset=t,i.formData=n,i.cloudinary_field&&(i.cloudinaryField=i.cloudinary_field,delete i.cloudinary_field);var a=i.html||{};return a["class"]="cloudinary_fileupload "+(a["class"]||""),i.multiple&&(a.multiple=!0),this.attr(a).cloudinary_fileupload(i),this},e.cloudinary.unsigned_upload_tag=function(t,n,i){return e("<input/>").attr({type:"file",name:"file"}).unsigned_cloudinary_upload(t,n,i)})});