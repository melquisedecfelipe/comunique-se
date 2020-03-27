const showMenu = () => {
  const menu = document.getElementById('menu');

  menu.style.display === 'flex'
    ? (menu.style.display = 'none')
    : (menu.style.display = 'flex');
};

const slider = document.getElementById('slider');
const scrollStep = 290;

document.getElementById('previous').addEventListener('click', () => {
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth;

  scrollLeft - scrollStep <= scrollWidth
    ? slider.scrollTo(0, 0)
    : slider.scrollTo(scrollLeft - scrollStep, 0);
});

document.getElementById('next').addEventListener('click', () => {
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth;

  scrollLeft + scrollStep >= scrollWidth
    ? slider.scrollTo(scrollWidth, 0)
    : slider.scrollTo(scrollLeft + scrollStep, 0);
});
