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
  /* ---- Replace with real client testimonials ---- */
  var TESTIMONIALS=[
    {q:"Client testimonial goes here. A few sentences about what it was like to work with Constance, and how the finished home feels to live in.",n:"CLIENT NAME, NEIGHBORHOOD"},
    {q:"Second client testimonial. Ideally one that speaks to her judgment, the honesty of the process, or how few decisions they had to make.",n:"CLIENT NAME, NEIGHBORHOOD"},
    {q:"Third client testimonial. Something about the presentation, the reveal, or recognizing the home as theirs.",n:"CLIENT NAME, NEIGHBORHOOD"}
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
  var ti=0,tq=document.querySelector('#testi-box .testi'),tn=document.querySelector('#testi-box .testi-name'),dots=document.querySelector('.dots');
  TESTIMONIALS.forEach(function(_,i){var d=document.createElement('button');d.setAttribute('aria-label','Testimonial '+(i+1));d.addEventListener('click',function(){showT(i)});dots.appendChild(d)});
  function showT(i){ti=i;tq.textContent=TESTIMONIALS[i].q;tn.textContent=TESTIMONIALS[i].n;dots.querySelectorAll('button').forEach(function(d,j){d.setAttribute('aria-pressed',String(j===i))});}
  showT(0);

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
