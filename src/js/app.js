import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
})

const baseLayer = document.querySelector('.layers__base')
const middleLayer = document.querySelector('.layers__middle')
const frontLayer = document.querySelector('.layers__front')
const textLayer = document.querySelector('.layers__text')

const hero__text = document.querySelector('.hero__text')


window.addEventListener('scroll', function (e) {
  baseLayer.style = `transform: translate3d(0, ${this.scrollY * 0.5}px, 0)`
  middleLayer.style = `transform: translate3d(0, ${this.scrollY * 0.3}px, 0)`
  frontLayer.style = `transform: translate3d(0, ${this.scrollY * 0.1}px, 0)`

  textLayer.style = `transform: translate3d(-50%, ${this.scrollY * 0.4}px, 0)`

  hero__text.style = `transform: translate3d(-50%, ${this.scrollY * 0.18}px, 0)`

})