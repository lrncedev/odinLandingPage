window.addEventListener("scroll",()=>{
  const nav = document.querySelector(".stickyNav");
  nav.classList.toggle('sticky', window.scrollY > 0);
})