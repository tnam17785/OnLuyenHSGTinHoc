  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const mobilePanel = document.getElementById('mobilePanel');
  menuToggle.addEventListener('click', () => {
    mobilePanel.classList.toggle('open');
  });
  mobilePanel.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mobilePanel.classList.remove('open'));
  });

  // Tìm kiếm lọc tin tức (đồng bộ ô desktop & mobile)
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

  const inputs = [document.getElementById('searchInput'), document.getElementById('searchInputMobile')];
  inputs.forEach(inp=>{
    inp.addEventListener('input', (e)=>{
      inputs.forEach(o=>{ if(o!==e.target) o.value = e.target.value; });
      filterNews(e.target.value);
    });
  });
