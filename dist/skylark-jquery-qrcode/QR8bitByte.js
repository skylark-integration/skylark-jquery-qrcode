/**
 * skylark-jquery-qrcode - The skylark jquery qrode library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./QRMode"],function(t){function n(n){this.mode=t.MODE_8BIT_BYTE,this.data=n}return n.prototype={getLength:function(t){return this.data.length},write:function(t){for(var n=0;n<this.data.length;n++)t.put(this.data.charCodeAt(n),8)}},n});
//# sourceMappingURL=sourcemaps/QR8bitByte.js.map
