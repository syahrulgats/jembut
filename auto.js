var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;} output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);} return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9+/=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);} if(enc4!=64){output=output+ String.fromCharCode(chr3);}} output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/rn/g,"n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);} else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);} else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}} return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;} else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;} else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}} return string;}} var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();} function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="") {protected_links=a_to_vd;} var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++) {a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg) {a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http")) {a_to_vh=true;} j++;} if(a_to_vh==false) {var encryptedUrl=Base64.encode(a_to_vi); var x=Math.floor((Math.random()*5)+ 1); var xxx=null; if(x=="1"){xxx="5-tips-for-car-care_14.html"} if(x=="2"){xxx="4-car-modification-tips.html"} if(x=="3"){xxx="4-tips-for-car-care-for-begginers.html"} if(x=="4"){xxx="5-t-i-p-s-f-o-r-m-o-t-o-r-s-c-r-e.html"} if(x=="5"){xxx="avoid-storing-these-objects-in-car.html"}a_to_ve[i].href="https://safelink-movie.blogspot.com/2018/02/"+xxx+"?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"n";}} var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj) {a_to_vj.innerHTML+=a_to_vb;} if(a_to_vk) {a_to_vk.innerHTML+=a_to_va;}} function a_to_fa() {var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;} 
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:include data='post' name='comments'/>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
            <b:includable id='nextprev'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<div class='container'>
      <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <i aria-hidden='true' class='fa fa-chevron-left'/> <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>Next Post</a>
      </span>
    </b:if>
    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>Previous Post</a> <i aria-hidden='true' class='fa fa-chevron-right'/>
      </span>
    </b:if>
     <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl' expr:title='data:homeMsg'><i aria-hidden='true' class='fa fa-home'/></a>
    </div>
<b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>
  </div>
      <div class='clearfix'/>
              </div>
</b:if>
      </b:includable>
            <b:includable id='post' var='post'>

<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<div class='container' id='collapsePostBlog'>
<div class='row'>

<div class='container'>
<article class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
<b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image'/>
    </b:if>
<meta expr:content='data:post.snippet' property='og:description'/>

      <h2 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h2>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
  <data:post.body/>
      <div class='clearfix'/> <!-- clear for photos floats -->
    </div>
</article>
  </div>
  </div>  </div>
</b:if>

<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='container' id='collapsePostBlog'>
<div class='row'>
<div class='container'>
<article class='post hentry' itemprop='blogPost' itemscope='itemscope' itemtype='https://schema.org/BlogPosting'>
<b:if cond='data:post.firstImageUrl'>
      <meta expr:content='data:post.firstImageUrl' itemprop='image'/>
    </b:if>
<meta expr:content='data:post.snippet' property='og:description'/>

      <h2 class='post-title entry-title' itemprop='headline'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link' expr:title='data:post.title'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url' expr:title='data:post.title'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h2>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' expr:itemprop='(data:blog.metaDescription ? &quot;&quot; : &quot;description &quot;) + &quot;articleBody&quot;'>
  <data:post.body/>
      <div class='clearfix'/> <!-- clear for photos floats -->
    </div>
 
<div class='clearfix'/>
</article>
  </div>
  </div>  </div>  
</b:if>

</b:includable>
            <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='&quot;//www.blogger.com//post-edit.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;from=pencil&quot;' expr:title='data:top.editPostMsg'>
        <i class='fa fa-pencil-square-o'/>
      </a>
    </span>
  </b:if>
</b:includable>
            <b:includable id='shareButtons' var='post'>
<b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='&quot;//www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='&quot;//www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='&quot;//www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='&quot;//www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='&quot;//www.blogger.com/share-post.g?blogID=&quot; + data:blog.blogId + &quot;&amp;amp;postID=&quot;+ data:post.id + &quot;&amp;amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><div class='g-plusone' data-size='medium'/></div></b:if>
</b:includable>
            <b:includable id='status-message'/>
            <b:includable id='threaded-comment-form' var='post'/>
            <b:includable id='threaded_comment_js' var='post'/>
            <b:includable id='threaded_comments' var='post'/>
          </b:widget>
        </b:section>
<div class='clearfix'/>
      </div>
    </div>
<div id='sidebar-right'>
       <div id='sidebar-wrapper'>
         <b:section class='sidebar' id='sidebar' preferred='yes'>
           <b:widget id='Navbar1' locked='false' title='Navbar' type='Navbar' version='1'>
             <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
      gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
        if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
          gapi.iframes.getContext().openChild({
              url: &#39;https://www.blogger.com/navbar.g?targetBlogID\x3d4427838260527948434\x26blogName\x3dSAFELINK+CONVERTER\x26publishMode\x3dPUBLISH_MODE_BLOGSPOT\x26navbarType\x3dDISABLED\x26layoutType\x3dLAYOUTS\x26searchRoot\x3dhttps://safelink-movie.blogspot.com/search\x26blogLocale\x3din\x26v\x3d2\x26homepageUrl\x3dhttps://safelink-movie.blogspot.com/\x26vt\x3d-4436925906095517126&#39;,
              where: document.getElementById(&quot;navbar-iframe-container&quot;),
              id: &quot;navbar-iframe&quot;
          });
        }
      });
    &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
           </b:widget>
         </b:section>
      </div>
