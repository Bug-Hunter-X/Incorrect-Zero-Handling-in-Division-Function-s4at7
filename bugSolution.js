function myFunc(a, b) {
  if (b === 0) {
    return Infinity; // Handle division by zero
  } else if (a === 0) {
    return 0; // Handle zero numerator
  }
  return a / b; 
}