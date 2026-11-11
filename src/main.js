document.getElementById('year').textContent=new Date().getFullYear();
const sectionLinks = [...document.querySelectorAll('.site-header nav a')];
const targets = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean).sort((a,b)=>a===b?0:a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);
let scheduled = false;
function highlightSection(){
 const cutoff = document.querySelector('.site-header').getBoundingClientRect().bottom + 65;
 let active = targets[0];
 for(const target of targets) if(target.getBoundingClientRect().top <= cutoff) active=target;
 for(const link of sectionLinks){
  if(active && link.getAttribute('href') === '#' + active.id) link.setAttribute('aria-current','location');
  else link.removeAttribute('aria-current');
 }
 scheduled=false;
}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(highlightSection)}},{passive:true});
window.addEventListener('resize',highlightSection);
highlightSection();
