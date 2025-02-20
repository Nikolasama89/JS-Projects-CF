const daysGR = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
const monthsGR = ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαίου", "Ιουνίου", "Ιουλίου", "Αυγoύστου", "Σεπτεμβρίου", "Οκτωμβρίυ", "Νοεμβρίου", "Δεκεμβρίου"]
let notes = []
let count = 0

window.addEventListener("DOMContentLoaded", function(){

  function printGRDate() {
    let today = new Date();
    let month = today.getMonth();
    let day = today.getDay();
    let year = today.getFullYear();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();

    let outputDate = `${daysGR[day]} ,  ${today.getDate()} ${monthsGR[month]} ${year}`
    let outputHour = `${hour}:${minute}:${seconds}`
    document.getElementById("dateTxt").innerHTML = `${outputDate} <br> ${outputHour}`
    
  }
  this.setInterval(printGRDate, 1000)
  


  this.document.querySelector("#addNoteBtn").addEventListener("click", function(){
    onInsertHandler({ key: count + 1, note: document.querySelector("#inputNote").value.trim(), softDeleted: false })
  })

  this.document.querySelector("#inputNote").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      onInsertHandler({ key: count + 1, note: e.target.value.trim(), softDeleted: false })
    }
  })


})