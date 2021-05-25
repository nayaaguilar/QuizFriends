var friend1 = ["rachel"]
var imgfriend1 = ["https://i.imgur.com/yKbC0h6.gif"]
var friend2 = ["ross"]
var imgfriend2 = ["https://i.imgur.com/jYKBF9t.gif"]
var friend3 = ["monica"]
var imgfriend3 = ["https://i.imgur.com/10Hu338.gif"]
var friend4 = ["chandler"]
var imgfriend4 = ["https://i.imgur.com/WhCH5BP.gif"]
var friend5 = ["phoebe"]
var imgfriend5 = ["https://i.pinimg.com/originals/fc/ee/e0/fceee0729dad33b38903a8b641d9585e.gif"]
var friend6 = ["joey"]
var imgfriend6 =["https://i.pinimg.com/originals/d1/7f/69/d17f69706ec40b254b8824491a0a6731.gif"]

var cont1 = 0, cont2 = 0, cont3 = 0, cont4 = 0, cont5 = 0, cont6 = 0;

var sub1 = document.querySelector("#check1")
var sub2 = document.querySelector("#check2")
var sub3 = document.querySelector("#check3")
var sub4 = document.querySelector("#check4")
var sub5 = document.querySelector("#check5")
var sub6 = document.querySelector("#check6")

sub1.addEventListener('click', function() {
    var name = document.querySelector("#friend1").value.toLowerCase()
    if (name == friend1) {
      imagem = "#imgfriend1", feedback = "#feedback1", evol = imgfriend1
    evoluir(imagem, feedback, cont1, evol)
      document.querySelector("#feedback1").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback1").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback1").innerHTML = ""
      }, 2000);
    }
})
sub2.addEventListener('click', function() {
    var name = document.querySelector("#friend2").value.toLowerCase()
    if (name == friend2) {
      imagem = "#imgfriend2", feedback = "#feedback2", evol = imgfriend2
      evoluir(imagem, feedback, cont2, evol)
      document.querySelector("#feedback2").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback2").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback2").innerHTML = ""
      }, 2000);
    }
})
sub3.addEventListener('click', function() {
    var name = document.querySelector("#friend3").value.toLowerCase()
    if (name == friend3) {
      imagem = "#imgfriend3", feedback = "#feedback3", evol = imgfriend3
      evoluir(imagem, feedback, cont3, evol)
      document.querySelector("#feedback3").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback3").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback3").innerHTML = ""
      }, 2000);
    }
})
sub4.addEventListener('click', function() {
    var name = document.querySelector("#friend4").value.toLowerCase()
    if (name == friend4) {
      imagem = "#imgfriend4", feedback = "#feedback4", evol = imgfriend4
      evoluir(imagem, feedback, cont4, evol)
      document.querySelector("#feedback4").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback4").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback4").innerHTML = ""
      }, 2000);
    }
})
sub5.addEventListener('click', function() {
    var name = document.querySelector("#friend5").value.toLowerCase()
    if (name == friend5) {
      imagem = "#imgfriend5", feedback = "#feedback5", evol = imgfriend5
      evoluir(imagem, feedback, cont5, evol)
      document.querySelector("#feedback5").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback5").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback5").innerHTML = ""
      }, 2000);
    }
})
sub6.addEventListener('click', function() {
    var name = document.querySelector("#friend6").value.toLowerCase()
    if (name == friend6) {
      imagem = "#imgfriend6", feedback = "#feedback6", evol = imgfriend6
      evoluir(imagem, feedback, cont6, evol)
      document.querySelector("#feedback6").innerHTML = "Boa! você acertou! &#128516;"
    } else {
      document.querySelector("#feedback6").innerHTML = "Você errou, não fique curioso, tente de novo! &#128521;" 
      setTimeout(function() {
        document.querySelector("#feedback6").innerHTML = ""
      }, 2000);
    }
})
function evoluir(imagem, feedback, contev, evol) {
  img = document.querySelector(imagem)
  if (contev < 1) {
    img.src = evol;
  }
}
