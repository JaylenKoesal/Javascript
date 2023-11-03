function calculate(num1, num2) {
    var result = num1 + num2;
    document.getElementById("oefening1Resultaat").textContent = "Antwoord: " + result;
  }
  
  function multiplyByFive(number) {
    var result = number * 5;
    document.getElementById("oefening2Resultaat").textContent = "Antwoord: " + result;
  }
  
  function calculateMinutes(seconds) {
    var minutes = seconds / 60;
    document.getElementById("oefening3Resultaat").textContent = "Antwoord: " + minutes + " minuten";
  }
  
  // Roep de functies aan met de gewenste invoergegevens
  calculate(1, 12);
  multiplyByFive(7);
  calculateMinutes(3600);
  