let navBarToggleBtn = document.querySelector('.navBarToggleBtn');
let holder = document.querySelector('.holder')
if (holder.classList.contains('navBarHide')) {
    holder.classList.remove('navBarHide');
  } else {
    holder.classList.add('navBarHide');
  }

  navBarToggleBtn.addEventListener('click', () => {
    holder.classList.toggle('navBarHide');
  });