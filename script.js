  // Menu mobile — chỉ 1 khối nav-controls duy nhất, không lặp DOM
  const menuToggle = document.getElementById('menuToggle');
  const navControls = document.getElementById('navControls');
  menuToggle.addEventListener('click', () => {
    navControls.classList.toggle('open');
  });
  navControls.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> navControls.classList.remove('open'));
  });
  document.addEventListener('click', (e)=>{
    if(navControls.classList.contains('open') &&
       !navControls.contains(e.target) &&
       !menuToggle.contains(e.target)){
      navControls.classList.remove('open');
    }
  });

  // Tìm kiếm lọc tin tức
  const newsGrid = document.getElementById('newsGrid');
  const newsEmpty = document.getElementById('newsEmpty');
  const cards = Array.from(newsGrid.querySelectorAll('.news-card'));

  function filterNews(term){
    const t = term.trim().toLowerCase();
    let visible = 0;
    cards.forEach(c=>{
      const match = c.dataset.title.toLowerCase().includes(t);
      c.style.display = match ? '' : 'none';
      if(match) visible++;
    });
    newsEmpty.style.display = visible === 0 ? 'block' : 'none';
  }

  document.getElementById('searchInput').addEventListener('input', (e)=>{
    filterNews(e.target.value);
  });
