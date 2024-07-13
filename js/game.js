const words = [
    "central processing unit",
    "hard disk",
    "floppy disk",
    "keyboard",
    "mouse",
    "random access memory",
    "optical drive",
    "vga card",
    "printer",
    "solid state drive",
    "Heatsink",
    "grapich processing unit",
    "network interface card",
    "cmos",
    "daughter board",
    "transistor",
    "power supply unit",
    "touchpad",
    "flashdisk",
    "memory card",
    "handphone",
    "earphone",
    "external hard drive",
    "pen tablet",
    "scanner",
    "proyektor",
    "joy stick",
    "barcode reader",
    "digital modem",
    "router",
    "network switch",
    "repeater",

];

const hints = [
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    "Perangkat hardware",
    
];

const images = [
    "img/cpu.jpeg",
    "img/hdd.jpeg",
    "img/FloppyDisk.jpeg",
    "img/keyboard.jpeg",
    "img/mouse.jpeg",
    "img/ram.jpeg",
    "img/dvd.jpeg",
    "img/VGACARD.jpeg",
    "img/printer.jpeg",
    "img/ssd.jpeg",
   "img/Heatsink.jpeg",
   "img/gpu.jpeg",
   "img/nic.jpeg",
   "img/cmos.jpeg",
   "img/daughterBoard.jpeg",
   "img/transistor.jpeg",
   "img/psu.jpeg",
   "img/touchpad.jpeg",
   "img/flashdisk.jpeg",
   "img/memorycard.jpeg",
   "img/handphone.jpeg",
   "img/earphone.jpeg",
   "img/externalHardDrive.jpeg",
   "img/penTablet.jpg",
   "img/scanner.jpeg",
   "img/proyektor.jpeg",
   "img/joystick.jpeg",
   "img/bacodeReader.jpeg",
   "img/digitalmodem.jpeg",
   "img/router.jpeg",
   "img/networkSwitch.jpeg",
   "img/repeater.jpeg",
   
];

let displayWord = "";
let currentIndex = 0;
let correctAnswers = 0;
let wordsAnswered = new Set();

function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
        [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
    }
    return strArray.join("");
}

function chek() {
    let input = document.getElementById("input").value.toLowerCase();
    let output = document.getElementById("output");
    let nextButton = document.getElementById("nextButton");

    if (input === displayWord) {
        output.innerHTML = "Hasil: Benar";
        nextButton.disabled = false;
    } else {
        output.innerHTML = "Hasil: Salah";
        nextButton.disabled = true;
    }
}

function selanjutnya() {
    if (correctAnswers === words.length) {
        document.getElementById("gameArea").innerHTML = `<h1>Selamat, Anda telah menjawab semua dengan benar!</h1>`;
        return;
    }
    currentIndex = Math.floor(Math.random() * words.length);
    displayWord = words[currentIndex];
    let hint = hints[currentIndex];
    let scrambleWord = shuffle(displayWord);

    document.getElementById("scrambleWord").innerText = scrambleWord.toUpperCase();
    document.getElementById("hint").innerHTML = "<b>Jenis:</b> " + hint;
    document.getElementById("output").innerText = "Hasil:";
    document.getElementById("input").value = "";
    document.getElementById("nextButton").disabled = true;

    let image = document.getElementById("image");
    image.src = images[currentIndex];
}

function showGame() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
}

function startGame() {
    let playerName = document.getElementById("playerName").value;
    if (playerName) {
        document.getElementById("displayName").innerText = playerName;
        document.getElementById("gameArea").style.display = 'block';
        document.querySelector('.player-name').style.display = 'none';
        selanjutnya();
    } else {
        alert("Masukkan nama Anda terlebih dahulu!");
    }
}

window.onload = () => {
    document.getElementById('nextButton').disabled = true;
};
