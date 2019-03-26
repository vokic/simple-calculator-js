function calc() {
  let a = parseInt(document.querySelector("#vrednost1").value);
  let b = parseInt(document.querySelector("#vrednost2").value);
  let op = document.querySelector("#operacija").value;
  let izracunaj;

  if (op == "sab") {
    izracunaj = a + b;
  } else if (op == "odu"){
      izracunaj = a - b;
  }
  else if (op == "del") {
      izracunaj = a / b;
  }
  else if (op == "mno") {
      izracunaj = a * b;
  }

    document.querySelector("#rezultat").innerHTML = izracunaj;
  
}