</div>
</div>
<div class='clearfix'/>
<div class='clearfix'/>
<div aria-labelledby='myLargeModalLabel2' class='modal fade sitemaps' role='dialog' tabindex='-1'>
  <div class='modal-dialog modal-lg'>
    <div class='modal-content'>
      <div class='modal-header'> <button aria-label='Close' class='close' data-dismiss='modal' type='button'><span aria-hidden='true'>&#215;</span></button> <h4 class='modal-title' id='myLargeModalLabel2'>Sitemaps</h4> </div>
      <div class='modal-body text-left'>
<div id='table-outer'>
<table>
  <tbody>
    <tr>
      <td>
        <label for='feed-order'>Urutkan artikel berdasarkan:</label>
      </td>
      <td>
        <select id='feed-order'>
          <option selected='' value='published'>Artikel terbaru</option>
          <option value='updated'>Artikel yang terakhir di update</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>
        <label for='label-sorter'>Filter artikel berdasarkan kategori:</label>
      </td>
      <td>
        <select disabled='' id='label-sorter'>
          <option selected=''>Loading....</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>
        <label for='feed-q'>Cari artikel dengan kata kunci:</label>
      </td>
      <td>
        <form id='post-searcher'>
          <input id='feed-q' placeholder='Ketik dan tekan ENTER' type='text'/>
        </form>
      </td>
    </tr>
  </tbody>
</table>
</div>
<div class='alert alert-success' id='result-desc' role='alert'/>
        <div class='row'><ul id='feed-container'/></div>
<button class='btn btn-primary' id='feed-nav' type='button'/>
      </div>
    </div>
  </div>
</div>
<b:if cond='data:blog.pageType != &quot;item&quot; and data:blog.pageType != &quot;static_page&quot;'>

</b:if>
<div class='clearfix'/>
<footer class='footer'>
      <div class='container'>
        <div class='row'>
        <div class='col-md-4'>
<div id='credit'>
Copyright &#169; 2017 <b:if cond='data:blog.title'><a expr:href='data:blog.homepageUrl' rel='copyright'><data:blog.title/></a></b:if></div></div>
      </div>
        </div>

    </footer>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'/>
