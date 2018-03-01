define("text",["module"],function(e){"use strict";var t,n,r,i,o,s=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],a=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,u="undefined"!=typeof location&&location.href,c=u&&location.protocol&&location.protocol.replace(/\:/,""),f=u&&location.hostname,d=u&&(location.port||void 0),p={},h=e.config&&e.config()||{};return t={version:"2.0.10",strip:function(e){if(e){e=e.replace(a,"");var t=e.match(l);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:h.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){n=s[t];try{e=new ActiveXObject(n)}catch(e){}if(e){s=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,o=e.indexOf("."),s=0===e.indexOf("./")||0===e.indexOf("../");return-1!==o&&(!s||o>1)?(t=e.substring(0,o),n=e.substring(o+1,e.length)):t=e,r=n||t,o=r.indexOf("!"),-1!==o&&(i="strip"===r.substring(o+1),r=r.substring(0,o),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var o,s,a,l=t.xdRegExp.exec(e);return!l||(o=l[2],s=l[3],s=s.split(":"),a=s[1],s=s[0],!(o&&o!==n||s&&s.toLowerCase()!==r.toLowerCase()||(a||s)&&a!==i))},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,h.isBuild&&(p[e]=r),i(r)},load:function(e,n,r,i){if(i.isBuild&&!i.inlineText)return void r();h.isBuild=i.isBuild;var o=t.parseName(e),s=o.moduleName+(o.ext?"."+o.ext:""),a=n.toUrl(s),l=h.useXhr||t.useXhr;if(0===a.indexOf("empty:"))return void r();!u||l(a,c,f,d)?t.get(a,function(n){t.finishLoad(e,o.strip,n,r)},function(e){r.error&&r.error(e)}):n([s],function(e){t.finishLoad(o.moduleName+"."+o.ext,o.strip,e,r)})},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var o=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,n,r,i,o){var s=t.parseName(n),a=s.ext?"."+s.ext:"",l=s.moduleName+a,u=r.toUrl(s.moduleName+a)+".js";t.load(l,r,function(n){var r=function(e){return i(u,e)};r.asModule=function(e,t){return i.asModule(e,u,t)},t.write(e,l,r,o)},o)}},"node"===h.env||!h.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(n=require.nodeRequire("fs"),t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");0===i.indexOf("\ufeff")&&(i=i.substring(1)),t(i)}catch(e){r(e)}}):"xhr"===h.env||!h.env&&t.createXhr()?t.get=function(e,n,r,i){var o,s=t.createXhr();if(s.open("GET",e,!0),i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);h.onXhr&&h.onXhr(s,e),s.onreadystatechange=function(t){var i,o;4===s.readyState&&(i=s.status,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r(o)):n(s.responseText),h.onXhrComplete&&h.onXhrComplete(s,e))},s.send(null)}:"rhino"===h.env||!h.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var n,r,i=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(i),"utf-8")),a="";try{for(n=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=s.readLine());)n.append(o),n.append(r);a=String(n.toString())}finally{s.close()}t(a)}:("xpconnect"===h.env||!h.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(r=Components.classes,i=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),o="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){var n,s,a,l={};o&&(e=e.replace(/\//g,"\\")),a=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(a,1,0,!1),s=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),s.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),s.readString(n.available(),l),s.close(),n.close(),t(l.value)}catch(e){throw new Error((a&&a.path||"")+": "+e)}}),t}),define("text!htmlContent/pdf-view.html",[],function(){return'<iframe\n    class="pdf-view"\n    src="extensions/extra/PDFView/htmlContent/viewer.html?file={{pdfUrl}}&locale={{locale}}"\n    data-file-size="{{fileSize}}"\n    data-theme="{{theme}}"\n    data-file-title="{{fileTitle}}">\n</iframe>\n'}),define("PDFView",["require","exports","module","text!htmlContent/pdf-view.html"],function(e,t,n){"use strict";function r(e,t){this.file=e,this.$container=t,f[e.fullPath]=this}function i(e,t){var n=t.getViewForPath(e.fullPath),i=new $.Deferred;return n?(t.showView(n),i.resolve(e)):(n=new r(e,t.$content),n._init(i),t.addView(n,!0)),i.promise()}var o=brackets.getModule("filesystem/impls/filer/UrlCache"),s=brackets.getModule("thirdparty/mustache/mustache"),a=brackets.getModule("utils/StringUtils"),l=brackets.getModule("strings"),u=brackets.getModule("preferences/PreferencesManager").getExtensionPrefs("themes"),c=e("text!htmlContent/pdf-view.html"),f={};u.on("change","theme",function(){var e=u.get("theme");Object.keys(f).forEach(function(t){var n=f[t],r=n.$el[0].contentWindow;r&&r.postMessage("theme:"+e,"*")})}),r.prototype._init=function(e){var t=this,n=t.file,r=t.$container;n.stat(function(i,f){var d="";i||(d=a.prettyPrintBytes(f._size,2)),t.$el=$(s.render(c,{pdfUrl:encodeURIComponent(o.getUrl(n.fullPath)),locale:brackets.getLocale(),fileSize:d,theme:u.get("theme"),fileTitle:l.PDF_FILE_TITLE})),r.append(t.$el),e.resolve(n)})},r.prototype.getFile=function(){return this.file},r.prototype.updateLayout=function(){var e=this.$container,t=e.position(),n=e.innerWidth(),r=e.innerHeight(),i=e.outerWidth(),o=e.outerHeight();this.$el.css({top:t.top+(o-r)/2,left:t.left+(i-n)/2,width:n,height:r})},r.prototype.destroy=function(){delete f[this.file.fullPath],this.$el.remove()},t.create=i}),define("main",["require","exports","module","PDFView"],function(e,t,n){"use strict";var r=brackets.getModule("view/MainViewFactory"),i=brackets.getModule("filesystem/impls/filer/lib/content"),o=brackets.getModule("filesystem/impls/filer/BracketsFiler").Path,s=brackets.getModule("utils/ExtensionUtils"),a=e("PDFView");s.loadStyleSheet(n,"styles/styles.less"),r.registerViewFactory({canOpenFile:function(e){return i.isPDF(o.extname(e))},openFile:function(e,t){return a.create(e,t)}})});