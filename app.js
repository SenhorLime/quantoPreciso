const submitButton = document.querySelector(".submit-button");
const gradeInput = document.querySelector("#yearGrade");
const resultField = document.querySelector(".results");

let notaAno = 0;

submitButton.addEventListener("click", () => {
  notaAno = gradeInput.value;

  if (notaAno < 40 || notaAno >= 60) {
    alert("Nota Invalida. Tente Novamente");
  } else {
    let notaNecessaria = (60 - notaAno) / 2;

    resultField.innerHTML =
      "Você precisa tirar " +
      (60 + notaNecessaria) +
      " na recuperação final para passar";

    submitButton.innerHTML = `<button id="submit">Ver outra nota</button>`;
  }
});
