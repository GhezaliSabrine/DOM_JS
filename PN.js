let btnplus = Array.from(
    document.getElementsByClassName("btn btn-outline-success")
  );
  
  for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener("click", function () {
      btnplus[i].previousElementSibling.innerText++;
      somme();
    });
  }
  
  let btnmois = document.querySelectorAll(".btn-outline-danger");
  
  for (let i = 0; i < btnmois.length; i++) {
    btnmois[i].addEventListener("click", function () {
      if (btnmois[i].nextElementSibling.innerText > 0) {
        btnmois[i].nextElementSibling.innerText--;
        somme();
      }
    });
  }
  
  function somme() {
    let price = document.getElementsByClassName("price");
    let qte = document.getElementsByClassName("qte");
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
      sum += price[i].innerHTML * qte[i].innerHTML;
    }
    return (document.getElementById("total").innerHTML = "Total : DZA" + sum);
  }
  
  //For button Like & remove_______________________________________
  
  let hearts = document.getElementsByClassName("fas fa-heart");
  for (let heart of hearts) {
    heart.addEventListener("click", function () {
      if (heart.style.color === "red") {
        heart.style.color = "gray";
      } else heart.style.color = "red";
      heart.classList.toggle("red");
    });
  }
  
 let rmv = Array.from(document.querySelectorAll(".fa-trash"));
  rmv.map((el, i) =>
    el.addEventListener("click", function () {
      el.parentNode.parentNode.remove();
      somme();
    })
  );

  
