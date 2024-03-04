
let input = document.querySelector(".input-group input");
let btn = document.querySelector(".input-group button");

input.addEventListener("keyup", function(e) {
    if (e.keyCode ===13){
        btn.click();
    }
});

btn.onclick = function () {
  let a = input.value;
  if (a != "") {
    let yapilcak = document.querySelector(".todo");
    yapilcak.innerHTML += `
    <li class="p-3">
    <span>${a}</span>
    <span class="float-end btn h-100 mx-1 p-0" id="tik"><i class="fa-solid fa-check"></i></span>
    <span class="float-end btn h-100 mx-1 p-0" id="cop"><i class="fa-solid fa-trash"></i></span>
    </li>`;
    input.value = "";
  } else {
    alert("Lütfen yazınız");
  }

  let tik = document.querySelectorAll("#tik");

  tik.forEach((e) => {
    e.addEventListener("click", (event) => {
      let cizgi = e.parentElement.children[0];
      cizgi.classList.toggle("ciz");

      let li = e.parentElement;
      li.classList.toggle("renk");
      
      if(li.classList.contains("renk")){
        e.innerHTML =`<span class="float-end btn h-100 mx-1 p-0" id="tik"><i class="fa-solid fa-xmark"></i>
        </span>`}else{
          e.innerHTML = `<span class="float-end btn h-100 mx-1 p-0" id="tik"><i class="fa-solid fa-check"></i>
          </span>`
        }
        ;
        
    });
  });

  let cop = document.querySelectorAll("#cop");
  cop.forEach(function (e) {
    e.addEventListener("click", (event) => {
      let li = e.parentElement;
      li.style.display = "none";
    });
  });
};