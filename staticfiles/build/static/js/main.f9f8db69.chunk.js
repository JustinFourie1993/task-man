(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{11:function(e,t,a){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",centerButton:"Button_centerButton__rfu3b"}},111:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),o=a(26),c=a.n(o),r=(a(79),a(18)),i=a.n(r),l=(a(80),a(43)),j=a(116),d=a(115),u=a(20),b=a.n(u),h=a(10),A=a(13),O=a.n(A);O.a.defaults.baseURL="/api",O.a.defaults.headers.post["Content-Type"]="multipart/form-data",O.a.defaults.withCredentials=!0;const x=O.a.create(),p=O.a.create();var m=a(9),v=a(66);const g=()=>{localStorage.removeItem("refreshTokenTimestamp")};var K=a(1);const N=Object(s.createContext)(),C=Object(s.createContext)(),f=()=>Object(s.useContext)(N),w=()=>Object(s.useContext)(C),k=e=>{let{children:t}=e;const[a,n]=Object(s.useState)(null),o=Object(m.useHistory)();return Object(s.useEffect)((()=>{(async()=>{try{const{data:e}=await p.get("dj-rest-auth/user/");n(e)}catch(e){}})()}),[]),Object(s.useMemo)((()=>{x.interceptors.request.use((async e=>{if(localStorage.getItem("refreshTokenTimestamp"))try{await O.a.post("/dj-rest-auth/token/refresh/")}catch(t){return n((e=>(e&&o.push("/signin"),null))),g(),e}return e}),(e=>Promise.reject(e))),p.interceptors.response.use((e=>e),(async e=>{var t;if(401===(null===(t=e.response)||void 0===t?void 0:t.status)){try{await O.a.post("/dj-rest-auth/token/refresh/")}catch(e){n((e=>(e&&o.push("/signin"),null))),g()}return O()(e.config)}return Promise.reject(e)}))}),[o]),Object(K.jsx)(N.Provider,{value:a,children:Object(K.jsx)(C.Provider,{value:n,children:t})})};var y=()=>{const[e,t]=Object(s.useState)(!1),a=Object(s.useRef)(null);return Object(s.useEffect)((()=>{const e=e=>{a.current&&!a.current.contains(e.target)&&t(!1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[a]),{expanded:e,setExpanded:t,ref:a}};var P=()=>{const e=f(),t=w(),{expanded:a,setExpanded:s,ref:n}=y(),o=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(h.NavLink,{to:"/tasks/create",className:b.a.NavLink,activeClassName:b.a.Active,children:[Object(K.jsx)("i",{class:"fa-solid fa-plus"}),"Add Task"]}),Object(K.jsxs)(h.NavLink,{to:"/",className:b.a.NavLink,onClick:async()=>{try{await O.a.post("dj-rest-auth/logout/"),t(null)}catch(e){}},children:[Object(K.jsx)("i",{class:"fa-solid fa-arrow-right-from-bracket"}),"Sign Out"]})]}),c=Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(h.NavLink,{to:"/signin",className:b.a.NavLink,activeClassName:b.a.Active,children:[Object(K.jsx)("i",{className:"fa-solid fa-right-to-bracket"}),"Sign In"]}),Object(K.jsxs)(h.NavLink,{to:"/signup",className:b.a.NavLink,activeClassName:b.a.Active,children:[Object(K.jsx)("i",{className:"fa-solid fa-pen-to-square"}),"Sign Up"]})," "]});return Object(K.jsx)(l.a,{children:Object(K.jsxs)(j.a,{expanded:a,className:b.a.NavBar,expand:"md",fixed:"top",children:[Object(K.jsx)(h.NavLink,{to:"/",children:Object(K.jsx)(j.a.Brand,{children:Object(K.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"logo",height:"45"})})}),Object(K.jsx)(j.a.Toggle,{ref:n,onClick:()=>s(!a),className:b.a.dropdown,"aria-controls":"basic-navbar-nav"}),Object(K.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(K.jsxs)(d.a,{className:"ml-auto",children:[Object(K.jsxs)(h.NavLink,{exact:!0,to:"/",className:b.a.NavLink,activeClassName:b.a.Active,children:[Object(K.jsx)("i",{className:"fa-solid fa-house-user"}),"Home"]}),e?o:c]})})]})})},B=a(11),I=a.n(B),S=a(7),E=a.n(S),D=a(70),L=a(48),F=a(29),H=a(19),_=a(71);var R=()=>{var e,t,a,n;const[o,c]=Object(s.useState)({username:"",password1:"",password2:""}),{username:r,password1:j,password2:d}=o,[u,b]=Object(s.useState)({}),A=h.useHistory,x=e=>{c({...o,[e.target.name]:e.target.value})};return Object(K.jsx)(D.a,{className:E.a.Row,children:Object(K.jsx)(L.a,{className:"my-auto py-2 p-md-2",md:6,children:Object(K.jsxs)(l.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(K.jsx)("h1",{className:E.a.Header,children:"sign up"}),Object(K.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();try{await O.a.post("/dj-rest-auth/registration/",o),A.push("/signin")}catch(a){var t;b(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(K.jsxs)(F.a.Group,{controlId:"username",children:[Object(K.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"text",placeholder:"username",name:"username",value:r,onChange:x})]}),null===(e=u.username)||void 0===e?void 0:e.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{controlId:"password1",children:[Object(K.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"password",placeholder:"Password",name:"password1",value:j,onChange:x})]}),null===(t=u.password1)||void 0===t?void 0:t.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{controlId:"password2",children:[Object(K.jsx)(F.a.Label,{className:"d-none",children:"Confirm Password"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"password",placeholder:"Confirm Password",name:"password2",value:d,onChange:x})]}),null===(a=u.password2)||void 0===a?void 0:a.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsx)("div",{className:I.a.centerButton,children:Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),type:"submit",children:"Sign Up"})}),null===(n=u.non_field_errors)||void 0===n?void 0:n.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",className:"mt-3",children:e},t)))]})]})})})};var T=function(){var e,t,a;const n=w(),[o,c]=Object(s.useState)({username:"",password:""}),{username:r,password:j}=o,[d,u]=Object(s.useState)({}),b=Object(h.useHistory)(),A=e=>{c({...o,[e.target.name]:e.target.value})};return Object(K.jsx)(D.a,{className:E.a.Row,children:Object(K.jsx)(L.a,{className:"my-auto py-2 p-md-2",md:6,children:Object(K.jsxs)(l.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(K.jsx)("h1",{className:E.a.Header,children:"sign in"}),Object(K.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await O.a.post("/dj-rest-auth/login/",o);n(e.user),(e=>{const t=Object(v.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",t)})(e),b.push("/")}catch(a){var t;u(null===(t=a.response)||void 0===t?void 0:t.data)}},children:[Object(K.jsxs)(F.a.Group,{controlId:"username",children:[Object(K.jsx)(F.a.Label,{className:"d-none",children:"Username"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"text",placeholder:"username",name:"username",value:r,onChange:A})]}),null===(e=d.username)||void 0===e?void 0:e.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{controlId:"password",children:[Object(K.jsx)(F.a.Label,{className:"d-none",children:"Password"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"password",placeholder:"Password",name:"password",value:j,onChange:A})]}),null===(t=d.password)||void 0===t?void 0:t.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsx)("div",{className:I.a.centerButton,children:Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),type:"submit",children:"Sign In"})}),null===(a=d.non_field_errors)||void 0===a?void 0:a.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",className:"mt-3",children:e},t)))]})]})})})};var Q=()=>{var e,t,a,n,o;const[c,r]=Object(s.useState)({title:"",category:"",content:"",priority:"",due_date:""}),[j,d]=Object(s.useState)({}),{title:u,category:b,content:A,priority:O,due_date:p}=c,m=Object(h.useHistory)(),v=e=>{if("due_date"===e.target.name&&e.target.value){const t=new Date(e.target.value).toISOString();r({...c,[e.target.name]:t})}else r({...c,[e.target.name]:e.target.value})};return Object(K.jsx)(D.a,{className:E.a.Row,children:Object(K.jsx)(L.a,{className:"my-auto py-2 p-md-2",children:Object(K.jsxs)(l.a,{className:"".concat(i.a.Content," ").concat(E.a.Container," d-flex flex-column justify-content-center"),children:[Object(K.jsx)("h1",{className:E.a.Header,children:"Create Task"}),Object(K.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();const t=new FormData;t.append("title",u),t.append("category",b),t.append("content",A),t.append("priority",O),t.append("due_date",p);try{const{data:e}=await x.post("/tasks/",t);m.push("/tasks/".concat(e.id))}catch(n){var a,s;if(401!==(null===(a=n.response)||void 0===a?void 0:a.status))d(null===(s=n.response)||void 0===s?void 0:s.data)}},children:[Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Title"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"text",name:"title",value:u,onChange:v})]}),null===j||void 0===j||null===(e=j.title)||void 0===e?void 0:e.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Category"}),Object(K.jsxs)(F.a.Control,{as:"select",className:E.a.Input,name:"category",value:b,onChange:v,children:[Object(K.jsx)("option",{value:"",children:"Choose..."}),Object(K.jsx)("option",{value:"WORK",children:"Work"}),Object(K.jsx)("option",{value:"PERSONAL",children:"Personal"}),Object(K.jsx)("option",{value:"HOME",children:"Home"}),Object(K.jsx)("option",{value:"HEALTH",children:"Health"}),Object(K.jsx)("option",{value:"FINANCE",children:"Finance"}),Object(K.jsx)("option",{value:"EDUCATION",children:"Education"}),Object(K.jsx)("option",{value:"SHOPPING",children:"Shopping"}),Object(K.jsx)("option",{value:"TRAVEL",children:"Travel"}),Object(K.jsx)("option",{value:"HOBBIES",children:"Hobbies"}),Object(K.jsx)("option",{value:"SOCIAL",children:"Social"})]})]}),null===j||void 0===j||null===(t=j.category)||void 0===t?void 0:t.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Content"}),Object(K.jsx)(F.a.Control,{as:"textarea",rows:3,className:E.a.Input,name:"content",value:A,onChange:v})]}),null===j||void 0===j||null===(a=j.content)||void 0===a?void 0:a.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Priority"}),Object(K.jsxs)(F.a.Control,{as:"select",className:E.a.Input,name:"priority",value:O,onChange:v,children:[Object(K.jsx)("option",{value:"",children:"Select Priority"}),Object(K.jsx)("option",{value:"LOW",children:"Low"}),Object(K.jsx)("option",{value:"MEDIUM",children:"Medium"}),Object(K.jsx)("option",{value:"HIGH",children:"High"})]})]}),null===j||void 0===j||null===(n=j.priority)||void 0===n?void 0:n.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Due Date"}),Object(K.jsx)(F.a.Control,{type:"date",className:E.a.Input,name:"due_date",value:p,onChange:v})]}),null===j||void 0===j||null===(o=j.due_date)||void 0===o?void 0:o.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)("div",{className:I.a.centerButton,children:[Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),onClick:()=>m.goBack(),children:"Cancel"}),Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),type:"submit",children:"Create Task"})]})]})]})})})},G=a(72),U=a(33),M=a.n(U);var X=function(e){let{task:t,onNoteCreate:a,profileImage:n,profile_id:o}=e;const[c,r]=Object(s.useState)("");return Object(K.jsxs)(F.a,{className:"mt-2",onSubmit:async e=>{e.preventDefault();try{const{data:e}=await p.post("/notes/",{content:c,task:t});a(e),r("")}catch(s){}},children:[Object(K.jsx)(F.a.Group,{children:Object(K.jsx)(G.a,{children:Object(K.jsx)(F.a.Control,{className:M.a.Form,placeholder:"Write a note...",as:"textarea",value:c,onChange:e=>{r(e.target.value)},rows:2})})}),Object(K.jsx)("button",{className:"".concat(M.a.Button," btn d-block ml-auto"),disabled:!c.trim(),type:"submit",children:"Leave Note"})]})},J=a(117),q=a(41),W=a.n(q),V=a(36),Z=a(55),z=a.n(Z);const Y=n.a.forwardRef(((e,t)=>{let{onClick:a}=e;return Object(K.jsx)("i",{className:"fas fa-ellipsis-v",ref:t,onClick:e=>{e.preventDefault(),a(e)}})})),$=e=>{let{handleEdit:t,handleDelete:a}=e;return Object(K.jsxs)(V.a,{className:"ml-auto",drop:"left",children:[Object(K.jsx)(V.a.Toggle,{as:Y}),Object(K.jsxs)(V.a.Menu,{className:"text-center",popperConfig:{strategy:"fixed"},children:[Object(K.jsx)(V.a.Item,{className:z.a.DropdownItem,onClick:t,"aria-label":"edit",children:Object(K.jsx)("i",{className:"fas fa-edit"})}),Object(K.jsx)(V.a.Item,{className:z.a.DropdownItem,onClick:a,"aria-label":"delete",children:Object(K.jsx)("i",{className:"fas fa-trash-alt"})})]})]})};var ee=e=>{const t=Object(h.useHistory)(),{category:a,content:s,due_date:n,id:o,overdue:c,owner:r,owners:i,priority:l,state:j,title:d,taskPage:u}=e,b=f(),A=(null===b||void 0===b?void 0:b.username)===r||(null===i||void 0===i?void 0:i.includes(null===b||void 0===b?void 0:b.username));return Object(K.jsx)(J.a,{className:W.a.Task,children:Object(K.jsx)(J.a.Body,{children:Object(K.jsxs)(D.a,{children:[Object(K.jsxs)(L.a,{children:[Object(K.jsx)(J.a.Title,{className:W.a.taskTitle,children:Object(K.jsx)("h4",{children:d})}),Object(K.jsx)(J.a.Text,{children:s}),A&&u&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("strong",{children:"Category:"})," ",a," ",Object(K.jsx)("br",{}),Object(K.jsx)("strong",{children:"Due Date:"})," ",n," ",Object(K.jsx)("br",{}),c&&Object(K.jsxs)("span",{className:W.a.Overdue,children:["Overdue by ",(()=>{if(!c)return 0;const e=new Date(n),t=new Date,a=Math.abs(t-e);return Math.ceil(a/864e5)})()," days"]}),Object(K.jsx)("strong",{children:"Priority:"})," ",l," ",Object(K.jsx)("br",{}),Object(K.jsx)("strong",{children:"Status:"})," ",j," ",Object(K.jsx)("br",{})]}),Object(K.jsx)("div",{className:W.a.Comment,children:!u&&Object(K.jsx)(h.Link,{to:"/tasks/".concat(o),children:Object(K.jsx)(_.a,{className:I.a.Button,children:"View Task"})})})]}),u&&A&&Object(K.jsx)(L.a,{xs:2,sm:1,className:"text-right",children:Object(K.jsx)($,{handleEdit:()=>{t.push("/tasks/".concat(o,"/edit"))},handleDelete:async()=>{try{await p.delete("/tasks/".concat(o,"/")),t.goBack()}catch(e){}}})})]})})})},te=a(114),ae=a(56),se=a.n(ae);var ne=function(e){const{id:t,content:a,setShowEditForm:n,setNotes:o}=e,[c,r]=Object(s.useState)(a);return Object(K.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();try{await p.put("/notes/".concat(t,"/"),{content:c.trim()}),o((e=>({...e,results:e.results.map((e=>e.id===t?{...e,content:c.trim(),updated_at:"now"}:e))}))),n(!1)}catch(a){}},children:[Object(K.jsx)(F.a.Group,{className:"pr-1",children:Object(K.jsx)(F.a.Control,{className:M.a.Form,as:"textarea",value:c,onChange:e=>{r(e.target.value)},rows:2})}),Object(K.jsxs)("div",{className:"text-right",children:[Object(K.jsx)("button",{className:M.a.Button,onClick:()=>n(!1),type:"button",children:"cancel"}),Object(K.jsx)("button",{className:M.a.Button,disabled:!a.trim(),type:"submit",children:"save"})]})]})};var oe=e=>{let{owner:t,updated_at:a,content:n,id:o,setNotes:c}=e;const[r,i]=Object(s.useState)(!1),l=f(),j=(null===l||void 0===l?void 0:l.username)===t;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("hr",{}),Object(K.jsxs)(te.a,{children:[Object(K.jsxs)(te.a.Body,{className:"align-self-center ml-2",children:[Object(K.jsx)("span",{className:se.a.Owner,children:t}),Object(K.jsx)("span",{className:se.a.Date,children:a}),r?Object(K.jsx)(ne,{id:o,content:n,setNotes:c,setShowEditForm:i}):Object(K.jsx)("p",{children:n})]}),j&&!r&&Object(K.jsx)($,{handleEdit:()=>i(!0),handleDelete:async()=>{try{await p.delete("/notes/".concat(o,"/")),c((e=>({...e,results:e.results.filter((e=>e.id!==o))})))}catch(e){}}})]})]})};var ce=function(){const{id:e}=Object(h.useParams)(),[t,a]=Object(s.useState)({results:[]}),n=f(),o=null===n||void 0===n?void 0:n.profile_image,[c,r]=Object(s.useState)({results:[]});return Object(s.useEffect)((()=>{(async()=>{try{const[{data:t},{data:s}]=await Promise.all([x.get("/tasks/".concat(e)),x.get("/notes/?task=".concat(e))]);a(t),r(s)}catch(t){}})()}),[e]),Object(K.jsx)(D.a,{className:"h-100",children:Object(K.jsxs)(L.a,{className:"py-2 p-0 p-lg-2",children:[t&&Object(K.jsx)(ee,{...t,setTasks:a,taskPage:!0,onTaskPage:!0}),Object(K.jsxs)(l.a,{className:i.a.Content,children:[n?Object(K.jsx)(X,{profile_id:n.profile_id,profileImage:o,task:e,setTask:a,onNoteCreate:e=>{r((t=>({...t,results:[e,...t.results]})))}}):c.results.length?"Notes":null,c.results.length?c.results.map((e=>Object(K.jsx)(oe,{...e,setNotes:r},e.id))):Object(K.jsx)("span",{})]})]})})},re=a(73),ie=a(57),le=a.n(ie);var je=()=>{const[e,t]=Object(s.useState)([]),[a,n]=Object(s.useState)(""),[o,c]=Object(s.useState)(""),[r,i]=Object(s.useState)(!1),[j,d]=Object(s.useState)(1),[u,b]=Object(s.useState)(!0),[A,O]=Object(s.useState)(null),p=f(),m=Object(s.useCallback)((async()=>{1===j&&i(!0);try{let e="/tasks/?ordering=due_date&page=".concat(j);a&&(e+="&search=".concat(a)),o&&(e+="&category=".concat(o));const{data:s}=await x.get(e);t((e=>1===j?s.results:[...e,...s.results])),b(null!==s.next)}catch(e){}finally{1===j&&i(!1)}}),[a,o,j]);Object(s.useEffect)((()=>{m()}),[m]);return p?Object(K.jsxs)(l.a,{className:le.a.TasksPage,children:[Object(K.jsx)(D.a,{className:"my-4",children:Object(K.jsx)(L.a,{md:12,children:Object(K.jsxs)(F.a,{onSubmit:e=>{e.preventDefault(),m()},children:[Object(K.jsx)(G.a,{className:"mb-3",children:Object(K.jsx)(F.a.Control,{placeholder:"Search for tasks",onChange:e=>{const a=e.target.value;A&&clearTimeout(A),O(setTimeout((()=>{n(a),d(1),t([])}),1e3))}})}),Object(K.jsx)(F.a.Group,{controlId:"categorySelect",children:Object(K.jsx)(F.a.Control,{as:"select",value:o,onChange:e=>{c(e.target.value),d(1),t([])},children:["All","WORK","PERSONAL","HOME","HEALTH","FINANCE","EDUCATION","SHOPPING","TRAVEL","HOBBIES","SOCIAL"].map((e=>Object(K.jsx)("option",{value:"All"===e?"":e,children:e},e)))})})]})})}),Object(K.jsx)(D.a,{children:Object(K.jsxs)(L.a,{md:12,children:[Object(K.jsx)(re.a,{dataLength:e.length,next:()=>d((e=>e+1)),hasMore:u,loader:Object(K.jsx)("div",{className:"text-center",children:"Loading..."}),children:e.map((e=>Object(K.jsx)(ee,{...e,setTasks:t,taskPage:!1},e.id)))}),!r&&0===e.length&&Object(K.jsx)("p",{children:"No tasks found."})]})})]}):Object(K.jsx)(l.a,{className:le.a.TasksPage,children:Object(K.jsx)(D.a,{className:"mt-5",children:Object(K.jsxs)(L.a,{md:12,className:"text-center",children:[Object(K.jsx)("h2",{children:"Please Log In"}),Object(K.jsx)("p",{children:"To view tasks, you need to log in."}),Object(K.jsx)(h.Link,{to:"/signin",children:Object(K.jsx)(_.a,{variant:"primary",children:"Log In"})}),Object(K.jsxs)("p",{className:"mt-3",children:["Don't have an account? ",Object(K.jsx)(h.Link,{to:"/signup",children:"Sign Up"})]})]})})})};var de=()=>{var e,t,a,n,o;const[c,r]=Object(s.useState)({title:"",category:"",content:"",priority:"",due_date:""}),[j,d]=Object(s.useState)({}),{title:u,category:b,content:A,priority:O,due_date:p}=c,m=Object(h.useHistory)(),{id:v}=Object(h.useParams)();Object(s.useEffect)((()=>{(async()=>{try{const{data:e}=await x.get("/tasks/".concat(v,"/")),{title:t,category:a,content:s,priority:n,due_date:o}=e;r({title:t,category:a,content:s,priority:n,due_date:o})}catch(e){}})()}),[m,v]);const g=e=>{if("due_date"===e.target.name&&e.target.value){const t=new Date(e.target.value).toISOString();r({...c,[e.target.name]:t})}else r({...c,[e.target.name]:e.target.value})};return Object(K.jsx)(D.a,{className:E.a.Row,children:Object(K.jsx)(L.a,{className:"my-auto py-2 p-md-2",md:6,children:Object(K.jsxs)(l.a,{className:"".concat(i.a.Content," ").concat(E.a.Container," d-flex flex-column justify-content-center"),children:[Object(K.jsx)("h1",{className:E.a.Header,children:"Edit Task"}),Object(K.jsxs)(F.a,{onSubmit:async e=>{e.preventDefault();const t=new FormData;t.append("title",u),t.append("category",b),t.append("content",A),t.append("priority",O),t.append("due_date",p);try{await x.put("/tasks/".concat(v,"/"),t),m.goBack()}catch(n){var a,s;if(401!==(null===(a=n.response)||void 0===a?void 0:a.status))d(null===(s=n.response)||void 0===s?void 0:s.data)}},children:[Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Title"}),Object(K.jsx)(F.a.Control,{className:E.a.Input,type:"text",name:"title",value:u,onChange:g})]}),null===j||void 0===j||null===(e=j.title)||void 0===e?void 0:e.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Category"}),Object(K.jsxs)(F.a.Control,{as:"select",className:E.a.Input,name:"category",value:b,onChange:g,children:[Object(K.jsx)("option",{value:"",children:"Choose..."}),Object(K.jsx)("option",{value:"WORK",children:"Work"}),Object(K.jsx)("option",{value:"PERSONAL",children:"Personal"}),Object(K.jsx)("option",{value:"HOME",children:"Home"}),Object(K.jsx)("option",{value:"HEALTH",children:"Health"}),Object(K.jsx)("option",{value:"FINANCE",children:"Finance"}),Object(K.jsx)("option",{value:"EDUCATION",children:"Education"}),Object(K.jsx)("option",{value:"SHOPPING",children:"Shopping"}),Object(K.jsx)("option",{value:"TRAVEL",children:"Travel"}),Object(K.jsx)("option",{value:"HOBBIES",children:"Hobbies"}),Object(K.jsx)("option",{value:"SOCIAL",children:"Social"})]})]}),null===j||void 0===j||null===(t=j.category)||void 0===t?void 0:t.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Content"}),Object(K.jsx)(F.a.Control,{as:"textarea",rows:3,className:E.a.Input,name:"content",value:A,onChange:g})]}),null===j||void 0===j||null===(a=j.content)||void 0===a?void 0:a.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Priority"}),Object(K.jsxs)(F.a.Control,{as:"select",className:E.a.Input,name:"priority",value:O,onChange:g,children:[Object(K.jsx)("option",{value:"",children:"Select Priority"}),Object(K.jsx)("option",{value:"LOW",children:"Low"}),Object(K.jsx)("option",{value:"MEDIUM",children:"Medium"}),Object(K.jsx)("option",{value:"HIGH",children:"High"})]})]}),null===j||void 0===j||null===(n=j.priority)||void 0===n?void 0:n.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)(F.a.Group,{className:E.a.FormGroup,children:[Object(K.jsx)(F.a.Label,{children:"Due Date"}),Object(K.jsx)(F.a.Control,{type:"date",className:E.a.Input,name:"due_date",value:p,onChange:g})]}),null===j||void 0===j||null===(o=j.due_date)||void 0===o?void 0:o.map(((e,t)=>Object(K.jsx)(H.a,{variant:"warning",children:e},t))),Object(K.jsxs)("div",{className:I.a.centerButton,children:[Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),onClick:()=>m.goBack(),children:"Cancel"}),Object(K.jsx)(_.a,{className:"".concat(I.a.Button," ").concat(I.a.wide),type:"submit",children:"Update Task"})]})]})]})})})},ue=a(74),be=a.n(ue);var he=()=>Object(K.jsx)("div",{className:be.a.NotFound,children:Object(K.jsx)("h2",{children:"Sorry, Page not found !"})});var Ae=function(){return Object(K.jsxs)("div",{className:i.a.App,children:[Object(K.jsx)(P,{}),Object(K.jsx)(l.a,{className:i.a.Main,children:Object(K.jsxs)(m.Switch,{children:[Object(K.jsx)(m.Route,{exact:!0,path:"/",render:()=>Object(K.jsx)(je,{})}),Object(K.jsx)(m.Route,{exact:!0,path:"/signin",render:()=>Object(K.jsx)(T,{})}),Object(K.jsx)(m.Route,{exact:!0,path:"/signup",render:()=>Object(K.jsx)(R,{})}),Object(K.jsx)(m.Route,{exact:!0,path:"/tasks/create",render:()=>Object(K.jsx)(Q,{})}),Object(K.jsx)(m.Route,{exact:!0,path:"/tasks/:id/edit",render:()=>Object(K.jsx)(de,{})}),Object(K.jsx)(m.Route,{exact:!0,path:"/tasks/:id",render:()=>Object(K.jsx)(ce,{})}),Object(K.jsx)(m.Route,{render:()=>Object(K.jsx)(he,{})})]})})]})};var Oe=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,118)).then((t=>{let{getCLS:a,getFID:s,getFCP:n,getLCP:o,getTTFB:c}=t;a(e),s(e),n(e),o(e),c(e)}))},xe=a(53);c.a.render(Object(K.jsx)(xe.a,{children:Object(K.jsx)(k,{children:Object(K.jsx)(Ae,{})})}),document.getElementById("root")),Oe()},18:function(e,t,a){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Content:"App_Content__ZaMNr"}},20:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__1amC6",dropdown:"NavBar_dropdown__DnB2T",NavLink:"NavBar_NavLink__34ons",Active:"NavBar_Active__3PBZb"}},33:function(e,t,a){e.exports={Form:"NoteCreateEditForm_Form__G8Z1D",Button:"NoteCreateEditForm_Button__3fo9D"}},41:function(e,t,a){e.exports={Task:"Task_Task__3r7K9",Comment:"Task_Comment__1D6VB",taskTitle:"Task_taskTitle__1AvDP"}},55:function(e,t,a){e.exports={DropdownItem:"MoreDropdown_DropdownItem__2E4UM",Absolute:"MoreDropdown_Absolute__2RO70"}},56:function(e,t,a){e.exports={Owner:"Note_Owner__2NSkh",Date:"Note_Date__1qg_H"}},57:function(e,t,a){e.exports={SearchBar:"TasksPage_SearchBar__hCMay",SearchIcon:"TasksPage_SearchIcon__7YqSy"}},7:function(e,t,a){e.exports={Row:"SignForms_Row__gR5vh",Input:"SignForms_Input__2X_jq",Header:"SignForms_Header__18Dln"}},74:function(e,t,a){e.exports={NotFound:"NotFound_NotFound__AmwKj"}},79:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.f9f8db69.chunk.js.map