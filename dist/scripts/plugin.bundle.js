!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="multi \\wp\\wp-content\\plugins\\rfs-acf-sync-notice\\src\\scripts\\plugin.js")}({aphK:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=RFS_ACF_SYNC_NOTICE}var e,a,r;return e=t,(a=[{key:"init",value:function(){if(this.data.groupHasSync){var t=document.createElement("div");t.classList.add("rfs-acf-sync-modal");var e=document.createElement("div");e.classList.add("rfs-acf-sync-modal-inner");var n=document.createElement("h2"),a=document.createElement("p"),r=document.createElement("div");r.classList.add("rfs-acf-sync-modal-buttons");var s=document.createElement("a"),c=document.createElement("a");Object.assign(n,{className:"rfs-acf-sync-modal-heading",innerText:this.data.modal.heading}),Object.assign(a,{className:"rfs-acf-sync-modal-text",innerText:this.data.modal.text}),Object.assign(s,{href:this.data.modal.buttons.sync.url,className:"rfs-acf-modal-button button button-primary button-large",innerText:this.data.modal.buttons.sync.label}),Object.assign(c,{href:this.data.modal.buttons.ignore.url,className:"rfs-acf-modal-button button page-title-action",role:"button",innerText:this.data.modal.buttons.ignore.label}),r.appendChild(s),r.appendChild(c),e.appendChild(n),e.appendChild(a),e.appendChild(r),t.appendChild(e),document.body.appendChild(t),c.addEventListener("click",function(e){e.preventDefault(),t.classList.add("hide")})}}}])&&n(e.prototype,a),r&&n(e,r),t}())).init()},"multi \\wp\\wp-content\\plugins\\rfs-acf-sync-notice\\src\\scripts\\plugin.js":function(t,e,n){t.exports=n("aphK")}});
//# sourceMappingURL=plugin.bundle.js.map
