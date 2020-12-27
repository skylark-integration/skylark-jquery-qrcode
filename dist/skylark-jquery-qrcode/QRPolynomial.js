/**
 * skylark-jquery-qrcode - The skylark jquery qrode library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./QRMath"],function(t){function e(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var g=0;g<t.length&&0==t[g];)g++;this.num=new Array(t.length-g+e);for(var n=0;n<t.length-g;n++)this.num[n]=t[n+g]}return e.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(g){for(var n=new Array(this.getLength()+g.getLength()-1),r=0;r<this.getLength();r++)for(var h=0;h<g.getLength();h++)n[r+h]^=t.gexp(t.glog(this.get(r))+t.glog(g.get(h)));return new e(n,0)},mod:function(g){if(this.getLength()-g.getLength()<0)return this;for(var n=t.glog(this.get(0))-t.glog(g.get(0)),r=new Array(this.getLength()),h=0;h<this.getLength();h++)r[h]=this.get(h);for(h=0;h<g.getLength();h++)r[h]^=t.gexp(t.glog(g.get(h))+n);return new e(r,0).mod(g)}},e});
//# sourceMappingURL=sourcemaps/QRPolynomial.js.map
