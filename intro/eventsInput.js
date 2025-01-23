function echo() {
  const inputTxt = document.getElementById("inputTxt")
  const val = inputTxt.value

  const helloTxt = document.getElementById("helloTxt")
  helloTxt.innerHTML = val
}