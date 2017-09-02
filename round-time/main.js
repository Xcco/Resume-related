let time
let second
let minute
let hour
let ss
let sm
let sh
// let cxt
// const canvas= $('canvas')[0]
const $hour = $('ul>li:nth-child(1)>span')
const $minute = $('ul>li:nth-child(2)>span')
const $second = $('ul>li:nth-child(3)>span')
const $hourBorder = $('ul>li:nth-child(1)>div')
const $minuteBorder = $('ul>li:nth-child(2)>div')
const $secondBorder = $('ul>li:nth-child(3)>div')

let coordinate = [
  ['50% 50%']
]
for (let i = 0; i < 60; i++) {
  if (i === 15) {
    coordinate.push('100% 50%')
  } else if (i === 30) {
    coordinate.push('50% 100%')
  } else if (i === 45) {
    coordinate.push('0% 50%')
  } else {
    coordinate.push((1 + Math.sin(Math.PI * i / 30)) * 50 + '% ' + (1 - Math.cos(Math.PI * i / 30)) * 50 + '%')
  }
}

setInterval(() => {
  time = new Date().toString().slice(16, 24)
  $hour.text(time.slice(0, 2))
  $minute.text(time.slice(3, 5))
  $second.text(time.slice(6, 8))
  second = parseInt(time.slice(6, 8))
  ss = 'polygon(' + coordinate.slice(0, second + 2).join(',') + ')'
  minute = parseInt(time.slice(3, 5))
  sm = 'polygon(' + coordinate.slice(0, minute + 2).join(',') + ')'
  hour = parseInt(time.slice(0, 2))
  sh = 'polygon(' + coordinate.slice(0, hour * 5 + 2).join(',') + ')'
  //$secondBorder.animate({ 'style': 'border-color:#000' }, 1000)
  $secondBorder.css('clip-path', ss)
  $minuteBorder.css('clip-path', sm)
  $hourBorder.css('clip-path', sh)
}, 200)
