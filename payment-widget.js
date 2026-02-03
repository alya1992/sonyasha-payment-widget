/**
 * Sonyasha Payment QR Widget
 *
 * Standalone JavaScript widget for generating NBU-compliant payment QR codes.
 * Produces byte-for-byte identical output to PaymentQRDataBuilder.php
 *
 * NBU Format 002 specification verified against bank-qr.com.ua generator.
 */

(function(global) {
    'use strict';

    // ============================================================================
    // BUNDLED: qr-code-styling v1.5.0 (embedded to eliminate CDN dependency)
    // ============================================================================
    !function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.QRCodeStyling=e():t.QRCodeStyling=e()}(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this,(function(){return(()=>{var t={192:(t,e)=>{var r,n,o=function(){var t=function(t,e){var r=t,n=a[e],o=null,i=0,u=null,v=[],w={},m=function(t,e){o=function(t){for(var e=new Array(t),r=0;r<t;r+=1){e[r]=new Array(t);for(var n=0;n<t;n+=1)e[r][n]=null}return e}(i=4*r+17),b(0,0),b(i-7,0),b(0,i-7),x(),_(),M(t,e),r>=7&&S(t),null==u&&(u=A(r,n,v)),C(u,e)},b=function(t,e){for(var r=-1;r<=7;r+=1)if(!(t+r<=-1||i<=t+r))for(var n=-1;n<=7;n+=1)e+n<=-1||i<=e+n||(o[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},_=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var e=8;e<i-8;e+=1)null==o[6][e]&&(o[6][e]=e%2==0)},x=function(){for(var t=s.getPatternPosition(r),e=0;e<t.length;e+=1)for(var n=0;n<t.length;n+=1){var i=t[e],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var h=-2;h<=2;h+=1)o[i+u][a+h]=-2==u||2==u||-2==h||2==h||0==u&&0==h}},S=function(t){for(var e=s.getBCHTypeNumber(r),n=0;n<18;n+=1){var a=!t&&1==(e>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1)a=!t&&1==(e>>n&1),o[n%3+i-8-3][Math.floor(n/3)]=a},M=function(t,e){for(var r=n<<3|e,a=s.getBCHTypeInfo(r),u=0;u<15;u+=1){var h=!t&&1==(a>>u&1);u<6?o[u][8]=h:u<8?o[u+1][8]=h:o[i-15+u][8]=h}for(u=0;u<15;u+=1)h=!t&&1==(a>>u&1),u<8?o[8][i-u-1]=h:u<9?o[8][15-u-1+1]=h:o[8][15-u-1]=h;o[i-8][8]=!t},C=function(t,e){for(var r=-1,n=i-1,a=7,u=0,h=s.getMaskFunction(e),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var l=0;l<2;l+=1)if(null==o[n][c-l]){var d=!1;u<t.length&&(d=1==(t[u]>>>a&1)),h(n,c-l)&&(d=!d),o[n][c-l]=d,-1==(a-=1)&&(u+=1,a=7)}if((n+=r)<0||i<=n){n-=r,r=-r;break}}},A=function(t,e,r){for(var n=c.getRSBlocks(t,e),o=l(),i=0;i<r.length;i+=1){var a=r[i];o.put(a.getMode(),4),o.put(a.getLength(),s.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,e){for(var r=0,n=0,o=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u+=1){var c=e[u].dataCount,l=e[u].totalCount-c;n=Math.max(n,c),o=Math.max(o,l),i[u]=new Array(c);for(var d=0;d<i[u].length;d+=1)i[u][d]=255&t.getBuffer()[d+r];r+=c;var f=s.getErrorCorrectPolynomial(l),g=h(i[u],f.getLength()-1).mod(f);for(a[u]=new Array(f.getLength()-1),d=0;d<a[u].length;d+=1){var p=d+g.getLength()-a[u].length;a[u][d]=p>=0?g.getAt(p):0}}var v=0;for(d=0;d<e.length;d+=1)v+=e[d].totalCount;var w=new Array(v),y=0;for(d=0;d<n;d+=1)for(u=0;u<e.length;u+=1)d<i[u].length&&(w[y]=i[u][d],y+=1);for(d=0;d<o;d+=1)for(u=0;u<e.length;u+=1)d<a[u].length&&(w[y]=a[u][d],y+=1);return w}(o,n)};w.addData=function(t,e){var r=null;switch(e=e||"Byte"){case"Numeric":r=d(t);break;case"Alphanumeric":r=f(t);break;case"Byte":r=g(t);break;case"Kanji":r=p(t);break;default:throw"mode:"+e}v.push(r),u=null},w.isDark=function(t,e){if(t<0||i<=t||e<0||i<=e)throw t+","+e;return o[t][e]},w.getModuleCount=function(){return i},w.make=function(){if(r<1){for(var t=1;t<40;t++){for(var e=c.getRSBlocks(t,n),o=l(),i=0;i<v.length;i++){var a=v[i];o.put(a.getMode(),4),o.put(a.getLength(),s.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<e.length;i++)u+=e[i].dataCount;if(o.getLengthInBits()<=8*u)break}r=t}m(!1,function(){for(var t=0,e=0,r=0;r<8;r+=1){m(!0,r);var n=s.getLostPoint(w);(0==r||t>n)&&(t=n,e=r)}return e}())},w.createTableTag=function(t,e){t=t||2;var r="";r+='<table style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: "+(e=void 0===e?4*t:e)+"px;",r+='">',r+="<tbody>";for(var n=0;n<w.getModuleCount();n+=1){r+="<tr>";for(var o=0;o<w.getModuleCount();o+=1)r+='<td style="',r+=" border-width: 0px; border-style: none;",r+=" border-collapse: collapse;",r+=" padding: 0px; margin: 0px;",r+=" width: "+t+"px;",r+=" height: "+t+"px;",r+=" background-color: ",r+=w.isDark(n,o)?"#000000":"#ffffff",r+=";",r+='"/>';r+="</tr>"}return(r+="</tbody>")+"</table>"},w.createSvgTag=function(t,e,r,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,e=o.margin,r=o.alt,n=o.title),t=t||2,e=void 0===e?4*t:e,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,s,u,h=w.getModuleCount()*t+2*e,c="";for(u="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",c+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',c+=o.scalable?"":' width="'+h+'px" height="'+h+'px"',c+=' viewBox="0 0 '+h+" "+h+'" ',c+=' preserveAspectRatio="xMinYMin meet"',c+=n.text||r.text?' role="img" aria-labelledby="'+k([n.id,r.id].join(" ").trim())+'"':"",c+=">",c+=n.text?'<title id="'+k(n.id)+'">'+k(n.text)+"</title>":"",c+=r.text?'<description id="'+k(r.id)+'">'+k(r.text)+"</description>":"",c+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',c+='<path d="',a=0;a<w.getModuleCount();a+=1)for(s=a*t+e,i=0;i<w.getModuleCount();i+=1)w.isDark(a,i)&&(c+="M"+(i*t+e)+","+s+u);return(c+='" stroke="transparent" fill="black"/>')+"</svg>"},w.createDataURL=function(t,e){t=t||2,e=void 0===e?4*t:e;var r=w.getModuleCount()*t+2*e,n=e,o=r-e;return y(r,r,(function(e,r){if(n<=e&&e<o&&n<=r&&r<o){var i=Math.floor((e-n)/t),a=Math.floor((r-n)/t);return w.isDark(a,i)?0:1}return 1}))},w.createImgTag=function(t,e,r){t=t||2,e=void 0===e?4*t:e;var n=w.getModuleCount()*t+2*e,o="";return o+="<img",o+=' src="',o+=w.createDataURL(t,e),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',r&&(o+=' alt="',o+=k(r),o+='"'),o+"/>"};var k=function(t){for(var e="",r=0;r<t.length;r+=1){var n=t.charAt(r);switch(n){case"<":e+="&lt;";break;case">":e+="&gt;";break;case"&":e+="&amp;";break;case'"':e+="&quot;";break;default:e+=n}}return e};return w.createASCII=function(t,e){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var e,r,n,o,i,a=1*w.getModuleCount()+2*t,s=t,u=a-t,h={"██":"█","█ ":"▀"," █":"▄","  ":" "},c={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="";for(e=0;e<a;e+=2){for(n=Math.floor((e-s)/1),o=Math.floor((e+1-s)/1),r=0;r<a;r+=1)i="█",s<=r&&r<u&&s<=e&&e<u&&w.isDark(n,Math.floor((r-s)/1))&&(i=" "),s<=r&&r<u&&s<=e+1&&e+1<u&&w.isDark(o,Math.floor((r-s)/1))?i+=" ":i+="█",l+=t<1&&e+1>=u?c[i]:h[i];l+="\n"}return a%2&&t>0?l.substring(0,l.length-a-1)+Array(a+1).join("▀"):l.substring(0,l.length-1)}(e);t-=1,e=void 0===e?2*t:e;var r,n,o,i,a=w.getModuleCount()*t+2*e,s=e,u=a-e,h=Array(t+1).join("██"),c=Array(t+1).join("  "),l="",d="";for(r=0;r<a;r+=1){for(o=Math.floor((r-s)/t),d="",n=0;n<a;n+=1)i=1,s<=n&&n<u&&s<=r&&r<u&&w.isDark(o,Math.floor((n-s)/t))&&(i=0),d+=i?h:c;for(o=0;o<t;o+=1)l+=d+"\n"}return l.substring(0,l.length-1)},w.renderTo2dContext=function(t,e){e=e||2;for(var r=w.getModuleCount(),n=0;n<r;n++)for(var o=0;o<r;o++)t.fillStyle=w.isDark(n,o)?"black":"white",t.fillRect(n*e,o*e,e,e)},w};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e.push(255&n)}return e}}).default,t.createStringToBytes=function(t,e){var r=function(){for(var r=w(t),n=function(){var t=r.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=r.read();if(-1==a)break;var s=n(),u=n()<<8|n();i[String.fromCharCode(a<<8|s)]=u,o+=1}if(o!=e)throw o+" != "+e;return i}(),n="?".charCodeAt(0);return function(t){for(var e=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)e.push(i);else{var a=r[t.charAt(o)];"number"==typeof a?(255&a)==a?e.push(a):(e.push(a>>>8),e.push(255&a)):e.push(n)}}return e}};var e,r,n,o,i,a={L:1,M:0,Q:3,H:2},s=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r=1335,n=7973,i=function(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e},(o={}).getBCHTypeInfo=function(t){for(var e=t<<10;i(e)-i(r)>=0;)e^=r<<i(e)-i(r);return 21522^(t<<10|e)},o.getBCHTypeNumber=function(t){for(var e=t<<12;i(e)-i(n)>=0;)e^=n<<i(e)-i(n);return t<<12|e},o.getPatternPosition=function(t){return e[t-1]},o.getMaskFunction=function(t){switch(t){case 0:return function(t,e){return(t+e)%2==0};case 1:return function(t,e){return t%2==0};case 2:return function(t,e){return e%3==0};case 3:return function(t,e){return(t+e)%3==0};case 4:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case 5:return function(t,e){return t*e%2+t*e%3==0};case 6:return function(t,e){return(t*e%2+t*e%3)%2==0};case 7:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var e=h([1],0),r=0;r<t;r+=1)e=e.multiply(h([1,u.gexp(r)],0));return e},o.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(e<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(e<41))throw"type:"+e;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n+=1)for(var o=0;o<e;o+=1){for(var i=0,a=t.isDark(n,o),s=-1;s<=1;s+=1)if(!(n+s<0||e<=n+s))for(var u=-1;u<=1;u+=1)o+u<0||e<=o+u||0==s&&0==u||a==t.isDark(n+s,o+u)&&(i+=1);i>5&&(r+=3+i-5)}for(n=0;n<e-1;n+=1)for(o=0;o<e-1;o+=1){var h=0;t.isDark(n,o)&&(h+=1),t.isDark(n+1,o)&&(h+=1),t.isDark(n,o+1)&&(h+=1),t.isDark(n+1,o+1)&&(h+=1),0!=h&&4!=h||(r+=3)}for(n=0;n<e;n+=1)for(o=0;o<e-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(o=0;o<e;o+=1)for(n=0;n<e-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);var c=0;for(o=0;o<e;o+=1)for(n=0;n<e;n+=1)t.isDark(n,o)&&(c+=1);return r+Math.abs(100*c/e/e-50)/5*10},o),u=function(){for(var t=new Array(256),e=new Array(256),r=0;r<8;r+=1)t[r]=1<<r;for(r=8;r<256;r+=1)t[r]=t[r-4]^t[r-5]^t[r-6]^t[r-8];for(r=0;r<255;r+=1)e[t[r]]=r;return{glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}}}();function h(t,e){if(void 0===t.length)throw t.length+"/"+e;var r=function(){for(var r=0;r<t.length&&0==t[r];)r+=1;for(var n=new Array(t.length-r+e),o=0;o<t.length-r;o+=1)n[o]=t[o+r];return n}(),n={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var e=new Array(n.getLength()+t.getLength()-1),r=0;r<n.getLength();r+=1)for(var o=0;o<t.getLength();o+=1)e[r+o]^=u.gexp(u.glog(n.getAt(r))+u.glog(t.getAt(o)));return h(e,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var e=u.glog(n.getAt(0))-u.glog(t.getAt(0)),r=new Array(n.getLength()),o=0;o<n.getLength();o+=1)r[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)r[o]^=u.gexp(u.glog(t.getAt(o))+e);return h(r,0).mod(t)}};return n}var c=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var r={};return r.totalCount=t,r.dataCount=e,r},r={getRSBlocks:function(r,n){var o=function(e,r){switch(r){case a.L:return t[4*(e-1)+0];case a.M:return t[4*(e-1)+1];case a.Q:return t[4*(e-1)+2];case a.H:return t[4*(e-1)+3];default:return}}(r,n);if(void 0===o)throw"bad rs block @ typeNumber:"+r+"/errorCorrectionLevel:"+n;for(var i=o.length/3,s=[],u=0;u<i;u+=1)for(var h=o[3*u+0],c=o[3*u+1],l=o[3*u+2],d=0;d<h;d+=1)s.push(e(c,l));return s}};return r}(),l=function(){var t=[],e=0,r={getBuffer:function(){return t},getAt:function(e){var r=Math.floor(e/8);return 1==(t[r]>>>7-e%8&1)},put:function(t,e){for(var n=0;n<e;n+=1)r.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return e},putBit:function(r){var n=Math.floor(e/8);t.length<=n&&t.push(0),r&&(t[n]|=128>>>e%8),e+=1}};return r},d=function(t){var e=t,r={getMode:function(){return 1},getLength:function(t){return e.length},write:function(t){for(var r=e,o=0;o+2<r.length;)t.put(n(r.substring(o,o+3)),10),o+=3;o<r.length&&(r.length-o==1?t.put(n(r.substring(o,o+1)),4):r.length-o==2&&t.put(n(r.substring(o,o+2)),7))}},n=function(t){for(var e=0,r=0;r<t.length;r+=1)e=10*e+o(t.charAt(r));return e},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return r},f=function(t){var e=t,r={getMode:function(){return 2},getLength:function(t){return e.length},write:function(t){for(var r=e,o=0;o+1<r.length;)t.put(45*n(r.charAt(o))+n(r.charAt(o+1)),11),o+=2;o<r.length&&t.put(n(r.charAt(o)),6)}},n=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return r},g=function(e){var r=t.stringToBytes(e);return{getMode:function(){return 4},getLength:function(t){return r.length},write:function(t){for(var e=0;e<r.length;e+=1)t.put(r[e],8)}}},p=function(e){var r=t.stringToBytesFuncs.SJIS;if(!r)throw"sjis not supported.";!function(t,e){var n=r("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var n=r(e);return{getMode:function(){return 8},getLength:function(t){return~~(n.length/2)},write:function(t){for(var e=n,r=0;r+1<e.length;){var o=(255&e[r])<<8|255&e[r+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(r+1)+"/"+o;o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13),r+=2}if(r<e.length)throw"illegal char at "+(r+1)}}},v=function(){var t=[],e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,r,n){r=r||0,n=n||t.length;for(var o=0;o<n;o+=1)e.writeByte(t[o+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)e.writeByte(t.charCodeAt(r))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var r=0;r<t.length;r+=1)r>0&&(e+=","),e+=t[r];return e+"]"}};return e},w=function(t){var e=t,r=0,n=0,o=0,i={read:function(){for(;o<8;){if(r>=e.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=e.charAt(r);if(r+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},y=function(t,e,r){for(var n=function(t,e){var r=t,n=e,o=new Array(t*e),i={setPixel:function(t,e,n){o[e*r+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(r),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(r),t.writeShort(n),t.writeByte(0);var e=a(2);t.writeByte(2);for(var o=0;e.length-o>255;)t.writeByte(255),t.writeBytes(e,o,255),o+=255;t.writeByte(e.length-o),t.writeBytes(e,o,e.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var e=1<<t,r=1+(1<<t),n=t+1,i=s(),a=0;a<e;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(e)),i.add(String.fromCharCode(r));var u,h,c,l=v(),d=(u=l,h=0,c=0,{write:function(t,e){if(t>>>e!=0)throw"length over";for(;h+e>=8;)u.writeByte(255&(t<<h|c)),e-=8-h,t>>>=8-h,c=0,h=0;c|=t<<h,h+=e},flush:function(){h>0&&u.writeByte(c)}});d.write(e,n);var f=0,g=String.fromCharCode(o[f]);for(f+=1;f<o.length;){var p=String.fromCharCode(o[f]);f+=1,i.contains(g+p)?g+=p:(d.write(i.indexOf(g),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(g+p)),g=p)}return d.write(i.indexOf(g),n),d.write(r,n),d.flush(),l.toByteArray()},s=function(){var t={},e=0,r={add:function(n){if(r.contains(n))throw"dup key:"+n;t[n]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return void 0!==t[e]}};return r};return i}(t,e),o=0;o<e;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,r(i,o));var a=v();n.write(a);for(var s=function(){var t=0,e=0,r=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,e+=8,r+=1;e>=6;)i(t>>>e-6),e-=6},o.flush=function(){if(e>0&&(i(t<<6-e),t=0,e=0),r%3!=0)for(var o=3-r%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),u=a.toByteArray(),h=0;h<u.length;h+=1)s.writeByte(u[h]);return s.flush(),"data:image/gif;base64,"+s};return t}();o.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);n<128?e.push(n):n<2048?e.push(192|n>>6,128|63&n):n<55296||n>=57344?e.push(224|n>>12,128|n>>6&63,128|63&n):(r++,n=65536+((1023&n)<<10|1023&t.charCodeAt(r)),e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return e}(t)},void 0===(n="function"==typeof(r=function(){return o})?r.apply(e,[]):r)||(t.exports=n)},676:(t,e,r)=>{"use strict";r.d(e,{default:()=>q});var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n},i=function(t){return!!t&&"object"==typeof t&&!Array.isArray(t)};function a(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(!e.length)return t;var s=e.shift();return void 0!==s&&i(t)&&i(s)?(t=n({},t),Object.keys(s).forEach((function(e){var r=t[e],n=s[e];Array.isArray(r)&&Array.isArray(n)?t[e]=n:i(r)&&i(n)?t[e]=a(Object.assign({},r),n):t[e]=n})),a.apply(void 0,o([t],e))):t}function s(t,e){var r=document.createElement("a");r.download=e,r.href=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)}function u(t){return e=this,r=void 0,o=function(){return function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){return[2,new Promise((function(e){var r=new XMLHttpRequest;r.onload=function(){var t=new FileReader;t.onloadend=function(){e(t.result)},t.readAsDataURL(r.response)},r.open("GET",t),r.responseType="blob",r.send()}))]}))},new((n=void 0)||(n=Promise))((function(t,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(t){t(r)}))).then(a,s)}u((o=o.apply(e,r||[])).next())}));var e,r,n,o}const h={L:.07,M:.15,Q:.25,H:.3};var c=function(){return(c=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};const l=function(){function t(t){var e=t.svg,r=t.type;this._svg=e,this._type=r}return t.prototype.draw=function(t,e,r,n){var o;switch(this._type){case"dots":o=this._drawDot;break;case"classy":o=this._drawClassy;break;case"classy-rounded":o=this._drawClassyRounded;break;case"rounded":o=this._drawRounded;break;case"extra-rounded":o=this._drawExtraRounded;break;case"square":default:o=this._drawSquare}o.call(this,{x:t,y:e,size:r,getNeighbor:n})},t.prototype._rotateFigure=function(t){var e,r=t.x,n=t.y,o=t.size,i=t.rotation,a=void 0===i?0:i,s=r+o/2,u=n+o/2;(0,t.draw)(),null===(e=this._element)||void 0===e||e.setAttribute("transform","rotate("+180*a/Math.PI+","+s+","+u+")")},t.prototype._basicDot=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),e._element.setAttribute("cx",String(n+r/2)),e._element.setAttribute("cy",String(o+r/2)),e._element.setAttribute("r",String(r/2))}}))},t.prototype._basicSquare=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),e._element.setAttribute("x",String(n)),e._element.setAttribute("y",String(o)),e._element.setAttribute("width",String(r)),e._element.setAttribute("height",String(r))}}))},t.prototype._basicSideRounded=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("d","M "+n+" "+o+"v "+r+"h "+r/2+"a "+r/2+" "+r/2+", 0, 0, 0, 0 "+-r)}}))},t.prototype._basicCornerRounded=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("d","M "+n+" "+o+"v "+r+"h "+r+"v "+-r/2+"a "+r/2+" "+r/2+", 0, 0, 0, "+-r/2+" "+-r/2)}}))},t.prototype._basicCornerExtraRounded=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("d","M "+n+" "+o+"v "+r+"h "+r+"a "+r+" "+r+", 0, 0, 0, "+-r+" "+-r)}}))},t.prototype._basicCornersRounded=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(c(c({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("d","M "+n+" "+o+"v "+r/2+"a "+r/2+" "+r/2+", 0, 0, 0, "+r/2+" "+r/2+"h "+r/2+"v "+-r/2+"a "+r/2+" "+r/2+", 0, 0, 0, "+-r/2+" "+-r/2)}}))},t.prototype._drawDot=function(t){var e=t.x,r=t.y,n=t.size;this._basicDot({x:e,y:r,size:n,rotation:0})},t.prototype._drawSquare=function(t){var e=t.x,r=t.y,n=t.size;this._basicSquare({x:e,y:r,size:n,rotation:0})},t.prototype._drawRounded=function(t){var e=t.x,r=t.y,n=t.size,o=t.getNeighbor,i=o?+o(-1,0):0,a=o?+o(1,0):0,s=o?+o(0,-1):0,u=o?+o(0,1):0,h=i+a+s+u;if(0!==h)if(h>2||i&&a||s&&u)this._basicSquare({x:e,y:r,size:n,rotation:0});else{if(2===h){var c=0;return i&&s?c=Math.PI/2:s&&a?c=Math.PI:a&&u&&(c=-Math.PI/2),void this._basicCornerRounded({x:e,y:r,size:n,rotation:c})}if(1===h)return c=0,s?c=Math.PI/2:a?c=Math.PI:u&&(c=-Math.PI/2),void this._basicSideRounded({x:e,y:r,size:n,rotation:c})}else this._basicDot({x:e,y:r,size:n,rotation:0})},t.prototype._drawExtraRounded=function(t){var e=t.x,r=t.y,n=t.size,o=t.getNeighbor,i=o?+o(-1,0):0,a=o?+o(1,0):0,s=o?+o(0,-1):0,u=o?+o(0,1):0,h=i+a+s+u;if(0!==h)if(h>2||i&&a||s&&u)this._basicSquare({x:e,y:r,size:n,rotation:0});else{if(2===h){var c=0;return i&&s?c=Math.PI/2:s&&a?c=Math.PI:a&&u&&(c=-Math.PI/2),void this._basicCornerExtraRounded({x:e,y:r,size:n,rotation:c})}if(1===h)return c=0,s?c=Math.PI/2:a?c=Math.PI:u&&(c=-Math.PI/2),void this._basicSideRounded({x:e,y:r,size:n,rotation:c})}else this._basicDot({x:e,y:r,size:n,rotation:0})},t.prototype._drawClassy=function(t){var e=t.x,r=t.y,n=t.size,o=t.getNeighbor,i=o?+o(-1,0):0,a=o?+o(1,0):0,s=o?+o(0,-1):0,u=o?+o(0,1):0;0!==i+a+s+u?i||s?a||u?this._basicSquare({x:e,y:r,size:n,rotation:0}):this._basicCornerRounded({x:e,y:r,size:n,rotation:Math.PI/2}):this._basicCornerRounded({x:e,y:r,size:n,rotation:-Math.PI/2}):this._basicCornersRounded({x:e,y:r,size:n,rotation:Math.PI/2})},t.prototype._drawClassyRounded=function(t){var e=t.x,r=t.y,n=t.size,o=t.getNeighbor,i=o?+o(-1,0):0,a=o?+o(1,0):0,s=o?+o(0,-1):0,u=o?+o(0,1):0;0!==i+a+s+u?i||s?a||u?this._basicSquare({x:e,y:r,size:n,rotation:0}):this._basicCornerExtraRounded({x:e,y:r,size:n,rotation:Math.PI/2}):this._basicCornerExtraRounded({x:e,y:r,size:n,rotation:-Math.PI/2}):this._basicCornersRounded({x:e,y:r,size:n,rotation:Math.PI/2})},t}();var d=function(){return(d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};const f=function(){function t(t){var e=t.svg,r=t.type;this._svg=e,this._type=r}return t.prototype.draw=function(t,e,r,n){var o;switch(this._type){case"square":o=this._drawSquare;break;case"extra-rounded":o=this._drawExtraRounded;break;case"dot":default:o=this._drawDot}o.call(this,{x:t,y:e,size:r,rotation:n})},t.prototype._rotateFigure=function(t){var e,r=t.x,n=t.y,o=t.size,i=t.rotation,a=void 0===i?0:i,s=r+o/2,u=n+o/2;(0,t.draw)(),null===(e=this._element)||void 0===e||e.setAttribute("transform","rotate("+180*a/Math.PI+","+s+","+u+")")},t.prototype._basicDot=function(t){var e=this,r=t.size,n=t.x,o=t.y,i=r/7;this._rotateFigure(d(d({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("clip-rule","evenodd"),e._element.setAttribute("d","M "+(n+r/2)+" "+o+"a "+r/2+" "+r/2+" 0 1 0 0.1 0zm 0 "+i+"a "+(r/2-i)+" "+(r/2-i)+" 0 1 1 -0.1 0Z")}}))},t.prototype._basicSquare=function(t){var e=this,r=t.size,n=t.x,o=t.y,i=r/7;this._rotateFigure(d(d({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("clip-rule","evenodd"),e._element.setAttribute("d","M "+n+" "+o+"v "+r+"h "+r+"v "+-r+"zM "+(n+i)+" "+(o+i)+"h "+(r-2*i)+"v "+(r-2*i)+"h "+(2*i-r)+"z")}}))},t.prototype._basicExtraRounded=function(t){var e=this,r=t.size,n=t.x,o=t.y,i=r/7;this._rotateFigure(d(d({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","path"),e._element.setAttribute("clip-rule","evenodd"),e._element.setAttribute("d","M "+n+" "+(o+2.5*i)+"v "+2*i+"a "+2.5*i+" "+2.5*i+", 0, 0, 0, "+2.5*i+" "+2.5*i+"h "+2*i+"a "+2.5*i+" "+2.5*i+", 0, 0, 0, "+2.5*i+" "+2.5*-i+"v "+-2*i+"a "+2.5*i+" "+2.5*i+", 0, 0, 0, "+2.5*-i+" "+2.5*-i+"h "+-2*i+"a "+2.5*i+" "+2.5*i+", 0, 0, 0, "+2.5*-i+" "+2.5*i+"M "+(n+2.5*i)+" "+(o+i)+"h "+2*i+"a "+1.5*i+" "+1.5*i+", 0, 0, 1, "+1.5*i+" "+1.5*i+"v "+2*i+"a "+1.5*i+" "+1.5*i+", 0, 0, 1, "+1.5*-i+" "+1.5*i+"h "+-2*i+"a "+1.5*i+" "+1.5*i+", 0, 0, 1, "+1.5*-i+" "+1.5*-i+"v "+-2*i+"a "+1.5*i+" "+1.5*i+", 0, 0, 1, "+1.5*i+" "+1.5*-i)}}))},t.prototype._drawDot=function(t){var e=t.x,r=t.y,n=t.size,o=t.rotation;this._basicDot({x:e,y:r,size:n,rotation:o})},t.prototype._drawSquare=function(t){var e=t.x,r=t.y,n=t.size,o=t.rotation;this._basicSquare({x:e,y:r,size:n,rotation:o})},t.prototype._drawExtraRounded=function(t){var e=t.x,r=t.y,n=t.size,o=t.rotation;this._basicExtraRounded({x:e,y:r,size:n,rotation:o})},t}();var g=function(){return(g=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};const p=function(){function t(t){var e=t.svg,r=t.type;this._svg=e,this._type=r}return t.prototype.draw=function(t,e,r,n){var o;switch(this._type){case"square":o=this._drawSquare;break;case"dot":default:o=this._drawDot}o.call(this,{x:t,y:e,size:r,rotation:n})},t.prototype._rotateFigure=function(t){var e,r=t.x,n=t.y,o=t.size,i=t.rotation,a=void 0===i?0:i,s=r+o/2,u=n+o/2;(0,t.draw)(),null===(e=this._element)||void 0===e||e.setAttribute("transform","rotate("+180*a/Math.PI+","+s+","+u+")")},t.prototype._basicDot=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(g(g({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","circle"),e._element.setAttribute("cx",String(n+r/2)),e._element.setAttribute("cy",String(o+r/2)),e._element.setAttribute("r",String(r/2))}}))},t.prototype._basicSquare=function(t){var e=this,r=t.size,n=t.x,o=t.y;this._rotateFigure(g(g({},t),{draw:function(){e._element=document.createElementNS("http://www.w3.org/2000/svg","rect"),e._element.setAttribute("x",String(n)),e._element.setAttribute("y",String(o)),e._element.setAttribute("width",String(r)),e._element.setAttribute("height",String(r))}}))},t.prototype._drawDot=function(t){var e=t.x,r=t.y,n=t.size,o=t.rotation;this._basicDot({x:e,y:r,size:n,rotation:o})},t.prototype._drawSquare=function(t){var e=t.x,r=t.y,n=t.size,o=t.rotation;this._basicSquare({x:e,y:r,size:n,rotation:o})},t}(),v="circle";var w=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},y=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},m=[[1,1,1,1,1,1,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,0,0,0,0,0,1],[1,1,1,1,1,1,1]],b=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];const _=function(){function t(t){this._element=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._element.setAttribute("width",String(t.width)),this._element.setAttribute("height",String(t.height)),this._defs=document.createElementNS("http://www.w3.org/2000/svg","defs"),this._element.appendChild(this._defs),this._options=t}return Object.defineProperty(t.prototype,"width",{get:function(){return this._options.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._options.height},enumerable:!1,configurable:!0}),t.prototype.getElement=function(){return this._element},t.prototype.drawQR=function(t){return w(this,void 0,void 0,(function(){var e,r,n,o,i,a,s,u,c,l,d=this;return y(this,(function(f){switch(f.label){case 0:return e=t.getModuleCount(),r=Math.min(this._options.width,this._options.height)-2*this._options.margin,n=this._options.shape===v?r/Math.sqrt(2):r,o=Math.floor(n/e),i={hideXDots:0,hideYDots:0,width:0,height:0},this._qr=t,this._options.image?[4,this.loadImage()]:[3,2];case 1:if(f.sent(),!this._image)return[2];a=this._options,s=a.imageOptions,u=a.qrOptions,c=s.imageSize*h[u.errorCorrectionLevel],l=Math.floor(c*e*e),i=function(t){var e=t.originalHeight,r=t.originalWidth,n=t.maxHiddenDots,o=t.maxHiddenAxisDots,i=t.dotSize,a={x:0,y:0},s={x:0,y:0};if(e<=0||r<=0||n<=0||i<=0)return{height:0,width:0,hideYDots:0,hideXDots:0};var u=e/r;return a.x=Math.floor(Math.sqrt(n/u)),a.x<=0&&(a.x=1),o&&o<a.x&&(a.x=o),a.x%2==0&&a.x--,s.x=a.x*i,a.y=1+2*Math.ceil((a.x*u-1)/2),s.y=Math.round(s.x*u),(a.y*a.x>n||o&&o<a.y)&&(o&&o<a.y?(a.y=o,a.y%2==0&&a.x--):a.y-=2,s.y=a.y*i,a.x=1+2*Math.ceil((a.y/u-1)/2),s.x=Math.round(s.y/u)),{height:s.y,width:s.x,hideYDots:a.y,hideXDots:a.x}}({originalWidth:this._image.width,originalHeight:this._image.height,maxHiddenDots:l,maxHiddenAxisDots:e-14,dotSize:o}),f.label=2;case 2:return this.drawBackground(),this.drawDots((function(t,r){var n,o,a,s,u,h;return!(d._options.imageOptions.hideBackgroundDots&&t>=(e-i.hideXDots)/2&&t<(e+i.hideXDots)/2&&r>=(e-i.hideYDots)/2&&r<(e+i.hideYDots)/2||(null===(n=m[t])||void 0===n?void 0:n[r])||(null===(o=m[t-e+7])||void 0===o?void 0:o[r])||(null===(a=m[t])||void 0===a?void 0:a[r-e+7])||(null===(s=b[t])||void 0===s?void 0:s[r])||(null===(u=b[t-e+7])||void 0===u?void 0:u[r])||(null===(h=b[t])||void 0===h?void 0:h[r-e+7]))})),this.drawCorners(),this._options.image?[4,this.drawImage({width:i.width,height:i.height,count:e,dotSize:o})]:[3,4];case 3:f.sent(),f.label=4;case 4:return[2]}}))}))},t.prototype.drawBackground=function(){var t,e,r,n=this._element,o=this._options;if(n){var i=null===(t=o.backgroundOptions)||void 0===t?void 0:t.gradient,a=null===(e=o.backgroundOptions)||void 0===e?void 0:e.color;if((i||a)&&this._createColor({options:i,color:a,additionalRotation:0,x:0,y:0,height:o.height,width:o.width,name:"background-color"}),null===(r=o.backgroundOptions)||void 0===r?void 0:r.round){var s=Math.min(o.width,o.height),u=document.createElementNS("http://www.w3.org/2000/svg","rect");this._backgroundClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._backgroundClipPath.setAttribute("id","clip-path-background-color"),this._defs.appendChild(this._backgroundClipPath),u.setAttribute("x",String((o.width-s)/2)),u.setAttribute("y",String((o.height-s)/2)),u.setAttribute("width",String(s)),u.setAttribute("height",String(s)),u.setAttribute("rx",String(s/2*o.backgroundOptions.round)),this._backgroundClipPath.appendChild(u)}}},t.prototype.drawDots=function(t){var e,r,n=this;if(!this._qr)throw"QR code is not defined";var o=this._options,i=this._qr.getModuleCount();if(i>o.width||i>o.height)throw"The canvas is too small.";var a=Math.min(o.width,o.height)-2*o.margin,s=o.shape===v?a/Math.sqrt(2):a,u=Math.floor(s/i),h=Math.floor((o.width-i*u)/2),c=Math.floor((o.height-i*u)/2),d=new l({svg:this._element,type:o.dotsOptions.type});this._dotsClipPath=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),this._dotsClipPath.setAttribute("id","clip-path-dot-color"),this._defs.appendChild(this._dotsClipPath),this._createColor({options:null===(e=o.dotsOptions)||void 0===e?void 0:e.gradient,color:o.dotsOptions.color,additionalRotation:0,x:0,y:0,height:o.height,width:o.width,name:"dot-color"});for(var f=function(e){for(var o=function(o){return t&&!t(e,o)?"continue":(null===(r=g._qr)||void 0===r?void 0:r.isDark(e,o))?(d.draw(h+e*u,c+o*u,u,(function(r,a){return!(e+r<0||o+a<0||e+r>=i||o+a>=i)&&!(t&&!t(e+r,o+a))&&!!n._qr&&n._qr.isDark(e+r,o+a)})),void(d._element&&g._dotsClipPath&&g._dotsClipPath.appendChild(d._element))):"continue"},a=0;a<i;a++)o(a)},g=this,p=0;p<i;p++)f(p);if(o.shape===v){var w=Math.floor((a/u-i)/2),y=i+2*w,m=h-w*u,b=c-w*u,_=[],x=Math.floor(y/2);for(p=0;p<y;p++){_[p]=[];for(var S=0;S<y;S++)p>=w-1&&p<=y-w&&S>=w-1&&S<=y-w||Math.sqrt((p-x)*(p-x)+(S-x)*(S-x))>x?_[p][S]=0:_[p][S]=this._qr.isDark(S-2*w<0?S:S>=i?S-2*w:S-w,p-2*w<0?p:p>=i?p-2*w:p-w)?1:0}var M=function(t){for(var e=function(e){if(!_[t][e])return"continue";d.draw(m+t*u,b+e*u,u,(function(r,n){var o;return!!(null===(o=_[t+r])||void 0===o?void 0:o[e+n])})),d._element&&C._dotsClipPath&&C._dotsClipPath.appendChild(d._element)},r=0;r<y;r++)e(r)},C=this;for(p=0;p<y;p++)M(p)}},t.prototype.drawCorners=function(){var t=this;if(!this._qr)throw"QR code is not defined";var e=this._element,r=this._options;if(!e)throw"Element code is not defined";var n=this._qr.getModuleCount(),o=Math.min(r.width,r.height)-2*r.margin,i=r.shape===v?o/Math.sqrt(2):o,a=Math.floor(i/n),s=7*a,u=3*a,h=Math.floor((r.width-n*a)/2),c=Math.floor((r.height-n*a)/2);[[0,0,0],[1,0,Math.PI/2],[0,1,-Math.PI/2]].forEach((function(e){var o,i,d,g,v,w,y,_,x,S,M,C,A=e[0],k=e[1],O=e[2],D=h+A*a*(n-7),P=c+k*a*(n-7),z=t._dotsClipPath,B=t._dotsClipPath;if(((null===(o=r.cornersSquareOptions)||void 0===o?void 0:o.gradient)||(null===(i=r.cornersSquareOptions)||void 0===i?void 0:i.color))&&((z=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-square-color-"+A+"-"+k),t._defs.appendChild(z),t._cornersSquareClipPath=t._cornersDotClipPath=B=z,t._createColor({options:null===(d=r.cornersSquareOptions)||void 0===d?void 0:d.gradient,color:null===(g=r.cornersSquareOptions)||void 0===g?void 0:g.color,additionalRotation:O,x:D,y:P,height:s,width:s,name:"corners-square-color-"+A+"-"+k})),null===(v=r.cornersSquareOptions)||void 0===v?void 0:v.type){var q=new f({svg:t._element,type:r.cornersSquareOptions.type});q.draw(D,P,s,O),q._element&&z&&z.appendChild(q._element)}else for(var I=new l({svg:t._element,type:r.dotsOptions.type}),E=function(t){for(var e=function(e){if(!(null===(w=m[t])||void 0===w?void 0:w[e]))return"continue";I.draw(D+t*a,P+e*a,a,(function(r,n){var o;return!!(null===(o=m[t+r])||void 0===o?void 0:o[e+n])})),I._element&&z&&z.appendChild(I._element)},r=0;r<m[t].length;r++)e(r)},L=0;L<m.length;L++)E(L);if(((null===(y=r.cornersDotOptions)||void 0===y?void 0:y.gradient)||(null===(_=r.cornersDotOptions)||void 0===_?void 0:_.color))&&((B=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","clip-path-corners-dot-color-"+A+"-"+k),t._defs.appendChild(B),t._cornersDotClipPath=B,t._createColor({options:null===(x=r.cornersDotOptions)||void 0===x?void 0:x.gradient,color:null===(S=r.cornersDotOptions)||void 0===S?void 0:S.color,additionalRotation:O,x:D+2*a,y:P+2*a,height:u,width:u,name:"corners-dot-color-"+A+"-"+k})),null===(M=r.cornersDotOptions)||void 0===M?void 0:M.type){var R=new p({svg:t._element,type:r.cornersDotOptions.type});R.draw(D+2*a,P+2*a,u,O),R._element&&B&&B.appendChild(R._element)}else{I=new l({svg:t._element,type:r.dotsOptions.type});var N=function(t){for(var e=function(e){if(!(null===(C=b[t])||void 0===C?void 0:C[e]))return"continue";I.draw(D+t*a,P+e*a,a,(function(r,n){var o;return!!(null===(o=b[t+r])||void 0===o?void 0:o[e+n])})),I._element&&B&&B.appendChild(I._element)},r=0;r<b[t].length;r++)e(r)};for(L=0;L<b.length;L++)N(L)}}))},t.prototype.loadImage=function(){var t=this;return new Promise((function(e,r){var n=t._options,o=new Image;if(!n.image)return r("Image is not defined");"string"==typeof n.imageOptions.crossOrigin&&(o.crossOrigin=n.imageOptions.crossOrigin),t._image=o,o.onload=function(){e()},o.src=n.image}))},t.prototype.drawImage=function(t){var e=t.width,r=t.height,n=t.count,o=t.dotSize;return w(this,void 0,void 0,(function(){var t,i,a,s,h,c,l,d,f;return y(this,(function(g){switch(g.label){case 0:return t=this._options,i=Math.floor((t.width-n*o)/2),a=Math.floor((t.height-n*o)/2),s=i+t.imageOptions.margin+(n*o-e)/2,h=a+t.imageOptions.margin+(n*o-r)/2,c=e-2*t.imageOptions.margin,l=r-2*t.imageOptions.margin,(d=document.createElementNS("http://www.w3.org/2000/svg","image")).setAttribute("x",String(s)),d.setAttribute("y",String(h)),d.setAttribute("width",c+"px"),d.setAttribute("height",l+"px"),[4,u(t.image||"")];case 1:return f=g.sent(),d.setAttribute("href",f||""),this._element.appendChild(d),[2]}}))}))},t.prototype._createColor=function(t){var e=t.options,r=t.color,n=t.additionalRotation,o=t.x,i=t.y,a=t.height,s=t.width,u=t.name,h=s>a?s:a,c=document.createElementNS("http://www.w3.org/2000/svg","rect");if(c.setAttribute("x",String(o)),c.setAttribute("y",String(i)),c.setAttribute("height",String(a)),c.setAttribute("width",String(s)),c.setAttribute("clip-path","url('#clip-path-"+u+"')"),e){var l;if("radial"===e.type)(l=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")).setAttribute("id",u),l.setAttribute("gradientUnits","userSpaceOnUse"),l.setAttribute("fx",String(o+s/2)),l.setAttribute("fy",String(i+a/2)),l.setAttribute("cx",String(o+s/2)),l.setAttribute("cy",String(i+a/2)),l.setAttribute("r",String(h/2));else{var d=((e.rotation||0)+n)%(2*Math.PI),f=(d+2*Math.PI)%(2*Math.PI),g=o+s/2,p=i+a/2,v=o+s/2,w=i+a/2;f>=0&&f<=.25*Math.PI||f>1.75*Math.PI&&f<=2*Math.PI?(g-=s/2,p-=a/2*Math.tan(d),v+=s/2,w+=a/2*Math.tan(d)):f>.25*Math.PI&&f<=.75*Math.PI?(p-=a/2,g-=s/2/Math.tan(d),w+=a/2,v+=s/2/Math.tan(d)):f>.75*Math.PI&&f<=1.25*Math.PI?(g+=s/2,p+=a/2*Math.tan(d),v-=s/2,w-=a/2*Math.tan(d)):f>1.25*Math.PI&&f<=1.75*Math.PI&&(p+=a/2,g+=s/2/Math.tan(d),w-=a/2,v-=s/2/Math.tan(d)),(l=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")).setAttribute("id",u),l.setAttribute("gradientUnits","userSpaceOnUse"),l.setAttribute("x1",String(Math.round(g))),l.setAttribute("y1",String(Math.round(p))),l.setAttribute("x2",String(Math.round(v))),l.setAttribute("y2",String(Math.round(w)))}e.colorStops.forEach((function(t){var e=t.offset,r=t.color,n=document.createElementNS("http://www.w3.org/2000/svg","stop");n.setAttribute("offset",100*e+"%"),n.setAttribute("stop-color",r),l.appendChild(n)})),c.setAttribute("fill","url('#"+u+"')"),this._defs.appendChild(l)}else r&&c.setAttribute("fill",r);this._element.appendChild(c)},t}(),x="canvas";for(var S={},M=0;M<=40;M++)S[M]=M;const C={type:x,shape:"square",width:300,height:300,data:"",margin:0,qrOptions:{typeNumber:S[0],mode:void 0,errorCorrectionLevel:"Q"},imageOptions:{hideBackgroundDots:!0,imageSize:.4,crossOrigin:void 0,margin:0},dotsOptions:{type:"square",color:"#000"},backgroundOptions:{round:0,color:"#fff"}};var A=function(){return(A=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function k(t){var e=A({},t);if(!e.colorStops||!e.colorStops.length)throw"Field 'colorStops' is required in gradient";return e.rotation?e.rotation=Number(e.rotation):e.rotation=0,e.colorStops=e.colorStops.map((function(t){return A(A({},t),{offset:Number(t.offset)})})),e}function O(t){var e=A({},t);return e.width=Number(e.width),e.height=Number(e.height),e.margin=Number(e.margin),e.imageOptions=A(A({},e.imageOptions),{hideBackgroundDots:Boolean(e.imageOptions.hideBackgroundDots),imageSize:Number(e.imageOptions.imageSize),margin:Number(e.imageOptions.margin)}),e.margin>Math.min(e.width,e.height)&&(e.margin=Math.min(e.width,e.height)),e.dotsOptions=A({},e.dotsOptions),e.dotsOptions.gradient&&(e.dotsOptions.gradient=k(e.dotsOptions.gradient)),e.cornersSquareOptions&&(e.cornersSquareOptions=A({},e.cornersSquareOptions),e.cornersSquareOptions.gradient&&(e.cornersSquareOptions.gradient=k(e.cornersSquareOptions.gradient))),e.cornersDotOptions&&(e.cornersDotOptions=A({},e.cornersDotOptions),e.cornersDotOptions.gradient&&(e.cornersDotOptions.gradient=k(e.cornersDotOptions.gradient))),e.backgroundOptions&&(e.backgroundOptions=A({},e.backgroundOptions),e.backgroundOptions.gradient&&(e.backgroundOptions.gradient=k(e.backgroundOptions.gradient))),e}var D=r(192),P=r.n(D),z=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},B=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const q=function(){function t(t){this._options=t?O(a(C,t)):C,this.update()}return t._clearContainer=function(t){t&&(t.innerHTML="")},t.prototype._setupSvg=function(){var t=this;if(this._qr){var e=new _(this._options);this._svg=e.getElement(),this._svgDrawingPromise=e.drawQR(this._qr).then((function(){var r;t._svg&&(null===(r=t._extension)||void 0===r||r.call(t,e.getElement(),t._options))}))}},t.prototype._setupCanvas=function(){var t,e=this;this._qr&&(this._canvas=document.createElement("canvas"),this._canvas.width=this._options.width,this._canvas.height=this._options.height,this._setupSvg(),this._canvasDrawingPromise=null===(t=this._svgDrawingPromise)||void 0===t?void 0:t.then((function(){if(e._svg){var t=e._svg,r=(new XMLSerializer).serializeToString(t),n="data:image/svg+xml;base64,"+btoa(r),o=new Image;return new Promise((function(t){o.onload=function(){var r,n;null===(n=null===(r=e._canvas)||void 0===r?void 0:r.getContext("2d"))||void 0===n||n.drawImage(o,0,0),t()},o.src=n}))}})))},t.prototype._getElement=function(t){return void 0===t&&(t="png"),z(this,void 0,void 0,(function(){return B(this,(function(e){switch(e.label){case 0:if(!this._qr)throw"QR code is empty";return"svg"!==t.toLowerCase()?[3,2]:(this._svg&&this._svgDrawingPromise||this._setupSvg(),[4,this._svgDrawingPromise]);case 1:return e.sent(),[2,this._svg];case 2:return this._canvas&&this._canvasDrawingPromise||this._setupCanvas(),[4,this._canvasDrawingPromise];case 3:return e.sent(),[2,this._canvas]}}))}))},t.prototype.update=function(e){t._clearContainer(this._container),this._options=e?O(a(this._options,e)):this._options,this._options.data&&(this._qr=P()(this._options.qrOptions.typeNumber,this._options.qrOptions.errorCorrectionLevel),this._qr.addData(this._options.data,this._options.qrOptions.mode||function(t){switch(!0){case/^[0-9]*$/.test(t):return"Numeric";case/^[0-9A-Z $%*+\-./:]*$/.test(t):return"Alphanumeric";default:return"Byte"}}(this._options.data)),this._qr.make(),this._options.type===x?this._setupCanvas():this._setupSvg(),this.append(this._container))},t.prototype.append=function(t){if(t){if("function"!=typeof t.appendChild)throw"Container should be a single DOM node";this._options.type===x?this._canvas&&t.appendChild(this._canvas):this._svg&&t.appendChild(this._svg),this._container=t}},t.prototype.applyExtension=function(t){if(!t)throw"Extension function should be defined.";this._extension=t,this.update()},t.prototype.deleteExtension=function(){this._extension=void 0,this.update()},t.prototype.getRawData=function(t){return void 0===t&&(t="png"),z(this,void 0,void 0,(function(){var e,r,n;return B(this,(function(o){switch(o.label){case 0:if(!this._qr)throw"QR code is empty";return[4,this._getElement(t)];case 1:return(e=o.sent())?"svg"===t.toLowerCase()?(r=new XMLSerializer,n=r.serializeToString(e),[2,new Blob(['<?xml version="1.0" standalone="no"?>\r\n'+n],{type:"image/svg+xml"})]):[2,new Promise((function(r){return e.toBlob(r,"image/"+t,1)}))]:[2,null]}}))}))},t.prototype.download=function(t){return z(this,void 0,void 0,(function(){var e,r,n,o,i;return B(this,(function(a){switch(a.label){case 0:if(!this._qr)throw"QR code is empty";return e="png",r="qr","string"==typeof t?(e=t,console.warn("Extension is deprecated as argument for 'download' method, please pass object { name: '...', extension: '...' } as argument")):"object"==typeof t&&null!==t&&(t.name&&(r=t.name),t.extension&&(e=t.extension)),[4,this._getElement(e)];case 1:return(n=a.sent())?("svg"===e.toLowerCase()?(o=new XMLSerializer,i='<?xml version="1.0" standalone="no"?>\r\n'+(i=o.serializeToString(n)),s("data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i),r+".svg")):s(n.toDataURL("image/"+e),r+"."+e),[2]):[2]}}))}))},t}()}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(676)})().default}));
//# sourceMappingURL=qr-code-styling.js.map
    // ============================================================================
    // END BUNDLED qr-code-styling
    // ============================================================================


    /**
     * Widget configuration - must be set before use
     */
    const CONFIG = {
        recipientName: '',  // Set via configure()
        iban: '',           // Set via configure()
        taxId: '',          // Set via configure()
        purposePrefix: 'За інтернет замовлення',
        // DOM selectors for e-commerce page
        orderIdSelector: '.h2',
        amountSelector: '.order-summary-b',
        // UI configuration
        containerSelector: '#sonyasha-payment-widget',
        logoUrl: '',  // URL or base64 data URL for header
        showPayButton: true,
        showBankSelection: false,  // Phase 2 feature
        // QR configuration
        qrLibraryUrl: '',  // Custom URL for qr-code-styling library (uses CDN if empty)
        qrLogoUrl: ''  // Logo for QR code center (uses default if empty)
    };

    /**
     * NBU Format constants
     */
    const NBU_DEEPLINK_PREFIX = 'https://bank.gov.ua/qr/';
    const NBU_FORMAT_VERSION = '002';
    const ENCODING_UTF8 = '1';
    const TRANSFER_TYPE = 'UCT';

    /**
     * Default Sonyasha logo as Base64 (sonyasha-toys-logo-mob.png)
     * Used for QR code center image
     */
    const DEFAULT_LOGO_BASE64 = 'data:image/png;base64,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';

    /**
     * QR code styling configuration matching CRM payment page
     */
    const QR_CONFIG = {
        width: 280,
        height: 280,
        type: 'svg',
        dotsOptions: {
            color: '#333333',
            type: 'rounded'
        },
        cornersSquareOptions: {
            color: '#6AA570',
            type: 'extra-rounded'
        },
        cornersDotOptions: {
            color: '#BF9773',
            type: 'dot'
        },
        backgroundOptions: {
            color: '#ffffff'
        },
        imageOptions: {
            crossOrigin: 'anonymous',
            margin: 8,
            imageSize: 0.35
        },
        qrOptions: {
            errorCorrectionLevel: 'H'
        }
    };

    // =========================================================================
    // Bank Configurations (Task 2.2)
    // =========================================================================

    /**
     * Bank configurations with package names and icons
     * Icons loaded from jsDelivr CDN for better quality
     */
    const BANKS = {
        // Main banks (shown by default)
        mono: {
            name: 'Mono',
            android: 'com.ftband.mono',
            ios: 'mono',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/mono.png'
        },
        privat24: {
            name: 'Приват24',
            android: 'ua.privatbank.ap24',
            ios: 'privat24',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/privat24.png'
        },
        abank: {
            name: 'А-Банк',
            android: 'ua.com.abank',
            ios: 'abank24',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/abank.png'
        },
        pumb: {
            name: 'ПУМБ',
            android: 'com.fuib.android.spot.online',
            ios: 'pumb',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/pumb.png'
        },
        sense: {
            name: 'Sense',
            android: 'ua.alfabank.mobile.android',
            ios: 'alfabank',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/sense.png'
        },
        ukrgasbank: {
            name: 'Укргазбанк',
            android: 'com.ugb.app',
            ios: 'ugb',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/ukrgasbank.png'
        },

        // Extra banks (shown after "Show more")
        creditagricole: {
            name: 'Креді Агріколь',
            android: 'ua.creditagricole.mobile.app',
            ios: 'creditagricole',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/creditagricole.png'
        },
        otp: {
            name: 'ОТП Банк',
            android: 'ua.otpbank.android',
            ios: 'otpbank',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/otp.png'
        },
        izibank: {
            name: 'izibank',
            android: 'ua.izibank.app',
            ios: 'izibank',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/izibank.png'
        },
        globus: {
            name: 'Глобус',
            android: 'com.t18.bone.personal.globus',
            ios: 'globus',
            icon: 'https://cdn.jsdelivr.net/gh/alya1992/sonyasha-payment-widget@main/icons/globus.png'
        }
    };

    /**
     * Bank groupings for UI display
     */
    const MAIN_BANKS = ['mono', 'privat24', 'abank', 'pumb', 'sense', 'ukrgasbank'];
    const EXTRA_BANKS = ['creditagricole', 'otp', 'izibank', 'globus'];

    /**
     * CDN URL for qr-code-styling library (fallback if not bundled)
     */
    const QR_CODE_STYLING_CDN = 'https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js';

    /**
     * Track if QR library is loaded
     */
    let qrLibraryLoaded = false;
    let qrLibraryLoading = false;
    let qrLibraryCallbacks = [];

    /**
     * Load qr-code-styling library dynamically
     * @param {Function} callback - Called when library is loaded
     *
     * NOTE: qr-code-styling is now BUNDLED into this widget.
     * This function is kept for backwards compatibility but no longer loads from CDN.
     * It immediately calls the callback since the library is already available.
     */
    function loadQrLibrary(callback) {
        // Library is bundled - always available immediately
        qrLibraryLoaded = true;
        if (callback) callback();
    }

    /**
     * Render QR code into container
     * @param {string|HTMLElement} container - Container element or selector
     * @param {string} deeplinkUrl - Payment deeplink URL
     * @param {Function} [callback] - Called when QR is rendered
     */
    function renderQr(container, deeplinkUrl, callback) {
        var containerEl = typeof container === 'string'
            ? document.querySelector(container)
            : container;

        if (!containerEl) {
            console.error('SonyashaPaymentQR: QR container not found');
            if (callback) callback(new Error('Container not found'));
            return;
        }

        // Show loading state
        containerEl.innerHTML = '<div class="sonyasha-qr-loading"><div class="sonyasha-spinner"></div></div>';

        // Load library and render
        loadQrLibrary(function() {
            // Clear loading state
            containerEl.innerHTML = '';

            // Create QR code
            var qrConfig = Object.assign({}, QR_CONFIG, {
                data: deeplinkUrl,
                image: CONFIG.qrLogoUrl || DEFAULT_LOGO_BASE64
            });

            var qrCode = new QRCodeStyling(qrConfig);
            qrCode.append(containerEl);

            if (callback) callback(null, qrCode);
        });
    }

    /**
     * Check if QR library is available
     * @returns {boolean}
     */
    function isQrLibraryLoaded() {
        return typeof QRCodeStyling !== 'undefined';
    }

    /**
     * Sanitize configurable fields by removing newlines
     * @param {string} str - Input string
     * @returns {string} - Sanitized string
     */
    function sanitizeField(str) {
        if (typeof str !== 'string') return '';
        return str.replace(/[\n\r]/g, ' ').trim();
    }

    /**
     * Format amount with 2 decimal places using dot separator
     * Must match PHP's number_format($amount, 2, '.', '')
     * @param {number} amount - Payment amount
     * @returns {string} - Formatted amount (e.g., "590.00")
     */
    function formatAmount(amount) {
        const num = parseFloat(amount);
        if (isNaN(num)) return '0.00';
        return num.toFixed(2);
    }

    /**
     * Build payment purpose string with order reference
     * Format: "{prefix} {id}" matching PHP implementation
     * @param {number|string} orderId - Order ID
     * @returns {string} - Purpose string
     */
    function buildPurpose(orderId) {
        return CONFIG.purposePrefix + ' ' + orderId;
    }

    /**
     * Build NBU format 002 data string
     *
     * Format structure (14 fields separated by newlines):
     * 1.  BCD (service tag)
     * 2.  002 (format version)
     * 3.  1 (encoding: UTF-8)
     * 4.  UCT (transfer type: Ukrainian Credit Transfer)
     * 5.  (empty - BIC field, not used for domestic transfers)
     * 6.  Recipient name
     * 7.  IBAN
     * 8.  Amount with currency (e.g., "UAH1250.00")
     * 9.  Tax ID (IPN/EDRPOU) - recipient code
     * 10. (empty)
     * 11. (empty)
     * 12. Payment purpose/description
     * 13. (empty)
     * 14. (empty)
     *
     * @param {number|string} orderId - Order ID
     * @param {number} amount - Payment amount
     * @returns {string} - 14-line NBU format data string
     */
    function buildDataString(orderId, amount) {
        const purpose = buildPurpose(orderId);
        const formattedAmount = formatAmount(amount);

        const lines = [
            'BCD',                              // 1. Service tag
            NBU_FORMAT_VERSION,                 // 2. Version (002)
            ENCODING_UTF8,                      // 3. Encoding (UTF-8)
            TRANSFER_TYPE,                      // 4. Transfer type (UCT)
            '',                                 // 5. BIC (empty)
            sanitizeField(CONFIG.recipientName),// 6. Recipient name
            sanitizeField(CONFIG.iban),         // 7. IBAN
            'UAH' + formattedAmount,            // 8. Amount with currency
            sanitizeField(CONFIG.taxId),        // 9. Tax ID (IPN/EDRPOU)
            '',                                 // 10. (empty)
            '',                                 // 11. (empty)
            purpose,                            // 12. Payment purpose
            '',                                 // 13. (empty)
            ''                                  // 14. (empty)
        ];

        return lines.join('\n');
    }

    /**
     * Encode string using Base64URL (RFC 4648)
     * Uses TextEncoder for proper UTF-8 encoding of Cyrillic characters
     *
     * Must match PHP's base64_encode() with URL-safe character replacement:
     * - Replace + with -
     * - Replace / with _
     * - Remove trailing = padding
     *
     * @param {string} str - String to encode
     * @returns {string} - Base64URL encoded string
     */
    function encodeBase64Url(str) {
        // Use TextEncoder for proper UTF-8 encoding
        const utf8Bytes = new TextEncoder().encode(str);

        // Convert bytes to binary string
        let binary = '';
        utf8Bytes.forEach(function(byte) {
            binary += String.fromCharCode(byte);
        });

        // Encode to base64
        const base64 = btoa(binary);

        // Convert to URL-safe format: + -> -, / -> _, remove padding
        return base64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    /**
     * Build complete NBU payment deeplink URL
     * @param {number|string} orderId - Order ID
     * @param {number} amount - Payment amount
     * @returns {string} - Complete bank.gov.ua deeplink URL
     */
    function buildDeeplinkUrl(orderId, amount) {
        const dataString = buildDataString(orderId, amount);
        const encoded = encodeBase64Url(dataString);
        return NBU_DEEPLINK_PREFIX + encoded;
    }

    // =========================================================================
    // DOM Parser Functions (for e-commerce page integration)
    // =========================================================================

    /**
     * Parse order ID from DOM element
     * Extracts numeric ID from text like "Замовлення №36" or "Order #36"
     *
     * @param {string} [selector] - CSS selector for element containing order ID
     * @returns {string|null} - Order ID string or null if not found
     */
    function parseOrderId(selector) {
        const sel = selector || CONFIG.orderIdSelector;

        // Return null if not in browser environment
        if (typeof document === 'undefined') return null;

        const el = document.querySelector(sel);
        if (!el) return null;

        const text = el.textContent || '';

        // Match "№36", "#36", "No.36", "No 36" patterns
        const match = text.match(/(?:№|#|No\.?\s*)\s*(\d+)/i);
        return match ? match[1] : null;
    }

    /**
     * Parse amount from DOM element
     * Handles multiple formats:
     * - "590 грн" → 590
     * - "590,00 грн" → 590.00
     * - "1 250,00 грн" → 1250.00 (thousands with space)
     * - "1250.00" → 1250.00
     * - "590" → 590
     * - Handles NBSP (\u00A0) character
     *
     * @param {string} [selector] - CSS selector for element containing amount
     * @returns {number|null} - Amount as number or null if not found/invalid
     */
    function parseAmount(selector) {
        const sel = selector || CONFIG.amountSelector;

        // Return null if not in browser environment
        if (typeof document === 'undefined') return null;

        const el = document.querySelector(sel);
        if (!el) return null;

        let text = el.textContent || '';

        // Remove currency symbols and text
        text = text.replace(/грн|₴|UAH|грн\.|гривень|гривня/gi, '');

        // Remove NBSP (non-breaking space) - \u00A0
        text = text.replace(/\u00A0/g, '');

        // Remove regular spaces (used as thousands separator)
        text = text.replace(/\s/g, '');

        // Replace comma with dot (Ukrainian decimal separator)
        text = text.replace(',', '.');

        // Trim any remaining whitespace
        text = text.trim();

        const amount = parseFloat(text);
        return isNaN(amount) ? null : amount;
    }

    /**
     * Parse amount from raw text string (for testing without DOM)
     * Same logic as parseAmount but works with string input
     *
     * @param {string} text - Text containing amount
     * @returns {number|null} - Amount as number or null if invalid
     */
    function parseAmountFromText(text) {
        if (typeof text !== 'string') return null;

        // Remove currency symbols and text
        text = text.replace(/грн|₴|UAH|грн\.|гривень|гривня/gi, '');

        // Remove NBSP (non-breaking space) - \u00A0
        text = text.replace(/\u00A0/g, '');

        // Remove regular spaces (used as thousands separator)
        text = text.replace(/\s/g, '');

        // Replace comma with dot (Ukrainian decimal separator)
        text = text.replace(',', '.');

        // Trim any remaining whitespace
        text = text.trim();

        const amount = parseFloat(text);
        return isNaN(amount) ? null : amount;
    }

    /**
     * Parse order ID from raw text string (for testing without DOM)
     *
     * @param {string} text - Text containing order ID
     * @returns {string|null} - Order ID string or null if not found
     */
    function parseOrderIdFromText(text) {
        if (typeof text !== 'string') return null;

        // Match "№36", "#36", "No.36", "No 36" patterns
        const match = text.match(/(?:№|#|No\.?\s*)\s*(\d+)/i);
        return match ? match[1] : null;
    }

    // =========================================================================
    // UI Template (Task 1.3)
    // =========================================================================

    /**
     * CSS styles matching CRM payment page (/pay/{token})
     * All classes prefixed with 'sonyasha-' to avoid conflicts
     * Colors: #6AA570 (green), #BF9773 (brown), #F1E38B (yellow)
     */
    const WIDGET_STYLES = `
        .sonyasha-payment-card {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: white;
            border-radius: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            max-width: 420px;
            width: 100%;
            overflow: hidden;
            margin: 0 auto;
            box-sizing: border-box;
        }
        .sonyasha-payment-card * {
            box-sizing: border-box;
        }
        .sonyasha-payment-header {
            background: #6AA570;
            padding: 20px 24px;
            text-align: center;
        }
        .sonyasha-logo {
            max-width: 200px;
            width: 100%;
            height: auto;
        }
        .sonyasha-payment-body {
            padding: 32px 24px;
            text-align: center;
        }
        .sonyasha-amount-section {
            margin-bottom: 28px;
        }
        .sonyasha-amount-label {
            color: #666;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .sonyasha-amount {
            font-size: 42px;
            font-weight: 700;
            color: #6AA570;
            display: inline;
        }
        .sonyasha-currency {
            font-size: 24px;
            color: #666;
            margin-left: 4px;
        }
        .sonyasha-qr-container {
            margin: 0 auto 28px;
            display: flex;
            justify-content: center;
            min-height: 280px;
        }
        .sonyasha-qr-loading {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 280px;
            height: 280px;
        }
        .sonyasha-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #e5e7eb;
            border-top-color: #6AA570;
            border-radius: 50%;
            animation: sonyasha-spin 1s linear infinite;
        }
        @keyframes sonyasha-spin {
            to { transform: rotate(360deg); }
        }
        .sonyasha-pay-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            padding: 16px 32px;
            background: #6AA570;
            color: white;
            font-size: 18px;
            font-weight: 600;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sonyasha-pay-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(106, 165, 112, 0.4);
        }
        .sonyasha-pay-button:active {
            transform: translateY(0);
        }
        .sonyasha-pay-button svg {
            width: 22px;
            height: 22px;
        }
        .sonyasha-payment-footer {
            padding: 20px 24px 28px;
            background: #fafafa;
            border-top: 1px solid #eee;
        }
        .sonyasha-details-title {
            color: #BF9773;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 16px;
        }
        .sonyasha-detail-item {
            margin-bottom: 14px;
            text-align: left;
        }
        .sonyasha-detail-item:last-child {
            margin-bottom: 0;
        }
        .sonyasha-detail-label {
            color: #999;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .sonyasha-detail-value {
            color: #333;
            font-size: 14px;
            font-weight: 500;
            word-break: break-all;
            line-height: 1.4;
        }
        .sonyasha-iban {
            font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
            font-size: 13px;
            letter-spacing: 0.5px;
        }
        .sonyasha-instruction {
            margin-top: 20px;
            padding: 14px;
            background: rgba(106, 165, 112, 0.08);
            border-radius: 10px;
            font-size: 13px;
            color: #666;
            text-align: center;
            border: 1px solid rgba(106, 165, 112, 0.2);
        }
        .sonyasha-error {
            padding: 20px;
            text-align: center;
            color: #dc3545;
            background: #fff5f5;
            border: 1px solid #f5c6cb;
            border-radius: 10px;
            margin-bottom: 20px;
        }
        .sonyasha-error-icon {
            font-size: 48px;
            margin-bottom: 12px;
        }
        .sonyasha-error-message {
            font-size: 14px;
            font-weight: 500;
        }
        /* Mobile responsive styles */
        @media (max-width: 480px) {
            .sonyasha-payment-card {
                border-radius: 16px;
            }
            .sonyasha-payment-header {
                padding: 20px;
            }
            .sonyasha-amount {
                font-size: 36px;
            }
            .sonyasha-payment-body {
                padding: 24px 16px;
            }
            .sonyasha-payment-footer {
                padding: 16px;
            }
            .sonyasha-detail-value {
                font-size: 13px;
            }
            .sonyasha-iban {
                font-size: 12px;
            }
        }
        /* Platform-specific visibility (Task 2.1) */
        /* Hide bank selection on desktop - only show QR for scanning */
        .sonyasha-platform-desktop .sonyasha-bank-selection {
            display: none !important;
        }
        /* Hide pay button on desktop - deeplinks don't work */
        .sonyasha-platform-desktop .sonyasha-pay-button {
            display: none !important;
        }
        /* Show bank selection on mobile */
        .sonyasha-platform-ios .sonyasha-bank-selection,
        .sonyasha-platform-android .sonyasha-bank-selection {
            display: block;
        }
        /* Bank Selection UI (Task 2.4) */
        .sonyasha-bank-selection {
            margin-top: 24px;
            text-align: center;
        }
        .sonyasha-bank-title {
            color: #666;
            font-size: 13px;
            margin-bottom: 16px;
        }
        .sonyasha-banks-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 16px;
        }
        .sonyasha-bank-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            padding: 12px 8px;
            border-radius: 12px;
            transition: all 0.2s ease;
            background: #f9f9f9;
            cursor: pointer;
            border: none;
            font-family: inherit;
        }
        .sonyasha-bank-item:hover {
            background: #f0f0f0;
            transform: translateY(-2px);
        }
        .sonyasha-bank-item:active {
            transform: translateY(0);
            background: #e8e8e8;
        }
        .sonyasha-bank-icon {
            width: 48px;
            height: 48px;
            object-fit: contain;
            margin-bottom: 8px;
            border-radius: 8px;
        }
        .sonyasha-bank-name {
            font-size: 11px;
            color: #555;
            text-align: center;
            line-height: 1.3;
            font-weight: 500;
        }
        .sonyasha-extra-banks {
            display: none;
        }
        .sonyasha-extra-banks.sonyasha-show {
            display: grid;
        }
        .sonyasha-show-more {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: none;
            border: 1px solid #ddd;
            padding: 10px 20px;
            border-radius: 8px;
            color: #666;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s ease;
            font-family: inherit;
        }
        .sonyasha-show-more:hover {
            background: #f5f5f5;
            border-color: #ccc;
        }
        .sonyasha-show-more svg {
            width: 16px;
            height: 16px;
            transition: transform 0.2s ease;
        }
        .sonyasha-show-more.sonyasha-expanded svg {
            transform: rotate(180deg);
        }
        /* Mobile responsive bank selection */
        @media (max-width: 480px) {
            .sonyasha-banks-grid {
                gap: 10px;
            }
            .sonyasha-bank-item {
                padding: 10px 6px;
            }
            .sonyasha-bank-icon {
                width: 40px;
                height: 40px;
            }
            .sonyasha-bank-name {
                font-size: 10px;
            }
        }
    `;

    /**
     * Credit card SVG icon for pay button
     */
    const PAY_BUTTON_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>';

    /**
     * Check if styles have been injected
     */
    let stylesInjected = false;

    /**
     * Inject widget styles into page head
     * Only injects once, even if called multiple times
     */
    function injectStyles() {
        if (stylesInjected) return;
        if (typeof document === 'undefined') return;

        const styleEl = document.createElement('style');
        styleEl.id = 'sonyasha-payment-widget-styles';
        styleEl.textContent = WIDGET_STYLES;
        document.head.appendChild(styleEl);
        stylesInjected = true;
    }

    /**
     * Format amount for display (with comma as decimal separator for Ukrainian locale)
     * @param {number} amount - Amount to format
     * @returns {string} - Formatted amount (e.g., "590,00")
     */
    function formatAmountDisplay(amount) {
        const num = parseFloat(amount);
        if (isNaN(num)) return '0,00';
        return num.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    /**
     * Build HTML template for the payment widget
     * @param {Object} data - Widget data
     * @param {string} data.orderId - Order ID
     * @param {number} data.amount - Payment amount
     * @param {string} data.deeplinkUrl - Payment deeplink URL
     * @returns {string} - HTML template string
     */
    function buildTemplate(data) {
        const amountDisplay = formatAmountDisplay(data.amount);
        const purpose = buildPurpose(data.orderId);
        const logoHtml = CONFIG.logoUrl
            ? '<img src="' + CONFIG.logoUrl + '" alt="Sonyasha Toys" class="sonyasha-logo">'
            : '';

        // Pay button only on mobile
        const payButtonHtml = (CONFIG.showPayButton && isMobile())
            ? '<a href="' + data.deeplinkUrl + '" class="sonyasha-pay-button">' +
              PAY_BUTTON_ICON + ' Сплатити</a>'
            : '';

        // Build bank selection HTML if enabled and on mobile
        const bankSelectionHtml = (CONFIG.showBankSelection && isMobile())
            ? buildBankSelectionHtml(data.deeplinkUrl)
            : '';

        return '<div class="sonyasha-payment-card">' +
            '<div class="sonyasha-payment-header">' + logoHtml + '</div>' +
            '<div class="sonyasha-payment-body">' +
                '<div class="sonyasha-amount-section">' +
                    '<div class="sonyasha-amount-label">До сплати</div>' +
                    '<div><span class="sonyasha-amount">' + amountDisplay + '</span>' +
                    '<span class="sonyasha-currency">₴</span></div>' +
                '</div>' +
                '<div class="sonyasha-qr-container" id="sonyasha-qr">' +
                    '<div class="sonyasha-qr-loading"><div class="sonyasha-spinner"></div></div>' +
                '</div>' +
                payButtonHtml +
                bankSelectionHtml +
            '</div>' +
            '<div class="sonyasha-payment-footer">' +
                '<div class="sonyasha-details-title">Реквізити</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">Отримувач</div>' +
                    '<div class="sonyasha-detail-value">' + CONFIG.recipientName + '</div>' +
                '</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">IBAN</div>' +
                    '<div class="sonyasha-detail-value sonyasha-iban">' + CONFIG.iban + '</div>' +
                '</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">Призначення</div>' +
                    '<div class="sonyasha-detail-value">' + purpose + '</div>' +
                '</div>' +
                '<div class="sonyasha-instruction">Скануйте QR-код камерою або оберіть банк</div>' +
            '</div>' +
        '</div>';
    }

    /**
     * Build error template when order data cannot be parsed
     * @param {string[]} errors - List of error messages
     * @returns {string} - HTML template string
     */
    function buildErrorTemplate(errors) {
        const errorList = errors.map(function(e) { return '<div>' + e + '</div>'; }).join('');
        return '<div class="sonyasha-payment-card">' +
            '<div class="sonyasha-payment-body">' +
                '<div class="sonyasha-error">' +
                    '<div class="sonyasha-error-icon">⚠️</div>' +
                    '<div class="sonyasha-error-message">' +
                        'Не вдалося завантажити дані для оплати' +
                    '</div>' +
                    '<div style="margin-top: 12px; font-size: 12px; color: #666;">' +
                        errorList +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    /**
     * Build fallback template with static payment details
     * Used when order data cannot be parsed - user can still pay manually
     * @param {string|null} orderId - Order ID if available, null otherwise
     * @returns {string} - HTML template string
     */
    function buildFallbackTemplate(orderId) {
        var purposeText = CONFIG.purposePrefix;
        if (orderId) {
            purposeText += ' ' + orderId;
        }

        return '<div class="sonyasha-payment-card sonyasha-fallback">' +
            '<div class="sonyasha-payment-footer" style="padding-top: 24px; border-top: none;">' +
                '<div class="sonyasha-details-title">Реквізити для оплати</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">Отримувач</div>' +
                    '<div class="sonyasha-detail-value">' + escapeHtml(CONFIG.recipientName) + '</div>' +
                '</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">IBAN</div>' +
                    '<div class="sonyasha-detail-value sonyasha-iban">' + escapeHtml(CONFIG.iban) + '</div>' +
                '</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">ІПН/ЄДРПОУ</div>' +
                    '<div class="sonyasha-detail-value">' + escapeHtml(CONFIG.taxId) + '</div>' +
                '</div>' +
                '<div class="sonyasha-detail-item">' +
                    '<div class="sonyasha-detail-label">Призначення</div>' +
                    '<div class="sonyasha-detail-value">' + escapeHtml(purposeText) + '</div>' +
                '</div>' +
                '<div class="sonyasha-instruction" style="margin-top: 16px;">' +
                    'Скопіюйте реквізити та здійсніть оплату через ваш банк' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    /**
     * Render fallback payment details when parsing fails
     * @param {string} containerSelector - CSS selector for container
     * @param {string|null} orderId - Order ID if available
     */
    function renderFallbackDetails(containerSelector, orderId) {
        if (typeof document === 'undefined') return;

        var container = document.querySelector(containerSelector);
        if (!container) {
            console.error('SonyashaPayment: Container not found: ' + containerSelector);
            return;
        }

        injectStyles();

        // Add platform class
        var platform = getPlatform();
        container.className = (container.className || '')
            .replace(/\bsonyasha-platform-\w+\b/g, '')
            .trim();
        container.className += ' sonyasha-platform-' + platform;

        container.innerHTML = buildFallbackTemplate(orderId);
    }

    /**
     * Get the QR container element ID
     * @returns {string} - Container element ID
     */
    function getQrContainerId() {
        return 'sonyasha-qr';
    }

    // =========================================================================
    // Widget Init and Error Handling (Task 1.5)
    // =========================================================================

    /**
     * Escape HTML special characters to prevent XSS attacks
     * Uses DOM-based escaping for maximum security
     * @param {string} str - String to escape
     * @returns {string} - HTML-escaped string
     */
    function escapeHtml(str) {
        if (typeof str !== 'string') return '';
        if (typeof document === 'undefined') {
            // Fallback for Node.js environment
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    /**
     * Detect platform based on user agent
     * @returns {string} - 'ios', 'android', or 'desktop'
     */
    function getPlatform() {
        if (typeof navigator === 'undefined') return 'desktop';
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) return 'ios';
        if (/android/.test(ua)) return 'android';
        return 'desktop';
    }

    /**
     * Check if current platform is mobile (iOS or Android)
     * @returns {boolean} - true if mobile platform
     */
    function isMobile() {
        var platform = getPlatform();
        return platform === 'ios' || platform === 'android';
    }

    /**
     * Show error message in container (XSS-safe)
     * @param {string} containerSelector - CSS selector for container
     * @param {string} message - Error message to display
     */
    function showError(containerSelector, message) {
        if (typeof document === 'undefined') return;

        var container = document.querySelector(containerSelector);
        if (!container) {
            console.error('SonyashaPayment: Container not found: ' + containerSelector);
            return;
        }

        injectStyles();

        container.innerHTML = '<div class="sonyasha-payment-card">' +
            '<div class="sonyasha-payment-body">' +
                '<div class="sonyasha-error">' +
                    '<div class="sonyasha-error-icon">⚠️</div>' +
                    '<p class="sonyasha-error-message">' + escapeHtml(message) + '</p>' +
                    '<p class="sonyasha-error-help" style="margin-top: 12px; font-size: 13px; color: #666;">' +
                        'Зверніться до продавця для отримання реквізитів оплати.' +
                    '</p>' +
                '</div>' +
            '</div>' +
        '</div>';
    }

    /**
     * Render the complete payment widget
     * @param {string} containerSelector - CSS selector for container
     * @param {string} orderId - Order ID
     * @param {number} amount - Payment amount
     * @param {string} deeplinkUrl - Payment deeplink URL
     */
    function renderWidget(containerSelector, orderId, amount, deeplinkUrl) {
        if (typeof document === 'undefined') return;

        var container = document.querySelector(containerSelector);
        if (!container) {
            console.error('SonyashaPayment: Container not found: ' + containerSelector);
            return;
        }

        injectStyles();

        // Add platform class to container for CSS-based visibility control
        var platform = getPlatform();
        container.className = (container.className || '')
            .replace(/\bsonyasha-platform-\w+\b/g, '')
            .trim();
        container.className += ' sonyasha-platform-' + platform;

        // Build and insert template
        var html = buildTemplate({
            orderId: orderId,
            amount: amount,
            deeplinkUrl: deeplinkUrl
        });
        container.innerHTML = html;

        // Render QR code
        renderQr('#' + getQrContainerId(), deeplinkUrl);

        // Initialize bank selection event listeners if enabled
        if (CONFIG.showBankSelection && isMobile()) {
            initBankSelection(container);
        }
    }

    /**
     * Initialize the payment widget
     * Main entry point for the widget
     *
     * @param {Object} [options] - Configuration options
     * @param {string} [options.container] - CSS selector for widget container (default: '#sonyasha-payment')
     * @param {string} [options.orderIdSelector] - CSS selector for order ID element
     * @param {string} [options.amountSelector] - CSS selector for amount element
     */
    function init(options) {
        options = options || {};

        var containerSelector = options.container || '#sonyasha-payment';
        var orderIdSelector = options.orderIdSelector || CONFIG.orderIdSelector;
        var amountSelector = options.amountSelector || CONFIG.amountSelector;

        // Update CONFIG with provided selectors
        if (options.orderIdSelector) CONFIG.orderIdSelector = options.orderIdSelector;
        if (options.amountSelector) CONFIG.amountSelector = options.amountSelector;

        // Parse order data from page
        var orderId = parseOrderId(orderIdSelector);
        var amount = parseAmount(amountSelector);

        // If parsing fails, show fallback with static payment details
        // User can still pay manually using displayed details
        if (!orderId || !amount || amount <= 0) {
            renderFallbackDetails(containerSelector, orderId);
            return;
        }

        // Generate deeplink URL
        var deeplinkUrl = buildDeeplinkUrl(orderId, amount);

        // Render widget
        renderWidget(containerSelector, orderId, amount, deeplinkUrl);
    }

    // =========================================================================
    // Configuration
    // =========================================================================

    /**
     * Configure the widget with recipient details, selectors, and UI options
     * @param {Object} options - Configuration options
     * @param {string} options.recipientName - Recipient name (FOP/company name)
     * @param {string} options.iban - Recipient IBAN
     * @param {string} options.taxId - Recipient tax ID (IPN/EDRPOU)
     * @param {string} [options.purposePrefix] - Payment purpose prefix (default: "За інтернет замовлення")
     * @param {string} [options.orderIdSelector] - CSS selector for order ID element (default: ".h2")
     * @param {string} [options.amountSelector] - CSS selector for amount element (default: ".order-summary-b")
     * @param {string} [options.containerSelector] - CSS selector for widget container (default: "#sonyasha-payment-widget")
     * @param {string} [options.logoUrl] - Logo URL or base64 data URL
     * @param {boolean} [options.showPayButton] - Show "Сплатити" button (default: true)
     * @param {boolean} [options.showBankSelection] - Show bank selection grid (default: false, Phase 2)
     */
    function configure(options) {
        if (options.recipientName) CONFIG.recipientName = options.recipientName;
        if (options.iban) CONFIG.iban = options.iban;
        if (options.taxId) CONFIG.taxId = options.taxId;
        if (options.purposePrefix) CONFIG.purposePrefix = options.purposePrefix;
        if (options.orderIdSelector) CONFIG.orderIdSelector = options.orderIdSelector;
        if (options.amountSelector) CONFIG.amountSelector = options.amountSelector;
        if (options.containerSelector) CONFIG.containerSelector = options.containerSelector;
        if (options.logoUrl !== undefined) CONFIG.logoUrl = options.logoUrl;
        if (options.showPayButton !== undefined) CONFIG.showPayButton = options.showPayButton;
        if (options.showBankSelection !== undefined) CONFIG.showBankSelection = options.showBankSelection;
        if (options.qrLibraryUrl !== undefined) CONFIG.qrLibraryUrl = options.qrLibraryUrl;
        if (options.qrLogoUrl !== undefined) CONFIG.qrLogoUrl = options.qrLogoUrl;
    }

    /**
     * Get current configuration (for debugging)
     * @returns {Object} - Current configuration
     */
    function getConfig() {
        return Object.assign({}, CONFIG);
    }

    /**
     * Validate configuration before generating QR
     * @returns {Object} - Validation result { valid: boolean, errors: string[] }
     */
    function validateConfig() {
        const errors = [];

        if (!CONFIG.recipientName) {
            errors.push('recipientName is required');
        }
        if (!CONFIG.iban) {
            errors.push('iban is required');
        }
        if (!CONFIG.taxId) {
            errors.push('taxId is required');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    // =========================================================================
    // Bank Deeplink Helpers (Task 2.2)
    // =========================================================================

    /**
     * Get bank configuration by code
     * @param {string} bankCode - Bank code (e.g., 'mono', 'privat24')
     * @returns {Object|null} - Bank configuration or null if not found
     */
    function getBank(bankCode) {
        return BANKS[bankCode] || null;
    }

    /**
     * Get all bank codes
     * @returns {string[]} - Array of bank codes
     */
    function getAllBankCodes() {
        return Object.keys(BANKS);
    }

    /**
     * Generate bank-specific deeplink URL
     * Replaces the NBU universal link with bank-specific scheme
     *
     * @param {string} bankCode - Bank code (e.g., 'mono', 'privat24')
     * @param {string} paymentUrl - NBU payment URL (https://bank.gov.ua/qr/...)
     * @returns {string} - Bank-specific deeplink URL
     */
    function getBankDeeplink(bankCode, paymentUrl) {
        var bank = BANKS[bankCode];
        if (!bank) return paymentUrl;

        var platform = getPlatform();

        if (platform === 'ios') {
            // iOS: replace https with bank scheme
            return paymentUrl.replace('https', bank.ios);
        } else if (platform === 'android') {
            // Android: use intent URL
            return paymentUrl.replace('https', 'intent') +
                '#Intent;scheme=https;package=' + bank.android + ';end';
        }

        // Desktop: use universal link
        return paymentUrl;
    }

    // =========================================================================
    // Bank Selection UI (Task 2.4)
    // =========================================================================

    /**
     * Chevron down SVG icon for show more button
     */
    const CHEVRON_DOWN_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>';

    /**
     * Build a single bank button HTML
     * @param {string} bankId - Bank identifier (e.g., 'mono', 'privat24')
     * @param {string} paymentUrl - NBU payment URL for deeplink generation
     * @returns {string} - HTML string for bank button
     */
    function buildBankButton(bankId, paymentUrl) {
        var bank = BANKS[bankId];
        if (!bank) return '';

        var deeplink = getBankDeeplink(bankId, paymentUrl);

        return '<button class="sonyasha-bank-item" data-bank="' + bankId + '" data-deeplink="' + escapeHtml(deeplink) + '">' +
            '<img src="' + bank.icon + '" alt="' + escapeHtml(bank.name) + '" class="sonyasha-bank-icon">' +
            '<span class="sonyasha-bank-name">' + escapeHtml(bank.name) + '</span>' +
        '</button>';
    }

    /**
     * Build the complete bank selection HTML
     * @param {string} paymentUrl - NBU payment URL for deeplink generation
     * @returns {string} - HTML string for bank selection grid
     */
    function buildBankSelectionHtml(paymentUrl) {
        var mainBanksHtml = '';
        var extraBanksHtml = '';

        // Build main banks grid
        for (var i = 0; i < MAIN_BANKS.length; i++) {
            mainBanksHtml += buildBankButton(MAIN_BANKS[i], paymentUrl);
        }

        // Build extra banks grid
        for (var j = 0; j < EXTRA_BANKS.length; j++) {
            extraBanksHtml += buildBankButton(EXTRA_BANKS[j], paymentUrl);
        }

        return '<div class="sonyasha-bank-selection">' +
            '<div class="sonyasha-bank-title">або оберіть свій банк</div>' +
            '<div class="sonyasha-banks-grid sonyasha-main-banks">' + mainBanksHtml + '</div>' +
            '<div class="sonyasha-banks-grid sonyasha-extra-banks">' + extraBanksHtml + '</div>' +
            '<button class="sonyasha-show-more">' +
                '<span class="sonyasha-show-more-text">Показати ще</span>' +
                CHEVRON_DOWN_ICON +
            '</button>' +
        '</div>';
    }

    /**
     * Toggle extra banks visibility
     * @param {HTMLElement} [container] - Container element (optional, uses document if not provided)
     */
    function toggleExtraBanks(container) {
        var root = container || document;
        var extraBanks = root.querySelector('.sonyasha-extra-banks');
        var showMoreBtn = root.querySelector('.sonyasha-show-more');
        var showMoreText = root.querySelector('.sonyasha-show-more-text');

        if (!extraBanks || !showMoreBtn) return;

        var isExpanded = extraBanks.classList.contains('sonyasha-show');

        if (isExpanded) {
            extraBanks.classList.remove('sonyasha-show');
            showMoreBtn.classList.remove('sonyasha-expanded');
            if (showMoreText) showMoreText.textContent = 'Показати ще';
        } else {
            extraBanks.classList.add('sonyasha-show');
            showMoreBtn.classList.add('sonyasha-expanded');
            if (showMoreText) showMoreText.textContent = 'Сховати';
        }
    }

    /**
     * Initialize bank selection event listeners
     * @param {HTMLElement} [container] - Container element (optional, uses document if not provided)
     */
    function initBankSelection(container) {
        var root = container || document;

        // Handle show more button click
        var showMoreBtn = root.querySelector('.sonyasha-show-more');
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleExtraBanks(container);
            });
        }

        // Handle bank item clicks
        var bankItems = root.querySelectorAll('.sonyasha-bank-item');
        for (var i = 0; i < bankItems.length; i++) {
            bankItems[i].addEventListener('click', function(e) {
                e.preventDefault();
                var deeplink = this.getAttribute('data-deeplink');
                if (deeplink) {
                    window.location.assign(deeplink);
                }
            });
        }
    }

    // =========================================================================
    // Auto-initialization
    // =========================================================================

    /**
     * Auto-initialize widget if container exists on DOMContentLoaded
     * Only runs in browser environment when #sonyasha-payment exists
     */
    if (typeof document !== 'undefined') {
        document.addEventListener('DOMContentLoaded', function() {
            if (document.querySelector('#sonyasha-payment')) {
                init();
            }
        });
    }

    // Export public API
    const SonyashaPaymentQR = {
        // Configuration
        configure: configure,
        getConfig: getConfig,
        validateConfig: validateConfig,

        // QR Builder (Task 1.1)
        buildDataString: buildDataString,
        buildDeeplinkUrl: buildDeeplinkUrl,
        formatAmount: formatAmount,
        encodeBase64Url: encodeBase64Url,

        // DOM Parsers (Task 1.2)
        parseOrderId: parseOrderId,
        parseAmount: parseAmount,
        parseOrderIdFromText: parseOrderIdFromText,
        parseAmountFromText: parseAmountFromText,

        // UI Template (Task 1.3)
        injectStyles: injectStyles,
        buildTemplate: buildTemplate,
        buildErrorTemplate: buildErrorTemplate,
        buildFallbackTemplate: buildFallbackTemplate,
        renderFallbackDetails: renderFallbackDetails,
        formatAmountDisplay: formatAmountDisplay,
        getQrContainerId: getQrContainerId,

        // QR Code Rendering (Task 1.4)
        renderQr: renderQr,
        loadQrLibrary: loadQrLibrary,
        isQrLibraryLoaded: isQrLibraryLoaded,

        // Widget Init and Error Handling (Task 1.5)
        init: init,
        showError: showError,
        escapeHtml: escapeHtml,
        getPlatform: getPlatform,
        isMobile: isMobile,
        renderWidget: renderWidget,

        // Bank Configurations (Task 2.2)
        getBank: getBank,
        getAllBankCodes: getAllBankCodes,
        getBankDeeplink: getBankDeeplink,
        BANKS: BANKS,
        MAIN_BANKS: MAIN_BANKS,
        EXTRA_BANKS: EXTRA_BANKS,

        // Bank Selection UI (Task 2.4)
        buildBankButton: buildBankButton,
        buildBankSelectionHtml: buildBankSelectionHtml,
        toggleExtraBanks: toggleExtraBanks,
        initBankSelection: initBankSelection,

        // Expose constants for testing
        NBU_DEEPLINK_PREFIX: NBU_DEEPLINK_PREFIX,
        NBU_FORMAT_VERSION: NBU_FORMAT_VERSION,
        WIDGET_STYLES: WIDGET_STYLES,
        DEFAULT_LOGO_BASE64: DEFAULT_LOGO_BASE64,
        QR_CONFIG: QR_CONFIG
    };

    // Expose to global scope
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = SonyashaPaymentQR;
    } else {
        // Browser global
        global.SonyashaPaymentQR = SonyashaPaymentQR;
    }

})(typeof window !== 'undefined' ? window : this);

