document.addEventListener("partialsLoaded", () => {

  const existingData = JSON.parse(localStorage.getItem("Clients")) || [];

  function collectData() {
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const dataObject = {
      name: name,
      "phone-number": phoneNumber,
    };
    existingData.push(dataObject);

    localStorage.setItem("Clients", JSON.stringify(existingData));

    document.querySelector(".question-tab__form-block").reset();
  }

  document
    .querySelector(".question-tab__send-button")
    .addEventListener("click", collectData);
});