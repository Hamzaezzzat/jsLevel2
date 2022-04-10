const regInput = document.getElementById("regInput");

const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

regInput.addEventListener("keyup", (eo) => {
  if (regEmail.test(regInput.value)) {
    regInput.classList.remove("error");
    regInput.classList.add("success");
  } else {
    regInput.classList.remove("success");
    regInput.classList.add("error");
  }
});
