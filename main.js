// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts =document.getElementsByClassName("like-glyph")
const errorSection = document.getElementById("modal")
const errorMsg =document.getElementById("modal-message")
errorSection.className ="hidden"


for (let btn of hearts){
  btn.addEventListener("click", () => 
      {mimicServerCall()
        .then(()=> {
      if (btn.className === "activated-heart"){
        btn.textContent =EMPTY_HEART
        btn.classList.remove("activated-heart")
      }
      else
      {btn.textContent = FULL_HEART
      btn.className.remove = "activated-heart"
      }
    })
    .catch((err) => {
      errorSection.removeAttribute("class")
      errorMsg.textContent = err
      setTimeout(() => {err.setAttribute("class" , "hidden")},3000)
    })
  
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
