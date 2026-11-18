(function(){
'use strict';
window.offlineMapFallback=function(){
 const map=document.getElementById('map');if(!map)return;
 let note=map.querySelector('.offline-map-note');if(!note){note=document.createElement('div');note.className='offline-map-note';note.innerHTML='<p>Интерактивная карта сейчас недоступна.<br>Миасс, ул. 8 Марта, 4</p><a href="https://yandex.ru/maps/?text=Миасс%2C%208%20Марта%2C%204" target="_blank" rel="noopener">Открыть карту</a><button type="button">Повторить загрузку</button>';map.appendChild(note);note.querySelector('button').onclick=()=>location.reload();}note.hidden=false;return note;
};
window.offlineWatchMap=function(map){
 const note=window.offlineMapFallback();map.getContainer().offlineMap=map;let ready=false;
 function check(){if(map.isStyleLoaded()&&map.areTilesLoaded()){ready=true;note.hidden=true;}}
 map.on('idle',check);map.on('load',check);map.on('error',()=>{if(!ready)note.hidden=false;});
 window.addEventListener('offline',()=>{note.hidden=false;});window.addEventListener('online',()=>{map.resize();if(!map.isStyleLoaded())map.setStyle('mapbox://styles/mapbox/dark-v11');map.triggerRepaint();check();});
};
document.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('map')&&!window.mapboxgl)window.offlineMapFallback();
 try{if(localStorage.getItem('offline-cookie-ok'))document.getElementById('fz152-cookie-banner')?.remove();}catch(e){}
 document.getElementById('fz152-accept-btn')?.addEventListener('click',()=>{try{localStorage.setItem('offline-cookie-ok','1');}catch(e){}});
});
document.addEventListener('submit',function(e){
 const f=e.target;e.preventDefault();e.stopImmediatePropagation();
 let result=f.querySelector('.offline-form-result');if(!result){result=document.createElement('div');result.className='offline-form-result';result.setAttribute('role','status');f.appendChild(result);}
 if(f.classList.contains('search-form')){
  const q=(f.querySelector('[name=s]')?.value||'').toLocaleLowerCase().trim();result.replaceChildren();
  const hits=q?window.OFFLINE_DATA.search.filter(p=>(p.title+' '+p.text).toLocaleLowerCase().includes(q)):[];
  if(!hits.length)result.textContent='Поиск по сохранённым страницам: ничего не найдено.';
  hits.forEach(p=>{const a=document.createElement('a');a.href=window.OFFLINE_ROOT+p.path;a.textContent=p.title;result.appendChild(a);});return;
 }
 const fields=[...f.querySelectorAll('[aria-required=true],.wpcf7-validates-as-required,input[required],.wpcf7-acceptance input[type=checkbox]')].filter(el=>el.type!=='hidden');
 const empty=fields.find(x=>x.type==='checkbox'?!x.checked:!x.value.trim());
 if(empty){result.textContent='Заполните обязательные поля и подтвердите согласие.';empty.focus();return;}
 result.textContent='Это офлайн-копия. Заявка не отправлена. Для заказа позвоните 8 800 333 88 96 или напишите info@prioritetmiass.ru.';
},true);
})();
