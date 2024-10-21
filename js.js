function calculate(operator) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Masukin Nomer Dong Bwang");
    return;
  }

  let result;
  if (operator === "+") {
    result = angka1 + angka2;
  } else if (operator === "-") {
    result = angka1 - angka2;
  } else if (operator === "*") {
    result = angka1 * angka2;
  } else if (operator === "/") {
    if (angka2 === 0) {
      alert("0 Gaiso Dibagi");
      return;
    }
    result = angka1 / angka2;
  } else {
    alert("GA VALID");
    return;
  }

  document.getElementById("result").value = result;
}