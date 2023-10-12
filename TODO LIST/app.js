document.querySelector("#push").onclick = function () {
  if (document.querySelector("input").value.length == 0) {
    alert("Veuillez saisir le nom de la tache !");
  } else {
    document.querySelector("#taches").innerHTML += `
    <div class='task'>
    <span>
    ${document.querySelector("input").value}
    </span>
    <button class='delete'>
    <i class='far fa-trash-alt'></i>
    </button>
    </div>
    `;
    //suppimer nos element
    let DELETE = document.querySelectorAll(".delete");
    for (let i = 0; i < DELETE.length; i++) {
      DELETE[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
