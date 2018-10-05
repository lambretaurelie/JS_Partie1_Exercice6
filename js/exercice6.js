function result() {
  var firstNumber = document.getElementById('firstNumber').value ;
  var secondNumber = document.getElementById('secondNumber').value ;
  if(isNaN(firstNumber)==false && isNaN(secondNumber)==false && secondNumber !=0){
    var result= firstNumber % secondNumber;
    alert('Le reste de la division de ces deux nombres est : '+ result);
  } else {
    alert('Erreur, ceci n\'est pas un nombre');
  }
}
