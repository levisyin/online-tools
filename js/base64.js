!function(){function e(e){if(!/^[\w+/\-,]*={0,2}$/.test(e.replace(/[\r\n]/g,"")))throw new Error("Invalid base64 string")}$('option[data-load-encoding="base64"]').attr("disabled",!0).hide(),ot.refreshEncodingSelect&&ot.refreshEncodingSelect(),window.base64Encode=function(e,r){var c=base64.encode(e);switch(r){case"rfc_4648_url_safe":c=c.replace(/\//g,"_").replace(/\+/g,"-");break;case"rfc_2045":c=c.replace(/(.{1,76})/g,"$1\r\n");break;case"rfc_2152":c=c.replace(/=/g,"");break;case"rfc_3501":c=c.replace(/\//g,",").replace(/=/g,"")}return c},window.base64Decode=function(r){return e(r),base64.decode.bytes(r.replace(/,/g,"/"))},window.download=function(r){return e(r),r.replace(/_/g,"/").replace(/-/g,"+").replace(/,/g,"/")}}();