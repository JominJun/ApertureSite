let logo, backgrounds;
let xPos = 0;
let yPos = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.02;

const mouseMoveFunc = (e) => {
  xPos = e.clientX - window.innerWidth / 2;
  yPos = e.clientY - window.innerHeight / 2;
};

const mouseMoveLoop = () => {
  mouseX = (xPos - mouseX) * speed;
  mouseY = (yPos - mouseY) * speed;

  logo.style.transform = `translate(${-mouseX / 2}px, ${-mouseY / 2}px)`;

  for (bg of backgrounds) {
    bg.style.transform = `translate(${mouseX / 4}px, ${mouseY / 4}px)`;
  }

  window.requestAnimationFrame(mouseMoveLoop);
};

const logoFunc = () => {
  let visibility = $("#logo").is(":visible");

  if (visibility) {
    $("#logo").fadeOut(600);
  } else {
    $("#logo").fadeIn(600);
  }
};

const nameRedirectFunc = () => {
  console.log(this);
};

window.onload = () => {
  logo = document.getElementById("logo");
  backgrounds = document.getElementsByClassName("background");

  window.addEventListener("mousemove", mouseMoveFunc, false);
  mouseMoveLoop();

  $("#logo").fadeOut(0);
  document.getElementById("slogo").addEventListener("click", logoFunc, false);

  $(".name").on("click", function () {
    let name = $(this).attr("data-eng-name");
    window.location.href = `./member.php?name=${name}`;
  });
};
