const root=document.documentElement, reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('year').textContent=new Date().getFullYear();
const nav=document.querySelector('.nav'), menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>35),{passive:true});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',!open);links.classList.toggle('open',!open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
if(!reduce){ const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 const art=document.querySelector('.hero-art'); addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;art.style.setProperty('--mx',x);art.style.setProperty('--my',y)},{passive:true});
}else document.querySelectorAll('.reveal').forEach(e=>e.classList.add('shown'));
