document.body.addEventListener("keyup", (event) => {
    let typeKey = event.code.toLocaleLowerCase();
    playSound(typeKey);
});

document.querySelector(".composer button").addEventListener("click", () => {
    let song = document.querySelector("#input").value;

    if (song != "") {
        let songArray = song.split("");

        playComposition(songArray);
    }
});

document.querySelectorAll(".key").forEach((item) => {
    item.addEventListener("click", () => {
        playSound(`key${item.innerHTML.toLocaleLowerCase()}`);
    });
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key = "${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300);
    }
}

function playComposition(array) {
    let wait = 0;
    for (let item of array) {
        setTimeout(() => {
            playSound(`key${item}`);
        }, wait);

        wait += 250;
    }
}
