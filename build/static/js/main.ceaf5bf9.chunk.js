(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){e.exports=a(219)},135:function(e,t,a){},136:function(e,t,a){},142:function(e,t){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(110),c=a.n(s),l=(a(134),a(135),a(10)),o=a(11),i=a(13),m=a(12),u=a(14),d=a(227),p=a(228),h=a(229),f=(a(136),a(6)),E=a.n(f),v=a(15),g=a(51),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=Object(v.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{g.a.signOut(),a.props.auth.setAuthStatus(!1),a.props.auth.setUser(null)}catch(n){console.log(n.message)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{src:"hexal-logo.png",width:"112",height:"28",alt:"hexal logo"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("a",{href:"/",className:"navbar-item"},"Home"),r.a.createElement("a",{href:"/products",className:"navbar-item"},"Products"),r.a.createElement("a",{href:"/admin",className:"navbar-item"},"Admin")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},this.props.auth.isAuthenticated&&this.props.auth.user&&r.a.createElement("p",null,"Hello, ",this.props.auth.user.username),r.a.createElement("div",{className:"buttons"},!this.props.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("a",{href:"/register",className:"button is-primary"},r.a.createElement("strong",null,"Register")),r.a.createElement("a",{href:"/login",className:"button is-light"},"Log in")),this.props.auth.isAuthenticated&&r.a.createElement("a",{href:"/",onClick:this.handleLogOut,className:"button is-light"},"Log out"))))))}}]),t}(n.Component);function w(){return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"energy.jpg",alt:"conserve energy"}))))}function N(){return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"columns features"},r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Energy conservation"),r.a.createElement("p",null,"Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more")))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Water conservation"),r.a.createElement("p",null,"Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed risus."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more")))))),r.a.createElement("div",{className:"column is-4"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"Solar energy"),r.a.createElement("p",null,"Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis."),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))))}function y(){return r.a.createElement(n.Fragment,null,r.a.createElement(w,null),r.a.createElement("div",{className:"box cta"},r.a.createElement("p",{className:"has-text-centered"},r.a.createElement("span",{className:"tag is-primary"},"New")," Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.a.createElement(N,null))}var O=a(116),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isEditMode:!1,updatedproductname:a.props.name},a.handleProductEdit=function(e){e.preventDefault(),a.setState({isEditMode:!0})},a.handleEditSave=function(e){e.preventDefault(),a.setState({isEditMode:!1}),a.props.handleUpdateProduct(a.props.id,a.state.updatedproductname)},a.onAddProductNameChange=function(e){return a.setState({updatedproductname:e.target.value})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tile is-child box notification is-success"},this.props.isAdmin&&r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"/",onClick:this.handleProductEdit,className:"product-edit-icon"},r.a.createElement(O.a,{icon:"edit"})),r.a.createElement("button",{onClick:function(t){return e.props.handleDeleteProduct(e.props.id,t)},className:"delete"})),this.state.isEditMode?r.a.createElement("div",null,r.a.createElement("p",null,"Edit product name"),r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.updatedproductname,onChange:this.onAddProductNameChange}),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id),r.a.createElement("button",{type:"submit",className:"button is-info is-small",onClick:this.handleEditSave},"save")):r.a.createElement("div",null,r.a.createElement("p",{className:"product-title"},this.props.name),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id)))}}]),t}(n.Component),k=a(37),C=a.n(k),S=a(41),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newproduct:null,products:[]},a.fetchProducts=Object(v.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(S.api.invokeUrl,"/products"));case 3:t=e.sent,n=t.data,a.setState({products:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("An error has occurred: ".concat(e.t0));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.componentDidMount=function(){a.fetchProducts()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Energy Products"),r.a.createElement("p",{className:"subtitle is-5"},"Invest in a clean future with our efficient and cost-effective green energy products:"),r.a.createElement("br",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-4 is-parent  is-vertical"},this.state.products&&this.state.products.length>0?this.state.products.map(function(e){return r.a.createElement(j,{name:e.productname,id:e.id,key:e.id})}):r.a.createElement("div",{className:"tile notification is-warning"},"No products available"))))))))}}]),t}(n.Component),I=a(21),x=a(58),A=a(41),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={newproduct:{productname:"",id:""},products:[]},a.handleAddProduct=function(){var e=Object(v.a)(E.a.mark(function e(t,n){var r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r={id:t,productname:a.state.newproduct.productname},e.next=5,C.a.post("".concat(A.api.invokeUrl,"/products/").concat(t),r);case 5:a.setState({products:[].concat(Object(x.a)(a.state.products),[a.state.newproduct])}),a.setState({newproduct:{productname:"",id:""}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("An error has occurred: ".concat(e.t0));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,a){return e.apply(this,arguments)}}(),a.handleUpdateProduct=function(){var e=Object(v.a)(E.a.mark(function e(t,n){var r,s,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={id:t,productname:n},e.next=4,C.a.patch("".concat(A.api.invokeUrl,"/products/").concat(t),r);case 4:s=Object(x.a)(a.state.products).find(function(e){return e.id===t}),c=Object(x.a)(a.state.products).filter(function(e){return e.id!==t}),s.productname=n,c.push(s),a.setState({products:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error updating product: ".concat(e.t0));case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,a){return e.apply(this,arguments)}}(),a.handleDeleteProduct=function(){var e=Object(v.a)(E.a.mark(function e(t,n){var r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,C.a.delete("".concat(A.api.invokeUrl,"/products/").concat(t));case 4:r=Object(x.a)(a.state.products).filter(function(e){return e.id!==t}),a.setState({products:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Unable to delete product: ".concat(e.t0));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t,a){return e.apply(this,arguments)}}(),a.fetchProducts=Object(v.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(A.api.invokeUrl,"/products"));case 3:t=e.sent,n=t.data,a.setState({products:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("An error has occurred: ".concat(e.t0));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a.onAddProductNameChange=function(e){return a.setState({newproduct:Object(I.a)({},a.state.newproduct,{productname:e.target.value})})},a.onAddProductIdChange=function(e){return a.setState({newproduct:Object(I.a)({},a.state.newproduct,{id:e.target.value})})},a.componentDidMount=function(){a.fetchProducts()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Product Admin"),r.a.createElement("p",{className:"subtitle is-5"},"Add and remove products using the form below:"),r.a.createElement("br",null),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-one-third"},r.a.createElement("form",{onSubmit:function(t){return e.handleAddProduct(e.state.newproduct.id,t)}},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.newproduct.productname,onChange:this.onAddProductNameChange})),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter id",value:this.state.newproduct.id,onChange:this.onAddProductIdChange})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-primary is-medium"},"Add product"))))),r.a.createElement("div",{className:"column is-two-thirds"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-4 is-parent  is-vertical"},this.state.products.map(function(t,a){return r.a.createElement(j,{isAdmin:!0,handleUpdateProduct:e.handleUpdateProduct,handleDeleteProduct:e.handleDeleteProduct,name:t.productname,id:t.id,key:t.id})}))))))))}}]),t}(n.Component),B=a(25);var U=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),r.a.createElement("div",{className:"row justify-content-center help is-danger"},e.formerrors.blankfield?"All fields are required":"")):e.apierrors?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):r.a.createElement("div",null)};var D=function(e,t){for(var a=document.getElementsByClassName("is-danger"),n=0;n<a.length;n++)a[n].classList.contains("error")||a[n].classList.remove("is-danger");return t.hasOwnProperty("username")&&""===t.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("firstname")&&""===t.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("lastname")&&""===t.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("email")&&""===t.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("verificationcode")&&""===t.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&""===t.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("oldpassword")&&""===t.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("newpassword")&&""===t.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("confirmpassword")&&""===t.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&t.hasOwnProperty("confirmpassword")&&t.password!==t.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):t.hasOwnProperty("newpassword")&&t.hasOwnProperty("confirmpassword")&&t.newpassword!==t.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0},H=a(70),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.handleSubmit=function(){var e=Object(v.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=D(t,a.state))&&a.setState({errors:Object(I.a)({},a.state.errors,n)}),e.prev=4,e.next=7,H.a.signIn(a.state.username,a.state.password);case 7:r=e.sent,console.log(r),a.props.auth.setAuthStatus(!0),a.props.auth.setUser(r),a.props.history.push("/"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),null,e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(I.a)({},a.state.errors,{cognito:e.t0})});case 19:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Log in"),r.a.createElement(U,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username or email",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(v.a)(E.a.mark(function e(t){var n,r,s,c,l,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=D(t,a.state))&&a.setState({errors:Object(I.a)({},a.state.errors,n)}),r=a.state,s=r.username,c=r.email,l=r.password,e.prev=5,e.next=8,H.a.signUp({username:s,password:l,attributes:{email:c}});case 8:o=e.sent,console.log(o),a.props.history.push("/welcome"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(5),null,e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(I.a)({},a.state.errors,{cognito:e.t0})});case 18:case"end":return e.stop()}},e,null,[[5,13]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement(U,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"userNameHelp",placeholder:"Enter username",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Register"))))))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.forgotPasswordHandler=function(){var e=Object(v.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.clearErrorState(),(n=D(t,a.state))&&a.setState({errors:Object(I.a)({},a.state.errors,n)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Forgot your password?"),r.a.createElement("p",null,"Please enter the email address associated with your account and we'll email you a password reset link."),r.a.createElement(U,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.forgotPasswordHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{type:"email",className:"input",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={verificationcode:"",email:"",newpassword:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.passwordVerificationHandler=function(){var e=Object(v.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.clearErrorState(),(n=D(t,a.state))&&a.setState({errors:Object(I.a)({},a.state.errors,n)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Set new password"),r.a.createElement("p",null,"Please enter the verification code sent to your email address below, your email address and a new password."),r.a.createElement(U,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.passwordVerificationHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{type:"text",className:"input",id:"verificationcode","aria-describedby":"verificationCodeHelp",placeholder:"Enter verification code",value:this.state.verificationcode,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{type:"password",className:"input",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={oldpassword:"",newpassword:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(v.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.clearErrorState(),(n=D(t,a.state))&&a.setState({errors:Object(I.a)({},a.state.errors,n)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(B.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement(U,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"oldpassword",placeholder:"Old password",value:this.state.oldpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Change password"))))))}}]),t}(n.Component),W=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement("p",null,"Your password has been successfully updated!")))}}]),t}(n.Component);function T(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"You have successfully registered a new account."),r.a.createElement("p",null,"We've sent you a email. Please click on the confirmation link to verify your account.")))}function Y(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"Hexal 2019. The source code is licensed MIT. The website content is licensed CC BY NC SA 4.0.")))}var G=a(55),J=a(117);G.b.add(J.a);var V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthenticated:!1,user:null},a.setAuthStatus=function(e){a.setState({isAuthenticated:e})},a.setUser=function(e){a.setState({user:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,user:this.state.user,setAuthStatus:this.setAuthStatus,setUser:this.setUser};return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(b,{auth:e}),r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(y,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/products",render:function(t){return r.a.createElement(P,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/admin",render:function(t){return r.a.createElement(L,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(q,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(F,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/forgotpassword",render:function(t){return r.a.createElement(_,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/forgotpasswordverification",render:function(t){return r.a.createElement(M,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/changepassword",render:function(t){return r.a.createElement(R,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/changepasswordconfirmation",render:function(t){return r.a.createElement(W,Object.assign({},t,{auth:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/welcome",render:function(t){return r.a.createElement(T,Object.assign({},t,{auth:e}))}})),r.a.createElement(Y,null))))}}]),t}(n.Component),z=a(62),$=a(41);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));z.default.configure({Auth:{mandatorySignId:!0,region:$.cognito.REGION,userPoolId:$.cognito.USER_POOL_ID,userPoolWebClientId:$.cognito.APP_CLIENT_ID}}),c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e){e.exports={api:{invokeUrl:"https://5bltcq602h.execute-api.us-west-2.amazonaws.com/prod"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_yiHta27C3",APP_CLIENT_ID:"4evkk0jhs175rg6qjp87ts20mh"}}}},[[129,1,2]]]);
//# sourceMappingURL=main.ceaf5bf9.chunk.js.map