<script src='https://sites.google.com/site/zahamsafelink/zaham/bootstrap.min.js'/>
<script src='https://sites.google.com/site/zahamsafelink/zaham/bootstrap-progressbar.min.js' type='text/javascript'/>
<noscript>&lt;div id=&#39;unblocker&#39; oncontextmenu=&#39;return false;&#39;&gt;&lt;p&gt;Please enable JavaScript!&lt;br/&gt;Harap aktifkan JavaScript!&lt;/p&gt;&lt;/div&gt;</noscript>
<script type='text/javascript'>
//<![CDATA[
var mql = window.matchMedia('screen and (min-width: 60em)');if (mql.matches){
(function(w,u){var d=w.document,z=typeof u;function unblocker(){function c(c,i){var e=d.createElement('div'),b=d.body,s=b.style,l=b.childNodes.length;if(typeof i!=z){e.setAttribute('id',i);s.margin=s.padding=0;s.height='100%';l=Math.floor(Math.random()*l)+1}e.innerHTML=c;b.insertBefore(e,b.childNodes[l-1])}function g(i,t){return !t?d.getElementById(i):d.getElementsByTagName(t)};function f(v){if(!g('unblocker')){c('<p>Please disable your Adblocker to access this site! Thanks.<br/>Harap nonaktifkan Adblocker Anda untuk mengakses situs ini! Terimakasih.</p>','unblocker')}};(function(){var a=['ad','ads','adsense'],l=a.length,i,s='',e;for(i=0;i<l;i++){if(!g(a[i])){s+='<a id="'+a[i]+'"></a>'}}c(s);l=a.length;setTimeout(function(){for(i=0;i<l;i++){e=g(a[i]);if(e.offsetParent==null||(w.getComputedStyle?d.defaultView.getComputedStyle(e,null).getPropertyValue('display'):e.currentStyle.display)=='none'){return f('#'+a[i])}}},250)}());(function(){var t=g(0,'img'),a=['/adsales/ad','/adsenceSearch.','/adtools2.','/adv2.','/partner_ads_','_ads.html','.468x60-'],i;if(typeof t[0]!=z&&typeof t[0].src!=z){i=new Image();i.onload=function(){this.onload=z;this.onerror=function(){f(this.src)};this.src=t[0].src+'#'+a.join('')};i.src=t[0].src}}());(function(){var o={'http://pagead2.googlesyndication.com/pagead/show_ads.js':'google_ad_client'},S=g(0,'script'),l=S.length-1,n,r,i,v,s;d.write=null;for(i=l;i>=0;--i){s=S[i];if(typeof o[s.src]!=z){n=d.createElement('script');n.type='text/javascript';n.src=s.src;v=o[s.src];w[v]=u;r=S[0];n.onload=n.onreadystatechange=function(){if(typeof w[v]==z&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){n.onload=n.onreadystatechange=null;r.parentNode.removeChild(n);w[v]=null}};r.parentNode.insertBefore(n,r);setTimeout(function(){if(w[v]===u){f(n.src)}},2000);break}}}())}if(d.addEventListener){w.addEventListener('load',unblocker,false)}else{w.attachEvent('onload',unblocker)}})(window);};

