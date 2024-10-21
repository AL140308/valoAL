const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const audio = box.querySelector("audio");

  box.addEventListener("click", () => {
    boxes.forEach((b) => {
      const otherAudio = b.querySelector("audio");
      if (!otherAudio.paused) {
        otherAudio.pause();
        otherAudio.currentTime = 0;
      }
    });

    if (audio) {
      audio.play();
    }
  });
});

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBox = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
