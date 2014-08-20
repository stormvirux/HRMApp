!function(e){"use strict";var t=function(e,n,i){var r,o,a=document.createElement("img");if(a.onerror=n,a.onload=function(){!o||i&&i.noRevoke||t.revokeObjectURL(o),n&&n(t.scale(a,i))},t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e))r=o=t.createObjectURL(e),a._type=e.type;else{if("string"!=typeof e)return!1;r=e,i&&i.crossOrigin&&(a.crossOrigin=i.crossOrigin)}return r?(a.src=r,a):t.readFile(e,function(e){var t=e.target;t&&t.result?a.src=t.result:n&&n(e)})},n=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transformCoordinates=function(e,t){var n=e.getContext("2d"),i=e.width,r=e.height;switch(t>4&&(e.width=r,e.height=i),t){case 2:n.translate(i,0),n.scale(-1,1);break;case 3:n.translate(i,r),n.rotate(Math.PI);break;case 4:n.translate(0,r),n.scale(1,-1);break;case 5:n.rotate(.5*Math.PI),n.scale(1,-1);break;case 6:n.rotate(.5*Math.PI),n.translate(0,-r);break;case 7:n.rotate(.5*Math.PI),n.translate(i,-r),n.scale(-1,1);break;case 8:n.rotate(-.5*Math.PI),n.translate(-i,0)}},t.renderImageToCanvas=function(e,t,n,i,r,o,a,s,l,u){return e.getContext("2d").drawImage(t,n,i,r,o,a,s,l,u),e},t.scale=function(e,n){n=n||{};var i,r,o,a,s,l,u,c=document.createElement("canvas"),d=e.getContext||(n.canvas||n.crop||n.orientation)&&c.getContext,p=e.width,f=e.height,h=p,m=f,g=0,v=0,y=0,b=0;return d&&n.orientation>4?(i=n.maxHeight,r=n.maxWidth,o=n.minHeight,a=n.minWidth):(i=n.maxWidth,r=n.maxHeight,o=n.minWidth,a=n.minHeight),d&&i&&r&&n.crop?(s=i,l=r,i/r>p/f?(m=r*p/i,v=(f-m)/2):(h=i*f/r,g=(p-h)/2)):(s=p,l=f,u=Math.max((o||s)/s,(a||l)/l),u>1&&(s=Math.ceil(s*u),l=Math.ceil(l*u)),u=Math.min((i||s)/s,(r||l)/l),1>u&&(s=Math.ceil(s*u),l=Math.ceil(l*u))),d?(c.width=s,c.height=l,t.transformCoordinates(c,n.orientation),t.renderImageToCanvas(c,e,g,v,h,m,y,b,s,l)):(e.width=s,e.height=l,e)},t.createObjectURL=function(e){return n?n.createObjectURL(e):!1},t.revokeObjectURL=function(e){return n?n.revokeObjectURL(e):!1},t.readFile=function(e,t,n){if(window.FileReader){var i=new FileReader;if(i.onload=i.onerror=t,n=n||"readAsDataURL",i[n])return i[n](e),i}return!1},"function"==typeof define&&define.amd?define(function(){return t}):e.loadImage=t}(this),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image"],e):e(window.loadImage)}(function(e){"use strict";if(window.navigator&&window.navigator.platform&&/iP(hone|od|ad)/.test(window.navigator.platform)){var t=e.renderImageToCanvas;e.detectSubsampling=function(e){var t,n;return e.width*e.height>1048576?(t=document.createElement("canvas"),t.width=t.height=1,n=t.getContext("2d"),n.drawImage(e,-e.width+1,0),0===n.getImageData(0,0,1,1).data[3]):!1},e.detectVerticalSquash=function(e,t){var n,i,r,o,a,s=document.createElement("canvas"),l=s.getContext("2d");for(s.width=1,s.height=t,l.drawImage(e,0,0),n=l.getImageData(0,0,1,t).data,i=0,r=t,o=t;o>i;)a=n[4*(o-1)+3],0===a?r=o:i=o,o=r+i>>1;return o/t||1},e.renderImageToCanvas=function(n,i,r,o,a,s,l,u,c,d){if("image/jpeg"===i._type){var p,f,h,m,g=n.getContext("2d"),v=document.createElement("canvas"),y=1024,b=v.getContext("2d");if(v.width=y,v.height=y,g.save(),p=e.detectSubsampling(i),p&&(a/=2,s/=2),f=e.detectVerticalSquash(i,s),p&&1!==f){for(c=Math.ceil(y*c/a),d=Math.ceil(y*d/s/f),u=0,m=0;s>m;){for(l=0,h=0;a>h;)b.clearRect(0,0,y,y),b.drawImage(i,r,o,a,s,-h,-m,a,s),g.drawImage(v,0,0,y,y,l,u,c,d),h+=y,l+=c;m+=y,u+=d}return g.restore(),n}}return t(n,i,r,o,a,s,l,u,c,d)}}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image"],e):e(window.loadImage)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,n,i){i=i||{};var r=this,o={},a=!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);(a||!e.readFile(e.blobSlice.call(t,0,131072),function(t){var a,s,l,u,c=t.target.result,d=new DataView(c),p=2,f=d.byteLength-4,h=p;if(65496===d.getUint16(0)){for(;f>p&&(a=d.getUint16(p),a>=65504&&65519>=a||65534===a);)if(s=d.getUint16(p+2)+2,p+s>d.byteLength)console.log("Invalid meta data: Invalid segment size.");else{if(l=e.metaDataParsers.jpeg[a])for(u=0;l.length>u;u+=1)l[u].call(r,d,p,s,o,i);p+=s,h=p}!i.disableImageHead&&h>6&&(o.imageHead=c.slice?c.slice(0,h):new Uint8Array(c).subarray(0,h))}else console.log("Invalid JPEG file: Missing JPEG marker.");n(o)},"readAsArrayBuffer"))&&n(o)}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-meta"],e):e(window.loadImage)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,n){var i,r,o;if(!n||t+n>e.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");for(i=[],r=0;n>r;r+=1)o=e.getUint8(t+r),i.push((16>o?"0":"")+o.toString(16));return"data:image/jpeg,%"+i.join("%")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,n){return e.getUint16(t,n)},size:2},4:{getValue:function(e,t,n){return e.getUint32(t,n)},size:4},5:{getValue:function(e,t,n){return e.getUint32(t,n)/e.getUint32(t+4,n)},size:8},9:{getValue:function(e,t,n){return e.getInt32(t,n)},size:4},10:{getValue:function(e,t,n){return e.getInt32(t,n)/e.getInt32(t+4,n)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,n,i,r,o,a){var s,l,u,c,d,p,f=e.exifTagTypes[r];if(!f)return void console.log("Invalid Exif data: Invalid tag type.");if(s=f.size*o,l=s>4?n+t.getUint32(i+8,a):i+8,l+s>t.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");if(1===o)return f.getValue(t,l,a);for(u=[],c=0;o>c;c+=1)u[c]=f.getValue(t,l+c*f.size,a);if(f.ascii){for(d="",c=0;u.length>c&&(p=u[c],"\x00"!==p);c+=1)d+=p;return d}return u},e.parseExifTag=function(t,n,i,r,o){var a=t.getUint16(i,r);o.exif[a]=e.getExifValue(t,n,i,t.getUint16(i+2,r),t.getUint32(i+4,r),r)},e.parseExifTags=function(e,t,n,i,r){var o,a,s;if(n+6>e.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");if(o=e.getUint16(n,i),a=n+2+12*o,a+4>e.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");for(s=0;o>s;s+=1)this.parseExifTag(e,t,n+2+12*s,i,r);return e.getUint32(a,i)},e.parseExifData=function(t,n,i,r,o){if(!o.disableExif){var a,s,l,u=n+10;if(1165519206===t.getUint32(n+4)){if(u+8>t.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");if(0!==t.getUint16(n+8))return void console.log("Invalid Exif data: Missing byte alignment offset.");switch(t.getUint16(u)){case 18761:a=!0;break;case 19789:a=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}if(42!==t.getUint16(u+2,a))return void console.log("Invalid Exif data: Missing TIFF marker.");s=t.getUint32(u+4,a),r.exif=new e.ExifMap,s=e.parseExifTags(t,u,u+s,a,r),s&&!o.disableExifThumbnail&&(l={exif:{}},s=e.parseExifTags(t,u,u+s,a,l),l.exif[513]&&(r.exif.Thumbnail=e.getExifThumbnail(t,u+l.exif[513],l.exif[514]))),r.exif[34665]&&!o.disableExifSub&&e.parseExifTags(t,u,u+r.exif[34665],a,r),r.exif[34853]&&!o.disableExifGps&&e.parseExifTags(t,u,u+r.exif[34853],a,r)}}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)}),function(e){"use strict";"function"==typeof define&&define.amd?define(["load-image","load-image-exif"],e):e(window.loadImage)}(function(e){"use strict";var t,n,i;e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return t+""},t=e.ExifMap.prototype.tags,n=e.ExifMap.prototype.map;for(i in t)t.hasOwnProperty(i)&&(n[t[i]]=i);e.ExifMap.prototype.getAll=function(){var e,n,i={};for(e in this)this.hasOwnProperty(e)&&(n=t[e],n&&(i[n]=this.getText(n)));return i}});