function isInViewport(e){let t=e.getBoundingClientRect();return t.top>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)}function animateScoreNumbers(){let e=document.querySelectorAll(".score-number");e.forEach(e=>{let t=+e.getAttribute("data-target"),n=t/100,r=0,i=()=>{e.innerText=Math.round(r),r<t?(r+=n,setTimeout(i,20)):e.innerText=t};i()})}function checkViewport(){let e=document.getElementById("competitive-programming");isInViewport(e)&&(animateScoreNumbers(),window.removeEventListener("scroll",checkViewport))}window.addEventListener("scroll",checkViewport);