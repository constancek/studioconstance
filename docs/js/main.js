(function(){
  /* ---- Portfolio projects. images[0] is the hero; "wide" spans the full gallery width ---- */
  var PROJECTS=[
    {id:"long-island-residence",name:"Long Island Residence",loc:"Long Island, New York",type:"Interior architecture & design",
     text:"A Long Island residence planned around light, flow, and quiet drama. A portal of boldly veined marble frames the kitchen, and the same stone continues into a sculpted waterfall island with a softly rounded end, set against travertine floors, pale custom cabinetry, and a curved plaster range hood. In the living spaces, travertine-lined arches open onto an interior garden, a spiral stair sweeps up above an arched wine wall, and a hand-knotted blue rug, a paper lantern, and sculptural chairs bring calm, collected character to every room.",
     credit:"Designed by Constance Kent in collaboration with SPACE DESIGN. Renderings by SPACE DESIGN.",
     feature:[{i:3,room:"The living room"},{i:6,room:"The stair and wine wall"},{i:7,room:"The kitchen"}],
     images:[
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-01.jpg",alt:"Living room with travertine arches, curved sofa, paper lantern, and blue hand-knotted rug",wide:true},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-02.jpg",alt:"Living room arches with a view to the dining room and antique column"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-03.jpg",alt:"Arched openings onto an interior garden with a tree, kitchen beyond"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-04.jpg",alt:"Curved boucle sofa beneath travertine arches with a sculptural paper floor lamp"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-05.jpg",alt:"Paper lantern, horseshoe-back chair, and blue lacquered cabinet"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-06.jpg",alt:"Detail of a horseshoe-back chair and paper lantern beside an arched window"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-07.jpg",alt:"Sculptural spiral staircase with bronze mesh railing above an arched wine wall"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-08.jpg",alt:"Kitchen framed by a boldly veined marble portal with a waterfall island",wide:true},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-09.jpg",alt:"Marble waterfall island with a view through to the dining room"},
      {src:"images/projects/long-island/long-island-ny-residence-interior-design-10.jpg",alt:"Curved plaster range hood over pale cabinetry and a travertine counter"}
     ]},
    {id:"brooklyn-basement-bar",name:"Brooklyn Basement Bar",loc:"Brooklyn, New York",type:"Basement bar & lounge",
     text:"A Brooklyn basement reimagined as a warm, sunlit-feeling bar and lounge. A curved plaster bar anchors the room, lined with sculptural oak stools upholstered in blush and lit by brass mushroom lamps. Behind it, an antiqued brass back bar sits between arched plaster niches with glowing glass shelving, while a hand-carved botanical frieze runs along the ceiling. An oak-paneled wine wall, a patterned terrazzo floor, and a garden-framed window wall with twin yellow velvet banquettes turn a below-grade space into a room you’d never want to leave.",
     credit:"Designed by Constance Kent.",
     feature:[{i:0,room:"The bar"},{i:8,room:"The lounge"}],
     images:[
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-01.jpg",alt:"Curved plaster bar with five sculptural oak stools, brass mushroom lamps, and an antiqued brass back bar",wide:true},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-02.jpg",alt:"Bar seating with a yellow velvet banquette beyond and a hand-carved botanical plaster frieze"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-03.jpg",alt:"Arched plaster niches with lit glass shelving beside the antiqued brass back bar"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-04.jpg",alt:"Rounded bar counter with oak cabinetry, brass lamps, and protea arrangements"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-05.jpg",alt:"Front view of the bar with pink-upholstered oak stools and botanical plaster relief"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-06.jpg",alt:"Long view through the bar to a garden-framed window wall with rounded oak mullions"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-07.jpg",alt:"Oak-paneled wine wall with lit glass-front cabinets beside the bar"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-08.jpg",alt:"The bar and wine wall seen from the entry, with patterned terrazzo tile floor"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-09.jpg",alt:"Lounge with twin yellow velvet banquettes and brass lamps before a garden window wall"},
      {src:"images/projects/brooklyn-bar/brooklyn-ny-basement-bar-design-10.jpg",alt:"Yellow velvet banquette in afternoon light with a round plaster side table"}
     ]},
    {id:"manhattan-condo",name:"Manhattan Condo",loc:"Manhattan, New York City",type:"Full interior design",
     text:"A high-floor Manhattan condominium designed as a calm, light-filled retreat above the city. Pale oak millwork shapes every room, from curved piers that frame an onyx entry console to built-in bookcases around a clean-lined fireplace. Sunburst marquetry doors and alabaster sconces add quiet ceremony, while a sculptural curved sofa, shearling chairs, and lacquered coffee tables keep the living room soft and inviting. A rounded Calacatta island anchors the kitchen and bar, and the private rooms continue the same restraint: upholstered and grasscloth walls in the bedroom, a warm oak dressing room, and a powder room built around a floating marble vanity.",
     credit:"Designed by Constance Kent.",
     feature:[{i:0,room:"The living room"},{i:4,room:"The kitchen"}],
     images:[
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-01.jpg",alt:"Open living room with a curved ivory sofa, sculptural lacquer coffee tables, and a Calacatta marble bar",wide:true},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-02.jpg",alt:"Entry with an onyx console on column legs framed by curved oak piers"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-03.jpg",alt:"Fireplace wall with an oak bookcase, shearling armchairs, and a large ink artwork"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-04.jpg",alt:"Sunburst marquetry doors with alabaster sconces beside shearling lounge chairs"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-05.jpg",alt:"Calacatta marble kitchen island with upholstered oak stools and an antiqued mirror bar"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-06.jpg",alt:"Kitchen and bar wall in oak with a rounded marble island and three stools",wide:true},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-07.jpg",alt:"Round marble dining table with blue boucle chairs beneath a sculptural woven pendant"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-08.jpg",alt:"Dining room with a marble pedestal table, oak sideboard, and abstract painting"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-09.jpg",alt:"Primary bedroom with an upholstered wall, oak paneling, and a cushioned window seat"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-10.jpg",alt:"Bedside detail with an oak nightstand and alabaster lamp against the upholstered headboard wall"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-11.jpg",alt:"Grasscloth bedroom wall with a pale oak dresser, brass floor lamp, and abstract art"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-12.jpg",alt:"Dressing room with oak wardrobes, a marble-topped island, and a hanging round mirror"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-13.jpg",alt:"Powder room with a floating Calacatta vanity, oak-framed mirror, and bronze sconces"},
      {src:"images/projects/manhattan-condo/manhattan-nyc-condo-interior-design-14.jpg",alt:"Powder room grasscloth walls and a lit marble shelf beneath the floating vanity"}
     ]},
    {id:"cincinnati-before-after",name:"Cincinnati Transformations",loc:"Cincinnati, Ohio",type:"Renovation & new construction",ba:true,
     cover:"images/projects/cincinnati-before-after/cincinnati-kitchen-fluted-island-after.jpg",
     text:"Four Cincinnati homes, before and after. From bare framing on a concrete slab to a finished kitchen with an arched hood alcove; from raw cabinet boxes to a fluted oak island and marble backsplash; from unfinished drywall to a scalloped oak staircase over checkerboard marble; and from an empty room to a light, welcoming dining space. Each one shows what Studio 2Kiwi does best: seeing the potential in a space, then carrying it all the way through to the finished home.",
     credit:"Designed by Constance Kent.",
     feature:[{i:3,room:"Kitchen transformation"}],
     images:[
      {src:"images/projects/cincinnati-before-after/cincinnati-kitchen-plaster-hood-before.jpg",alt:"Kitchen with arched hood alcove before: framed shell with bare studs and a concrete slab",label:"Before · Kitchen with arched hood alcove"},
      {src:"images/projects/cincinnati-before-after/cincinnati-kitchen-plaster-hood-after.jpg",alt:"Kitchen with arched hood alcove after: white-oak cabinetry, a plaster range hood in an arched tile alcove, and a four-seat island",label:"After"},
      {src:"images/projects/cincinnati-before-after/cincinnati-kitchen-fluted-island-before.jpg",alt:"Open kitchen and family room before: unfinished cabinet boxes and a raw drywall island",label:"Before · Open kitchen and family room"},
      {src:"images/projects/cincinnati-before-after/cincinnati-kitchen-fluted-island-after.jpg",alt:"Open kitchen and family room after: a fluted oak island with a curved waterfall end, marble backsplash, bronze hood, and a black pantry wall",label:"After"},
      {src:"images/projects/cincinnati-before-after/cincinnati-entry-staircase-before.jpg",alt:"Entry and staircase before: raw drywall and an unfinished scalloped stair stringer",label:"Before · Entry and staircase"},
      {src:"images/projects/cincinnati-before-after/cincinnati-entry-staircase-after.jpg",alt:"Entry and staircase after: a curved oak stair with scalloped trim, glass-enclosed wine storage beneath, and checkerboard marble floors",label:"After"},
      {src:"images/projects/cincinnati-before-after/cincinnati-dining-room-before.jpg",alt:"Dining room before: an empty room with orange-toned floors",label:"Before · Dining room"},
      {src:"images/projects/cincinnati-before-after/cincinnati-dining-room-after.jpg",alt:"Dining room after: refinished pale oak floors, a walnut and stone dining table, and soft boucle chairs",label:"After"}
     ]},
    {id:"cincinnati-residence",name:"Cincinnati Residence",loc:"Cincinnati, Ohio",type:"Renovation & interior design",
     text:"A family home in Cincinnati, renovated for light, warmth, and everyday ease. A white-oak arch frames the living room, where new wainscoting, a tiled fireplace with a pale oak mantel, and a sculptural three-light fixture set a calm, gallery-like backdrop for a boucle sofa, bentwood lounge chairs, and a plaster coffee table. In the kitchen, a bold violet-veined marble slab runs from backsplash to island, and a rounded oak island extends into a built-in dining table, so cooking, homework, and dinner all happen in one generous space. The dining room pairs an oak table and cane-back chairs with a brass and mesh linear pendant beneath paneled walls.",
     credit:"Designed by Constance Kent.",
     feature:[{i:3,room:"The kitchen"}],
     images:[
      {src:"images/projects/cincinnati-residence/cincinnati-oh-home-interior-design-01.jpg",alt:"Living room seen through a white oak arch, with a boucle sofa, bentwood chairs, and a tiled fireplace",wide:true},
      {src:"images/projects/cincinnati-residence/cincinnati-oh-home-interior-design-02.jpg",alt:"Living room with wainscoting, oak mantel, round mirror, and a plaster coffee table"},
      {src:"images/projects/cincinnati-residence/cincinnati-oh-home-interior-design-03.jpg",alt:"Bentwood lounge chair, olive tree, and plaster side table beside an oak arch"},
      {src:"images/projects/cincinnati-residence/cincinnati-oh-home-interior-design-04.jpg",alt:"Kitchen with violet-veined marble backsplash and a rounded oak island that extends into a dining table",wide:true},
      {src:"images/projects/cincinnati-residence/cincinnati-oh-home-interior-design-05.jpg",alt:"Dining room with a brass and mesh linear pendant, oak table, and cane-back chairs",wide:true,pos:"center 20%"}
     ]},
    {id:"cincinnati-modern-home",name:"Cincinnati Modern Home",loc:"Cincinnati, Ohio",type:"New construction & interior design",
     text:"A new-build family home in Cincinnati, designed to feel open, bright, and effortlessly organized. Wide-plank white oak runs throughout, from the entry stair with its black iron balusters to an open living and dining room anchored by a fluted tile fireplace wall and floor-to-ceiling sliders onto the garden. The kitchen pairs warm oak cabinetry with a waterfall quartzite island, glass-front display cabinets, and soft toe-kick lighting that glows at night. Upstairs, a lounge with its own wet bar, calm layered bedrooms, a home office with a fluted walnut desk, and a spa-like primary bath complete a house built for how a busy family actually lives.",
     credit:"Designed by Constance Kent.",
     feature:[{i:3,room:"The kitchen"}],
     cover:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-02.jpg",
     images:[
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-01.jpg",alt:"Entry with a white oak staircase, black iron balusters, and a view through to the open living space"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-02.jpg",alt:"Open living and dining room with curved sofas, swivel chairs, and a fluted tile fireplace wall"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-03.jpg",alt:"Waterfall quartzite island with glowing toe-kick lighting, looking toward the living room"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-04.jpg",alt:"Kitchen with white oak cabinetry, a waterfall island, bouclé stools, and glass-front display cabinets"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-05.jpg",alt:"Kitchen galley with an oak range hood, pot filler, and lit glass-front cabinets"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-06.jpg",alt:"Home office with a fluted walnut desk, textured armchairs, and a large picture window"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-07.jpg",alt:"Upstairs lounge with a wet bar, fluted black coffee table, and double doors to the landing"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-08.jpg",alt:"Bedroom with an upholstered bed, oak bench, and a wall of windows onto the garden"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-09.jpg",alt:"Guest bedroom with an oak dresser, abstract art, and a plush gray rug"},
      {src:"images/projects/cincinnati-modern/cincinnati-modern-home-interior-design-10.jpg",alt:"Primary bath with a long oak vanity, glass globe sconces, walk-in shower, and freestanding tub"}
     ]}
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
     q:["We interviewed several interior designers before choosing Studio 2Kiwi, and what immediately stood out was Constance’s perspective. She doesn’t simply follow trends or recreate spaces you’ve seen a hundred times before. She takes the time to understand your lifestyle, your personality, and the way you want your home to feel.", "Our Mount Lookout home now has a beautiful balance of contemporary elegance, warmth, and character. Every piece feels carefully selected, and the entire home flows together seamlessly. Constance pushed us creatively in the best possible way, and the result is something we never could have achieved without her."],
     n:"Alexandra & Robert H.",loc:"Mount Lookout"},
    {h:"The entire experience was as beautiful as the finished home.",
     q:["We hired Studio 2Kiwi to help us redesign our living room, dining room, and primary bedroom. Having worked with designers in the past, we especially appreciated Constance’s structured approach and clear communication throughout the project.", "She listened carefully to our preferences, presented thoughtful design options, and made the entire process feel exciting rather than overwhelming. Her attention to detail is exceptional, from the furniture selections to the lighting and finishing touches. The result is a home that feels elevated without being overly formal. It is exactly the atmosphere we had hoped to create."],
     n:"Katherine & Michael B.",loc:""},
    {h:"She transformed our house into a home we genuinely love living in.",
     q:["Constance has an extraordinary ability to see the potential in a space. We wanted to update our Mariemont home while preserving its original architectural character, and she approached the project with so much creativity and sensitivity.", "She incorporated modern furnishings, beautiful textures, and subtle design details that gave our home an entirely new personality without losing what made us fall in love with it in the first place. The spaces feel curated rather than decorated, and every room has its own story. We would absolutely work with Studio 2Kiwi again."],
     n:"Victoria & Andrew L.",loc:"Mariemont"},
    {h:"Constance brought an international perspective that made all the difference.",
     q:["We wanted our home to feel collected, sophisticated, and personal rather than like a showroom. Constance immediately understood what we were trying to achieve. Her appreciation for architecture, art, and design from different parts of the world brought a level of depth and creativity to the project that we hadn’t experienced before.", "She combined contemporary furniture with distinctive statement pieces, rich materials, and unexpected details to create a home that feels both luxurious and inviting. We especially loved how she incorporated our existing art collection into the new design. Every space feels like a reflection of our experiences and personality."],
     n:"Natalie & Christopher R.",loc:""}
  ];

  function card(p,img,label,sub){
    var fig=img?'<figure class="photo"><img src="'+img+'" alt="" loading="lazy"></figure>':'<figure class="photo '+(p.m||'m-plaster')+'"><figcaption>Project photograph</figcaption></figure>';
    return '<a class="project" href="#project/'+p.id+'" data-type="'+p.type+'">'+fig+'<h3>'+(label||p.name)+'</h3><span>'+(sub||'VIEW PROJECT')+'</span></a>';
  }
  var homeCards=[[0,3],[2,4],[1,0]].filter(function(x){return PROJECTS[x[0]]}).map(function(x){
    var p=PROJECTS[x[0]],f=p.feature.filter(function(f){return f.i===x[1]})[0];
    return card(p,p.images[x[1]].src,f?f.room:p.name,p.name.toUpperCase());
  });
  document.getElementById('home-projects').innerHTML=homeCards.join('');
  var pgrid=document.getElementById('pgrid');
  function renderGrid(f){pgrid.innerHTML=PROJECTS.filter(function(p){return f==='all'||p.type===f}).map(function(p){return card(p,p.cover||p.images[0].src)}).join('');}
  document.querySelector('.filters').style.display='none';
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
    var known=['home','studio','services','portfolio','project','inquire'];
    if(known.indexOf(key)<0) key='home';
    if(key==='project'){
      var p=PROJECTS.filter(function(x){return x.id===parts[1]})[0]||PROJECTS[0];
      var hero=document.getElementById('proj-hero');
      hero.className='fill'; hero.style.backgroundImage='url('+(p.cover||p.images[0].src)+')';
      document.getElementById('proj-title').textContent=p.name;
      document.getElementById('proj-sub').textContent=p.loc;
      document.getElementById('proj-text').textContent=p.text;
      document.getElementById('proj-loc').textContent=p.loc;
      document.getElementById('proj-scope').textContent=p.type;
      document.getElementById('proj-credit').textContent=p.credit||'';
      document.getElementById('proj-gallery').innerHTML=p.images.map(function(im){
        return '<figure class="photo'+(im.wide?' wide':'')+'"><img src="'+im.src+'" alt="'+im.alt+'"'+(im.pos?' style="object-position:'+im.pos+'"':'')+' loading="lazy">'+(im.label?'<figcaption class="ba-label">'+im.label+'</figcaption>':'')+'</figure>';
      }).join('');
      document.getElementById('proj-gallery').classList.toggle('ba',!!p.ba);
    }
    document.querySelectorAll('.page').forEach(function(pg){pg.classList.toggle('active',pg.id==='page-'+key)});
    document.querySelectorAll('nav a').forEach(function(a){
      var t=a.getAttribute('href').slice(1);
      if(t===key||(key==='project'&&t==='portfolio'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    var titles={home:'Studio 2Kiwi | Interior Architecture & Design',studio:'The Studio | Studio 2Kiwi',services:'Services | Studio 2Kiwi',portfolio:'Portfolio | Studio 2Kiwi',project:'Portfolio | Studio 2Kiwi',inquire:'Inquire | Studio 2Kiwi'};
    document.title=titles[key];
    window.scrollTo(0,0);
    var anchor=key!=='project'&&parts[1]&&document.getElementById(parts[1]);
    if(anchor)anchor.scrollIntoView();
    onScroll();
  }
  function onScroll(){
    var hero=document.querySelector('.page.active .hero');
    var dark=hero && !hero.querySelector('.m-marble');
    head.classList.toggle('solid', !hero || !dark || window.scrollY > hero.offsetHeight-80);
  }
  window.addEventListener('hashchange',route);
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');
    if(!a)return;
    var h=a.getAttribute('href');
    if(h==='#main'){e.preventDefault();var m=document.getElementById('main');m.focus();window.scrollTo(0,0);return;}
    if(h===(location.hash||'#home')){e.preventDefault();route();}
  });
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
    window.location.href='mailto:hello@studio2kiwi.com?subject='+encodeURIComponent('Project inquiry from '+v('f-first')+' '+v('f-last'))+'&body='+encodeURIComponent(body);
    st.textContent='Your email app should open with the inquiry ready to send.';
  });
})();
