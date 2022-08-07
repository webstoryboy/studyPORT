const prefix = "";
const skills = [
    "Email : gkfl8809@naver.com",
    "Kako : gkfl8809",
    "Instagram : @noyclah_jdk",
    "Phone : 010-2377-2418"
].map((s) => `${s}`);
const delay = 5;
const step = 1;
const tail = 5;
const timeout = 75;

const p = document.createElement("p");
document.querySelector(".contact__box").appendChild(p);

const colors = ["#EBE8E4", "#000", "#fff"];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomChar() {
    return String.fromCharCode(Math.random() * (127 - 33) + 33);
}

function getRandomColoredString(n) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < n; i++) {
        const char = document.createElement("span");
        char.textContent = getRandomChar();
        char.style.color = getRandomColor();
        fragment.appendChild(char);
    }
    return fragment;
}

const $ = {
    text: "",
    prefixP: -tail,
    skillI: 0,
    skillP: 0,
    direction: "forward",
    delay,
    step
};

function render() {
    const skill = skills[$.skillI];

    if ($.step) {
        $.step--;
    } else {
        $.step = step;
        if ($.prefixP < prefix.length) {
            if ($.prefixP >= 0) {
                $.text += prefix[$.prefixP];
            }
            $.prefixP++;
        } else {
            if ($.direction === "forward") {
                if ($.skillP < skill.length) {
                    $.text += skill[$.skillP];
                    $.skillP++;
                } else {
                    if ($.delay) {
                        $.delay--;
                    } else {
                        $.direction = "backward";
                        $.delay = delay;
                    }
                }
            } else {
                if ($.skillP > 0) {
                    $.text = $.text.slice(0, -1);
                    $.skillP--;
                } else {
                    $.skillI = ($.skillI + 1) % skills.length;
                    $.direction = "forward";
                }
            }
        }
    }

    p.textContent = $.text;
    p.appendChild(
        getRandomColoredString(
            $.prefixP < prefix.length ?
            Math.min(tail, tail + $.prefixP) :
            Math.min(tail, skill.length - $.skillP)
        )
    );
    setTimeout(render, timeout);
}
setTimeout(render, 2000);