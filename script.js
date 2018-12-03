var a = prompt ("side a")
var b = prompt (" side b")
var c = prompt ("side c")
//Check if sides received constitiute a triangle.
if ((a + b > c) && (b + c > a) && (a + c > b)) {
  if (a == b && a == c && b == c) {
    alert ("Equilateral: All sides are equal!")
  } else if (a == b || a == c || b == c) {
    alert ("Isosceles: Exactly 2 sides are equal.")
  } else {
    alert ("Scalene: No sides are equal.")
  }
} else {
  alert("NOT a triangle.")
}
