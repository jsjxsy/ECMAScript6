export default class ImagePreviewer {
    constructor() {
        this.images = Array('../img/01.png', '../img/02.png', '../img/03.png', '../img/04.png', '../img/05.png')
        this.currentIndex = 0
    }

    get LIArray() {

    }

    set LIArray(val) {
        this.lis = val
    }

    initView(ul){
        let li = ''
        this.images.forEach((item, i) => {
            if (this.currentIndex === i) {
                li = li + `<li><img src="${item}" class="tip-image"><img src="../img/active.png"></li>`
            } else {
                li = li + `<li><img src="${item}" class="tip-image"><img src="../img/normal.png"></li>`
            }

        })
        ul.innerHTML = li
    }

    /**
     * 前一张
     */
    pre() {
        if (this.currentIndex === 0) {
            alert('已经到了第一张图片')
            return
        }
        this.lis[this.currentIndex].children[1].src = '../img/normal.png'
        this.currentIndex--
        image.src = this.images[this.currentIndex]
        this.lis[this.currentIndex].children[1].src = '../img/active.png'
    }

    next() {
        if (this.currentIndex === 4) {
            alert('已经到了最后一张图片')
            return
        }
        this.lis[this.currentIndex].children[1].src = '../img/normal.png'
        this.currentIndex++
        image.src = this.images[this.currentIndex]
        this.lis[this.currentIndex].children[1].src = '../img/active.png'
    }

    /**
     * 根据指定的index跳转
     * @param int
     */
    current(index) {
        this.lis[this.currentIndex].children[1].src = '../img/normal.png'
        this.currentIndex = index
        this.lis[this.currentIndex].children[1].src = '../img/active.png'
        image.src = this.images[this.currentIndex]
    }


}
