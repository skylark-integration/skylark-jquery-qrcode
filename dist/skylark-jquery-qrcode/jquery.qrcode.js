/**
 * skylark-jquery-qrcode - The skylark jquery qrode library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-jquery","./QRCode","./QRErrorCorrectLevel"],function(e,t,r){return e.fn.qrcode=function(o){"string"==typeof o&&(o={text:o}),o=e.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:r.H,background:"#ffffff",foreground:"#000000"},o);return this.each(function(){var r="canvas"==o.render?function(){var e=new t(o.typeNumber,o.correctLevel);e.addData(o.text),e.make();var r=document.createElement("canvas");r.width=o.width,r.height=o.height;for(var n=r.getContext("2d"),a=o.width/e.getModuleCount(),d=o.height/e.getModuleCount(),u=0;u<e.getModuleCount();u++)for(var c=0;c<e.getModuleCount();c++){n.fillStyle=e.isDark(u,c)?o.foreground:o.background;var h=Math.ceil((c+1)*a)-Math.floor(c*a),i=Math.ceil((u+1)*d)-Math.floor(u*d);n.fillRect(Math.round(c*a),Math.round(u*d),h,i)}return r}():function(){var r=new t(o.typeNumber,o.correctLevel);r.addData(o.text),r.make();for(var n=e("<table></table>").css("width",o.width+"px").css("height",o.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",o.background),a=o.width/r.getModuleCount(),d=o.height/r.getModuleCount(),u=0;u<r.getModuleCount();u++)for(var c=e("<tr></tr>").css("height",d+"px").appendTo(n),h=0;h<r.getModuleCount();h++)e("<td></td>").css("width",a+"px").css("background-color",r.isDark(u,h)?o.foreground:o.background).appendTo(c);return n}();e(r).appendTo(this)})},e});
//# sourceMappingURL=sourcemaps/jquery.qrcode.js.map
