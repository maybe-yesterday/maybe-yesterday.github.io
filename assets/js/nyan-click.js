document.addEventListener('click', function (e) {
  let nyanCat = document.createElement('img');
  nyanCat.src = 'https://media.giphy.com/media/sIIhZYGCkrwly/giphy.gif';
  nyanCat.style.position = 'absolute';
  nyanCat.style.left = (e.pageX - 25) + 'px';
  nyanCat.style.top = (e.pageY - 25) + 'px';
  nyanCat.style.width = '50px';
  nyanCat.style.pointerEvents = 'none';
  nyanCat.style.zIndex = '9999';
  nyanCat.style.transition = 'opacity 1s linear';
  document.body.appendChild(nyanCat);

  setTimeout(function () {
    nyanCat.style.opacity = '0';
  }, 500);

  setTimeout(function () {
    if (nyanCat.parentNode) {
      nyanCat.parentNode.removeChild(nyanCat);
    }
  }, 1500);
});