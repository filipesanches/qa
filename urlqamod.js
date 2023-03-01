var txt = [];
const json = fetch('https://cdn.jsdelivr.net/gh/filipesanches/qa@13bdb99f524f4d87a02a47f2492089d4f31429e9/data.json')
  .then(resposta => resposta.json())
json.then(dados => {
  console.log(dados)
  txt = dados
})
function hide(selector) {
  var node = document.querySelector(selector);
  node.setAttribute('class', 'hide-task-checklist');
}
document.querySelectorAll('.container')[1].style.display = 'none'
hide("#taskAdsAD");
hide("#taskCM");
hide("#taskGA4");
document.querySelector("#taskEC").setAttribute('class', '')

var label = document.querySelectorAll('[for*="ww-cbt3"]');

label.forEach(function (campo, i) {
  campo.innerText = txt[i]
})

label.forEach(function (campo, i) {
  if (campo.innerText == 'undefined') {
    campo.innerText = ''
  }
})
