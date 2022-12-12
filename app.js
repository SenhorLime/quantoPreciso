const submitButton = document.querySelector(".submit-button");
const gradeInput = document.querySelector("#yearGrade");
const resultField = document.querySelector(".results");

let notaAno = 0;

function getValue() {
  notaAno = gradeInput.value;

  if (notaAno < 40 || notaAno >= 60) {
    alert("Nota Invalida. Tente Novamente");
  } else {
    submitButton.innerHTML = `<button id="submit" onclick="showResult()">Mostre quanto preciso</button>`;
  }
}

function showResult() {
  let notaNecessaria = (60 - notaAno) / 2;
  
  console.log(notaNecessaria);

  resultField.innerHTML = "Você precisa tirar " + (60+notaNecessaria) + " na recuperação final para passar";
}
