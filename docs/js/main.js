(function(){
  /* ---- Edit projects here: name, location, type, material class, description ---- */
  var PROJECTS=[
    {id:"project-one",name:"Project one",loc:"Cincinnati, Ohio",type:"Renovation",m:"m-travertine",text:"Project description. Describe the brief in the client’s words, what you heard underneath it, and how the finished home answers it."},
    {id:"project-two",name:"Project two",loc:"Cincinnati, Ohio",type:"Furnishing",m:"m-walnut",text:"Project description. Describe the brief in the client’s words, what you heard underneath it, and how the finished home answers it."},
    {id:"project-three",name:"Project three",loc:"Location",type:"New build",m:"m-plaster",text:"Project description. Describe the brief in the client’s words, what you heard underneath it, and how the finished home answers it."},
    {id:"project-four",name:"Project four",loc:"Location",type:"Renovation",m:"m-hinoki",text:"Project description."},
    {id:"project-five",name:"Project five",loc:"Location",type:"Furnishing",m:"m-slate",text:"Project description."},
    {id:"project-six",name:"Project six",loc:"Location",type:"New build",m:"m-oxblood",text:"Project description."}
  ];
  /* ---- Client testimonials: headline, paragraphs, names, neighborhood ---- */
  var TESTIMONIALS=[
    {h:"Constance understood our vision before we could even articulate it.",
     q:["We worked with Constance and her design team to completely transform the main floor of our Indian Hill home, and the experience exceeded our expectations. We wanted a home that felt sophisticated and timeless, but still warm and comfortable for our family. Constance has an incredible eye for detail and a unique ability to bring together different styles in a way that feels effortless.", "From the initial consultation to the final installation, her team was organized, communicative, and attentive to every detail. The finished space is not only beautiful but truly reflects who we are and how we live. We couldn’t be happier with the result."],
     n:"Elizabeth & James W.",loc:"Indian Hill"},
    {h:"Our home finally feels like us, only better than we ever imagined.",
     q:["After purchasing our home in Hyde Park, we knew we wanted something beyond the typical interior design experience. Constance brought a fresh perspective that was exactly what we were looking for. She introduced us to materials, textures, and design concepts we never would have considered on our own, yet somehow everything felt completely natural to our personal style.", "What impressed us most was how thoughtfully she balanced aesthetics with the practical needs of our everyday lives. Every room feels intentional, beautiful, and uniquely ours. We receive compliments from friends and family every time we entertain."],
     n:"Caroline & David M.",loc:"Hyde Park"},
    {h:"A designer with a truly distinctive point of view.",
     q:["We interviewed several interior designers before choosing Studio Constance, and what immediately stood out was Constance’s perspective. She doesn’t simply follow trends or recreate spaces you’ve seen a hundred times before. She takes the time to understand your lifestyle, your personality, and the way you want your home to feel.", "Our Mount Lookout home now has a beautiful balance of contemporary elegance, warmth, and character. Every piece feels carefully selected, and the entire home flows together seamlessly. Constance pushed us creatively in the best possible way, and the result is something we never could have achieved without her."],
     n:"Alexandra & Robert H.",loc:"Mount Lookout"},
    {h:"The entire experience was as beautiful as the finished home.",
     q:["We hired Studio Constance to help us redesign our living room, dining room, and primary bedroom. Having worked with designers in the past, we especially appreciated Constance’s structured approach and clear communication throughout the project.", "She listened carefully to our preferences, presented thoughtful design options, and made the entire process feel exciting rather than overwhelming. Her attention to detail is exceptional, from the furniture selections to the lighting and finishing touches. The result is a home that feels elevated without being overly formal. It is exactly the atmosphere we had hoped to create."],
     n:"Katherine & Michael B.",loc:""},
    {h:"She transformed our house into a home we genuinely love living in.",
     q:["Constance has an extraordinary ability to see the potential in a space. We wanted to update our Mariemont home while preserving its original architectural character, and she approached the project with so much creativity and sensitivity.", "She incorporated modern furnishings, beautiful textures, and subtle design details that gave our home an entirely new personality without losing what made us fall in love with it in the first place. The spaces feel curated rather than decorated, and every room has its own story. We would absolutely work with Studio Constance again."],
     n:"Victoria & Andrew L.",loc:"Mariemont"},
    {h:"Constance brought an international perspective that made all the difference.",
     q:["We wanted our home to feel collected, sophisticated, and personal rather than like a showroom. Constance immediately understood what we were trying to achieve. Her appreciation for architecture, art, and design from different parts of the world brought a level of depth and creativity to the project that we hadn’t experienced before.", "She combined contemporary furniture with distinctive statement pieces, rich materials, and unexpected details to create a home that feels both luxurious and inviting. We especially loved how she incorporated our existing art collection into the new design. Every space feels like a reflection of our experiences and personality."],
     n:"Natalie & Christopher R.",loc:""}
  ];

  function card(p){
    return '<a class="project" href="#project/'+p.id+'" data-type="'+p.type+'"><figure class="photo '+p.m+'"><figcaption>Project photograph</figcaption></figure><h3>'+p.name+'</h3><span>VIEW PROJECT</span></a>';
  }
  document.getElementById('home-projects').innerHTML=PROJECTS.slice(0,3).map(card).join('');
  var pgrid=document.getElementById('pgrid');
  function renderGrid(f){pgrid.innerHTML=PROJECTS.filter(function(p){return f==='all'||p.type===f}).map(card).join('');}
  renderGrid('all');
  document.querySelectorAll('.filters button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed','false')});
      b.setAttribute('aria-pressed','true'); renderGrid(b.dataset.f);
    });
  });

  // testimonials
  function byline(t){return (t.n+(t.loc?', '+t.loc:'')).toUpperCase();}
  var ti=0,th=document.querySelector('#testi-box .testi-head'),tq=document.querySelector('#testi-box .testi'),tn=document.querySelector('#testi-box .testi-name'),dots=document.querySelector('.dots');
  TESTIMONIALS.forEach(function(_,i){var d=document.createElement('button');d.setAttribute('aria-label','Testimonial '+(i+1));d.addEventListener('click',function(){showT(i)});dots.appendChild(d)});
  function showT(i){ti=i;th.textContent=TESTIMONIALS[i].h;tq.textContent=TESTIMONIALS[i].q[0];tn.textContent=byline(TESTIMONIALS[i]);dots.querySelectorAll('button').forEach(function(d,j){d.setAttribute('aria-pressed',String(j===i))});}
  showT(0);
  function stepT(d){showT((ti+d+TESTIMONIALS.length)%TESTIMONIALS.length);}
  document.querySelectorAll('.t-arrow').forEach(function(b){b.addEventListener('click',function(){stepT(+b.dataset.dir)})});
  var tbox=document.getElementById('testi-box'),tx=null;
  tbox.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
  tbox.addEventListener('touchend',function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40)stepT(dx<0?1:-1)});
  document.getElementById('testi-list').innerHTML=TESTIMONIALS.map(function(t){
    return '<blockquote class="review"><p class="review-head">'+t.h+'</p>'+t.q.map(function(x){return '<p>'+x+'</p>'}).join('')+'<footer>'+byline(t)+'</footer></blockquote>';
  }).join('');

  // router
  var head=document.querySelector('.site-head');
  function route(){
    var h=(location.hash||'#home').slice(1), parts=h.split('/'), key=parts[0];
    var known=['home','studio','services','portfolio','project','press','inquire'];
    if(known.indexOf(key)<0) key='home';
    if(key==='project'){
      var p=PROJECTS.filter(function(x){return x.id===parts[1]})[0]||PROJECTS[0];
      document.getElementById('proj-hero').className='fill '+p.m;
      document.getElementById('proj-title').textContent=p.name;
      document.getElementById('proj-sub').textContent=p.loc;
      document.getElementById('proj-text').textContent=p.text;
      document.getElementById('proj-loc').textContent=p.loc;
      document.getElementById('proj-scope').textContent=p.type;
      var mats=['m-plaster','m-walnut','m-hinoki','m-travertine','m-linen'];
      document.getElementById('proj-gallery').innerHTML='<figure class="photo wide '+p.m+'"><figcaption>Project photograph</figcaption></figure>'+mats.slice(0,4).map(function(m){return '<figure class="photo '+m+'"><figcaption>Project photograph</figcaption></figure>'}).join('');
    }
    document.querySelectorAll('.page').forEach(function(pg){pg.classList.toggle('active',pg.id==='page-'+key)});
    document.querySelectorAll('nav a').forEach(function(a){
      var t=a.getAttribute('href').slice(1);
      if(t===key||(key==='project'&&t==='portfolio'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    var titles={home:'Studio Constance | Interior Architecture & Design',studio:'The Studio | Studio Constance',services:'Services | Studio Constance',portfolio:'Portfolio | Studio Constance',project:'Portfolio | Studio Constance',press:'Press | Studio Constance',inquire:'Inquire | Studio Constance'};
    document.title=titles[key];
    window.scrollTo(0,0); onScroll();
  }
  function onScroll(){
    var hero=document.querySelector('.page.active .hero');
    var dark=hero && !hero.querySelector('.m-marble');
    head.classList.toggle('solid', !hero || !dark || window.scrollY > hero.offsetHeight-80);
  }
  window.addEventListener('hashchange',route);
  window.addEventListener('scroll',onScroll,{passive:true});
  route();

  // mobile menu
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){
    var open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!open));btn.textContent=open?'MENU':'CLOSE';nav.classList.toggle('open',!open);
  });
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'&&nav.classList.contains('open'))btn.click();});

  // inquiry form: opens an email draft to the studio
  document.getElementById('f-send').addEventListener('click',function(){
    var v=function(id){return document.getElementById(id).value.trim()};
    var st=document.getElementById('f-status');
    if(!v('f-first')||!v('f-last')||!v('f-email')||!v('f-msg')){st.textContent='Please fill in your name, email, and a few words about your project.';return;}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v('f-email'))){st.textContent='Please enter a valid email address.';return;}
    var body=['Name: '+v('f-first')+' '+v('f-last'),'Email: '+v('f-email'),'Phone: '+v('f-phone'),'Project address: '+v('f-address'),'Project type: '+v('f-type'),'Investment range: '+v('f-budget'),'Ideal start: '+v('f-time'),'Heard about us: '+v('f-heard'),'','About the project:',v('f-msg')].join('\n');
    window.location.href='mailto:hello@studioconstance.com?subject='+encodeURIComponent('Project inquiry from '+v('f-first')+' '+v('f-last'))+'&body='+encodeURIComponent(body);
    st.textContent='Your email app should open with the inquiry ready to send.';
  });
})();
