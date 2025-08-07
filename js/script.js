document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  const events=[
    {title:'CPR Workshop',date:'Sep 12, 2025',desc:'Hands-on CPR practice.'},
    {title:'Health Fair',date:'Oct 4, 2025',desc:'Free health screenings.'}
  ];
  const grid=document.getElementById('events-grid');
  events.forEach(ev=>{
    const card=document.createElement('div');
    card.innerHTML=`<h4>${ev.title}</h4><p>${ev.date}</p><p>${ev.desc}</p>`;
    grid.appendChild(card);
  });
});