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
  color = getBgColor()        // update state
  renderBg()                  // render based on the updated state
}

function getBgColor() {
  const colors = ["black", "red", "green", "blue", "yellow", "orange", "white"]
  return colors[Math.floor(Math.random() * colors.length)]
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

