const tlacitko = document.querySelector("#menu-tlacitko")

tlacitko.addEventListener("click", () => {
  const menu = document.querySelector("#menu-polozky")
  menu.classList.toggle("show")

  const ikonka = document.querySelector(".fas")
  if (menu.classList.contains("show")) {
    ikonka.classList.remove("fa-bars")
    ikonka.classList.add("fa-xmark")
  }
  else {
    ikonka.classList.remove("fa-xmark")
    ikonka.classList.add("fa-bars")
  }
  })
