(function($){
const native=$.ajax;
function portable(html){
 return html.replace(/(src|href|poster)="(assets\/[^"#]+|(?:[a-z0-9-]+\/)*index\.html)"/g,(_,a,v)=>a+'="'+window.OFFLINE_ROOT+v+'"')
  .replace(/url\(\s*(["']?)(assets\/[^)"']+)\1\s*\)/g,(_,q,v)=>'url('+q+window.OFFLINE_ROOT+v+q+')');
}
$.ajax=function(options){
 const opts=typeof options==='object'?options:{};const d=opts.data||{};
 if(String(opts.url||'').includes('admin-ajax.php')){
  const deferred=$.Deferred();let result='';
  if(d.action==='get_prods_by_cat'){
   result=portable(window.OFFLINE_DATA.fragments['cat:'+d.cat_id]||'');
   if(d.curr_type&&String(d.curr_type)!=='0'){
    const box=$('<div>').html(result);box.find('.product').each(function(){if(!$(this).text().toUpperCase().includes(String(d.curr_type).toUpperCase()))$(this).closest('a').remove();});box.find('.show_product_menu_url').contents().filter(function(){return this.nodeType===3;}).first().replaceWith(document.createTextNode(String(d.curr_type)));result=box.html();
   }
  }else if(d.action==='get_more_posts'){
   const box=$('<div>').html(portable(window.OFFLINE_DATA.fragments['news:'+d.cat]||''));result=box.children('a').slice(Number(d.offset)||0,(Number(d.offset)||0)+(Number(d.limit)||9)).map(function(){return this.outerHTML;}).get().join('');
  }
  result=portable(result);setTimeout(()=>{if(opts.success)opts.success(result,'success',deferred);deferred.resolve(result,'success',deferred);},20);return deferred.promise();
 }
 return native.apply(this,arguments);
};
})(jQuery);
