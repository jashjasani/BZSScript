function getC(e){const t=e+"=";e=document.cookie.split("; ");let n="";return e.forEach(e=>{0===e.indexOf(t)&&(n=e.substring(t.length))}),n}const randomMags=async e=>{for(var t=e.length-1;0<t;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}return e};async function renderData(e){if(0!=e.count){var t=document.getElementsByClassName("w-dyn-items w-row")[0];t&&(t.style.display="block");document.getElementsByClassName("no-results-wrapper")[0].style.display="none";var l,o,s,c,t=document.getElementsByClassName("results-count")[0],m=document.createElement("div"),d=(m.className="results-count",document.createElement("span")),p=(d.textContent=e.count+" Ergebnisse von ",document.createElement("span")),u=(p.textContent=e.totalCount,m.append(d,p),t.replaceWith(m),document.createDocumentFragment()),d=document.getElementsByClassName("w-dyn-list")[0];document.getElementsByClassName("w-dyn-items w-row")[0]&&(l=document.getElementsByClassName("w-dyn-items w-row")[0]).remove(),(l=document.createElement("div")).className="w-dyn-items w-row";let n,a,r=(null!=sessionStorage.getItem("auth")&&(n=await(n=await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"GET",headers:{Authorization:sessionStorage.getItem("auth")}})).json(),a=n.subscription||null,n=n.collections,sessionStorage.setItem("collections",JSON.stringify(Array.from(n)))),0);for(q of e.magazines){var g=document.createElement("div"),h=(g.className="archive-col-item w-dyn-item w-col w-col-3",document.createElement("a")),y=(h.href=new URL(document.baseURI).origin+"/magazine?productId="+q.SKU,h.className="produvt-img-wrapper w-inline-block",h.id=q.SKU,document.createElement("img"));y.className="product-img",y.src="https://res.cloudinary.com/wdy-bzs/image/upload/q_15/v1651695832/"+q.Images,y.loading=r<=10?"eager":"lazy",r++,y.alt="product-img";let e="",t="";sessionStorage.getItem("auth")&&null!=a&&a.end_date>Math.floor(Date.now()/1e3)&&"Inspiration"==a.plan&&(document.querySelector(".filter-info").style.display="none",(e=document.createElement("button")).className="btn-specihern left-btn",e.innerText="...",(t=document.createElement("button")).className="btn-specihern",t.innerText=n.some(e=>e.items.includes(q.SKU))?"Gespeichert":"Speichern",e.addEventListener("click",t=>{if(t.preventDefault(),null==t.target.parentElement.querySelector(".container-mode")){null!=document.querySelector("#container-main")&&document.querySelector("#container-main").remove();var n=document.createElement("div"),e=(n.id="container-main",n.className="container-mode",new URL(t.target.parentElement.href)),e=(n.setAttribute("dropdown-key",new URLSearchParams(e.search).get("productId")),document.createElement("input"));if(e.placeholder="Suchen ...",e.className="collection-search",e.addEventListener("input",t=>{var n=t.target.parentElement.querySelectorAll(".collections");if(""==t.target.value)for(let e=0;e<n.length-1;e++)n[e].style.display="flex";for(let e=0;e<n.length-1;e++)n[e].innerText.toLowerCase().startsWith(t.target.value.toLowerCase())?n[e].innerText.toLowerCase().startsWith(t.target.value.toLowerCase())&&"none"==n[e].style.display&&(n[e].style.display="flex"):n[e].style.display="none"}),n.appendChild(e),sessionStorage.getItem("collections")){let a=JSON.parse(sessionStorage.getItem("collections"));for(let e=0;e<a.length;e++){var r=document.createElement("div"),l=(r.className="collections",document.createElement("div")),o=(l.className="collection-name",l.style.marginLeft="10px",l.innerText=a[e].name,document.createElement("button"));o.className="collection-btn",o.style.visibility="visible",o.innerText=a[e].items.includes(t.target.parentElement.href.split("?productId=")[1])?"saved":"+",o.addEventListener("click",n=>{var t;n.target.parentElement.parentElement.parentElement.querySelector(".btn-specihern.left-btn").innerText=a[e].name,"+"==n.target.innerText?(t=a.find(e=>e.name==n.target.parentElement.childNodes[0].innerText),fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"PUT",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:n.target.parentElement.childNodes[0].innerText,update:{$addToSet:{items:n.target.parentElement.parentElement.getAttribute("dropdown-key")},...t.hasOwnProperty("cover")?{}:{$set:{cover:n.target.parentElement.parentElement.parentElement.querySelector(".product-img").src.split("/v1651695832/")[1]}}}})}).then(e=>{200==e.status&&((t=a.find(e=>e.name==n.target.parentElement.childNodes[0].innerText)).hasOwnProperty("cover")&&(t.cover=n.target.parentElement.parentElement.parentElement.querySelector(".product-img").src.split("/v1651695832/")[1]),t.items.push(n.target.parentElement.parentElement.getAttribute("dropdown-key")),n.target.innerText="saved",sessionStorage.setItem("collections",JSON.stringify(a)),a.some(e=>e.items.includes(n.target.parentElement.parentElement.getAttribute("dropdown-key")))?n.target.parentElement.parentElement.parentElement.querySelector(".btn-specihern").innerText="Gespeichert":n.target.parentElement.parentElement.parentElement.querySelector(".btn-specihern").innerText="Speichern",document.querySelectorAll(".btn-specihern.left-btn").forEach(e=>{e.innerText=n.target.parentElement.childNodes[0].innerText}))})):fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"PUT",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:n.target.parentElement.childNodes[0].innerText,update:{$pull:{items:n.target.parentElement.parentElement.getAttribute("dropdown-key")}}})}).then(e=>{var t;200==e.status&&(-1<(t=(e=a.find(e=>e.name==n.target.parentElement.childNodes[0].innerText)).items.indexOf(n.target.parentElement.parentElement.getAttribute("dropdown-key")))&&(e.items.splice(t,1),sessionStorage.setItem("collections",JSON.stringify(a))),n.target.innerText="+",a.some(e=>e.items.includes(n.target.parentElement.parentElement.getAttribute("dropdown-key")))?n.target.parentElement.parentElement.parentElement.querySelector(".btn-specihern").innerText="Gespeichert":n.target.parentElement.parentElement.parentElement.querySelector(".btn-specihern").innerText="Speichern")})}),r.appendChild(l),r.appendChild(o),n.appendChild(r)}}var e=document.createElement("div"),a=(e.className="collections",document.createElement("button")),i=(a.innerText="+",a.className="collection-btn",a.style.visibility="visible",a.addEventListener("click",async t=>{let n=await Swal.fire({title:"Neue Kollektion",input:"text",inputLabel:"Name",inputPlaceholder:"Name deiner neuen Kollektion",confirmButtonText:"Erstellen",showCloseButton:!0,inputValidator:e=>{if(!e)return"Name cannot be empty"}}),a=JSON.parse(sessionStorage.getItem("collections"));a.some(e=>e.name==n.value)||null==n.value||fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"POST",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:n.value,item:t.target.parentElement.parentElement.getAttribute("dropdown-key")})}).then(e=>{200==e.status&&((e={name:n.value,items:[],cover:t.target.parentElement.parentElement.getAttribute("dropdown-key").replaceAll("-","_").replaceAll("(","").replaceAll(")","")}).items.push(t.target.parentElement.parentElement.getAttribute("dropdown-key")),document.getElementById(""+t.target.parentElement.parentElement.getAttribute("dropdown-key")).querySelector(".btn-specihern").innerText="Gerettet",document.querySelectorAll(".btn-specihern.left-btn").forEach(e=>{e.innerText=n.value}),a.push(e),sessionStorage.setItem("collections",JSON.stringify(a)))})}),document.createElement("div"));i.className="collection-name",i.innerText="Kollektion erstellen",i.style.marginLeft="10px",e.appendChild(a),e.appendChild(i),n.appendChild(e),n.addEventListener("click",e=>{e.preventDefault()}),t.target.insertAdjacentElement("afterend",n)}else t.target.parentElement.querySelector(".container-mode").remove()}),document.addEventListener("click",e=>{e.target.closest("#container-main")||null==document.querySelector("#container-main")||"btn-specihern left-btn"==e.target.className||document.querySelector("#container-main").remove()}),t.addEventListener("click",e=>{e.preventDefault()}),h.addEventListener("mouseover",()=>{e.style.visibility="visible",t.style.visibility="visible"}),h.addEventListener("mouseout",()=>{e.style.visibility="hidden",t.style.visibility="hidden"}));var E=document.createElement("div"),f=(E.className="product-title",21<q.Name.length?E.innerText=q.Name.slice(0,18)+"...":E.innerText=q.Name,E.setAttribute("fs-cmsfilter-field","Titel"),document.createElement("div")),w=(f.className="issue-wrapper",document.createElement("div")),v=(w.className="month",w.innerText=q.Monat+" | ",document.createElement("div")),b=(v.className="date-divider",document.createElement("div")),N=(b.className="year",b.innerText=" "+q.Jahr+" Ausgabe "+q.Ausgabe,document.createElement("div"));N.className="decade",f.append(w,v,b,N),h.append(y,t,e,E,f),g.append(h),g.setAttribute("role","listitem"),u.append(g)}l.append(u),d.prepend(l);var p=document.getElementsByClassName("w-dyn-list")[0],C=(document.getElementsByClassName("w-pagination-wrapper pagination")[0]&&(o=document.getElementsByClassName("w-pagination-wrapper pagination")[0]).remove(),(o=document.createElement("div")).className="w-pagination-wrapper pagination",o.style.display="flex",e.pageCount),x=e.currentPage||1,S=getC("lastQuery"),k=document.createDocumentFragment();if(1!=x&&(10<x&&((c=document.createElement("a")).className="w-pagination-previous pagination-button-left keep-params 10xarrow",c.setAttribute("aria-label","Previous Page"),c.style.marginRight=0,(s=document.createElement("img")).width="45",s.loading="lazy",s.src="https://res.cloudinary.com/wdy-bzs/image/upload/v1661106376/asset/Group_42_1.svg",s.className="pagination-arrow left",c.style.marginRight="0px",c.style.paddingRight="0px",c.append(s),k.append(c),c.href=""!=S?"?page="+(x-10)+"&"+S:"?page="+(x-10)),(s=document.createElement("a")).className="w-pagination-previous pagination-button-left keep-params 10xarrow",s.setAttribute("aria-label","Previous Page"),(c=document.createElement("img")).width="45",c.loading="lazy",c.src="https://res.cloudinary.com/wdy-bzs/image/upload/v1651849092/asset/Arrow.svg",c.className="pagination-arrow left",s.style.paddingLeft="0px",s.style.paddingRight="0px",s.append(c),k.append(s),s.href=""!=S?"?page="+(x-1)+"&"+S:"?page="+(x-1)),C<=7)for(i=1;i<=C;i++){var A=document.createElement("a"),T=document.createElement("div");T.textContent=i,A.className="pagination-page-button w-inline-block",A.href=""!=S?"?page="+i+"&"+S:"?page="+i,A.append(T),k.append(A),i==x&&(A.className="pagination-page-button w-inline-block w--current")}else if(x<5){for(i=1;i<=5;i++){var L=document.createElement("a"),B=document.createElement("div");B.textContent=i,L.className="pagination-page-button w-inline-block",L.href=""!=S?"?page="+i+"&"+S:"?page="+i,L.append(B),k.append(L),i==x&&(L.className="pagination-page-button w-inline-block w--current")}var z=document.createElement("div"),z=(z.textContent="...",z.className="pagination-dots-button",k.append(z),document.createElement("a")),I=document.createElement("div");I.textContent=C,z.className="pagination-page-button w-inline-block",z.href=""!=S?"?page="+C+"&"+S:"?page="+C,z.append(I),k.append(z)}else if(5<=x&&x<=C-4){var I=document.createElement("a"),z=document.createElement("div"),D=(z.textContent="1",I.className="pagination-page-button w-inline-block",I.href=""!=S?"?page=1&"+S:"?page=1",I.append(z),k.append(I),document.createElement("div")),_=(D.textContent="...",D.className="pagination-dots-button",k.append(D),x-1);for(i=0;i<3;i++){var O=document.createElement("a"),P=document.createElement("div");P.textContent=_,O.className="pagination-page-button w-inline-block",O.href=""!=S?"?page="+_+"&"+S:"?page="+_,O.append(P),k.append(O),_==x&&(O.className="pagination-page-button w-inline-block w--current"),_+=1}var D=document.createElement("div"),D=(D.textContent="...",D.className="pagination-dots-button",k.append(D),document.createElement("a")),U=document.createElement("div");U.textContent=C,D.className="pagination-page-button w-inline-block",D.href=""!=S?"?page="+i+"&"+S:"?page="+i,D.append(U),k.append(D)}else{var U=document.createElement("a"),D=document.createElement("div"),F=(D.textContent="1",U.className="pagination-page-button w-inline-block",U.href=""!=S?"?page=1&"+S:"?page=1",U.append(D),k.append(U),document.createElement("div"));for(F.textContent="...",F.className="pagination-dots-button",k.append(F),i=C-4;i<=C;i++){var M=document.createElement("a"),R=document.createElement("div");R.textContent=i,M.className="pagination-page-button w-inline-block",M.href=""!=S?"?page="+i+"&"+S:"?page="+i,M.append(R),k.append(M),i==x&&(M.className="pagination-page-button w-inline-block w--current"),_++}}return o.append(k),x!=C&&((F=document.createElement("a")).className="w-pagination-right pagination-button-next keep-params 10xarrow",F.setAttribute("aria-label","Next Page"),t=document.createElement("img"),F.style.marginLeft=10,t.width="45",t.loading="lazy",t.src="https://res.cloudinary.com/wdy-bzs/image/upload/v1651849092/asset/Arrow.svg",t.className="pagination-arrow right",F.append(t),F.href=""!=S?"?page="+parseInt(Number(x)+1)+"&"+S:"?page="+parseInt(Number(x)+1),o.append(F),10<=C-x)&&((t=document.createElement("a")).className="w-pagination-right pagination-button-next keep-params 10xarrow",t.setAttribute("aria-label","Next Page"),(m=document.createElement("img")).style,m.width="45",t.style.marginLeft="0px",m.loading="lazy",m.src="https://res.cloudinary.com/wdy-bzs/image/upload/v1661106376/asset/Group_42_1.svg",m.className="pagination-arrow right",t.append(m),t.href=""!=S?"?page="+parseInt(Number(x)+10)+"&"+S:"?page="+parseInt(Number(x)+10),o.append(t)),p.append(o),await 0,""==getC("lastQuery")&&fetch("https://bildzeitschrift.netlify.app/.netlify/functions/randomize").catch(),a}document.getElementsByClassName("collection-list w-dyn-items w-row")[0].style.display="none",document.getElementsByClassName("no-results-wrapper")[0].style.display="block"}async function loadFData(e){var t,n;"Enter"==e?.key&&(t=document.getElementsByClassName("search-field w-input")[0].value.trim(),n=new URL(window.location.href),""==t||null==t?n.searchParams.delete("search"):n.searchParams.set("search",t),window.history.replaceState({},document.title,n.href)),e&&"Enter"!=e.key||(n=new URL(window.location.href)).searchParams.get("search")&&(document.getElementsByClassName("search-field w-input")[0].value=String(n.searchParams.get("search"))),setTimeout(async()=>{(async()=>{0<document.querySelectorAll(".tag_wrap").length&&document.querySelectorAll(".tag_wrap")[document.querySelectorAll(".tag_wrap").length-1].addEventListener("click",()=>{loadFData()});var t,n,a,r,l,o,i=window.location.href,s=i.split("?")[1];let e="";s&&(e=s.includes("page")?s.split("&").slice(1).join("&"):s),document.cookie="lastQuery="+e;try{let e;if(0===(e=1<i.split("?").length?(t=getC("randomNumber"),n=getC("sort_random"),a=getC("selection_exclude"),await(await fetch(`https://bildzeitschrift.netlify.app/.netlify/functions/loadData?randomNumber=${t}&sort_toggle=${n}&selectExcl=${a}&`+s,{headers:{Authorization:sessionStorage.getItem("auth")}})).json()):(r=getC("sort_random"),l=getC("randomOrder"),o=getC("selection_exclude"),await(await fetch(`https://bildzeitschrift.netlify.app/.netlify/functions/loadData?page=1&sort_toggle=${r}&selectExcl=${o}&randomOrder=`+l,{headers:{Authorization:sessionStorage.getItem("auth")}})).json())).count){document.getElementsByClassName("w-dyn-items w-row")[0].style.display="none";var c=document.getElementsByClassName("results-count")[0],m=(c.innerHTML="",document.createElement("span")),d=(m.textContent=e.count+" Ergebnisse von ",document.createElement("span"));d.textContent=e.totalCount,c.append(m,d),document.getElementsByClassName("no-results-wrapper")[0].style.display="block",document.getElementsByClassName("w-pagination-wrapper pagination")[0].style.display="none"}else{var p=await renderData(e);if(e.currentPage>e.pageCount&&document.getElementsByClassName("pagination-page-button w-inline-block")[0].click(),null==p||p.end_date<Math.floor(Date.now()/1e3)){document.getElementsByClassName("search-field w-input")[0].remove();var u=document.querySelectorAll(".w-dropdown-toggle"),g=document.querySelectorAll(".filter-dropdown.single");for(let e=6;e<u.length;e++){var h=u[e].cloneNode(!0);h.style.color="rgba(43, 42, 42, 0.5)",u[e].parentElement.replaceChild(h,u[e])}for(let e=10;e<g.length;e++){var y=g[e].cloneNode(!0);y.childNodes[0].removeChild(y.childNodes[0].childNodes[1]),y.style.color="rgba(43, 42, 42, 0.5)",g[e].parentElement.replaceChild(y,g[e])}}}}catch(e){console.error("Error:",e)}})()},100)}document.addEventListener("DOMContentLoaded",async function(){let e="true";var n=document.getElementsByClassName("random-switch")[0],a=(console.log(document.querySelectorAll(".tag_wrap")),document.getElementsByClassName("toggle")[0],""!=getC("sort_random")?e=getC("sort_random"):document.cookie="sort_random="+e+";","false"==e&&n.click(),(new Date).getTime()),a=new Date(a+6e5),r=Math.floor(5*Math.random()),l=0==Math.floor(2*Math.random())?-1:1,l=(""==getC("randomOrder")&&""==getC("randomNumber")&&(document.cookie="randomOrder="+l+";path=/;expires="+a.toUTCString(),document.cookie="randomNumber="+r+";path=/;expires="+a.toUTCString()),await loadFData(),document.getElementsByClassName("tag_wrap"));for(t of l)t.addEventListener("mouseup",loadFData);for(x of document.getElementsByClassName("reset-btn w-inline-block"))x.addEventListener("mouseup",loadFData);for(s of document.getElementsByClassName("dropdown-btn-wrapper"))s.addEventListener("mouseup",loadFData);for(ind of document.querySelectorAll(".filter-dropdown.single"))ind.addEventListener("mouseup",loadFData);r=document.getElementsByClassName("checkbox-element-wrapper"),a=document.getElementsByClassName("reset-all-btn")[0];a.addEventListener("mouseup",()=>{var e=new URL(window.location.href);window.location.assign(e.origin+e.pathname)}),a.href="#";for(q of r)q.addEventListener("mouseup",loadFData);document.getElementsByClassName("search-field w-input")[0].addEventListener("keypress",e=>{"Enter"==e.key&&loadFData(e)}),n.addEventListener("click",()=>{e="false"==e?"true":"false",document.cookie="sort_random="+e+";",loadFData()})});