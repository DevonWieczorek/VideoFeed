(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(70)},47:function(e,t,a){},66:function(e){e.exports={brands:[{id:1,brand:"youtube"},{id:2,brand:"vimeo"},{id:3,brand:"metacafe"}]}},70:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"updateMeta",function(){return V}),a.d(n,"resetMeta",function(){return G}),a.d(n,"searchByQuery",function(){return z}),a.d(n,"searchByCategory",function(){return Q}),a.d(n,"searchByBrandDefault",function(){return X}),a.d(n,"getCategoriesByBrand",function(){return J}),a.d(n,"resetBrand",function(){return W}),a.d(n,"updateActiveBrand",function(){return H}),a.d(n,"updateAllBrandInfo",function(){return K}),a.d(n,"updateBrandAttribute",function(){return $});var r={};a.r(r),a.d(r,"TestPlugin",function(){return Se}),a.d(r,"OtherTestPlugin",function(){return _e});var o=a(0),c=a.n(o),l=a(24),s=a.n(l),i=a(8),u=a(10),p=a(17),d=a(33),m=(a(47),a(2)),g=a(3),h=a(5),b=a(4),f=a(6),v=a(18),y=a(20),E=a.n(y),O=function(e){return c.a.createElement("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-auto mr-auto ml-auto tile tile-hero-link border-all rounded"},c.a.createElement("a",{href:e.link||"#",className:"tile-link",target:e.target||"_blank"},c.a.createElement("div",{className:"tile-hero"},c.a.createElement("img",{src:e.src||"http://www.fillmurray.com/300/200",alt:e.title||"Content Unavailable"})),c.a.createElement("div",{className:"tile-info"},c.a.createElement("div",{className:"tile-title"},e.title||"Content Unavailable"),c.a.createElement("div",{className:"tile-details"},e.children||"Nothing to see here."))))},j=a(1),N=function(e,t,a){return a||(a=e.location.search),E.a.parse(a)[t]},k=function(e,t){var a=e.match.url,n=E.a.parse(e.location.search);for(var r in Object.keys(t)){var o=Object.keys(t)[r];n[o]=t[o]}return"".concat(a,"?").concat(E.a.stringify(n))},C=function(e,t){var a=k(e,t);e.history.push(a)},w=function(e,t){e.match.url=e.location.pathname,e.history.push(k(e,t))},S=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={currPage:1,MAX_PAGES:3,LAST_PAGE:null},a.updatePage=function(e){switch(e){case"-1":var t=a.state.currPage-1;t<1&&(t=1),a.handlePageUpdate(t);break;case"+1":var n=a.state.currPage+1;a.handlePageUpdate(n);break;default:a.handlePageUpdate(e)}},a.handlePageUpdate=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.setState(Object(j.a)({},a.state,{currPage:parseInt(e)}),function(){C(a.props,{page:parseInt(e)}),!t&&a.props.onPageUpdate&&a.props.onPageUpdate()})},a.dynamicPageButtons=function(){for(var e=[],t=function(){var t=a.state.currPage+n,r="page-item ".concat(t===a.state.currPage?"active":"");e.push(c.a.createElement("li",{className:"".concat(r),key:t},c.a.createElement("span",{className:"page-link",onClick:function(){a.updatePage(t)},page:t},t)))},n=0;n<a.state.MAX_PAGES;n++)t();return e},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.page||N(this.props,"page")||1;this.setState(Object(j.a)({},this.state,{currPage:parseInt(e)})),this.props.lastPage&&this.props.currPage<=this.props.lastPage&&this.setState(Object(j.a)({},this.state,{LAST_PAGE:parseInt(this.props.lastPage)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"pagination-holder","aria-label":this.props.ariaLabel},c.a.createElement("ul",{className:"pagination"},this.state.currPage>1?c.a.createElement("li",{className:"page-item",key:"-1"},c.a.createElement("span",{className:"page-link",onClick:function(){e.updatePage("-1")},page:"-1",rel:"previous"},"\xab")):null,this.dynamicPageButtons(),!this.state.LAST_PAGE||this.state.currPage+(this.state.MAX_PAGES-1)<this.state.LAST_PAGE?c.a.createElement("li",{className:"page-item",key:"+1"},c.a.createElement("span",{className:"page-link",onClick:function(){e.updatePage("+1")},page:"+1",rel:"next"},"\xbb")):null))}}]),t}(o.Component),_=Object(v.e)(S),B=function(e){var t=Math.ceil(10*e)/10;return t%1>0?t:parseInt(t)},P=function(e){var t=parseFloat(e/1e3),a=parseFloat(t/1e3),n=parseFloat(a/1e3),r=parseFloat(n/1e3);return t<1e3?B(t)+"K":a<1e3?B(a)+"M":n<1e3?B(n)+"B":B(r)+"T"},A=Object(v.e)(function(e){return c.a.createElement(c.a.Fragment,null,e.results?function(e){for(var t=[],a=parseInt("12"),n=0;n<a&&n<e.videos.length;n++){var r=e.videos[n];t.push(c.a.createElement(O,{title:r.title,src:r.default_thumb,link:r.url,key:"".concat(r.id,"_").concat(n)},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"single-detail col"},P(r.views)," Views \xb7 ",c.a.createElement("span",{className:"success"},parseFloat(r.rating).toFixed(1),"%")),c.a.createElement("div",{className:"single-detail col"},r.duration))))}return t}(e.results):null,e.results?c.a.createElement("center",{className:"clear"},c.a.createElement(_,{ariaLabel:"footer-pagination",onPageUpdate:function(){},page:N(e,"page"),lastPage:"10"})):null)}),T=a(14),D=a(35),M=a.n(D),F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1,classString:"search-bar",searchString:""},a.classString=function(){return"search-bar ".concat(a.state.active?"active":"hidden")},a.updateSearch=function(e){a.setState(Object(j.a)({},a.state,{searchString:e}))},a.isActive=function(){return!T.isMobile||a.state.active},a.onSearchClick=function(e){a.state.active?(a.state.searchString&&a.submit(),T.isMobile&&a.setState(Object(j.a)({},a.state,{active:!1}))):a.setState(Object(j.a)({},a.state,{active:!0}),function(){document.getElementsByClassName("react-search-field-input")[0].focus()})},a.submit=function(){w(a.props,{q:a.state.searchString,page:1}),a.setState(Object(j.a)({},a.state,{searchString:"",active:!T.isMobile}))},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.setState(Object(j.a)({},this.state,{active:this.isActive()}),this.setState(Object(j.a)({},this.state,{classString:this.classString()})))}},{key:"render",value:function(){var e=this;return c.a.createElement(M.a,{placeholder:"Search...",onChange:function(t,a){e.updateSearch(t)},onEnter:function(t,a){e.submit()},onSearchClick:function(t,a){e.onSearchClick(t)},searchText:this.state.searchString,classNames:this.classString()})}}]),t}(o.Component),q=Object(u.b)(function(e){return{meta:e.meta,brands:e.brands}},{})(Object(v.e)(F)),R=function(){return c.a.createElement("div",{className:"not-found"},c.a.createElement("h1",{className:"brand-color"},"Oops!"),c.a.createElement("div",null,"Looks like we couldn't find what you were looking for."),c.a.createElement("div",{className:"try-search"},c.a.createElement(q,null)))},L=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidCatch",value:function(e,t){console.warn("ErrorBoundary Error:",e),console.warn("ErrorBoundary Info:",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?this.props.errorContent:this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.Component),x=Object(v.e)(function(e){return N(e,"q")?c.a.createElement("div",{className:"results-banner"},"Displaying Results for: ",c.a.createElement("span",null,N(e,"q"))):null}),I="https://videofeed-api-git-master.devonwieczorek93.now.sh",U="youtube",V=function(e){return{type:"meta",payload:e}},G=function(e){return{type:"reset_meta"}},z=function(e,t){return function(a){var n="".concat(I,"/").concat(e).concat(t);console.log("Calling ".concat(n,"...")),fetch(n).then(function(e){return e.json()}).then(function(e){a({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(n,":"),e)})}},Q=function(e,t){return function(a){var n="".concat(I,"/").concat(e).concat(t);console.log("Calling ".concat(n,"...")),fetch(n).then(function(e){return e.json()}).then(function(e){a({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(n,":"),e)})}},X=function(e){return function(t){var a="".concat(I,"/").concat(e);console.log("Calling ".concat(a,"...")),fetch(a).then(function(e){return e.json()}).then(function(e){t({type:"get_data",payload:e})}).catch(function(e){console.log("There was an error getting data from ".concat(a,":"),e)})}},J=function(e){var t="".concat(I,"/").concat(e,"/categories");return function(a){fetch(t).then(function(e){return e.json()}).then(function(t){var n={brand:e,attribute:"allCategories",value:t.categories};t.categories[0]&&0!==Object.keys(t.categories[0]).length||(n.value=[{}]),a({type:"update_brand_attribute",payload:n})}).catch(function(t){console.log("Error fetching categories for ".concat(e,":"),t),a({type:"update_brand_attribute",payload:{brand:e,attribute:"allCategories",value:[{}]}})})}},W=function(e){return"all"===e?{type:"reset_all_brands"}:{type:"reset_brand",payload:e}},H=function(e){return{type:"update_active_brand",payload:e}},K=function(e){return{type:"update_all_brand_info",payload:e}},$=function(e,t,a){return{type:"update_brand_attribute",payload:{brand:e,attribute:t,value:a}}},Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onRouteChanged=function(){var e=a.props,t=e.match,n=e.location,r=E.a.parse(a.props.location.search),o=t.params.brand||n.pathname.split("/")[1]||U;a.props.updateAllBrandInfo({activeBrand:o,page:r.page||1,search:r.q||"",category:r.category||"",queryString:n.search||""}),a.props.updateActiveBrand(o),a.handleCategories(o),a.delegateSearch(o,r.q,r.category)},a.delegateSearch=function(e,t,n){e=e||a.props.brands.activeBrand||"youtube",t=t||N(a.props,"q"),n=n||N(a.props,"category"),t?(console.log("search by query: ",e,a.props.location.search),a.props.searchByQuery(e,a.props.location.search)):n?(console.log("search by category: ",e,n),a.props.searchByCategory(e,a.props.location.search)):(console.log("search by brand default: ",e),a.props.searchByBrandDefault(e))},a.handleCategories=function(e){var t=(e=e||a.props.providers[a.props.activeBrand]).allCategories;t&&0!==t.length||a.props.getCategoriesByBrand(e)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.onRouteChanged()}},{key:"componentDidMount",value:function(){console.log("Router props: ",this.props),this.onRouteChanged()}},{key:"render",value:function(){var e=this;return c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/",key:"homeFeed",component:function(){return c.a.createElement(L,{errorContent:c.a.createElement(R,null)},c.a.createElement(x,null),c.a.createElement(A,{results:e.props.api.searchResults}))}}),c.a.createElement(v.a,{exact:!0,path:"/404",key:"404page",component:R}),c.a.createElement(v.a,{path:"/:brand",key:"brand",component:function(){return c.a.createElement(L,{errorContent:c.a.createElement(R,null)},c.a.createElement(x,null),c.a.createElement(A,{results:e.props.api.searchResults}))}}),c.a.createElement(v.a,{key:"404fallback",component:R}))}}]),t}(o.Component),Z=Object(u.b)(function(e){return{brands:e.brands,api:e.api}},{updateAllBrandInfo:K,updateActiveBrand:H,updateBrandAttribute:$,getCategoriesByBrand:J,searchByQuery:z,searchByCategory:Q,searchByBrandDefault:X})(Object(v.e)(Y)),ee=function(){return c.a.createElement("a",{className:"home-button secondary",href:"/"},c.a.createElement("div",{id:"logo"}," Video",c.a.createElement("span",{className:"brand-color"},"Feed")," "))},te=function(){return c.a.createElement("ul",{className:"navbar-nav"},function(){var e=[],t=a(66);for(var n in t.brands){var r=t.brands[n].brand.toLowerCase();e.push(c.a.createElement(i.b,{to:"/".concat(r),className:"nav-link border-bottom truncate",activeClassName:"active",key:n},r))}return e}())},ae=a(13),ne=Object(v.e)(function(e){var t=N(e,e.param);return c.a.createElement("div",{className:t===e.value?"".concat(e.className," ").concat(e.activeClassName):e.className,onClick:function(){var t;w(e,(t={},Object(ae.a)(t,e.param,e.value),Object(ae.a)(t,"page",1),t))}},e.children)}),re=function(e){return c.a.createElement("ul",{className:"navbar-nav"}," ",function(){var t=[];for(var a in e.categories){var n=e.categories[a].category.toLowerCase();t.push(c.a.createElement(ne,{className:"nav-link border-bottom truncate",activeClassName:"active",param:"category",key:a,value:n},n))}return 0===t.length&&(t=c.a.createElement("i",{style:{fontSize:"12px"}},"No Categories Found.")),t}()," ")},oe=function(e){var t=e.id,a=e.title,n=e.children;return c.a.createElement("div",{className:"panel-group"},c.a.createElement("div",{className:"panel panel-default"},c.a.createElement("div",{className:"panel-heading"},c.a.createElement("div",{className:"panel-title"},c.a.createElement("div",{className:"nav-link truncate","data-toggle":"collapse",href:"#".concat(t)},a))),c.a.createElement("div",{id:t,className:"panel-collapse collapse"},c.a.createElement("div",{className:"panel-body"},n))))},ce=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(T.BrowserView,null,c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item border-bottom"},c.a.createElement(q,null)))),c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item border-bottom"},c.a.createElement(i.b,{to:"/",className:"nav-link truncate",activeClassName:"default"},"Home Feed")),c.a.createElement("li",{className:"nav-item border-bottom truncate"},c.a.createElement(oe,{id:"brands-accordion",title:"Brands"},c.a.createElement(te,null))),c.a.createElement("li",{className:"nav-item border-bottom truncate"},c.a.createElement(oe,{id:"categories-accordion",title:"Categories"},c.a.createElement(re,{categories:this.props.providers[this.props.activeBrand].allCategories})))))}}]),t}(o.Component),le=Object(u.b)(function(e){return Object(j.a)({},e.brands)},{getCategoriesByBrand:J})(Object(v.e)(ce)),se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleOpen=function(e){"undefined"!==typeof e?a.setState(Object(j.a)({},a.state,{isOpen:e})):a.setState(Object(j.a)({},a.state,{isOpen:!a.state.isOpen}))},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.toggleOpen(!1)}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"navbar"},c.a.createElement(ee,null),c.a.createElement("button",{className:"navbar-toggler border-top border-bottom over-5",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent1","aria-controls":"navbarSupportedContent1","aria-expanded":this.state.isOpen?"true":"false","aria-label":"Toggle navigation",onClick:function(){e.toggleOpen()}}),c.a.createElement("div",{className:"".concat(this.state.isOpen?"show":"collapse"," navbar-collapse"),id:"navbarSupportedContent1"},c.a.createElement(le,null)))}}]),t}(o.Component),ie=Object(v.e)(se),ue=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dynamic-partner-logo"},c.a.createElement(i.b,{to:"/".concat(this.props.activeBrand),key:this.props.activeBrand},c.a.createElement("img",{id:"partner-logo",className:this.props.className,src:this.props.partnerLogo,alt:this.props.alt||this.props.activeBrand})))}}]),t}(o.Component),pe=Object(u.b)(function(e){return Object(j.a)({},e.brands)},{})(Object(v.e)(ue)),de=Object(v.e)(function(e){var t=e.match.params.brand||e.location.pathname.split("/")[1];return c.a.createElement("header",{className:"super container-fluid"},c.a.createElement(T.MobileView,{viewClassName:"mobile-nav"},c.a.createElement(ie,null),c.a.createElement(q,null)),c.a.createElement(T.BrowserView,null,c.a.createElement(ee,null),t?c.a.createElement(pe,null):c.a.createElement(q,null)))}),me=function(){return c.a.createElement(T.BrowserView,{viewClassName:"siderail-nav nav-left col-lg-2 col-xl-2 float-left border-right"},c.a.createElement("nav",{className:"navbar web-nav"},c.a.createElement(le,null)))},ge=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){console.log("App props: ",this.props)}},{key:"render",value:function(){return c.a.createElement("div",{className:"app clear"},c.a.createElement(de,null),c.a.createElement(me,null),c.a.createElement("div",{className:"container col-sm-12 col-md-12 col-lg-10 col-xl-10 float-right clear"},c.a.createElement("div",{className:"feed-wrapper row col float-right"},c.a.createElement(Z,null))))}}]),t}(o.Component),he=Object(v.e)(ge),be={title:"VideoFeed | Clean React UI",description:"Reuseable React & SASS based components",keywords:"",subject:"",robots:"index,follow",ogTitle:"VideoFeed",ogImage:"../../public/favicon.ico",ogDescription:"Reuseable React & SASS based components",ogSiteName:"VideoFeed",ogType:"",ogURL:window.location.href},fe=a(37),ve=Object(fe.a)(),ye={searchResults:null},Ee={activeBrand:U,page:1,search:"",category:"",queryString:"",partnerLogo:null,providers:{youtube:{brandName:"youtube",logo:"https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png",page:1,search:"",category:"",queryString:"",allCategories:[]},vimeo:{brandName:"vimeo",logo:"https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/PressRoom/563/cover_photo/large_slack-imgs.com.png",page:1,search:"",category:"",queryString:"",allCategories:[]},metacafe:{brandName:"metacafe",logo:"https://logonoid.com/images/metacafe-logo.png",page:1,search:"",category:"",queryString:"",allCategories:[]}}},Oe=Object(p.c)({meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"meta":var a=function(e,t){var a={};for(var n in e)t[n]?a[n]=t[n]:a[n]=e[n];return a}(be,t.payload);return Object(j.a)({},e,a);case"reset_meta":return Object(j.a)({},e,be);default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_data":console.log("Got Search Results:",t.payload);var a=ve.applyFilters("search_results",t.payload);return Object(j.a)({},e,{searchResults:a});default:return e}},brands:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"update_active_brand":return Object(j.a)({},e,{activeBrand:t.payload,partnerLogo:e.providers[t.payload].logo,page:e.providers[t.payload].page,search:e.providers[t.payload].search,category:e.providers[t.payload].category,queryString:e.providers[t.payload].queryString});case"update_all_brand_info":return Object(j.a)({},e,{activeBrand:t.payload.activeBrand,page:t.payload.page,search:t.payload.search,category:t.payload.category,queryString:t.payload.queryString,providers:Object(j.a)({},e.providers,Object(ae.a)({},t.payload.activeBrand,Object(j.a)({},e.providers[t.payload.activeBrand],{page:t.payload.page,search:t.payload.search,category:t.payload.category,queryString:t.payload.queryString})))});case"update_brand_attribute":return Object(j.a)({},e,{providers:Object(j.a)({},e.providers,Object(ae.a)({},t.payload.brand,Object(j.a)({},e.providers[t.payload.brand],Object(ae.a)({},t.payload.attribute,t.payload.value))))});case"reset_brand":return Object(j.a)({},e,{providers:Object(ae.a)({},t.payload,Ee.providers[t.payload])});case"reset_all_brands":return Object(j.a)({},e,Ee);default:return e}}}),je=a(36),Ne=a.n(je),ke=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement(Ne.a,null,c.a.createElement("title",null,this.props.title),c.a.createElement("meta",{name:"description",content:this.props.description}),c.a.createElement("meta",{name:"keywords",content:this.props.keywords}),c.a.createElement("meta",{name:"subject",content:this.props.subject}),c.a.createElement("meta",{name:"robots",content:this.props.robots}),c.a.createElement("meta",{property:"og:title",content:this.props.ogTitle}),c.a.createElement("meta",{property:"og:image",content:this.props.ogImage}),c.a.createElement("meta",{property:"og:site_name",content:this.props.ogSiteName}),c.a.createElement("meta",{property:"og:description",content:this.props.ogDescription||this.props.description}),c.a.createElement("meta",{property:"og:url",content:this.props.ogURL||window.location.href}))}}]),t}(o.Component),Ce=Object(u.b)(function(e){return Object(j.a)({},e.meta)},{})(ke),we=a(19),Se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).logData=function(e){return e.videos=[].concat(Object(we.a)(e.videos),[e.videos[0]]),console.log("Manipulated search data from plugin: ",e),e},a.listen=function(){ve.addAction("after_plugin_registry","TestPlugin",function(){console.log("Log from plugin: after_plugin_registry")}),ve.addFilter("search_results","TestPlugin",a.logData,10)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){console.log("Test plugin loaded."),this.listen()}},{key:"render",value:function(){return c.a.createElement("div",null,"Test Plugin")}}]),t}(o.Component),_e=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).logData=function(e){return e.videos=[].concat(Object(we.a)(e.videos),[e.videos[0]]),console.log("Manipulated search data from plugin: ",e),e},a.listen=function(){ve.addAction("after_plugin_registry","TestPlugin",function(){console.log("Log from plugin: after_plugin_registry")}),ve.addFilter("search_results","TestPlugin",a.logData,10)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){console.log("Test plugin loaded."),this.listen()}},{key:"render",value:function(){return c.a.createElement("div",null,"Test Plugin 2")}}]),t}(o.Component),Be=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).connectPluginsToComponent=function(){var e=[];for(var t in r)e.push(c.a.createElement(r[t],null,null));var n=c.a.Children.map([].concat(e),function(e){return c.a.createElement(L,{errorContent:function(){console.log("Error loading plugin: ".concat(e.type.name))}},c.a.cloneElement(e,Object(j.a)({},a.props)))});a.setState(Object(j.a)({},a.state,{children:[a.props.children].concat(Object(we.a)(n))}),function(){ve.doAction("after_plugin_registry")})},a.state={children:[a.props.children]},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){ve.doAction("before_plugin_registry"),this.connectPluginsToComponent()}},{key:"render",value:function(){return this.state.children}}]),t}(o.Component),Pe=Object(u.b)(function(e){return Object(j.a)({},e)},Object(j.a)({},n))(Be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=Object(p.d)(Oe,{},Object(p.a)(d.a)),Te=document.getElementById("root"),De=c.a.createElement(u.a,{store:Ae},c.a.createElement(Pe,null,c.a.createElement(i.a,null,c.a.createElement(Ce,null),c.a.createElement(he,null))));Te.hasChildNodes()?s.a.hydrate(De,Te):s.a.render(De,Te),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.9547600d.chunk.js.map