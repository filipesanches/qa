var script = document.createElement('script');
script.setAttribute('type', 'text/javascript')
script.src = 'https://filipesanches.github.io/qa/data.json';
document.head.appendChild(script);
setTimeout(function () {
  const txt = JSON.parse(jsonData)


  const menuQA = document.createElement('menuqa');
  menuQA.style.width = '30px';
  menuQA.style.height = '30px';
  menuQA.style.background = 'red';
  menuQA.style.position = 'fixed';
  menuQA.style.top = 0;
  menuQA.style.left = 0;
  menuQA.style.cursor = 'pointer';
  document.body.appendChild(menuQA)

  const passosMeet = document.createElement('passos');
  passosMeet.style.display = 'none';
  passosMeet.style.zIndex = 1000;
  passosMeet.style.background = '#fff';
  passosMeet.style.position = 'fixed';
  passosMeet.style.top = '70px';
  passosMeet.style.left = 0;
  document.body.appendChild(passosMeet);


  const lista = document.createElement('ul');
  txt.forEach(function (v, a, i) {
    const li = document.createElement('li');
    li.innerText = v;
    lista.appendChild(li)
  })
  passosMeet.appendChild(lista)



  menuQA.addEventListener('click', function () {
    if (passosMeet.style.display === 'none') {
      passosMeet.style.display = 'block';
    } else {
      passosMeet.style.display = 'none';
    }
  })

  lista.querySelectorAll('li').forEach(function (ul) {
    ul.addEventListener('click', function (e) {
      if (ul.style.background == 'rgb(255, 0, 0)') {
        ul.style.background = '#fff'
      } else {
        ul.style.background = '#ff0000'
      }
    })
  })

},1000)
