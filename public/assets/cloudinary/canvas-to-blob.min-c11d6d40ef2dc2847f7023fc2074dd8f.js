!function(e){"use strict";var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,n=e.Blob&&function(){try{return Boolean(new Blob)}catch(e){return!1}}(),i=n&&e.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(e){return!1}}(),r=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,o=(n||r)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(e){var t,o,a,s,l,c;for(t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):decodeURIComponent(e.split(",")[1]),o=new ArrayBuffer(t.length),a=new Uint8Array(o),s=0;s<t.length;s+=1)a[s]=t.charCodeAt(s);return l=e.split(",")[0].split(":")[1].split(";")[0],n?new Blob([i?a:o],{type:l}):(c=new r,c.append(o),c.getBlob(l))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(e,n,i){e(i&&t.toDataURL&&o?o(this.toDataURL(n,i)):this.mozGetAsFile("blob",n))}:t.toDataURL&&o&&(t.toBlob=function(e,t,n){e(o(this.toDataURL(t,n)))})),"function"==typeof define&&define.amd?define(function(){return o}):e.dataURLtoBlob=o}(this);