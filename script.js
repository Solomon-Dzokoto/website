const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(dropdownItem=> {
  const dropdown = dropdownItem.querySelector('.dropdown');
  const arrow = dropdownItem.querySelector('span'); 
  console.log(dropdown)

  dropdownItem.addEventListener('click', () => {

    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show')
      arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'; 
    } else {
      dropdown.classList.add('show')
      arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'; 
    }
  });
});

const menu = document.querySelector('.menu');
const close = document.querySelector('.close')
close.addEventListener('click',()=>{
  navItems.classList.toggle('stop')
menu.style.display='block'
})
menu.addEventListener('click',()=>{
 
  if(navItems.classList.contains('show')){
    navItems.classList.remove('show')
    icon.classList.add('fa-x')
    menu.style.display='block'
  }else{
      menu.style.display='none'
     navItems.classList.add('show')
  }
})


const searchButton = document.querySelector('.search__close');
const search = document.querySelector('.search');
const navItems = document.querySelector('.nav__items');
const myIcon=document.querySelector('.fat');

searchButton.addEventListener('click',()=>{
  search.classList.toggle('open');
  if(search.classList.contains('open')){
    navItems.style.display='none'
    searchButton .style.border='.1rem solid #1a73e8'
    myIcon.classList.remove('fat')
    myIcon.classList.add('fa-x');

  }else{
    navItems.style.display='flex';
       myIcon.classList.remove('fa-x');
       searchButton .style.border='none'
  }
})
 /* 
function toggleNavItem(){
  if(window.innerWidth<=900){
    navItems.style.display='one';
  }else{
    navItems.style.display='flex'; 
  }
}

toggleNavItem();
window.addEventListener("resize", toggleNavItem);






  document.addEventListener('click',(e)=>{
   if(e.target.matches('.dropdown__item')){
    const dropdown =dropdownItem.querySelector('.dropdown');
      console.log(dropdown)
   }
  })

  const footerNavs = document.querySelectorAll('.footer__nav'); 

  document.addEventListener('click', (e) => {
    const clickedFooterNav = e.target.closest('.footer__nav');
  
    if (clickedFooterNav) {
      const opener = clickedFooterNav.querySelector('.opener');
      opener.classList.toggle('show'); 
    } 
  });
     */


  const emails = document.querySelectorAll('.email');
  const buttons = document.querySelectorAll('.submit');
  
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
     
      const emailInput = button.closest('form').querySelector('input[type="email"]');
      const error = emailInput.closest('form').querySelector('.error'); 
  
      const emailInputValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(emailInputValue)) {
        error.style.display = 'none'; 
      } else {
        error.textContent = `Please enter a valid email;`
        error.style.display = "block"; 
 
      }
      setTimeout(error.textContent,2000)
    });
  });
  
 