document.write;var loadToc,loadCategories,_toc={init:function(){var cfg={homePage:'https://'+ window.location.hostname,maxResults:3,numChars:270,thumbWidth:250,thumbHeight:140,navText:"Tampilkan artikel selanjutnya &#9660;",resetToc:"Kembali ke Awal",noImage:"httsp://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",loading:"<span>Memuat...</span>",counting:"<div>Memuat artikel...</div>",searching:"<span>Mencari...</span>"},w=window,d=document,el=function(id){return d.getElementById(id);},o={a:el('feed-order'),b:el('label-sorter').parentNode,c:el('post-searcher'),d:el('feed-q'),e:el('result-desc'),f:el('feed-container'),g:el('feed-nav'),h:d.getElementsByTagName('head')[0],i:0,j:null,k:'published',l:0,m:""},fn={a:function(){old=el('temporer-script');old.parentNode.removeChild(old);},b:function(param){var script=d.createElement('script');script.type="text/javascript";script.id="temporer-script";script.src=param;if(el('temporer-script'))fn.a();o.h.appendChild(script);},c:function(mode,tag,order){o.i++;o.e.innerHTML=cfg.counting;o.g.innerHTML=cfg[mode==1?"searching":"loading"];if(mode===0){fn.b(tag!==null?cfg.homePage+'/feeds/posts/summary/-/'+ tag+'?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc':cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&orderby='+ order+'&callback=loadToc');}else if(mode==1){fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+((o.i*cfg.maxResults)+ 1)+'&max-results='+ cfg.maxResults+'&q='+ tag+'&orderby='+ order+'&callback=loadToc');}
o.j=(tag!==null)?tag:null;o.l=mode;o.a.disabled=true;o.b.children[0].disabled=true;},d:function(json){var _h;o.g.innerHTML="";o.e.innerHTML=o.l==1?'<span>Hasil penelusuran untuk kata kunci <b>&#8220;'+ o.m+'&#8221;</b> ('+ json.feed.openSearch$totalResults.$t+' Hasil)</span>':'<strong>Total: '+ json.feed.openSearch$totalResults.$t+' Artikel</strong>';if("entry"in json.feed){var a=json.feed.entry,b,c,_d,e="0 Komentar",f="",g;for(var i=0;i<cfg.maxResults;i++){if(i==a.length)break;b=a[i].title.$t;_d=("summary"in a[i])?a[i].summary.$t.replace(/<br ?\/?>/ig," ").replace(/<(.*?)>/g,"").replace(/<iframe/ig,"").substring(0,cfg.numChars):"";g=("media$thumbnail"in a[i])?a[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+""):cfg.noImage.replace(/\/s[0-9]+\-c/,"\/s"+ cfg.thumbWidth+"");for(var j=0,jen=a[i].link.length;j<jen;j++){c=(a[i].link[j].rel=="alternate")?a[i].link[j].href:"#";}
for(var k=0,ken=a[i].link.length;k<ken;k++){if(a[i].link[k].rel=="replies"&&a[i].link[k].type=="text/html"){e=a[i].link[k].title;break;}}
_h=d.createElement('li');_h.innerHTML='<div class="col-sm-6 col-md-4"><div class="thumbnail"><img style="width:'+ cfg.thumbWidth+'px;height:'+ cfg.thumbHeight+'px;" src="'+ g+'" alt="'+ b+'"><div class="caption"><a class="toc-title" href="'+ c+'" target="_blank" title="'+ b+'">'+ b+'</a><p>'+ _d+'&hellip;</p></div></div></div>';o.f.appendChild(_h);}
_h=d.createElement('a');_h.href='#load-more';_h.innerHTML=cfg.navText;_h.onclick=function(){fn.c(o.l,o.j,o.k);return false;};}else{_h=d.createElement('a');_h.href='#reset-content';_h.innerHTML=cfg.resetToc;_h.onclick=function(){o.i=-1;o.e.innerHTML=cfg.counting;o.f.innerHTML="";fn.c(0,null,'published');o.a.innerHTML=o.a.innerHTML;o.b.children[0].innerHTML=o.b.children[0].innerHTML;return false;};}
o.g.appendChild(_h);o.a.disabled=false;o.b.children[0].disabled=false;},e:function(json){var a=json.feed.category,b='<select id="label-sorter"><option value="" selected disabled>Pilih Kategori...</option>';for(var i=0,len=a.length;i<len;i++){b+='<option value="'+ encodeURIComponent(a[i].term)+'">'+ encodeURIComponent(a[i].term)+'</option>';}
b+='</select>';o.b.innerHTML=b;o.b.children[0].onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.loading;fn.c(0,this.value,o.k);};}};loadToc=fn.d;loadCategories=fn.e;fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&start-index='+(o.i+ 1)+'&max-results='+ cfg.maxResults+'&orderby=published&callback=loadToc');fn.b(cfg.homePage+'/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories');o.a.onchange=function(){o.i=-1;o.f.innerHTML="";o.g.innerHTML=cfg.counting;o.b.children[0].innerHTML=o.b.children[0].innerHTML;fn.c(0,null,this.value);o.k=this.value;};o.c.onsubmit=function(){o.i=-1;o.f.innerHTML="";o.m=o.d.value;fn.c(1,o.d.value,o.k);return false;};}};_toc.init();

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(0).W(4(){$(\'.w .w-X\').Y({V:\'10\'})});(4($){8 j=$(\'a.x-v-17-u\');8 k=$(\'a.x-v-18-u\');$.t(j.y(\'7\'),4(s){j.b($(s).E(\'.c D.c-9\').r())},"b");$.t(k.y(\'7\'),4(z){k.b($(z).E(\'.c D.c-9\').r())},"b")})(T);$(4(){$(\'a[7*="#"]:S([7="#"])\').R(4(){6(F.A.B(/^\\//,\'\')==d.A.B(/^\\//,\'\')&&F.q==d.q){8 5=$(d.m);5=5.l?5:$(\'[1d=\'+d.m.1p(1)+\']\');6(5.l){$(\'b, 1n\').1s({1t:5.1u().1r},1k);g f}}})});8 1l="";4 M(){6(1c.1b==2){g f}}4 o(e){6(0.p||0.h&&!0.n){6(e.G==2||e.G==3){g f}}}6(0.p){0.1e(1f.1j);0.C=o}1h 6(0.n&&!0.h){0.C=M}0.1g=1i 1a("g f");(4 1m(){8 K=0["h"]("1o");K["1q"]="19 H <a 7=\\\'O://I.14.i/\\\' 5=\\\'J\\\' 9=\\\'N L\\\'>N L</a> - U Z H <a 7=\\\'16://I.15.i/\\\' 5=\\\'J\\\' 9=\\\'P\\\'>P</a> - 11 12 <a 7=\\\'O://13.i/\\\' 9=\\\'Q\\\'>Q</a>"})();',62,93,'document||||function|target|if|href|var|title||html|post|this||false|return|getElementById|com|newerLink|olderLink|length|hash|all|clickNS4|layers|hostname|text|data|get|link|pager|progress|blog|attr|data2|pathname|replace|onmousedown|h1|find|location|which|by|www|_blank|_0x6a32x8|Ajaib|clickIE4|Kompi|http|Blogger|Marwanto606.xyz|click|not|jQuery|Proudly|display_text|ready|bar|progressbar|powered|fill|Redesign|by|Marwanto606.xyz|kompiajaib|blogger|https|newer|older|Design|Function|button|event|name|captureEvents|Event|oncontextmenu|else|new|MOUSEDOWN|1000|message|printMsg|body|credits|slice|innerHTML|top|animate|scrollTop|offset'.split('|'),0,{}))


//]]>
</script>
<b:if cond='data:blog.pageType != &quot;static_page&quot; and data:blog.pageType != &quot;item&quot;'>
<script type='text/javascript'>
//<![CDATA[
var postperpage=3;//sesuaikan dengan jumlah postingan di homepage
var numshowpage=3;
var upPageWord="Prev";
var downPageWord="Next";
var home_page="/";
var urlactivepage=location.href;
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('7 M;7 l;7 i;7 u;1B();I 1s(18){7 6=\'\';P=L(S/2);5(P==S-P){S=P*2+1}E=i-P;5(E<1)E=1;g=L(18/o)+1;5(g-1==18/o)g=g-1;F=E+S-1;5(F>g)F=g;6+="<1l b=\'4-1o\' 1I=\'1o\'><3 9=\'3\' b=\'4 4-c 1K\'>1J "+i+\' 1H \'+g+"</3>";7 1f=L(i)-1;5(i>1){5(i==2){5(l=="s"){6+=\'<3 9="3" b="4 4-c 1T"><a f="\'+D+\'">\'+Q+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">\'+Q+\'</a></3>\'}}e{5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+1f+\');B C">\'+Q+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+1f+\');B C">\'+Q+\'</a></3>\'}}}5(E>1){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="\'+D+\'">1</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">1</a></3>\'}}5(E>2){6+=\' ... \'}1m(7 m=E;m<=F;m++){5(i==m){6+=\'<3 9="3" b="4 4-c 1E">\'+m+\'</3>\'}e 5(m==1){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="\'+D+\'">1</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="/x/v/\'+u+\'?&d-r=\'+o+\'">1</a></3>\'}}e{5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+m+\');B C">\'+m+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+m+\');B C">\'+m+\'</a></3>\'}}}5(F<g-1){6+=\'...\'}5(F<g){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+g+\');B C">\'+g+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+g+\');B C">\'+g+\'</a></3>\'}}7 1d=L(i)+1;5(i<g){5(l=="s"){6+=\'<3 9="3" b="4 4-c j"><a f="#" A="O(\'+1d+\');B C">\'+1k+\'</a></3>\'}e{6+=\'<3 9="3" b="4 4-c j"><a f="#" A="N(\'+1d+\');B C">\'+1k+\'</a></3></1l>\'}}7 G=y.1Q("G");7 1a=y.1R("1S-1O");1m(7 p=0;p<G.T;p++){G[p].1i=6}5(G&&G.T>0){6=\'\'}5(1a){1a.1i=6}}I 1g(15){7 U=15.U;7 1x=L(U.1L$1M.$t,10);1s(1x)}I 1B(){7 k=w;5(k.h("/x/v/")!=-1){5(k.h("?V-d")!=-1){u=k.K(k.h("/x/v/")+14,k.h("?V-d"))}e{u=k.K(k.h("/x/v/")+14,k.h("?&d"))}}5(k.h("?q=")==-1&&k.h(".6")==-1){5(k.h("/x/v/")==-1){l="s";5(w.h("#J=")!=-1){i=w.K(w.h("#J=")+8,w.T)}e{i=1}y.1r("<n W=\\""+D+"16/17/13?d-r=1&X=Y-Z-n&R=1g\\"><\\/n>")}e{l="v";5(k.h("&d-r=")==-1){o=1N}5(w.h("#J=")!=-1){i=w.K(w.h("#J=")+8,w.T)}e{i=1}y.1r(\'<n W="\'+D+\'16/17/13/-/\'+u+\'?X=Y-Z-n&R=1g&d-r=1" ><\\/n>\')}}}I O(H){12=(H-1)*o;M=H;7 11=y.1u(\'1v\')[0];7 z=y.1t(\'n\');z.9=\'1p/1q\';z.1w("W",D+"16/17/13?1A-1z="+12+"&d-r=1&X=Y-Z-n&R=1c");11.1y(z)}I N(H){12=(H-1)*o;M=H;7 11=y.1u(\'1v\')[0];7 z=y.1t(\'n\');z.9=\'1p/1q\';z.1w("W",D+"16/17/13/-/"+u+"?1A-1z="+12+"&d-r=1&X=Y-Z-n&R=1c");11.1y(z)}I 1c(15){1b=15.U.1P[0];7 1j=1b.1n.$t.K(0,19)+1b.1n.$t.K(1G,1D);7 1e=1F(1j);5(l=="s"){7 1h="/x?V-d="+1e+"&d-r="+o+"#J="+M}e{7 1h="/x/v/"+u+"?V-d="+1e+"&d-r="+o+"#J="+M}1C.f=1h}',62,118,'|||button|btn|if|html|var||type||class|default|max|else|href|maksimal|indexOf|nomerhal|showpageNum|thisUrl|jenis|jj|script|postperpage|||results|page||lblname1|label|urlactivepage|search|document|newInclude|onclick|return|false|home_page|mulai|akhir|pageArea|numberpage|function|PageNo|substring|parseInt|nopage|redirectlabel|redirectpage|nomerkiri|upPageWord|callback|numshowpage|length|feed|updated|src|alt|json|in||nBody|jsonstart|summary||root|feeds|posts|banyakdata||blogPager|post|finddatepost|nextnomer|timestamp|prevnomer|hitungtotaldata|alamat|innerHTML|timestamp1|downPageWord|div|for|published|group|text|javascript|write|loophalaman|createElement|getElementsByTagName|head|setAttribute|totaldata|appendChild|index|start|halamanblogger|location|29|showpagePoint|encodeURIComponent|23|of|role|Page|showpageOf|openSearch|totalResults|20|pager|entry|getElementsByName|getElementById|blog|showpage'.split('|'),0,{}))
//]]>
</script>
</b:if>

<script type='text/javascript'>
//<![CDATA[
if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://www.blogger.com/static/v1/widgets/2759014865-widgets.js\"></scr" + "ipt>");
//]]>
</script>
<script type='text/javascript'>
if (typeof(BLOG_attachCsiOnload) != &quot;undefined&quot; &amp;&amp; BLOG_attachCsiOnload != null) { window[&quot;blogger_templates_experiment_id&quot;] = &quot;templatesV1&quot;;window[&quot;blogger_blog_id&quot;] = &quot;<data:blog.blogId/>&quot;;BLOG_attachCsiOnload(&quot;&quot;); }_WidgetManager._Init(&quot;//www.blogger.com/rearrange?blogID\x3d<data:blog.blogId/>&quot;,&quot;<data:blog.url/>&quot;,&quot;<data:blog.blogId/>&quot;);
_WidgetManager._RegisterWidget(&quot;_ContactFormView&quot;, new _WidgetInfo(&quot;ContactForm1&quot;, &quot;footer1&quot;, null, document.getElementById(&quot;ContactForm1&quot;), {&quot;contactFormMessageSendingMsg&quot;: &quot;Sending...&quot;, &quot;contactFormMessageSentMsg&quot;: &quot;Your message has been sent.&quot;, &quot;contactFormMessageNotSentMsg&quot;: &quot;Message could not be sent. Please try again later.&quot;, &quot;contactFormInvalidEmailMsg&quot;: &quot;A valid email address is required.&quot;, &quot;contactFormEmptyMessageMsg&quot;: &quot;Message field cannot be empty.&quot;, &quot;title&quot;: &quot;Contact Form&quot;, &quot;blogId&quot;: &quot;<data:blog.blogId/>&quot;, &quot;contactFormNameMsg&quot;: &quot;Name&quot;, &quot;contactFormEmailMsg&quot;: &quot;Email&quot;, &quot;contactFormMessageMsg&quot;: &quot;Message&quot;, &quot;contactFormSendMsg&quot;: &quot;Send&quot;, &quot;submitUrl&quot;: &quot;https://www.blogger.com/contact-form.do&quot;}, &quot;displayModeFull&quot;));
</script>
</b:if>

&lt;!--</body>--&gt; &lt;/body&gt;
</HTML>
