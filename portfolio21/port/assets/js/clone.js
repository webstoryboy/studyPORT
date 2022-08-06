let speed = 0
        let acc = 0
        let hover = false
        let width
        let times
        let cloned = []

        const item = document.querySelector('.menu--item')
        const word = item.querySelector('.menu--word')

        const calculate = () => {
            //console.log('cloned', cloned)
            cloned.forEach(i => {
                i.parentNode.removeChild(i)
            })
            cloned = []

            width = Math.ceil(word.clientWidth)
            times = Math.ceil(window.innerWidth / width)

            item.style.width = `${(times + 1) * width}px`

            for (let i = 0; i < times + 1; i++) {
                const clone = word.cloneNode(true)
                word.parentNode.appendChild(clone)
                cloned.push(clone)
            }
        }

        const handleMouse = bool => hover = bool
        item.addEventListener('mouseenter', () => {handleMouse(true)})
        item.addEventListener('touchstart', () => {handleMouse(true)})
        item.addEventListener('mouseleave', () => {handleMouse(false)})
        item.addEventListener('touchend', () => {handleMouse(false)})
        window.addEventListener('resize', calculate)
        window.addEventListener('load', calculate)

        const animate = () => {
            acc += 0.1
            if (hover) {
                acc -= 0.35
            }
            acc = Math.min(4, Math.max(0, acc))
            
            speed += acc

            if (speed >= width) {
                speed = 0
            }

            item.style.transform = `translateX(${-speed}px)`
            requestAnimationFrame(animate)
        }
        animate()


        let speed2 = 0
        let acc2 = 0
        let hover2 = false
        let width2
        let times2
        let cloned2 = []

        const item2 = document.querySelector('.menu--item2')
        const word2 = item2.querySelector('.menu--word2')

        const calculate2 = () => {
            //console.log('cloned2', cloned2)
            cloned2.forEach(i => {
                i.parentNode.removeChild(i)
            })
            cloned2 = []

            width2 = Math.ceil(word2.clientWidth)
            times2 = Math.ceil(window.innerWidth / width2)

            item2.style.width = `${(times2 + 1) * width2}px`

            for (let i = 0; i < times2 + 1; i++) {
                const clone2= word2.cloneNode(true)
                word2.parentNode.appendChild(clone2)
                cloned2.push(clone2)
            }
        }

        const handleMouse2 = bool => hover2 = bool
        item2.addEventListener('mouseenter', () => {handleMouse2(true)})
        item2.addEventListener('touchstart', () => {handleMouse2(true)})
        item2.addEventListener('mouseleave', () => {handleMouse2(false)})
        item2.addEventListener('touchend', () => {handleMouse2(false)})
        window.addEventListener('resize', calculate2)
        window.addEventListener('load', calculate2)

        const animate2 = () => {
            acc2 += 0.1
            if (hover2) {
                acc2 -= 0.35
            }
            acc2 = Math.min(4, Math.max(0, acc2))
            
            speed2 += acc2

            if (speed2 >= width2) {
                speed2 = 0
            }

            item2.style.transform = `translateX(${-speed2}px)`
            requestAnimationFrame(animate2)
        }
        animate2()