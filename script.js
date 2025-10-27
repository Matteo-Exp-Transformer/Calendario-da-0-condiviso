const menu = document.getElementById("menu");
const bottone = document.getElementById("invia");

bottone.addEventListener("click", () => {
  const valoreScelto = menu.value;

  if (valoreScelto === "") {
    console.log("⚠️ Nessuna opzione selezionata.");
  } else {
    console.log("✅ Hai scelto:", valoreScelto);
  }
});
