export default function(e){var o=SEMICOLON.Core;if((e=o.getSelector(e,!1)).length<1)return!0;var l,o=o.getVars.elHead;e[0].querySelector(".logo-dark")&&(l=document.createElement("style"),o.appendChild(l),l.appendChild(document.createTextNode('.dark #header-wrap:not(.not-dark) #logo [class^="logo-"], .dark .header-row:not(.not-dark) #logo [class^="logo-"] { display: none; } .dark #header-wrap:not(.not-dark) #logo .logo-dark, .dark .header-row:not(.not-dark) #logo .logo-dark { display: flex; }'))),e[0].querySelector(".logo-sticky")&&(l=document.createElement("style"),o.appendChild(l),l.appendChild(document.createTextNode('.sticky-header #logo [class^="logo-"] { display: none; } .sticky-header #logo .logo-sticky { display: flex; }'))),e[0].querySelector(".logo-sticky-shrink")&&(l=document.createElement("style"),o.appendChild(l),l.appendChild(document.createTextNode('.sticky-header-shrink #logo [class^="logo-"] { display: none; } .sticky-header-shrink #logo .logo-sticky-shrink { display: flex; }'))),e[0].querySelector(".logo-mobile")&&(l=document.createElement("style"),o.appendChild(l),l.appendChild(document.createTextNode('body:not(.is-expanded-menu) #logo [class^="logo-"] { display: none; } body:not(.is-expanded-menu) #logo .logo-mobile { display: flex; }')))}