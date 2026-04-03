function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateNick(length, mode, exclude, noRepeat) {
    let letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let vowels = "aeiou".split("");

    if (exclude) {
        let exArr = exclude.split("");
        letters = letters.filter(l => !exArr.includes(l));
        vowels = vowels.filter(l => !exArr.includes(l));
    }

    let nick = "";
    let lastChar = "";

    for (let i = 0; i < length; i++) {
        let char;
        if (mode === "readable") {
            char = (i % 2 === 0) ? getRandom(letters) : getRandom(vowels);
        } else if (mode === "vowelHeavy") {
            char = Math.random() > 0.3 ? getRandom(vowels) : getRandom(letters);
        } else if (mode === "consonantHeavy") {
            char = Math.random() > 0.7 ? getRandom(vowels) : getRandom(letters);
        } else {
            char = getRandom(letters);
        }

        if (noRepeat && char === lastChar && letters.length > 1) {
            i--; continue;
        }
        nick += char;
        lastChar = char;
    }
    return nick;
}

function generate() {
    const length = parseInt(document.getElementById("length").value) || 8;
    const count = parseInt(document.getElementById("count").value) || 1;
    const mode = document.getElementById("mode").value;
    const prefix = document.getElementById("prefix").value;
    const suffix = document.getElementById("suffix").value;
    const exclude = document.getElementById("exclude").value.toLowerCase();
    const numbers = document.getElementById("numbers").checked;
    const upperFirst = document.getElementById("upperFirst").checked;
    const upperAll = document.getElementById("upperAll").checked;
    const noRepeat = document.getElementById("noRepeat").checked;

    let results = [];
    for (let i = 0; i < count; i++) {
        let nick = generateNick(length, mode, exclude, noRepeat);
        if (upperAll) nick = nick.toUpperCase();
        else if (upperFirst) nick = nick.charAt(0).toUpperCase() + nick.slice(1);
        
        if (numbers && Math.random() > 0.4) {
            nick += Math.floor(Math.random() * 99);
        }
        results.push(prefix + nick + suffix);
    }

    document.getElementById("result").innerHTML = results.join("<br>");
    let history = document.getElementById("history");
    let entry = document.createElement("div");
    entry.innerHTML = results.join(", ") + "<hr>";
    history.prepend(entry);
}

function copyResult() {
    let text = document.getElementById("result").innerText.replace(/---/g, "");
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => alert("Скопировано!"));
}

function clearHistory() {
    document.getElementById("history").innerHTML = "";
}