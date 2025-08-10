const message = `akuu harapp kamuu bacaa iniii. \nAku pengen bilangg makasih udahh nemenin akuu\n\nDimulai dari sering ngobrol bareng, sedih bahagianya akuu sampai hal hak kecil yang tanpa kamu sadari\n\nI akuuu harapp kitaa bisaa lebihh darii kata "temen"n\nkitaa bisaa berjuang bareng,senang senang bareng,main barengg, sama keliling bandung barengnn\nsemogaa kamuu senang dengan catatan mungil inii yang aku buatt sendirii HAHAHAAH`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

