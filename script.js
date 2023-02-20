function verificar() {
  const data = new Date();
  const ano = data.getFullYear();
  const fano = document.getElementById("txtano");
  const res = document.getElementById("res");
  const fsex = document.getElementsByName("radsex");
  let idade = ano - Number(fano.value);
  let genero = "";
  let img = document.createElement('img')
  img.setAttribute('id','foto')



  if (fano.value.length == 0 || fano.value > ano) {
    alert("[ERRO] verifique os dados e tente novamente!");
  }else if (fsex[0].checked) {
    genero = "Homem";
    if(idade >=0 && idade < 10){
      //criança
      img.setAttribute('src', 'criancam.jpg')
    } else if(idade < 50){
      // jovem
      img.setAttribute('src', 'jovemm.jpg')
    }else {
      // idoso
      img.setAttribute('src', 'idoso.jpg')
    }
  }else if (fsex[1].checked) {
    genero = "mulher";
    
    if(idade >=0 && idade < 15){
      //criança
      img.setAttribute('src', 'criancaf.jpg')
    } else if(idade < 50){
      // jovem
      img.setAttribute('src', 'jovemf.jpg')
    }else {
      // idoso
      img.setAttribute('src', 'idosa.jpg')
    }
  }
  res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  res.appendChild(img)
}
