!function(e,t,n,a){function o(e){for(var t,n,a=[],o=0,r=e.length,i=0;o<r;)if((t=e[o++])<=127)a.push(String.fromCharCode(t));else{if(t>191&&t<=223)n=31&t,i=1;else if(t<=239)n=15&t,i=2;else{if(!(t<=247))throw new Error(k);n=7&t,i=3}for(var c=0;c<i;++c){if((t=e[o++])<128||t>191)throw new Error(k);n<<=6,n+=63&t}if(n>=55296&&n<=57343)throw new Error(k);if(n>1114111)throw new Error(k);n<=65535?a.push(String.fromCharCode(n)):(n-=65536,a.push(String.fromCharCode(55296+(n>>10)),String.fromCharCode(56320+(1023&n))))}return a.join("")}function r(e){var t={status:0,load:function(n){t.status||(t.status=1,c({src:e,onload:function(){t.status=2,n&&setTimeout(n)}}))}};return t}function c(e){var t=n.createElement("script");t.async=!0,t.src=e.src,t.onload=e.onload,n.body.appendChild(t)}function u(){for(var e=0;e<delayScripts.length;++e)!function(e){setTimeout(function(){e.src?c(e):e.onload&&e.onload()},e.delay||0)}(delayScripts[e])}function s(e,t){return"hex"===e?hexToBytes(t):"base64"===e?base64.decode.bytes(t):"utf-8"!==e?new TextEncoding.TextEncoder(e,{NONSTANDARD_allowLegacyEncoding:!0}).encode(t):t}function d(e,n){if("hex"===e)return bytesToHex(n);if("base64"===e)return base64.encode(n);if(t.Uint8Array)return new(t.TextDecoder||TextEncoding.TextDecoder)(e).decode(new Uint8Array(n));if("utf-8"===e)return o(n);throw new Error("Browser is not suppored.")}function h(e,t){return"hex"===e?t:"base64"===e?base64.encode(hexToBytes(t)):void 0}function l(e,t){return f(e.val(),t,s)}function p(e,t,n){!1!==(t=f(t,n,"hex"===n.data("type")?h:d))&&e.val(t)}function f(e,t,n){if(t.length){var a=t.find("option:selected").data("load-encoding");return!!loadEncodingLevel(a)&&n(t.val(),e)}return e}function g(e,t){t=t||64;var n=function(n){"string"==typeof n&&(n=utf8ToBytes(n)),n.length>t&&(n=e.array?e.array(n):hexToBytes(e(n)));var a=[],o=[];for(i=0;i<t;++i){var r=n[i]||0;a[i]=92^r,o[i]=54^r}var c=this;this.current=e.update(o),this.update=function(e){return c.current.update(e),c},this.hex=function(){var t=c.current.array?c.current.array():hexToBytes(c.current.hex());return e.update(a).update(t).hex()}};e.hmac=function(e,t){return new n(e).update(t).hex()},e.hmac.update=function(e,t){return new n(e).update(t)}}function m(a,o){var r=e("#remember-input"),i=e("[data-remember]"),c=localStorage.getItem(x);return a||o||!c||(r.prop("checked",!0),i.each(function(){var t=localStorage.getItem(x+"_"+e(this).data("remember"));t&&("checkbox"===this.type?e(this).prop("checked",!0):e(this).val(t))})),r.bind("change",function(){r.prop("checked")?(c=!0,localStorage.setItem(x,"1"),i.trigger("input"),o&&(o=!1,t.history.pushState({},n.title,location.pathname))):(c=!1,localStorage.removeItem(x),i.each(function(){localStorage.removeItem(x+"_"+e(this).data("remember"))}))}),i.bind("input",function(){if(c){var t=x+"_"+e(this).data("remember");"checkbox"===this.type?e(this).prop("checked")?localStorage.setItem(t,1):localStorage.removeItem(t):localStorage.setItem(t,e(this).val())}}),i.length||r.closest(".option-block").hide(),c}function v(){var t=e("#share-link"),n={};if(t.length){for(var a=location.search.substring(1),o=a.split("&"),r=0;r<o.length;++r){var i=o[r].split("=");n[i[0]]=decodeURIComponent(i[1])}var c=!1;return e("[data-share]").each(function(){var t=e(this).data("share"),a=n[t];if(a){if(a=a,"SELECT"===this.tagName){var o={};e(this).find("option").toArray().map(function(e){o[e.value]=!0}),o[a]&&e(this).val(a)}else"checkbox"===this.type?e(this).prop("checked",!0):e(this).val(a);c=!0}}),c}}function y(){var t=localStorage.getItem("SWAP")||"{}";localStorage.removeItem("SWAP");try{t=JSON.parse(t)}catch(e){return!1}for(var n=Object.keys(t),a=0;a<n.length;++a){var o=n[a],r=e(o);r.length&&("checkbox"===r[0].type?r.prop("checked",!0):r.val(t[o]))}return n.length}function b(){var t=e("#share-link");if(t.length){var n=[];e("[data-share]").each(function(){var t=e(this).data("share"),a="";(a="checkbox"===this.type?e(this).prop("checked")?"1":"":e(this).val())&&n.push(t+"="+encodeURIComponent(a))});var a="";n.length&&(a=location.origin+location.pathname+"?"+n.join("&")),t.val(a)}}t.ot=t.ot||{},t.method=t.method||null,Object.assign||(++waitLoadCount,delayScripts.push({src:"https://cdnjs.cloudflare.com/ajax/libs/core-js/3.33.1/minified.js",onload:function(){methodLoad()}})),t.hexToBytes=function(e){if(!e)return[];if(!e.match(/^[0-9a-fA-F]+$/))throw new Error("Input is not a hex string.");e.length%2!=0&&(e="0"+e);for(var t=[],n=0;n<e.length;n+=2){var a=parseInt(e.substr(n,2),16);t.push(a)}return t},t.bytesToHex=function(e){for(var t="",n=0;n<e.length;++n)t+=("0"+(255&e[n]).toString(16)).slice(-2);return t},t.utf8ToBytes=function(e){var t,n=[],a=e.length,o=0;for(i=0;i<a;++i)t=e.charCodeAt(i),t<128?n[o++]=t:t<2048?(n[o++]=192|t>>>6,n[o++]=128|63&t):t<55296||t>=57344?(n[o++]=224|t>>>12,n[o++]=128|t>>>6&63,n[o++]=128|63&t):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++i)),n[o++]=240|t>>>18,n[o++]=128|t>>>12&63,n[o++]=128|t>>>6&63,n[o++]=128|63&t);return n};var k="not a UTF-8 string",w={encoding:r("js/encoding.min.js?v=1"),encodingIndexes:r("js/encoding-indexes.min.js"),base64:r("https://cdn.jsdelivr.net/gh/emn178/hi-base64/build/base64.min.js")};t.onDemandScripts=w,t.loadEncodingLevel=function(t){return"base64"===t&&2!==w.base64.status?(e("#output").val("loading..."),w.base64.load(S),!1):1===t&&2!==w.encoding.status?(e("#output").val("loading..."),w.encoding.load(S),!1):2!==t||2===w.encodingIndexes.status||(e("#output").val("loading..."),w.encoding.load(S),w.encodingIndexes.load(S),!1)},t.hmacable=function(t){var n=e("#hmac"),a=e("#hmac-enabled"),o=e("#hmac-input-type"),r=e("#hmac-key");r.bind("input propertychange",T),o.bind("input propertychange change",T),a.click(function(){T();var e=a.prop("checked");n.toggle(e)});var i,c=function(e){return a.prop("checked")?(t.hmac||g(t),t.hmac(i,e)):t(e)};return c.loadHmac=function(){return!a.prop("checked")||!1!==(i=l(r,o))},t.update&&(c.update=function(e){return a.prop("checked")?(t.hmac||g(t),t.hmac.update(i,e)):t.update(e)}),c},t.withOptions=function(t,n,a){a=a||0,e("[data-option]").bind("input propertychange change",T);var o=n.map(function(t){var n=e('[data-option="'+t+'"]');return{name:t,element:n,type:n.data("option-type"),inputType:e("#"+t+"-input-type")}}),r=function(e){return function(){for(var t=[],n=0;n<o.length;++n){var a=o[n];if("encoding"===a.type){var r=l(a.element,a.inputType);if(!1===r)return;t.push(r)}else{var i=a.element.val();"number"===a.element.attr("type")?i=parseFloat(i):"checkbox"===a.element.attr("type")&&(i=a.element.prop("checked")),t.push(i)}}return t=Array.prototype.slice.call(arguments,0).concat(t),e.apply(this,t)}},i=r(t);return t.update&&(i.update=r(t.update)),t.hmac&&(i.hmac=r(t.hmac),i.hmac.update=r(t.hmac.update)),i};var x="REMEMBER_INPUT";t.swap=function(t,n){for(var a={},o=0;o<n.length;++o){var r=n[o],i=e(r[0]);a[r[1]]=r[2]?i.prop("checked")?"1":"":i.val()}localStorage.setItem("SWAP",JSON.stringify(a)),location.href=t};var S,T;e(n).ready(function(){u();var n=y(),a=!n&&v(),o=m(n,a);e("#hmac-enabled").prop("checked")&&e("#hmac").show();var r,i=e("#input-type"),c=e("#input"),s=e("#output-type"),d=e("#output"),h=e("#auto-update");handleOutput=function(e){e instanceof Promise?e.then(function(e){p(d,e,s)}).catch(function(e){d.val(e)}):p(d,e,s)};var f=!1;S=function(){if(k<waitLoadCount)return f=!0,void d.val("loading...");try{if(b(),val=l(c,i),!1===val)return;if(method.loadHmac&&!1===method.loadHmac())return;handleOutput(method(val))}catch(e){d.val(e)}},T=function(){h[0].checked&&(r&&(clearTimeout(r),r=null),r=setTimeout(function(){S()},0))},h.length>0&&(c.bind("input propertychange",T),i.bind("input propertychange change",T),s.bind("input propertychange change",T),h.click(T)),e("#execute").click(S);var g=e("#sidebar details.active")[0];g&&g.scrollIntoView();var k=0;t.methodLoad=function(){++k<waitLoadCount||((n||a||o||f)&&S(),e(t).trigger("methodLoad"))},ot.autoUpdate=T,ot.handleOutput=handleOutput,ot.setExecute=function(e){S=e},e("[data-toggle=dropdown]").dropdown({}),e("#sidebar-toggler").click(function(){e("#sidebar").addClass("open"),e("#sidebar-toggler").attr("aria-expanded",!0)}),e("#sidebar .mask").click(function(){e("#sidebar").removeClass("open"),e("#sidebar-toggler").attr("aria-expanded",!1)}),e(".theme").click(function(){e("html").toggleClass("dark-theme"),localStorage.setItem("DARK",e("html").hasClass("dark-theme")?1:0)})}),e.fn.dropdown=function(t){this.each(function(){var t=e(this);t.find(".dropdown-toggle").click(function(){t.toggleClass("open")})})},e(n.body).click(function(t){var n=e(t.target).hasClass("dropdown-toggle"),a=e(t.target).closest(".dropdown")[0];e(".dropdown").each(function(){n&&this===a||e(this).removeClass("open")})});var C;t.showMessage=function(t,n){e("#message").stop(!0,!0).text(t).show(),e("#message").toggleClass("error",!!n),clearTimeout(C),C=setTimeout(function(){e("#message").fadeOut(1e3)},1e3)}}(jQuery,window,document);