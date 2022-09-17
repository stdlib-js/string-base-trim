// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var u=void 0!==String.prototype.trim,f=String.prototype.trim;var r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var t=u&&""===f.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===f.call("᠎")?function(u){return f.call(u)}:function(u){return function(u,f,r){return u.replace(f,r)}(u,r,"$1")};export{t as default};
//# sourceMappingURL=mod.js.map
