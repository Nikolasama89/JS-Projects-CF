let color = undefined

window.addEventListener("DOMContentLoaded", function() {
  this.document.querySelector("#btn").addEventListener("click", function() {
    onClickMeClicked()
  })
})

function onClickMeClicked() {
  updateBg()
}

/**
 * Model; 
 */
function updateBg() {
  getBgColor()        // update state
  renderBg()                  // render based on the updated state
}

function getBgColor() {
  // const colors = ["black", "red", "green", "blue", "yellow", "orange", "white"]
  // return colors[Math.floor(Math.random() * colors.length)]

  const letters = ["A", "B", "C", "D", "E", "F"]
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  const hex = [...letters, ...digits]
  
  color = "#"
  for (let i = 1; i <= 6; i++) {
    let randomHex = Math.floor(Math.random() * hex.length)
    color += hex[randomHex]
  }
}

/**
 * View - UI rendering
 */
function renderBg() {
  // gives string
  document.querySelector("#hex").innerHTML = color
  // changes style
  document.body.style.backgroundColor = color
}

