
const configs =
  [
    { button: "prototypebutton", img: "prototypeimg", imgName: "block", pathPrefix: "../images" },
    { button: "pdfbutton", img: "pdfimg", imgName: "pdf-icon", pathPrefix: "../images" },
    { button: "githubbutton", img: "githubimg", imgName: "github", pathPrefix: "../images" },
    { button: "videobutton", img: "videoimg", imgName: "play-video-icon", pathPrefix: "../images" },
    { button: "webbutton", img: "webimg", imgName: "web", pathPrefix: "../images" },
    { button: "portfoliobutton", img: "portfolioimg", imgName: "portfolio", pathPrefix: "./images" },
    { button: "contactbutton", img: "contactimg", imgName: "conversation", pathPrefix: "./images" },
    { button: "linkedinbutton", img: "linkedinimg", imgName: "linkedin-icon", pathPrefix: "./images" },
    { button: "instabutton", img: "instaimg", imgName: "insta-icon", pathPrefix: "./images" },
  ]

for (let configEntry of configs) {

  console.log(configEntry);
  let button = document.querySelector("." + configEntry.button) // this will get us the button ("." + "prototypebutton")
  if (!button) continue;
  let image = document.querySelector("." + configEntry.img); // the same as above.

  button.addEventListener("mouseover", function() {
    image.src = configEntry.pathPrefix + "/" + configEntry.imgName + "-yellow.png" 
  }, false)
  button.addEventListener("mouseleave", function() {
    image.src = configEntry.pathPrefix + "/" + configEntry.imgName + ".png" 
  }, false)
}


let hiddenimage = document.getElementById("hiddenimage");

hiddenimage.addEventListener('click', revealImage);

function revealImage() {
  hiddenimage.classList.toggle("reveal");
}


let topButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
