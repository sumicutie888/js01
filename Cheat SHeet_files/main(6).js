!function(){function e(e){var r={r:0,g:0,b:0},n=1,s=!1,a=!1;return"string"==typeof e&&(e=M(e)),"object"==typeof e&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(r=t(e.r,e.g,e.b),s=!0,a="%"===String(e.r).substr(-1)?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=R(e.s),e.v=R(e.v),r=o(e.h,e.s,e.v),s=!0,a="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=R(e.s),e.l=R(e.l),r=i(e.h,e.s,e.l),s=!0,a="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=C(n),{ok:s,format:e.format||a,r:I(255,F(r.r,0)),g:I(255,F(r.g,0)),b:I(255,F(r.b,0)),a:n}}function t(e,t,r){return{r:255*w(e,255),g:255*w(t,255),b:255*w(r,255)}}function r(e,t,r){e=w(e,255),t=w(t,255),r=w(r,255);var i,n,o=F(e,t,r),s=I(e,t,r),a=(o+s)/2;if(o==s)i=n=0;else{var l=o-s;switch(n=a>.5?l/(2-o-s):l/(o+s),o){case e:i=(t-r)/l+(r>t?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4}i/=6}return{h:i,s:n,l:a}}function i(e,t,r){function i(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e}var n,o,s;if(e=w(e,360),t=w(t,100),r=w(r,100),0===t)n=o=s=r;else{var a=.5>r?r*(1+t):r+t-r*t,l=2*r-a;n=i(l,a,e+1/3),o=i(l,a,e),s=i(l,a,e-1/3)}return{r:255*n,g:255*o,b:255*s}}function n(e,t,r){e=w(e,255),t=w(t,255),r=w(r,255);var i,n,o=F(e,t,r),s=I(e,t,r),a=o,l=o-s;if(n=0===o?0:l/o,o==s)i=0;else{switch(o){case e:i=(t-r)/l+(r>t?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4}i/=6}return{h:i,s:n,v:a}}function o(e,t,r){e=6*w(e,360),t=w(t,100),r=w(r,100);var i=A.floor(e),n=e-i,o=r*(1-t),s=r*(1-n*t),a=r*(1-(1-n)*t),l=i%6;return{r:255*[r,s,o,o,a,r][l],g:255*[a,r,r,s,o,o][l],b:255*[o,o,a,r,r,s][l]}}function s(e,t,r,i){var n=[S(L(e).toString(16)),S(L(t).toString(16)),S(L(r).toString(16))];return i&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function a(e,t,r,i){return[S(H(i)),S(L(e).toString(16)),S(L(t).toString(16)),S(L(r).toString(16))].join("")}function l(e,t){t=0===t?0:t||10;var r=B(e).toHsl();return r.s-=t/100,r.s=x(r.s),B(r)}function h(e,t){t=0===t?0:t||10;var r=B(e).toHsl();return r.s+=t/100,r.s=x(r.s),B(r)}function c(e){return B(e).desaturate(100)}function d(e,t){t=0===t?0:t||10;var r=B(e).toHsl();return r.l+=t/100,r.l=x(r.l),B(r)}function u(e,t){t=0===t?0:t||10;var r=B(e).toRgb();return r.r=F(0,I(255,r.r-L(-t/100*255))),r.g=F(0,I(255,r.g-L(-t/100*255))),r.b=F(0,I(255,r.b-L(-t/100*255))),B(r)}function f(e,t){t=0===t?0:t||10;var r=B(e).toHsl();return r.l-=t/100,r.l=x(r.l),B(r)}function g(e,t){var r=B(e).toHsl(),i=(L(r.h)+t)%360;return r.h=0>i?360+i:i,B(r)}function p(e){var t=B(e).toHsl();return t.h=(t.h+180)%360,B(t)}function _(e){var t=B(e).toHsl(),r=t.h;return[B(e),B({h:(r+120)%360,s:t.s,l:t.l}),B({h:(r+240)%360,s:t.s,l:t.l})]}function b(e){var t=B(e).toHsl(),r=t.h;return[B(e),B({h:(r+90)%360,s:t.s,l:t.l}),B({h:(r+180)%360,s:t.s,l:t.l}),B({h:(r+270)%360,s:t.s,l:t.l})]}function m(e){var t=B(e).toHsl(),r=t.h;return[B(e),B({h:(r+72)%360,s:t.s,l:t.l}),B({h:(r+216)%360,s:t.s,l:t.l})]}function v(e,t,r){t=t||6,r=r||30;var i=B(e).toHsl(),n=360/r,o=[B(e)];for(i.h=(i.h-(n*t>>1)+720)%360;--t;)i.h=(i.h+n)%360,o.push(B(i));return o}function y(e,t){t=t||6;for(var r=B(e).toHsv(),i=r.h,n=r.s,o=r.v,s=[],a=1/t;t--;)s.push(B({h:i,s:n,v:o})),o=(o+a)%1;return s}function C(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function w(e,t){O(e)&&(e="100%");var r=$(e);return e=I(t,F(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),A.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function x(e){return I(1,F(0,e))}function k(e){return parseInt(e,16)}function O(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function $(e){return"string"==typeof e&&-1!=e.indexOf("%")}function S(e){return 1==e.length?"0"+e:""+e}function R(e){return 1>=e&&(e=100*e+"%"),e}function H(e){return Math.round(255*parseFloat(e)).toString(16)}function E(e){return k(e)/255}function M(e){e=e.replace(T,"").replace(D,"").toLowerCase();var t=!1;if(N[e])e=N[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=U.rgb.exec(e))?{r:r[1],g:r[2],b:r[3]}:(r=U.rgba.exec(e))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=U.hsl.exec(e))?{h:r[1],s:r[2],l:r[3]}:(r=U.hsla.exec(e))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=U.hsv.exec(e))?{h:r[1],s:r[2],v:r[3]}:(r=U.hsva.exec(e))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=U.hex8.exec(e))?{a:E(r[1]),r:k(r[2]),g:k(r[3]),b:k(r[4]),format:t?"name":"hex8"}:(r=U.hex6.exec(e))?{r:k(r[1]),g:k(r[2]),b:k(r[3]),format:t?"name":"hex"}:!!(r=U.hex3.exec(e))&&{r:k(r[1]+""+r[1]),g:k(r[2]+""+r[2]),b:k(r[3]+""+r[3]),format:t?"name":"hex"}}var T=/^[\s,#]+/,D=/\s+$/,K=0,A=Math,L=A.round,I=A.min,F=A.max,P=A.random,B=function t(r,i){if(r=r||"",i=i||{},r instanceof t)return r;if(!(this instanceof t))return new t(r,i);var n=e(r);this._originalInput=r,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=L(100*this._a)/100,this._format=i.format||n.format,this._gradientType=i.gradientType,this._r<1&&(this._r=L(this._r)),this._g<1&&(this._g=L(this._g)),this._b<1&&(this._b=L(this._b)),this._ok=n.ok,this._tc_id=K++};B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},setAlpha:function(e){return this._a=C(e),this._roundA=L(100*this._a)/100,this},toHsv:function(){var e=n(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=n(this._r,this._g,this._b),t=L(360*e.h),r=L(100*e.s),i=L(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+i+"%)":"hsva("+t+", "+r+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=r(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=r(this._r,this._g,this._b),t=L(360*e.h),i=L(100*e.s),n=L(100*e.l);return 1==this._a?"hsl("+t+", "+i+"%, "+n+"%)":"hsla("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return s(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return a(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:L(this._r),g:L(this._g),b:L(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+L(this._r)+", "+L(this._g)+", "+L(this._b)+")":"rgba("+L(this._r)+", "+L(this._g)+", "+L(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:L(100*w(this._r,255))+"%",g:L(100*w(this._g,255))+"%",b:L(100*w(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+L(100*w(this._r,255))+"%, "+L(100*w(this._g,255))+"%, "+L(100*w(this._b,255))+"%)":"rgba("+L(100*w(this._r,255))+"%, "+L(100*w(this._g,255))+"%, "+L(100*w(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(V[s(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+a(this._r,this._g,this._b,this._a),r=t,i=this._gradientType?"GradientType = 1, ":"";if(e){r=B(e).toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,i=this._a<1&&this._a>=0;return t||!i||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(d,arguments)},brighten:function(){return this._applyModification(u,arguments)},darken:function(){return this._applyModification(f,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(h,arguments)},greyscale:function(){return this._applyModification(c,arguments)},spin:function(){return this._applyModification(g,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(v,arguments)},complement:function(){return this._applyCombination(p,arguments)},monochromatic:function(){return this._applyCombination(y,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(_,arguments)},tetrad:function(){return this._applyCombination(b,arguments)}},B.fromRatio=function(e,t){if("object"==typeof e){var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]="a"===i?e[i]:R(e[i]));e=r}return B(e,t)},B.equals=function(e,t){return!(!e||!t)&&B(e).toRgbString()==B(t).toRgbString()},B.random=function(){return B.fromRatio({r:P(),g:P(),b:P()})},B.mix=function(e,t,r){r=0===r?0:r||50;var i,n=B(e).toRgb(),o=B(t).toRgb(),s=r/100,a=2*s-1,l=o.a-n.a;i=a*l==-1?a:(a+l)/(1+a*l),i=(i+1)/2;var h=1-i,c={r:o.r*i+n.r*h,g:o.g*i+n.g*h,b:o.b*i+n.b*h,a:o.a*s+n.a*(1-s)};return B(c)},B.readability=function(e,t){var r=B(e),i=B(t),n=r.toRgb(),o=i.toRgb(),s=r.getBrightness(),a=i.getBrightness(),l=Math.max(n.r,o.r)-Math.min(n.r,o.r)+Math.max(n.g,o.g)-Math.min(n.g,o.g)+Math.max(n.b,o.b)-Math.min(n.b,o.b);return{brightness:Math.abs(s-a),color:l}},B.isReadable=function(e,t){var r=B.readability(e,t);return r.brightness>125&&r.color>500},B.mostReadable=function(e,t){for(var r=null,i=0,n=!1,o=0;o<t.length;o++){var s=B.readability(e,t[o]),a=s.brightness>125&&s.color>500,l=s.brightness/125*3+s.color/500;(a&&!n||a&&n&&l>i||!a&&!n&&l>i)&&(n=a,i=l,r=B(t[o]))}return r};var N=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},V=B.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(N),U=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",r="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+r),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=B:"function"==typeof define&&define.amd?define("thirdparty/tinycolor-min",[],function(){return B}):window.tinycolor=B}(),define("text",["module"],function(e){"use strict";var t,r,i,n,o,s=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],a=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,h="undefined"!=typeof location&&location.href,c=h&&location.protocol&&location.protocol.replace(/\:/,""),d=h&&location.hostname,u=h&&(location.port||void 0),f={},g=e.config&&e.config()||{};return t={version:"2.0.10",strip:function(e){if(e){e=e.replace(a,"");var t=e.match(l);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:g.createXhr||function(){var e,t,r;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){r=s[t];try{e=new ActiveXObject(r)}catch(e){}if(e){s=[r];break}}return e},parseName:function(e){var t,r,i,n=!1,o=e.indexOf("."),s=0===e.indexOf("./")||0===e.indexOf("../");return-1!==o&&(!s||o>1)?(t=e.substring(0,o),r=e.substring(o+1,e.length)):t=e,i=r||t,o=i.indexOf("!"),-1!==o&&(n="strip"===i.substring(o+1),i=i.substring(0,o),r?r=i:t=i),{moduleName:t,ext:r,strip:n}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,r,i,n){var o,s,a,l=t.xdRegExp.exec(e);return!l||(o=l[2],s=l[3],s=s.split(":"),a=s[1],s=s[0],!(o&&o!==r||s&&s.toLowerCase()!==i.toLowerCase()||(a||s)&&a!==n))},finishLoad:function(e,r,i,n){i=r?t.strip(i):i,g.isBuild&&(f[e]=i),n(i)},load:function(e,r,i,n){if(n.isBuild&&!n.inlineText)return void i();g.isBuild=n.isBuild;var o=t.parseName(e),s=o.moduleName+(o.ext?"."+o.ext:""),a=r.toUrl(s),l=g.useXhr||t.useXhr;if(0===a.indexOf("empty:"))return void i();!h||l(a,c,d,u)?t.get(a,function(r){t.finishLoad(e,o.strip,r,i)},function(e){i.error&&i.error(e)}):r([s],function(e){t.finishLoad(o.moduleName+"."+o.ext,o.strip,e,i)})},write:function(e,r,i,n){if(f.hasOwnProperty(r)){var o=t.jsEscape(f[r]);i.asModule(e+"!"+r,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,r,i,n,o){var s=t.parseName(r),a=s.ext?"."+s.ext:"",l=s.moduleName+a,h=i.toUrl(s.moduleName+a)+".js";t.load(l,i,function(r){var i=function(e){return n(h,e)};i.asModule=function(e,t){return n.asModule(e,h,t)},t.write(e,l,i,o)},o)}},"node"===g.env||!g.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(r=require.nodeRequire("fs"),t.get=function(e,t,i){try{var n=r.readFileSync(e,"utf8");0===n.indexOf("\ufeff")&&(n=n.substring(1)),t(n)}catch(e){i(e)}}):"xhr"===g.env||!g.env&&t.createXhr()?t.get=function(e,r,i,n){var o,s=t.createXhr();if(s.open("GET",e,!0),n)for(o in n)n.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),n[o]);g.onXhr&&g.onXhr(s,e),s.onreadystatechange=function(t){var n,o;4===s.readyState&&(n=s.status,n>399&&n<600?(o=new Error(e+" HTTP status: "+n),o.xhr=s,i(o)):r(s.responseText),g.onXhrComplete&&g.onXhrComplete(s,e))},s.send(null)}:"rhino"===g.env||!g.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var r,i,n=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n),"utf-8")),a="";try{for(r=new java.lang.StringBuffer,i=s.readLine(),i&&i.length()&&65279===i.charAt(0)&&(i=i.substring(1)),null!==i&&r.append(i);null!==(i=s.readLine());)r.append(o),r.append(i);a=String(r.toString())}finally{s.close()}t(a)}:("xpconnect"===g.env||!g.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(i=Components.classes,n=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),o="@mozilla.org/windows-registry-key;1"in i,t.get=function(e,t){var r,s,a,l={};o&&(e=e.replace(/\//g,"\\")),a=new FileUtils.File(e);try{r=i["@mozilla.org/network/file-input-stream;1"].createInstance(n.nsIFileInputStream),r.init(a,1,0,!1),s=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(n.nsIConverterInputStream),s.init(r,"utf-8",r.available(),n.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),s.readString(r.available(),l),s.close(),r.close(),t(l.value)}catch(e){throw new Error((a&&a.path||"")+": "+e)}}),t}),define("text!ColorEditorTemplate.html",[],function(){return'\n<div tabindex="-1" class="color-editor">\n  <section>\n    <div class="sliders">\n      <div class="color-selection-field">\n        <div class="saturation-gradient gradient-overlay"></div>\n        <div class="luminosity-gradient gradient-overlay"></div>\n        <div tabindex="0" class="selector-base">\n          <div class="selector"></div>\n        </div>\n      </div>\n      <div class="hue-slider slider">\n        <div tabindex="0" class="selector-base">\n          <div class="selector"></div>\n        </div>\n      </div>\n      <div class="opacity-slider slider">\n        <div class="opacity-gradient gradient-overlay"></div>\n        <div tabindex="0" class="selector-base">\n          <div class="selector"></div>\n        </div>\n      </div>\n    </div>\n    <footer>\n      <input class="color-value" />\n      <ul class="button-bar">\n        <li class="selected" title="{{COLOR_EDITOR_RGBA_BUTTON_TIP}}"><a href="#" tabindex="0" class="rgba">RGBa</a></li>\n        <li title="{{COLOR_EDITOR_HEX_BUTTON_TIP}}"><a href="#" tabindex="0" class="hex">Hex</a></li>\n        <li title="{{COLOR_EDITOR_HSLA_BUTTON_TIP}}"><a href="#" tabindex="0" class="hsla">HSLa</a></li>\n      </ul>\n    </footer>\n  </section>\n  <aside>\n    <header>\n      <div class="large-swatches">\n        <div class="current-color large-swatch" title="{{COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP}}"></div>\n        <div class="original-color large-swatch" title="{{COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP}}"></div>\n      </div>\n    </header>\n    <ul class="swatches"></ul>\n  </aside>\n</div>'}),define("ColorEditor",["require","exports","module","thirdparty/tinycolor-min","text!ColorEditorTemplate.html"],function(e,t,r){"use strict";function i(e,t,r,i){this.$element=$(h.render(d,l)),e.append(this.$element),this._callback=r,this._handleKeydown=this._handleKeydown.bind(this),this._handleOpacityKeydown=this._handleOpacityKeydown.bind(this),this._handleHslKeydown=this._handleHslKeydown.bind(this),this._handleHueKeydown=this._handleHueKeydown.bind(this),this._handleSelectionKeydown=this._handleSelectionKeydown.bind(this),this._handleOpacityDrag=this._handleOpacityDrag.bind(this),this._handleHueDrag=this._handleHueDrag.bind(this),this._handleSelectionFieldDrag=this._handleSelectionFieldDrag.bind(this),this._color=c(t),this._originalColor=t,this._redoColor=null,this._isUpperCase=s.get("uppercaseColors"),s.on("change","uppercaseColors",function(){this._isUpperCase=s.get("uppercaseColors")}.bind(this)),this.$colorValue=this.$element.find(".color-value"),this.$buttonList=this.$element.find("ul.button-bar"),this.$rgbaButton=this.$element.find(".rgba"),this.$hexButton=this.$element.find(".hex"),this.$hslButton=this.$element.find(".hsla"),this.$currentColor=this.$element.find(".current-color"),this.$originalColor=this.$element.find(".original-color"),this.$selection=this.$element.find(".color-selection-field"),this.$selectionBase=this.$element.find(".color-selection-field .selector-base"),this.$hueBase=this.$element.find(".hue-slider .selector-base"),this.$opacityGradient=this.$element.find(".opacity-gradient"),this.$hueSlider=this.$element.find(".hue-slider"),this.$hueSelector=this.$element.find(".hue-slider .selector-base"),this.$opacitySlider=this.$element.find(".opacity-slider"),this.$opacitySelector=this.$element.find(".opacity-slider .selector-base"),this.$swatches=this.$element.find(".swatches"),this._addSwatches(i),this._addListeners(),this.$originalColor.css("background-color",this._originalColor),this._commitColor(t)}function n(e,t,r){var i=e-t;return i=Math.min(r,Math.max(0,i))}var o=brackets.getModule("utils/KeyEvent"),s=brackets.getModule("preferences/PreferencesManager"),a=brackets.getModule("utils/StringUtils"),l=brackets.getModule("strings"),h=brackets.getModule("thirdparty/mustache/mustache"),c=e("thirdparty/tinycolor-min"),d=e("text!ColorEditorTemplate.html");i.prototype._color=null,i.prototype._hsv=c("rgba(0,0,0,1)").toHsv(),i.prototype._redoColor=null,i.prototype._originalColor=null,i.prototype.getRootElement=function(){return this.$element},i.prototype._addListeners=function(){this._bindColorFormatToRadioButton("rgba"),this._bindColorFormatToRadioButton("hex"),this._bindColorFormatToRadioButton("hsla"),this._bindInputHandlers(),this._bindOriginalColorButton(),this._registerDragHandler(this.$selection,this._handleSelectionFieldDrag),this._registerDragHandler(this.$hueSlider,this._handleHueDrag),this._registerDragHandler(this.$opacitySlider,this._handleOpacityDrag),this._bindKeyHandler(this.$selectionBase,this._handleSelectionKeydown),this._bindKeyHandler(this.$hueBase,this._handleHueKeydown),this._bindKeyHandler(this.$opacitySelector,this._handleOpacityKeydown),this._bindKeyHandler(this.$hslButton,this._handleHslKeydown),this._bindKeyHandler(this.$element,this._handleKeydown)},i.prototype._synchronize=function(){var e=this.getColor().getOriginalInput(),t=c(e),r="hsl("+this._hsv.h+", 100%, 50%)";this._updateColorTypeRadioButtons(t.getFormat()),this.$colorValue.val(e),this.$currentColor.css("background-color",e),this.$selection.css("background-color",r),this.$hueBase.css("background-color",r),this.$selectionBase.css("background-color",t.toHexString()),this.$opacityGradient.css("background-image","linear-gradient("+r+", transparent)"),this.$hueSelector.css("bottom",this._hsv.h/360*100+"%"),this.$opacitySelector.css("bottom",100*this._hsv.a+"%"),isNaN(this._hsv.s)||(this._hsv.s=100*this._hsv.s+"%"),isNaN(this._hsv.v)||(this._hsv.v=100*this._hsv.v+"%"),this.$selectionBase.css({left:this._hsv.s,bottom:this._hsv.v})},i.prototype.focus=function(){return!this.$selectionBase.is(":focus")&&(this.$selectionBase.focus(),!0)},i.prototype.destroy=function(){s.off("change","uppercaseColors")},i.prototype.getColor=function(){return this._color},i.prototype._updateColorTypeRadioButtons=function(e){switch(this.$buttonList.find("li").removeClass("selected"),e){case"rgb":this.$buttonList.find(".rgba").parent().addClass("selected");break;case"hex":case"name":this.$buttonList.find(".hex").parent().addClass("selected");break;case"hsl":this.$buttonList.find(".hsla").parent().addClass("selected")}},i.prototype._bindColorFormatToRadioButton=function(e,t,r){var i,n=this;i=function(e){var t=$(e.currentTarget).html().toLowerCase().replace("%","p"),r=n.getColor().toString(),i=c(r);switch(t){case"hsla":r=i.toHslString();break;case"rgba":r=i.toRgbString();break;case"prgba":r=i.toPercentageRgbString();break;case"hex":r=i.toHexString(),n._hsv.a=1}r=n._isUpperCase?r.toUpperCase():r,n._commitColor(r,!1)},this.$element.find("."+e).click(i)},i.prototype._bindOriginalColorButton=function(){var e=this;this.$originalColor.click(function(t){e._commitColor(e._originalColor,!0)})},i.prototype._convertToNormalRGB=function(e){var t=e.match(/^rgb.*?([0-9]+)\%.*?([0-9]+)\%.*?([0-9]+)\%/i);if(t){var r,i,n;for(r=0;r<3;r++)i=t[r+1],n=Math.round(255*Number(i)/100),isNaN(n)||(e=e.replace(i+"%",n))}return e},i.prototype._normalizeColorString=function(e){var t=e;return e.match(/^#[0-9a-fA-F]{6}/)?c(e).toString():(e.match(/^(rgb|hsl)/i)&&(t=t.replace(/,\s*/g,", "),t=t.replace(/\(\s+/,"("),t=t.replace(/\s+\)/,")")),t)},i.prototype._handleTextFieldInput=function(e){var t=$.trim(this.$colorValue.val()),r=c(t),i=r.isValid();i&&(i=r.toString()===this._normalizeColorString(t)),e&&!i&&(t=this.getColor().toString()),(e||i)&&this._commitColor(t,!0)},i.prototype._bindInputHandlers=function(){var e=this;this.$colorValue.bind("input",function(t){e._handleTextFieldInput(!1)}),this.$colorValue.bind("change",function(t){e._handleTextFieldInput(!0)})},i.prototype._addSwatches=function(e){var t=this;e.forEach(function(e){var r=e.count>1?l.COLOR_EDITOR_USED_COLOR_TIP_PLURAL:l.COLOR_EDITOR_USED_COLOR_TIP_SINGULAR,i=a.format(r,e.value,e.count);t.$swatches.append("<li tabindex='0'><div class='swatch-bg'><div class='swatch' style='background-color: "+e.value+";' title='"+i+"'></div></div> <span class='value' title='"+i+"'>"+e.value+"</span></li>")}),this.$swatches.find("li").keydown(function(e){if(e.keyCode===o.DOM_VK_RETURN||e.keyCode===o.DOM_VK_ENTER||e.keyCode===o.DOM_VK_SPACE)t._commitColor($(e.currentTarget).find(".value").html());else if(e.keyCode===o.DOM_VK_TAB&&!e.shiftKey&&0===$(this).next("li").length)return t.$selectionBase.focus(),!1}),this.$swatches.find("li").click(function(e){t._commitColor($(e.currentTarget).find(".value").html())})},i.prototype.isValidColor=function(e){return c(e).isValid()},i.prototype.setColorAsHsv=function(e){var t,r,i=c(this.getColor()).getFormat();switch($.extend(this._hsv,e),r=c(this._hsv),i){case"hsl":t=r.toHslString();break;case"rgb":t=r.toRgbString();break;case"prgb":t=r.toPercentageRgbString();break;case"hex":case"name":t=this._hsv.a<1?r.toRgbString():r.toHexString()}t=this._isUpperCase?t.toUpperCase():t,this._commitColor(t,!1)},i.prototype._commitColor=function(e,t){void 0===t&&(t=!0),this._callback(e),this._color=c(e),t&&(this._hsv=this._color.toHsv()),this._redoColor=null,this._synchronize()},i.prototype.setColorFromString=function(e){this._commitColor(e,!0)},i.prototype._handleSelectionFieldDrag=function(e){var t=this.$selection.height(),r=this.$selection.width(),i=n(e.clientX,this.$selection.offset().left,r),o=n(e.clientY,this.$selection.offset().top,t),s={};s.s=i/r,s.v=1-o/t,this.setColorAsHsv(s,!1),this.$selection.find(".selector-base").is(":focus")||this.$selection.find(".selector-base").focus()},i.prototype._handleHueDrag=function(e){var t=this.$hueSlider.height(),r=n(e.clientY,this.$hueSlider.offset().top,t),i={};i.h=360*(1-r/t),this.setColorAsHsv(i,!1),this.$hueSlider.find(".selector-base").is(":focus")||this.$hueSlider.find(".selector-base").focus()},i.prototype._handleOpacityDrag=function(e){var t=this.$opacitySlider.height(),r=n(e.clientY,this.$opacitySlider.offset().top,t),i={};i.a=1-r/t,this.setColorAsHsv(i,!1),this.$opacitySlider.find(".selector-base").is(":focus")||this.$opacitySlider.find(".selector-base").focus()},i.prototype._registerDragHandler=function(e,t){var r=function(e){$(window).unbind("mousemove",t),$(window).unbind("mouseup",r)};e.mousedown(function(e){$(window).bind("mousemove",t),$(window).bind("mouseup",r)}),e.mousedown(t)},i.prototype.undo=function(){if(this._originalColor.toString()!==this._color.toString()){var e=this._color.toString();this._commitColor(this._originalColor,!0),this._redoColor=e}},i.prototype.redo=function(){this._redoColor&&(this._commitColor(this._redoColor,!0),this._redoColor=null)},i.prototype._handleKeydown=function(e){if("win"===brackets.platform?e.ctrlKey:e.metaKey)switch(e.keyCode){case o.DOM_VK_Z:return e.shiftKey?this.redo():this.undo(),!1;case o.DOM_VK_Y:return this.redo(),!1}else if(e.keyCode===o.DOM_VK_LEFT||e.keyCode===o.DOM_VK_RIGHT||e.keyCode===o.DOM_VK_UP||e.keyCode===o.DOM_VK_DOWN){var t=!1,r=$(e.target);if(r.is("input:not([type])")||r.is("input[type=text]")?r[0].selectionStart===r[0].selectionEnd&&(e.keyCode===o.DOM_VK_LEFT&&0===r[0].selectionStart||e.keyCode===o.DOM_VK_RIGHT&&r[0].selectionEnd===r.val().length)&&(t=!0):t=!0,t)return e.stopPropagation(),!1}},i.prototype._handleHslKeydown=function(e){if(e.keyCode===o.DOM_VK_TAB&&!e.shiftKey&&0===this.$swatches.children().length)return this.$selectionBase.focus(),!1},i.prototype._handleSelectionKeydown=function(e){var t,r,i,n={},s=1.5;switch(e.keyCode){case o.DOM_VK_LEFT:case o.DOM_VK_RIGHT:return s=e.shiftKey?5*s:s,t=Number($.trim(this.$selectionBase[0].style.left.replace("%",""))),i=e.keyCode===o.DOM_VK_LEFT?t-s:t+s,t=Math.min(100,Math.max(0,i)),n.s=t/100,this.setColorAsHsv(n,!1),!1;case o.DOM_VK_DOWN:case o.DOM_VK_UP:return s=e.shiftKey?5*s:s,r=Number($.trim(this.$selectionBase[0].style.bottom.replace("%",""))),i=e.keyCode===o.DOM_VK_DOWN?r-s:r+s,r=Math.min(100,Math.max(0,i)),n.v=r/100,this.setColorAsHsv(n,!1),!1;case o.DOM_VK_TAB:if(e.shiftKey)return 0===this.$swatches.children().length?this.$hslButton.focus():this.$swatches.find("li:last").focus(),!1}},i.prototype._handleHueKeydown=function(e){var t={},r=Number(this._hsv.h),i=3.6;switch(e.keyCode){case o.DOM_VK_DOWN:return i=e.shiftKey?5*i:i,t.h=r-i<=0?360-i:r-i,this.setColorAsHsv(t,!1),!1;case o.DOM_VK_UP:return i=e.shiftKey?5*i:i,t.h=r+i>=360?i:r+i,this.setColorAsHsv(t,!1),!1}},i.prototype._handleOpacityKeydown=function(e){var t=this._hsv.a,r={},i=.01;switch(e.keyCode){case o.DOM_VK_DOWN:return i=e.shiftKey?5*i:i,t>0&&(r.a=t-i<=0?0:t-i,this.setColorAsHsv(r)),!1;case o.DOM_VK_UP:return i=e.shiftKey?5*i:i,t<100&&(r.a=t+i>=1?1:t+i,this.setColorAsHsv(r)),!1}},i.prototype._bindKeyHandler=function(e,t){e.bind("keydown",t)},$(window.document).on("mousedown",".color-selection-field, .slider, .large-swatch",function(e){e.preventDefault()}),t.ColorEditor=i}),define("InlineColorEditor",["require","exports","module","ColorEditor"],function(e,t,r){"use strict";function i(e,t){this._color=e,this._marker=t,this._isOwnChange=!1,this._isHostChange=!1,this._origin="+InlineColorEditor_"+l++,this._handleColorChange=this._handleColorChange.bind(this),this._handleHostDocumentChange=this._handleHostDocumentChange.bind(this),o.call(this)}function n(e,t){return e.count===t.count?0:e.count>t.count?-1:e.count<t.count?1:void 0}var o=brackets.getModule("editor/InlineWidget").InlineWidget,s=e("ColorEditor").ColorEditor,a=brackets.getModule("utils/ColorUtils"),l=1;i.prototype=Object.create(o.prototype),i.prototype.constructor=i,i.prototype.parentClass=o.prototype,i.prototype.colorEditor=null,i.prototype._color=null,i.prototype._marker=null,i.prototype._isOwnChange=null,i.prototype._isHostChange=null,i.prototype._origin=null,i.prototype.getCurrentRange=function(){var e,t,r;if(e=this._marker&&this._marker.find(),!(t=e&&e.from))return null;(r=e.to)||(r={line:t.line});var i=this.hostEditor.document.getLine(t.line),n=i.substr(t.ch).match(a.COLOR_REGEX);return n&&(void 0===r.ch||r.ch-t.ch<n[0].length)&&(r.ch=t.ch+n[0].length,this._marker.clear(),this._marker=this.hostEditor._codeMirror.markText(t,r)),void 0===r.ch?null:{start:t,end:r}},
i.prototype._handleColorChange=function(e){var t=this;if(e!==this._color){var r=this.getCurrentRange();if(!r)return;if(!this._isHostChange){var i={line:r.start.line,ch:r.start.ch+e.length};this._isOwnChange=!0,this.hostEditor.document.batchOperation(function(){t.hostEditor.setSelection(r.start,r.end),t.hostEditor.document.replaceRange(e,r.start,r.end,t._origin),t.hostEditor.setSelection(r.start,i),t._marker&&(t._marker.clear(),t._marker=t.hostEditor._codeMirror.markText(r.start,i))}),this._isOwnChange=!1}this._color=e}},i.prototype.load=function(e){i.prototype.parentClass.load.apply(this,arguments);var t=this.hostEditor.document.getText().match(a.COLOR_REGEX)||["white"],r=this._collateColors(t,7);this.colorEditor=new s(this.$htmlContent,this._color,this._handleColorChange,r)},i.prototype.onAdded=function(){i.prototype.parentClass.onAdded.apply(this,arguments);var e=this.hostEditor.document;e.addRef(),e.on("change",this._handleHostDocumentChange),this.hostEditor.setInlineWidgetHeight(this,this.colorEditor.getRootElement().outerHeight(),!0),this.colorEditor.focus()},i.prototype.onClosed=function(){i.prototype.parentClass.onClosed.apply(this,arguments),this._marker&&this._marker.clear();var e=this.hostEditor.document;e.off("change",this._handleHostDocumentChange),e.releaseRef(),this.colorEditor.destroy()},i.prototype._collateColors=function(e,t){var r={};e.forEach(function(e){var t=e.toLowerCase();r[t]?r[t].count++:r[t]={value:e,count:1}});var i=$.map(r,function(e){return e});return i.sort(n),i.slice(0,t)},i.prototype._handleHostDocumentChange=function(){if(!this._isOwnChange){var e=this.getCurrentRange();if(e){var t=this.hostEditor.document.getRange(e.start,e.end);t!==this._color&&this.colorEditor.isValidColor(t)&&(this._isHostChange=!0,this.colorEditor.setColorFromString(t),this._isHostChange=!1)}else this.close()}},t.InlineColorEditor=i}),define("text!ColorProperties.json",[],function(){return'{\n    "background-color":            {"values": ["inherit"]},\n    "border-color":                {"values": ["inherit"]},\n    "border-bottom-color":         {"values": ["inherit"]},\n    "border-left-color":           {"values": ["inherit"]},\n    "border-right-color":          {"values": ["inherit"]},\n    "border-top-color":            {"values": ["inherit"]},\n    "color":                       {"values": ["inherit"]},\n    "column-rule-color":           {"values": []},\n    "outline-color":               {"values": ["invert", "inherit"]},\n    "text-decoration-color":       {"values": []},\n    "text-emphasis-color":         {"values": []}\n}\n'}),define("main",["require","exports","module","InlineColorEditor","text!ColorProperties.json"],function(e,t,r){"use strict";function i(e,t){var r,i,n,o,s,a,l,u;if(o=e.getSelection(),o.start.line!==o.end.line)return null;r=new RegExp(h.COLOR_REGEX),i=e.document.getLine(t.line);do{(n=r.exec(i))&&(s=n.index,a=s+n[0].length)}while(n&&(t.ch<s||t.ch>a));if(!n){var f,g,p,_,b,m;if(!(f=i.split(":")[0].trim())||!c[f])return null;if(c[f]){if(p=i.indexOf(":"),g=i.indexOf(";"),b=i.substring(p+1,i.length),_=b.replace(/ /g,"").replace(";","")){if(!r.test(_))return null;m=b.search(/\S/),t.ch=p+1+Math.min(m,1),l=-1!==g?{line:t.line,ch:g}:{line:t.line,ch:i.length}}else{var v,y,C=" ";C=C.concat(d,";"),v={line:t.line,ch:p+1},y={line:t.line,ch:i.length},e._codeMirror.replaceRange(C,v,y),t.ch=p+2,l={line:t.line,ch:t.ch+d.length},_=d}return u=e._codeMirror.markText(t,l),e.setSelection(t,l),{color:_,marker:u}}}return t.ch=s,l={line:t.line,ch:a},u=e._codeMirror.markText(t,l),e.setSelection(t,l),{color:n[0],marker:u}}function n(e,t){var r,n,o=i(e,t);return o?(r=new l(o.color,o.marker),r.load(e),n=new $.Deferred,n.resolve(r),n.promise()):null}function o(e,t){var r,i,n,o,s,a,l,d,u,f;if(o=e.getSelection(),o.start.line!==o.end.line)return!1;r=new RegExp(h.COLOR_REGEX),i=e.document.getLine(t.line);do{(n=r.exec(i))&&(s=n.index,a=s+n[0].length)}while(n&&(t.ch<s||t.ch>a));return!!n||!(!(l=i.split(":")[0].trim())||!c[l])&&(!!c[l]&&(d=i.indexOf(":"),i.indexOf(";"),f=i.substring(d+1,i.length),!(u=f.replace(/ /g,"").replace(";",""))||r.test(u)))}var s=brackets.getModule("editor/EditorManager"),a=brackets.getModule("utils/ExtensionUtils"),l=e("InlineColorEditor").InlineColorEditor,h=brackets.getModule("utils/ColorUtils"),c=JSON.parse(e("text!ColorProperties.json")),d="white";a.loadStyleSheet(r,"css/main.less"),s.registerInlineEditProvider(n,o),t.prepareEditorForProvider=i,t.inlineColorEditorProvider=n});