SEMICOLON.Core.getVars.fn.readmore=e=>{const L=SEMICOLON.Core;if(L.initFunction({class:"has-plugin-readmore",event:"pluginReadMoreReady"}),(e=L.getSelector(e,!1)).length<1)return!0;e.forEach(e=>{let t=e,r=t.getAttribute("data-readmore-size")||"10rem",a=t.getAttribute("data-readmore-speed")||500,s=t.getAttribute("data-readmore-scrollup")||"false",o=t.getAttribute("data-readmore-trigger")||".read-more-trigger",i=t.getAttribute("data-readmore-trigger-open")||"Read More",d=t.getAttribute("data-readmore-trigger-close")||"Read Less",l;t.style.height="",t.classList.remove("read-more-wrap-open");var e=t.offsetHeight,n=t.querySelector(o);n.classList.remove("d-none");let g=e+n.offsetHeight,m=(n.innerHTML=i,a=Number(a),t.classList.add("read-more-wrap"),t.style.height=r,t.style.transitionDuration=a+"ms",t.querySelector(".read-more-mask")||(t.innerHTML+='<div class="read-more-mask"></div>'),l=t.querySelector(".read-more-mask"),t.getAttribute("data-readmore-mask")||"true"),c=t.getAttribute("data-readmore-maskcolor")||"#FFF",u=t.getAttribute("data-readmore-masksize")||"100%",p=("true"==m?(l.style.height=u,l.style.backgroundImage="linear-gradient( "+CanvasHEXtoRGBA(c,0)+", "+CanvasHEXtoRGBA(c,1)+" )",l.classList.add("op-ts","op-1")):l.classList.add("d-none"),t.querySelector(o));p.onclick=e=>{t.classList.contains("read-more-wrap-open")?(t.style.height=r,t.classList.remove("read-more-wrap-open"),p.innerHTML=i,setTimeout(()=>{"true"==s&&window.scrollTo({top:t.offsetTop-L.getVars.topScrollOffset,behavior:"smooth"})},a),"true"==m&&l.classList.add("op-ts","op-1")):("false"==d&&p.classList.add("d-none"),t.style.height=g+"px",t.style.overflow="",t.classList.add("read-more-wrap-open"),p&&(p.innerHTML=d),"true"==m&&(l.classList.remove("op-1"),l.classList.add("op-0"))),p=t.querySelector(o),e.preventDefault()}}),L.getVars.resizers.readmore=()=>SEMICOLON.Modules.readmore()};const CanvasHEXtoRGBA=function(e,t){let r;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return"rgba("+[(r="0x"+(r=3==(r=e.substring(1).split("")).length?[r[0],r[0],r[1],r[1],r[2],r[2]]:r).join(""))>>16&255,r>>8&255,255&r].join(",")+","+t+")";console.log("Bad Hex")};