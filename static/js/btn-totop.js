const $btn = document.getElementById('btn-totop');
const $main = document.querySelector('.main-container');

function scrollDown() {
  if ($main.scrollTop > 1) {
    console.log('initialsised');
    $btn.style.bottom = '6rem ';
    $btn.style.opacity = '0';
  } else {
    $btn.style.bottom = '-10rem';
    $btn.style.opacity = '0';
  }
}

function toTop() {
  console.log('init');
  $main.scrollTop = 0;
}

$main.addEventListener('scroll', scrollDown);
$btn.addEventListener('click', toTop);
