/**
 * skylark-jquery-qrcode - The skylark jquery qrode library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){function t(){this.buffer=new Array,this.length=0}return t.prototype={get:function(t){var n=Math.floor(t/8);return 1==(this.buffer[n]>>>7-t%8&1)},put:function(t,n){for(var e=0;e<n;e++)this.putBit(1==(t>>>n-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},t});
//# sourceMappingURL=sourcemaps/QRBitBuffer.js.map
