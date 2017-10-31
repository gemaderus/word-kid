function Word () {
  this.element = document.querySelector('#js-word');
}

Word.prototype.draw = function(letters) {
  var fragment = document.createDocumentFragment();

  letters.forEach(function(letter, index) {
    var li = document.createElement('li');
    li.classList.add('letter');
    li.innerHTML = letter;
    fragment.appendChild(li);
  });

  // Borro el contenido y después inserto el nuevo a partir de las letras que me llegan
  this.element.innerHTML = '';
  this.element.appendChild(fragment);
};