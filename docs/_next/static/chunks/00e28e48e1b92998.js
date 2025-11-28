(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38141,e=>{"use strict";var t=e.i(43476),n=e.i(71645);function i({onMenuAction:e,onSearch:i}){let[a,s]=(0,n.useState)(null),[o,r]=(0,n.useState)("");return(0,t.jsxs)("div",{className:"menu-bar",children:[(0,t.jsxs)("div",{className:"menu-left",children:[(0,t.jsx)("div",{className:"app-icon",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M14.5 1L9 3.5 3.5 1 1 3.5v9L3.5 15 9 12.5 14.5 15 16 12.5v-9L14.5 1z"})})}),[{label:"File",items:["Save","Close"]},{label:"Edit",items:["Find"]},{label:"View",items:["Explorer","Search"]},{label:"Terminal",items:["New Terminal"]}].map(n=>(0,t.jsxs)("div",{className:"menu-item-wrapper",children:[(0,t.jsx)("div",{className:`menu-item ${a===n.label?"active":""}`,onClick:()=>{var e;s(a===(e=n.label)?null:e)},children:n.label}),a===n.label&&(0,t.jsx)("div",{className:"menu-dropdown",children:n.items.map(n=>(0,t.jsx)("div",{className:"menu-dropdown-item",onClick:()=>{console.log(`Menu item clicked: ${n}`),e&&e(n),s(null)},children:n},n))})]},n.label))]}),(0,t.jsx)("div",{className:"menu-center",children:(0,t.jsxs)("div",{className:"search-container",children:[(0,t.jsx)("svg",{className:"search-icon",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm4.5-.5a5.5 5.5 0 1 1 1.1-1.1l3 3-.8.8-3-3z"})}),(0,t.jsx)("input",{type:"text",className:"search-input",placeholder:"Search files (Ctrl+P)",value:o,onChange:e=>{let t=e.target.value;r(t),i&&i(t)},onKeyPress:e=>{"Enter"===e.key&&i&&i(o)}}),(0,t.jsx)("div",{className:"search-shortcut",children:"⌘ P"})]})}),(0,t.jsx)("div",{className:"menu-right",children:(0,t.jsxs)("div",{className:"window-controls",children:[(0,t.jsx)("button",{className:"window-button minimize",title:"Minimize",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:(0,t.jsx)("rect",{x:"2",y:"5",width:"8",height:"1",fill:"currentColor"})})}),(0,t.jsx)("button",{className:"window-button maximize",title:"Maximize",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:(0,t.jsx)("rect",{x:"2",y:"2",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"1"})})}),(0,t.jsx)("button",{className:"window-button close",title:"Close",children:(0,t.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",children:(0,t.jsx)("path",{d:"M2 2 L10 10 M10 2 L2 10",stroke:"currentColor",strokeWidth:"1"})})})]})})]})}function a({onFileSelect:e,activeFile:i,filterQuery:a=""}){let[s,o]=(0,n.useState)(new Set(["portfolio"])),r=(n,l=0)=>{let c=s.has(n.name),d=n.children?.filter(e=>!a||e.name.toLowerCase().includes(a.toLowerCase()));return a&&d?.length===0?null:(0,t.jsxs)("div",{className:"folder",children:[(0,t.jsxs)("div",{className:"folder-header",onClick:()=>{var e;let t;return e=n.name,void((t=new Set(s)).has(e)?t.delete(e):t.add(e),o(t))},style:{paddingLeft:`${12*l+8}px`},children:[(0,t.jsx)("span",{className:`folder-icon ${c?"":"collapsed"}`,children:"▼"}),(0,t.jsxs)("span",{children:["📁 ",n.name]})]}),c&&d&&(0,t.jsx)("div",{className:"folder-files",children:d.map(n=>"folder"===n.type?r(n,l+1):(0,t.jsxs)("div",{className:`file-item ${i===n.name?"active":""}`,onClick:()=>e(n),style:{paddingLeft:`${(l+1)*12+8}px`},children:[(0,t.jsx)("span",{className:`file-icon ${n.extension}`,children:(e=>{switch(e){case"md":default:return"📄";case"json":return"{}";case"tsx":case"ts":return"TS";case"js":return"JS"}})(n.extension)}),(0,t.jsx)("span",{className:"file-name",children:n.name})]},n.name))})]},n.name)};return(0,t.jsx)("div",{className:"file-explorer",children:[{name:"portfolio",type:"folder",children:[{name:"README.md",type:"file",extension:"md"},{name:"about.md",type:"file",extension:"md"},{name:"skills.json",type:"file",extension:"json"},{name:"projects.tsx",type:"file",extension:"tsx"},{name:"contact.ts",type:"file",extension:"ts"}]}].map(e=>r(e))})}function s({fileName:e,content:n,language:i}){let a=n.split("\n"),s=e=>{let n,i=[],a=0,s=/\[([^\]]+)\]\(([^)]+)\)/g,r=0;for(;null!==(n=s.exec(e));){if(n.index>r){let t=e.substring(r,n.index);i.push(...o(t,a++))}let s=n[1],l=n[2];i.push((0,t.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"markdown-link",style:{color:"var(--accent-blue)",textDecoration:"underline"},children:s},`link-${a++}`)),r=n.index+n[0].length}if(r<e.length){let t=e.substring(r);i.push(...o(t,a++))}return i.length>0?i:e},o=(e,n)=>{let i,a=[],s=/\*\*([^*]+)\*\*/g,o=0,r=n;for(;null!==(i=s.exec(e));)i.index>o&&a.push(e.substring(o,i.index)),a.push((0,t.jsx)("strong",{className:"markdown-bold",style:{fontWeight:"600"},children:i[1]},`bold-${r++}`)),o=i.index+i[0].length;return o<e.length&&a.push(e.substring(o)),a.length>0?a:[e]},r=(e,n)=>{let i="  ".repeat(n);if("string"==typeof e)return(0,t.jsxs)("span",{className:"json-string",children:['"',e,'"']});if("number"==typeof e)return(0,t.jsx)("span",{className:"json-number",children:e});if("boolean"==typeof e)return(0,t.jsx)("span",{className:"json-boolean",children:e.toString()});if(Array.isArray(e))return(0,t.jsxs)(t.Fragment,{children:["[\n",e.map((a,s)=>(0,t.jsxs)("span",{children:[i,"  ",r(a,n+1),s<e.length-1?",\n":"\n"]},s)),i,"]"]});if("object"==typeof e&&null!==e){let a=Object.keys(e);return(0,t.jsxs)(t.Fragment,{children:["{\n",a.map((s,o)=>(0,t.jsxs)("span",{children:[i,"  ",(0,t.jsxs)("span",{className:"json-key",children:['"',s,'"']}),": ",r(e[s],n+1),o<a.length-1?",\n":"\n"]},s)),i,"}"]})}return String(e)},l=e=>e.split("\n").map((e,n)=>{if(!e)return(0,t.jsx)("div",{children:" "},n);let i=[],a=e;for(;a.length>0;){if(a.match(/^\s*\/\/.*/)){i.push({type:"comment",value:a}),a="";continue}let e=a.match(/^(['"`])(.*?)\1/);if(e){i.push({type:"string",value:e[0]}),a=a.slice(e[0].length);continue}let t=/^(interface|const|let|var|function|return|import|export|type|class|extends|implements|from|default)\b/,n=a.match(t);if(n){i.push({type:"keyword",value:n[0]}),a=a.slice(n[0].length);continue}let s=/^(true|false)\b/,o=a.match(s);if(o){i.push({type:"boolean",value:o[0]}),a=a.slice(o[0].length);continue}let r=/^\d+(\.\d+)?/,l=a.match(r);if(l){i.push({type:"number",value:l[0]}),a=a.slice(l[0].length);continue}let c=a.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=:)/);if(c){i.push({type:"property",value:c[0]}),a=a.slice(c[0].length);continue}let d=a.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\()/);if(d){i.push({type:"function",value:d[0]}),a=a.slice(d[0].length);continue}let h=a.match(/^[A-Z][a-zA-Z0-9_$]*/);if(h){i.push({type:"type",value:h[0]}),a=a.slice(h[0].length);continue}let p=a.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);if(p){i.push({type:"variable",value:p[0]}),a=a.slice(p[0].length);continue}let m=a.match(/^\s+/);if(m){i.push({type:"whitespace",value:m[0]}),a=a.slice(m[0].length);continue}i.push({type:"punctuation",value:a[0]}),a=a.slice(1)}return(0,t.jsx)("div",{children:i.map((e,n)=>{let i="";switch(e.type){case"keyword":i="keyword";break;case"string":i="string";break;case"comment":i="comment";break;case"number":i="number";break;case"boolean":i="boolean";break;case"property":i="property";break;case"function":i="function";break;case"type":i="type";break;default:i=""}return(0,t.jsx)("span",{className:i,children:e.value},n)})},n)});return(0,t.jsx)("div",{className:"editor-content",children:(()=>{let o,c;if("markdown"===i){let i,a,o,r,l,c=e.toLowerCase().includes("readme");return(0,t.jsx)("div",{className:`markdown-content ${c?"readme-signature":""}`,children:(i=n.split("\n"),a=[],o=[],r=0,l=()=>{o.length>0&&(a.push((0,t.jsx)("ul",{style:{marginLeft:"20px",marginBottom:"16px"},children:o},`list-${r++}`)),o=[])},i.forEach(e=>{e.startsWith("# ")?(l(),a.push((0,t.jsx)("h1",{className:"fade-in",style:{marginBottom:"16px",fontSize:"32px",fontWeight:"bold"},children:e.substring(2)},r++))):e.startsWith("## ")?(l(),a.push((0,t.jsx)("h2",{className:"fade-in",style:{marginTop:"24px",marginBottom:"12px",fontSize:"24px",fontWeight:"600"},children:e.substring(3)},r++))):e.startsWith("### ")?(l(),a.push((0,t.jsx)("h3",{className:"fade-in",style:{marginTop:"20px",marginBottom:"10px",fontSize:"18px",fontWeight:"600"},children:e.substring(4)},r++))):e.startsWith("- ")?o.push((0,t.jsx)("li",{className:"fade-in",style:{marginBottom:"8px"},children:s(e.substring(2))},r++)):"---"===e.trim()?(l(),a.push((0,t.jsx)("hr",{style:{margin:"20px 0",border:"none",borderTop:"1px solid var(--border-primary)"}},r++))):""===e.trim()?(l(),a.push((0,t.jsx)("div",{style:{height:"8px"}},r++))):(l(),a.push((0,t.jsx)("p",{className:"fade-in",style:{marginBottom:"12px",lineHeight:"1.6"},children:s(e)},r++)))}),l(),a)})}if("json"===i)return(0,t.jsx)("div",{className:"json-content",children:(e=>{try{let n=JSON.parse(e);return(0,t.jsxs)("div",{className:"code-editor",children:[(0,t.jsx)("div",{className:"line-numbers",children:e.split("\n").map((e,n)=>(0,t.jsx)("div",{children:n+1},n))}),(0,t.jsx)("div",{className:"code-content",children:(0,t.jsx)("pre",{children:r(n,0)})})]})}catch{return(0,t.jsx)("pre",{children:e})}})(n)});return(0,t.jsxs)("div",{className:"code-editor",children:[(0,t.jsx)("div",{className:"line-numbers",children:a.map((e,n)=>(0,t.jsx)("div",{children:n+1},n))}),(0,t.jsx)("div",{className:"code-content",children:(o=n,"tsx"===(c=i)||"ts"===c?l(o):(0,t.jsx)("pre",{children:o}))})]})})()})}function o({isOpen:e}){let[i,a]=(0,n.useState)([{id:1,text:"Hi! I'm your AI assistant. Ask me anything about Fourat's skills, projects, or experience!",sender:"bot",timestamp:new Date}]),[s,o]=(0,n.useState)(""),[r,l]=(0,n.useState)(!1),c=(0,n.useRef)(null),d=[{keywords:["skills","technologies","tech stack","what can you do","expertise"],response:"Fourat is a Full Stack Developer with expertise in React, Next.js, TypeScript, Node.js, and Python. He's also skilled in UI/UX design using Figma and Adobe XD, and has experience with databases like PostgreSQL and MongoDB."},{keywords:["projects","portfolio","work","built","created"],response:"Fourat has worked on various projects including an E-Commerce Platform with Next.js, a comprehensive Design System, an Analytics Dashboard with real-time data visualization, and a SaaS Platform serving 1000+ users. Check out the projects.tsx file for more details!"},{keywords:["experience","years","background","career"],response:"Fourat has 5+ years of development experience, has completed 50+ projects, and worked with 30+ happy clients. He specializes in creating seamless digital experiences that combine beautiful design with robust functionality."},{keywords:["contact","email","reach","hire","available"],response:"You can reach Fourat at contact@fouratidani.com or connect on LinkedIn at linkedin.com/in/fourat-idani. He's currently open to new opportunities and available for remote work worldwide!"},{keywords:["design","ui","ux","designer"],response:"Fourat is also a skilled Graphic Designer and UI/UX Designer! He uses tools like Figma, Adobe XD, Illustrator, and Photoshop. His design proficiency is rated at 92%, and he's created complete brand identity packages and mobile app designs."},{keywords:["frontend","front-end","react","nextjs"],response:"Fourat's frontend skills include React, Next.js, Vue.js, TypeScript, and modern CSS frameworks like Tailwind CSS and Sass. His frontend proficiency is rated at 95%!"},{keywords:["backend","back-end","server","api"],response:"On the backend, Fourat works with Node.js, Python, and Java. He's experienced with Express, Django, Spring Boot, and databases like PostgreSQL, MongoDB, and Redis. Backend proficiency: 88%."},{keywords:["hello","hi","hey","greetings"],response:"Hello! 👋 I'm here to help you learn more about Fourat Idani. Feel free to ask about his skills, projects, experience, or how to contact him!"},{keywords:["thanks","thank you","appreciate"],response:"You're welcome! Feel free to ask if you have any other questions about Fourat's work or background. 😊"},{keywords:["help","what can you tell me","info","information"],response:"I can tell you about Fourat's skills, projects, work experience, design capabilities, and how to contact him. Just ask me anything you'd like to know!"}];(0,n.useEffect)(()=>{c.current?.scrollIntoView({behavior:"smooth"})},[i]);let h=()=>{if(!s.trim())return;let e={id:i.length+1,text:s,sender:"user",timestamp:new Date};a([...i,e]),o(""),l(!0),setTimeout(()=>{let e={id:i.length+2,text:(e=>{let t=e.toLowerCase();for(let e of d)if(e.keywords.some(e=>t.includes(e)))return e.response;return"I'm not sure about that. Try asking me about Fourat's skills, projects, experience, or how to contact him!"})(s),sender:"bot",timestamp:new Date};a(t=>[...t,e]),l(!1)},1e3+1e3*Math.random())};return e?(0,t.jsxs)("div",{className:"copilot-panel",children:[(0,t.jsxs)("div",{className:"copilot-header",children:[(0,t.jsx)("div",{className:"copilot-icon",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}),(0,t.jsxs)("div",{className:"copilot-title",children:[(0,t.jsx)("div",{className:"copilot-name",children:"GitHub Copilot"}),(0,t.jsx)("div",{className:"copilot-subtitle",children:"Chat"})]})]}),(0,t.jsxs)("div",{className:"copilot-messages",children:[i.map(e=>(0,t.jsxs)("div",{className:`copilot-message ${e.sender}`,children:[(0,t.jsx)("div",{className:"message-avatar",children:"bot"===e.sender?(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}):(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})})}),(0,t.jsxs)("div",{className:"message-content-wrapper",children:[(0,t.jsx)("div",{className:"message-sender-name",children:"bot"===e.sender?"Copilot":"You"}),(0,t.jsx)("div",{className:"message-text",children:e.text})]})]},e.id)),r&&(0,t.jsxs)("div",{className:"copilot-message bot",children:[(0,t.jsx)("div",{className:"message-avatar",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})}),(0,t.jsxs)("div",{className:"message-content-wrapper",children:[(0,t.jsx)("div",{className:"message-sender-name",children:"Copilot"}),(0,t.jsxs)("div",{className:"typing-indicator",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]})]}),(0,t.jsx)("div",{ref:c})]}),1===i.length&&(0,t.jsx)("div",{className:"copilot-suggestions",children:["What are your skills?","Tell me about your projects","How can I contact you?","What's your experience?"].map((e,n)=>(0,t.jsxs)("button",{className:"copilot-suggestion",onClick:()=>{o(e)},children:[(0,t.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[(0,t.jsx)("path",{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"}),(0,t.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]}),e]},n))}),(0,t.jsxs)("div",{className:"copilot-input-container",children:[(0,t.jsx)("input",{type:"text",className:"copilot-input",placeholder:"Ask Copilot...",value:s,onChange:e=>o(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h())}}),(0,t.jsx)("button",{className:"copilot-send",onClick:h,disabled:!s.trim(),children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M15.854 7.146l-7-7a.5.5 0 0 0-.708.708L14.293 7H.5a.5.5 0 0 0 0 1h13.793l-6.147 6.146a.5.5 0 0 0 .708.708l7-7a.5.5 0 0 0 0-.708z"})})})]})]}):null}function r({isOpen:e,onClose:i}){let[a,s]=(0,n.useState)(""),[o,r]=(0,n.useState)(["Welcome to the Portfolio Terminal!",'Type "help" for available commands.',""]),[l,c]=(0,n.useState)([]),[d,h]=(0,n.useState)(-1),p=(0,n.useRef)(null),m=(0,n.useRef)(null);(0,n.useEffect)(()=>{e&&p.current&&p.current.focus()},[e]),(0,n.useEffect)(()=>{m.current&&(m.current.scrollTop=m.current.scrollHeight)},[o]);let u={help:()=>`Available commands:
  help       - Show this help message
  about      - About Fourat Idani
  skills     - List technical skills
  projects   - Show recent projects
  contact    - Contact information
  clear      - Clear terminal
  github     - Open GitHub profile
  linkedin   - Open LinkedIn profile`,about:()=>`Fourat Idani - Full Stack Developer | Graphic Designer | UI/UX Designer

5+ years of experience building modern web applications and creating stunning designs.
Passionate about combining beautiful design with robust functionality.`,skills:()=>`Technical Skills:
  Frontend:  React, Next.js, TypeScript, Tailwind CSS
  Backend:   Node.js, Python, Express, Django
  Design:    Figma, Adobe XD, Illustrator, Photoshop
  Database:  PostgreSQL, MongoDB, Redis
  DevOps:    Docker, AWS, Vercel`,projects:()=>`Recent Projects:
  • E-Commerce Platform - Next.js, Node.js, MongoDB
  • Design System - React, TypeScript, Storybook
  • Analytics Dashboard - React, D3.js, Python
  • SaaS Platform - Next.js, Prisma, PostgreSQL`,contact:()=>`Contact Information:
  Email:     contact@fouratidani.com
  LinkedIn:  linkedin.com/in/fourat-idani
  GitHub:    github.com
  
Available for remote work worldwide!`,clear:()=>(r([""]),""),github:()=>(window.open("https://github.com","_blank"),"Opening GitHub profile..."),linkedin:()=>(window.open("https://linkedin.com/in/fourat-idani","_blank"),"Opening LinkedIn profile...")};return e?(0,t.jsxs)("div",{className:"terminal-panel",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsxs)("div",{className:"terminal-title",children:[(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[(0,t.jsx)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2h15a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-11zM1 3v10h14V3H1z"}),(0,t.jsx)("path",{d:"M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"})]}),(0,t.jsx)("span",{children:"TERMINAL"})]}),(0,t.jsx)("button",{className:"terminal-close",onClick:i,title:"Close Terminal",children:(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:(0,t.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})})]}),(0,t.jsxs)("div",{className:"terminal-content",ref:m,children:[o.map((e,n)=>(0,t.jsx)("div",{className:"terminal-line",children:e},n)),(0,t.jsxs)("div",{className:"terminal-input-line",children:[(0,t.jsx)("span",{className:"terminal-prompt",children:"$"}),(0,t.jsx)("input",{ref:p,type:"text",className:"terminal-input",value:a,onChange:e=>s(e.target.value),onKeyDown:e=>{if("Enter"===e.key)(e=>{let t=e.trim().toLowerCase();if(!t)return;let n=u[t]?u[t]():`Command not found: ${t}. Type "help" for available commands.`;"clear"!==t&&r([...o,`$ ${e}`,n,""]),c([...l,e]),h(-1)})(a),s("");else if("ArrowUp"===e.key){if(e.preventDefault(),l.length>0){let e=-1===d?l.length-1:Math.max(0,d-1);h(e),s(l[e])}}else if("ArrowDown"===e.key&&(e.preventDefault(),-1!==d)){let e=d+1;e>=l.length?(h(-1),s("")):(h(e),s(l[e]))}},spellCheck:!1})]})]})]}):null}function l(){let[e,l]=(0,n.useState)(!0),[c,d]=(0,n.useState)("README.md"),[h,p]=(0,n.useState)(["README.md"]),[m,u]=(0,n.useState)(!1),[g,x]=(0,n.useState)(""),[v,f]=(0,n.useState)("explorer"),[j,b]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=()=>{b(window.innerWidth<=640)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let y={"README.md":{name:"README.md",language:"markdown",content:`# FOURAT IDANI

## Computer Science Graduate | Full-Stack Developer

📧 fouratidani2@gmail.com | 📱 +216 98 365 504  
🔗 [github.com/fouratidani](https://github.com/fouratidani) | [linkedin.com/in/fourat-idani](https://linkedin.com/in/fourat-idani)

---

## Profile

Creative and detail-oriented full-stack developer skilled in React.js, Node.js, and React Native. Passionate about building responsive, user-centered web and mobile applications that combine functionality with design. Dedicated to learning modern technologies, collaborating with teams, and delivering impactful digital solutions.

---

## Education

**B.Sc. Computer Science** - ISITCom Sousse (2023-Ongoing)  
Multimedia & Software Development

**High School Diploma in Mathematics** - Hammem Sousse 2 HS (2021-2022)

---

*Navigate through the files in the explorer to learn more about my skills, experience, and projects.*`},"about.md":{name:"about.md",language:"markdown",content:`# About Me

## Background

Hello! I'm **Fourat Idani**, a Computer Science graduate and Full-Stack Developer currently pursuing my B.Sc. in Computer Science at ISITCom Sousse, specializing in Multimedia & Software Development.

## Profile

Creative and detail-oriented full-stack developer skilled in React.js, Node.js, and React Native. I'm passionate about building responsive, user-centered web and mobile applications that combine functionality with design. Dedicated to learning modern technologies, collaborating with teams, and delivering impactful digital solutions.

## What Drives Me

I believe in creating digital experiences that not only work flawlessly but also provide exceptional user experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that make a real impact.

## Philosophy

I approach every project with:

- **Attention to Detail**: Every line of code and user interaction matters
- **User-Centric Design**: Building applications that users love to use
- **Continuous Learning**: Staying current with modern technologies and best practices
- **Team Collaboration**: Working effectively with diverse teams to achieve common goals
- **Problem Solving**: Finding creative solutions to complex technical challenges

## Professional Experience

### EasyBank | Information Technology Developer (Internship)
*Nov 2025 - Present*
- Contribute to the design, development, and improvement of digital financial solutions within a modern, fast-paced fintech environment
- Focus on building reliable and scalable features that enhance the user experience
- Support the company’s mission of delivering secure and accessible digital banking services

### OORB Open Organic Robotics | Graphic Designer (Internship)
*Jul 2025 - Sep 2025*
- Contributed to both graphic design and community management by creating engaging visual content
- Developed branding assets and managed online communications
- Worked on building awareness of the startup’s vision in robotics and innovation
- Fostered an active community through content creation and social media management

### Orange Digital Center Tunisie | Full-stack Developer (Internship)
*Jul 2025 - Aug 2025*
- Worked with an amazing team to build innovative digital solutions
- Gained hands-on experience in full-stack development using React.js, NestJS, Node.js, and PostgreSQL
- Used Tailwind CSS to design responsive, user-friendly interfaces
- Sharpened technical skills and improved problem-solving abilities
- Contributed to the development of scalable, high-performance web applications

### Digit-R | Frontend Developer (Internship)
*Aug 2024 - Sep 2024*
- Collaborated with other interns on a project using React as the main framework and Node.js
- Developed frontend components and features

## Benevolent Experience

### IEEE Leadership Roles

- **Webmaster, IEEE AESS SBC** (2025-Ongoing): Maintained chapter website, improved UX/UI, and managed event publishing
- **Media Chief, IEEE ESSTHS SB** (2025-Ongoing): Led social media strategy, event branding, and visual content creation. Increased audience engagement across platforms
- **Technical Challenge Chief, IAS TAM 4.0** (2024-2025): Designed and supervised technical challenges and mentored participants
- **Treasurer, IEEE CS SBC** (2023): Handled budgets, managed sponsor relations, and ensured financial transparency

## Languages

- **Arabic**: Fluent
- **English**: Proficient
- **French**: Operational`},"skills.json":{name:"skills.json",language:"json",content:JSON.stringify({technical_skills:{frontend:{frameworks:["React.js","Next.js","React Native"],languages:["TypeScript","JavaScript","HTML5","CSS3"],styling:["Tailwind CSS","Sass"]},backend:{languages:["Node.js","PHP","Java","Python","C/C++"],frameworks:["Express.js","NestJS","Spring Boot"],databases:["PostgreSQL","MySQL","MongoDB"]},mobile:{framework:"React Native",focus:"Cross-platform mobile development"},tools:{version_control:["Git","GitHub","GitLab"],design:["Figma","Adobe XD"],other:["VS Code","Postman","Docker"]}},soft_skills:["Teamwork","Problem Solving","Adaptability","Leadership","Communication","Project Management"],certificates:["Cisco: Networking Academy Learn-A-Thon (2025)","IBM: Node and Express Essentials (2024)","Meta: Front-End Development Certificate (2024)"]},null,2)},"experience.tsx":{name:"experience.tsx",language:"tsx",content:`interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: 'freelance' | 'internship';
  description: string[];
  technologies: string[];
}

const experience: Experience[] = [
  {
    id: 1,
    company: "EasyBank",
    role: "Information Technology Developer",
    period: "Nov 2025 - Present",
    type: "internship",
    description: [
      "Contribute to the design, development, and improvement of digital financial solutions within a modern, fast-paced fintech environment",
      "Focus on building reliable and scalable features that enhance the user experience",
      "Support the company’s mission of delivering secure and accessible digital banking services"
    ],
    technologies: ["TypeScript", "Next.js"]
  },
  {
    id: 2,
    company: "OORB Open Organic Robotics",
    role: "Graphic Designer",
    period: "Jul 2025 - Sep 2025",
    type: "internship",
    description: [
      "Contributed to both graphic design and community management by creating engaging visual content",
      "Developed branding assets and managed online communications",
      "Worked on building awareness of the startup’s vision in robotics and innovation",
      "Fostered an active community through content creation and social media management"
    ],
    technologies: ["Community Management", "Graphic Design"]
  },
  {
    id: 3,
    company: "Orange Digital Center Tunisie",
    role: "Full-stack Developer",
    period: "Jul 2025 - Aug 2025",
    type: "internship",
    description: [
      "Worked with an amazing team to build innovative digital solutions",
      "Gained hands-on experience in full-stack development using React.js, NestJS, Node.js, and PostgreSQL",
      "Used Tailwind CSS to design responsive, user-friendly interfaces",
      "Sharpened technical skills and improved problem-solving abilities",
      "Contributed to the development of scalable, high-performance web applications"
    ],
    technologies: ["React.js", "NestJS", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: 4,
    company: "Digit-R",
    role: "Frontend Developer",
    period: "Aug 2024 - Sep 2024",
    type: "internship",
    description: [
      "Collaborated with other interns on a project using React as the main framework and Node.js",
      "Developed frontend components and features"
    ],
    technologies: ["React.js", "Node.js"]
  }
];

export default function ExperienceShowcase() {
  return (
    <div className="experience-container">
      <h1>Professional Experience</h1>
      {experience.map(exp => (
        <ExperienceCard key={exp.id} {...exp} />
      ))}
    </div>
  );
}`},"projects.tsx":{name:"projects.tsx",language:"tsx",content:`export default function Projects() {
    const projects = [
        {
            title: 'University Student Management Cross Platform App (ISEPSI)',
            description: 'A cross-platform mobile application for managing university student data, schedules, and grades for ISEPSI.',
            tags: ['Flutter', 'Firebase', 'Dart', 'Android/iOS'],
            gradient: 'from-blue-600 to-cyan-500',
        },
        {
            title: 'HR Platform (SNSCL)',
            description: 'A comprehensive Human Resources platform for SNSCL to streamline employee management, payroll, and recruitment processes.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            title: 'Drone Controller (IEEE AESS ESSTHS SBC)',
            description: 'Custom drone controller software developed for the IEEE AESS ESSTHS Student Branch Chapter, featuring real-time telemetry and flight modes.',
            tags: ['C++', 'Python', 'Embedded Systems', 'IoT'],
            gradient: 'from-red-500 to-orange-500',
        },
        {
            title: 'AI Quiz Generator from PDF (ISITCOM)',
            description: 'An AI-powered tool that automatically generates quizzes and assessments from PDF course materials for ISITCOM students.',
            tags: ['Python', 'OpenAI API', 'LangChain', 'Streamlit'],
            gradient: 'from-violet-600 to-purple-500',
        },
        {
            title: 'IEEE Tunisia Section Event Tool Box',
            description: 'A suite of digital tools to assist in the organization and management of IEEE Tunisia Section events and conferences.',
            tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
            gradient: 'from-yellow-500 to-amber-500',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Header */}
                            <div className={\`h-48 bg-gradient-to-br \${project.gradient} relative overflow-hidden\`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}`},"contact.ts":{name:"contact.ts",language:"ts",content:`interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
}

interface SocialLinks {
  linkedin: string;
  github: string;
}

const contactInfo: ContactInfo = {
  name: "Fourat IDANI",
  role: "Computer Science Graduate | Full-Stack Developer",
  email: "fouratidani2@gmail.com",
  phone: "+216 98 365 504",
  location: "Tunisia",
  availability: "Searching for an End Of Studies Project Internship"
};

const socialLinks: SocialLinks = {
  linkedin: "https://linkedin.com/in/fourat-idani",
  github: "https://github.com/fouratidani"
};

// Contact preferences
const preferredContactMethods = [
  "Email: fouratidani2@gmail.com",
  "Phone: +216 98 365 504",
  "LinkedIn: linkedin.com/in/fourat-idani",
  "GitHub: github.com/fouratidani"
];

// Areas of interest
const interests = [
  "Full-stack web development",
  "Mobile app development with React Native",
  "End of studies project internship opportunities",
  "Freelance projects",
  "Open-source contributions"
];

export { contactInfo, socialLinks, preferredContactMethods, interests };`}},w=e=>{d(e.name),h.includes(e.name)||p([...h,e.name])},k=e=>{x(e.toLowerCase())},S=t=>{v===t&&e?l(!e):(f(t),l(!0))};return(0,t.jsxs)("div",{className:"vscode-wrapper",children:[!j&&(0,t.jsx)(i,{onMenuAction:e=>{switch(e){case"Explorer":S("explorer");break;case"Search":case"Find":S("search");break;case"Close":if(h.length>0){let e=h.filter(e=>e!==c);p(e),e.length>0&&d(e[e.length-1])}break;case"Save":alert(`Saved ${c}`);break;case"New Terminal":case"Terminal":u(!m);break;default:console.log("Menu action:",e)}},onSearch:k}),(0,t.jsxs)("div",{className:"vscode-container",children:[!j&&(0,t.jsxs)("div",{className:"activity-bar",children:[(0,t.jsx)("div",{className:`activity-icon ${"explorer"===v&&e?"active":""}`,title:"Explorer",onClick:()=>S("explorer"),children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"})})}),(0,t.jsx)("div",{className:`activity-icon ${"search"===v&&e?"active":""}`,title:"Search",onClick:()=>S("search"),children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})})}),(0,t.jsx)("div",{className:`activity-icon ${"source-control"===v&&e?"active":""}`,title:"Source Control",onClick:()=>S("source-control"),children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"})})}),(0,t.jsx)("div",{className:`activity-icon ${"debug"===v&&e?"active":""}`,title:"Run and Debug",onClick:()=>S("debug"),children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M8 5v14l11-7z"})})}),(0,t.jsx)("div",{className:`activity-icon ${"extensions"===v&&e?"active":""}`,title:"Extensions",onClick:()=>S("extensions"),children:(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:(0,t.jsx)("path",{d:"M10.5 4.5c.28 0 .5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5h-2v6h-2.12c-.68-1.75-2.39-3-4.38-3s-3.7 1.25-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.25-3.7-3-4.38V4h6V2c0-.28.22-.5.5-.5s.5.22.5.5v2h2V2c0-.28.22-.5.5-.5zM4 9c1.66 0 3 1.34 3 3s-1.34 3-3 3V9zm11 6c0-1.66 1.34-3 3-3v6c-1.66 0-3-1.34-3-3z"})})})]}),!j&&e&&(0,t.jsxs)("div",{className:"sidebar",children:[(0,t.jsx)("div",{className:"sidebar-header",children:v.toUpperCase().replace("-"," ")}),(0,t.jsx)("div",{className:"sidebar-content",children:(()=>{switch(v){case"explorer":return(0,t.jsx)(a,{onFileSelect:w,activeFile:c,filterQuery:g});case"search":return(0,t.jsxs)("div",{style:{padding:"16px"},children:[(0,t.jsx)("h3",{children:"Search"}),(0,t.jsx)("input",{type:"text",placeholder:"Search in files...",value:g,onChange:e=>k(e.target.value),style:{width:"100%",padding:"8px",marginTop:"8px",background:"var(--bg-tertiary)",border:"1px solid var(--border-primary)",color:"var(--text-primary)",borderRadius:"4px"}}),(0,t.jsx)("p",{style:{marginTop:"16px",fontSize:"12px",color:"var(--text-secondary)"},children:g?`Filtering files by: "${g}"`:"Enter search term to filter files"})]});case"source-control":return(0,t.jsxs)("div",{style:{padding:"16px"},children:[(0,t.jsx)("h3",{children:"Source Control"}),(0,t.jsx)("p",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-secondary)"},children:"Git repository information would appear here."}),(0,t.jsxs)("div",{style:{marginTop:"16px"},children:[(0,t.jsx)("p",{children:"📁 Portfolio Project"}),(0,t.jsx)("p",{style:{fontSize:"11px",color:"var(--text-tertiary)",marginTop:"4px"},children:"Branch: main"})]})]});case"debug":return(0,t.jsxs)("div",{style:{padding:"16px"},children:[(0,t.jsx)("h3",{children:"Run and Debug"}),(0,t.jsx)("p",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-secondary)"},children:"Debug configurations would appear here."})]});case"extensions":return(0,t.jsxs)("div",{style:{padding:"16px"},children:[(0,t.jsx)("h3",{children:"Extensions"}),(0,t.jsx)("p",{style:{marginTop:"8px",fontSize:"12px",color:"var(--text-secondary)"},children:"Recommended extensions:"}),(0,t.jsxs)("ul",{style:{marginTop:"12px",fontSize:"12px",paddingLeft:"20px"},children:[(0,t.jsx)("li",{children:"ESLint"}),(0,t.jsx)("li",{children:"Prettier"}),(0,t.jsx)("li",{children:"GitLens"}),(0,t.jsx)("li",{children:"Tailwind CSS IntelliSense"})]})]})}})()})]}),(0,t.jsxs)("div",{className:"main-content-area",children:[(0,t.jsxs)("div",{className:"editor-container",children:[!j&&(0,t.jsx)("div",{className:"tabs-container",children:h.map(e=>(0,t.jsxs)("div",{className:`tab ${c===e?"active":""}`,onClick:()=>{d(e)},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("span",{className:"tab-close",onClick:t=>{let n;return t.stopPropagation(),void(p(n=h.filter(t=>t!==e)),c===e&&n.length>0&&d(n[n.length-1]))},children:"×"})]},e))}),y[c]&&(0,t.jsx)(s,{fileName:c,content:y[c].content,language:y[c].language})]}),!j&&(0,t.jsx)(r,{isOpen:m,onClose:()=>u(!1)})]}),!j&&(0,t.jsx)(o,{isOpen:!0})]}),(()=>{if(!j)return null;let e=[{name:"Home",file:"README.md",icon:(0,t.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})},{name:"About",file:"about.md",icon:(0,t.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})},{name:"Skills",file:"skills.json",icon:(0,t.jsx)("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"})},{name:"Experience",file:"experience.tsx",icon:(0,t.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"})},{name:"Projects",file:"projects.tsx",icon:(0,t.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})},{name:"Contact",file:"contact.ts",icon:(0,t.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})}];return(0,t.jsx)("div",{className:"mobile-bottom-nav",children:e.map(e=>(0,t.jsxs)("div",{className:`mobile-nav-item ${c===e.file?"active":""}`,onClick:()=>d(e.file),children:[(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"currentColor",children:e.icon}),(0,t.jsx)("span",{children:e.name})]},e.file))})})()]})}e.s(["default",()=>l],38141)}]);