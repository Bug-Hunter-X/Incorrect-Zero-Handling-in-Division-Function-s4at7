function myFunc(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //Incorrect: should handle 0 as a valid number
  }
  return a / b; 
}