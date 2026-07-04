"use strict";var t=function(r,u){return function(){try{return u||r((u={exports:{}}).exports,u),u.exports}catch(x){throw (u=0, x)}};};var a=t(function(N,f){
var y=typeof String.prototype.trim!="undefined";f.exports=y
});var e=t(function(R,s){
var S=String.prototype.trim;s.exports=S
});var c=t(function(T,v){
var n=e(),b=" \n	\r\n\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF",o="\u180E";function d(){return n.call(b)===""&&n.call(o)===o}v.exports=d
});var p=t(function(U,l){
var g=require('@stdlib/string-base-replace/dist'),I=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function $(r){return g(r,I,"$1")}l.exports=$
});var q=t(function(_,m){
var h=e();function k(r){return h.call(r)}m.exports=k
});var A=a(),B=c(),E=p(),H=q(),i;A&&B()?i=H:i=E;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
