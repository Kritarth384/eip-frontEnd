"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[290],{10290:function(e,t,n){n.r(t);var s=n(70885),r=n(72791),l=n(78983),i=n(80184);t.default=function(e){var t=(0,r.useState)(),n=(0,s.Z)(t,2),c=n[0],a=n[1],o=(0,r.useState)([]),d=(0,s.Z)(o,2),h=d[0],x=d[1],u=(0,r.useState)([]),j=(0,s.Z)(u,2),g=j[0],N=j[1],S=(0,r.useState)([]),f=(0,s.Z)(S,2),p=f[0],m=f[1],I=(0,r.useState)([]),O=(0,s.Z)(I,2),T=O[0],k=O[1],J=(0,r.useState)([]),y=(0,s.Z)(J,2),w=y[0],v=y[1],C=(0,r.useState)([]),_=(0,s.Z)(C,2),M=_[0],R=_[1];function b(e,t){return t>=246&&"Stagnant"===e[1]&&"Core"===e[5]}function E(e,t){return t>=246&&"Stagnant"===e[1]&&"Networking"===e[5]}function F(e,t){return t>=246&&"Stagnant"===e[1]&&"Interface"===e[5]}function Z(e,t){return t>=246&&"Stagnant"===e[1]&&"ERC"===e[5]}function z(e,t){return t>=246&&"Stagnant"===e[1]&&"Meta"===e[5]}function A(e,t){return t>=246&&"Stagnant"===e[1]&&"Informational"===e[5]}return(0,r.useEffect)((function(){a(JSON.parse(localStorage.getItem("count"))),x(JSON.parse(localStorage.getItem("statusStagnantCore"))),N(JSON.parse(localStorage.getItem("statusStagnantNetworking"))),m(JSON.parse(localStorage.getItem("statusStagnantERC"))),k(JSON.parse(localStorage.getItem("statusStagnantInterface"))),v(JSON.parse(localStorage.getItem("statusStagnantMeta"))),R(JSON.parse(localStorage.getItem("statusStagnantInformational")))}),[]),(0,r.useEffect)((function(){void 0!==e.data?(a(e.data),x(e.data.filter(b)),localStorage.setItem("count",JSON.stringify(e.data)),localStorage.setItem("statusStagnantCore",JSON.stringify(e.data.filter(b))),localStorage.setItem("statusStagnantNetworking",JSON.stringify(e.data.filter(E))),localStorage.setItem("statusStagnantERC",JSON.stringify(e.data.filter(Z))),localStorage.setItem("statusStagnantInterface",JSON.stringify(e.data.filter(F))),localStorage.setItem("statusStagnantMeta",JSON.stringify(e.data.filter(z))),localStorage.setItem("statusStagnantInformational",JSON.stringify(e.data.filter(A)))):(localStorage.setItem("count",JSON.stringify(c)),localStorage.setItem("statusStagnantCore",JSON.stringify(c.filter(b))),localStorage.setItem("statusStagnantNetworking",JSON.stringify(c.filter(E))),localStorage.setItem("statusStagnantERC",JSON.stringify(c.filter(Z))),localStorage.setItem("statusStagnantInterface",JSON.stringify(c.filter(F))),localStorage.setItem("statusStagnantMeta",JSON.stringify(c.filter(z))),localStorage.setItem("statusStagnantInformational",JSON.stringify(c.filter(A))))}),[c]),console.log(c),console.log(h),console.log(M),(0,i.jsxs)(i.Fragment,{children:[0===h.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"Core"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==h?h.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]}),0===g.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"Networking"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==g?g.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]}),0===p.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"ERC"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==p?p.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]}),0===T.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"Interface"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==T?T.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]}),0===w.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"Meta"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==w?w.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]}),0===M.length?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{fontSize:"40px",fontWeight:"800",marginBottom:"10px"},children:"Informational"}),(0,i.jsxs)(l.Sx,{children:[(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"col",children:"Number"}),(0,i.jsx)(l.is,{scope:"col",children:"Title"}),(0,i.jsx)(l.is,{scope:"col",children:"Author"})]})}),(0,i.jsx)(l.NR,{children:void 0!==M?M.map((function(e){return(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:null!==e[2]?parseInt(e[2]):1}),(0,i.jsx)(l.NN,{children:null!=e[3]?e[3]:1}),(0,i.jsx)(l.NN,{children:null!==e[4]?e[4]:1})]})})):(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{scope:"row",children:"1"}),(0,i.jsx)(l.NN,{children:"Mark"}),(0,i.jsx)(l.NN,{children:"Otto"})]})})]})]})]})}}}]);
//# sourceMappingURL=290.5e93b15e.chunk.js.map