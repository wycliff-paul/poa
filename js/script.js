var triangle = function(){
  var a = parseInt(document.getElementById("A").value);
  var b = parseInt(document.getElementById("B").value);
  var c = parseInt(document.getElementById("C").value);
  //Check if sides received constitiute a triangle.

    if (a == b && a == c && b == c) {
      alert ("Equilateral: All sides are equal!")
    } else if (a == b || a == c || b == c) {
      alert ("Isosceles: Exactly 2 sides are equal.")
    } else if ((a + b) <= (c) || (b + c) <= (a) || (a + c) <= (b)){
      alert ("Not a triangle");
    } else {
    alert("Scalene: No sides are equal.");
  }

}
