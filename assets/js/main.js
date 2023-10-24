function alpineData() {
  return {
    toggle: 0,
    open: false,
  };
}

// Merubah Header
function changeHeader() {
  const header = document.getElementById('header');
  const logo = document.querySelector('.header_logo');
  const mobileMenu = document.querySelector('.mobile_menu');
  const headerLink = document.querySelectorAll('.header_link');
  if (this.scrollY >= 500)
    header.classList.add('scroll_header'),
      logo.classList.add('scroll_color'),
      mobileMenu.classList.add('scroll_color'),
      headerLink.forEach((element) => {
        element.classList.add('scroll_color');
      });
  else
    header.classList.remove('scroll_header'),
      logo.classList.remove('scroll_color'),
      mobileMenu.classList.remove('scroll_color'),
      headerLink.forEach((element) => {
        element.classList.remove('scroll_color');
      });
}
window.addEventListener('scroll', changeHeader);

// mendapatkan tahun untuk tampil di footer
const tahun = new Date().getFullYear();
const tahunFooter = document.getElementById('yearFooter');
tahunFooter.innerText = tahun;
