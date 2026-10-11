(function(){
function ph(i){var d=document.createElement('div');d.className='ph';d.setAttribute('role','img');d.setAttribute('aria-label',i.alt);d.textContent='Add image: '+i.getAttribute('src');i.replaceWith(d)}
document.querySelectorAll('img[src^="images/"]').forEach(function(i){if(i.complete&&i.naturalWidth===0)ph(i);else i.addEventListener('error',function(){ph(i)},{once:true})});
var d=document.getElementById('hire');
if(d){var log=document.getElementById('hlog'),act=document.getElementById('hact'),t=[];
var L=['$ npm install elyse','<span class="ok">added 1 developer, 1 support analyst, 2 languages</span>','found <span class="ok">0</span> vulnerabilities, 11 projects','$ git commit -m "Hire Elyse"','<span class="ok">[main 1a2b3c4] Hire Elyse</span>','','Ready to deploy. Send the offer?'];
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var say=function(m){log.innerHTML+=m+'\n'};
function run(){t.forEach(clearTimeout);t=[];log.innerHTML='';act.hidden=true;var i=0;(function n(){if(i>=L.length){act.hidden=false;document.getElementById('hyes').focus();return}say(L[i++]);t.push(setTimeout(n,rm?0:380))})()}
document.querySelectorAll('[data-hire]').forEach(function(b){b.addEventListener('click',function(){if(!d.showModal){location.href='mailto:elyse0002@gmail.com';return}d.showModal();run()})});
document.getElementById('hno').addEventListener('click',function(){say('<span class="er">Error 404: option "no" not found in recruiter.js</span>')});
document.getElementById('hcopy').addEventListener('click',function(){var m='elyse0002@gmail.com';var ok=function(){say('<span class="ok">Copied: '+m+'</span>')},no=function(){say('Copy it from here: '+m)};try{navigator.clipboard.writeText(m).then(ok,no)}catch(e){no()}});
document.getElementById('hx').addEventListener('click',function(){d.close()});
d.addEventListener('click',function(e){if(e.target===d)d.close()})}
var p=document.getElementById('proj');
if(p){document.addEventListener('click',function(e){var c=e.target.closest('.card[data-story]');if(!c||e.target.closest('a')||!p.showModal)return;
document.getElementById('pt').innerHTML=c.querySelector('h3').innerHTML;document.getElementById('pm').textContent=c.querySelector('.meta').textContent;document.getElementById('ps').innerHTML=c.querySelector('.story').innerHTML;document.getElementById('ptags').innerHTML=c.querySelector('.tags').innerHTML;
var s=document.getElementById('pimg');s.innerHTML='';var m=c.querySelector('img,.ph,.lock');if(m)s.appendChild(m.cloneNode(true));p.showModal()});
document.getElementById('pc').addEventListener('click',function(){p.close()});p.addEventListener('click',function(e){if(e.target===p)p.close()})}
var f=document.getElementById('cf');if(f)f.addEventListener('submit',function(e){if(f.action.indexOf('YOUR_FORM_ID')>-1){e.preventDefault();document.getElementById('cfm').textContent='The form is not connected yet. See README.txt to switch it on.'}});
})();
