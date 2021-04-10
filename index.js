let buttonsArray = document.querySelectorAll(".drum")

for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", handleClick);
};

function handleClick() {
  var buttonInnerHtml = this.innerHtml;

  switch (buttonInnerHtml) {
    case expression:

      break;
    default:

  }
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
