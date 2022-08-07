let loops = gsap.utils.toArray('.banner__main').map((line, i) => {
    const links = line.querySelectorAll(".banner__text");
    return horizontalLoop(links, {
        repeat: -1,
        speed: 0.8 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
    });
});

let loops2 = gsap.utils.toArray(['.site__title.desc1', '.script__title.desc1']).map((line, i) => {
    const links2 = line.querySelectorAll(".js-text");
    return horizontalLoop(links2, {
        repeat: -1,
        speed: 0.5 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links2[0], "marginRight", "px"))
    });
});

let loops3 = gsap.utils.toArray(['.site__title.desc2', '.script__title.desc2']).map((line, i) => {
    const links3 = line.querySelectorAll(".js-text");
    return horizontalLoop(links3, {
        repeat: -1,
        speed: 0.2 + i * 0.5,
        reversed: false,
        paddingLeft: parseFloat(gsap.getProperty(links3[0], "marginLeft", "px"))
    });
});

let loops4 = gsap.utils.toArray(['.site__title.desc3', '.script__title.desc3']).map((line, i) => {
    const links4 = line.querySelectorAll(".js-text");
    return horizontalLoop(links4, {
        repeat: -1,
        speed: 0.8 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links4[0], "marginRight", "px"))
    });
});

let currentScroll = 0;
let scrollDirection = 1;
let scrollDirection2 = 1;

window.addEventListener("scroll", () => {
    let direction = (window.pageYOffset > currentScroll) ? -1 : 1;
    let direction2 = (window.pageYOffset > currentScroll) ? 1 : -1;
    // 왼쪽으로 가다가 위로 스크롤하면 오른쪽으로
    if (direction !== scrollDirection) {
        // main
        loops.forEach(tl => gsap.to(tl, {
            timeScale: direction * 2,
            overwrite: true
        }));

        // site desc1
        loops2.forEach(tl => gsap.to(tl, {
            timeScale: direction * 1,
            overwrite: true
        }));

        // stie desc3
        loops4.forEach(tl => gsap.to(tl, {
            timeScale: direction * 1,
            overwrite: true
        }));

        scrollDirection = direction;
    }
    // 오른쪽으로 가다가 위로 스크롤하면 왼쪽으로
    if (direction2 !== scrollDirection2) {
        // site desc2
        loops3.forEach(tl => gsap.to(tl, {
            timeScale: direction2 * 1,
            overwrite: true
        }));

        scrollDirection2 = direction2;
    }
    currentScroll = window.pageYOffset;
});


/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: {
                ease: "none"
            },
            onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        // pixelsPerSecond = 50,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? v => v : gsap.utils.snap(config.snap ||
            1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
        xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 50 + gsap
                .getProperty(el, "xPercent"));
            return xPercents[i];
        }
    });
    gsap.set(items, {
        x: 0
    });
    totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config
            .paddingRight) || 0);
    for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(item, {
                xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
                duration: distanceToLoop / pixelsPerSecond
            }, 0)
            .fromTo(item, {
                xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
            }, {
                xPercent: xPercents[i],
                duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false
            }, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length :
            length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index >
            curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {
                time: gsap.utils.wrap(0, tl.duration())
            };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }
    tl.next = vars => toIndex(curIndex + 1, vars);
    tl.previous = vars => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    return tl;
}