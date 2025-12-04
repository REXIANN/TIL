function isPalindrome(x: number): boolean {
  const xString = x.toString();

  for (let i = 0; i < xString.length; i++) {
    const iMirror = xString.length - i - 1;

    if (xString[i] !== xString[iMirror]) {
      return false;
    }
  }

  return true;
}
