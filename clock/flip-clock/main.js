let time = new Date().toString().slice(16, 24)
let clock=0
const $HFT = $('.hour .wrap-fir .front-top')
const $MFT = $('.minute .wrap-fir .front-top')
const $SFT = $('.second .wrap-fir .front-top')
const $HFB = $('.hour .wrap-fir .front-bottom')
const $MFB = $('.minute .wrap-fir .front-bottom')
const $SFB = $('.second .wrap-fir .front-bottom')
const $HST = $('.hour .wrap-sec .front-top')
const $MST = $('.minute .wrap-sec .front-top')
const $SST = $('.second .wrap-sec .front-top')
const $HSB = $('.hour .wrap-sec .front-bottom')
const $MSB = $('.minute .wrap-sec .front-bottom')
const $SSB = $('.second .wrap-sec .front-bottom')

const $HFBT = $('.hour .wrap-fir .back-top')
const $MFBT = $('.minute .wrap-fir .back-top')
const $SFBT = $('.second .wrap-fir .back-top')
const $HFBB = $('.hour .wrap-fir .back-bottom')
const $MFBB = $('.minute .wrap-fir .back-bottom')
const $SFBB = $('.second .wrap-fir .back-bottom')
const $HSBT = $('.hour .wrap-sec .back-top')
const $MSBT = $('.minute .wrap-sec .back-top')
const $SSBT = $('.second .wrap-sec .back-top')
const $HSBB = $('.hour .wrap-sec .back-bottom')
const $MSBB = $('.minute .wrap-sec .back-bottom')
const $SSBB = $('.second .wrap-sec .back-bottom')

//
$HFT.text(time[0])
$HST.text(time[1])
$MFT.text(time[3])
$MST.text(time[4])
$SFT.text(time[6])
$SST.text(time[7])
$HFBB.text(time[0])
$HSBB.text(time[1])
$MFBB.text(time[3])
$MSBB.text(time[4])
$SFBB.text(time[6])
$SSBB.text(time[7])

//依次代入
let a=time[0]>1?0:parseInt(time[0])+1
let b=time[1]>8?0:parseInt(time[1])+1
let c=time[3]>5?0:parseInt(time[3])+1
let d=time[4]>8?0:parseInt(time[4])+1
let e=time[6]>8?0:parseInt(time[6])+1
let f=time[7]>8?0:parseInt(time[7])+1
$HFB.text(a)
$HSB.text(b)
$MFB.text(c)
$MSB.text(d)
$SFB.text(e)
$SSB.text(f)

//防止闪屏
setTimeout(()=>{
  $HFBT.text(a)
  $HSBT.text(b)
  $MFBT.text(c)
  $MSBT.text(d)
  $SFBT.text(e)
  $SSBT.text(f)
},100)


setInterval(() => {
  time = new Date().toString().slice(16, 24)
  $SST.text(time[7])
  $SSBB.text(time[7])
  f=time[7]==9?0:parseInt(time[7])+1
  $SSB.text(f)
  setTimeout(()=>{
    $SSBT.text(f)
  },100)
  topFlip($SST)
  bottomFlip($SSB)
  if($SST.text()==9){
    $SFT.text(time[6])
    $SFBB.text(time[6])
    e=time[6]==5?0:parseInt(time[6])+1
    $SFB.text(e)
    setTimeout(()=>{
      $SFBT.text(e)
    },100)
    topFlip($SFT)
    bottomFlip($SFB)
  }
  if($SST.text()==9 && $SFT.text()==5){
    $MST.text(time[4])
    $MSBB.text(time[4])
    d=time[4]==9?0:parseInt(time[4])+1
    $MSB.text(d)
    setTimeout(()=>{
      $MSBT.text(d)
    },100)
    topFlip($MST)
    bottomFlip($MSB)
  }
  if($SST.text()==9 && $SFT.text()==5 && $MST.text()==9){
    console.log(1);
    $MFT.text(time[3])
    $MFBB.text(time[3])
    c=time[3]==5?0:parseInt(time[3])+1
    $MFB.text(c)
    setTimeout(()=>{
      $MFBT.text(c)
    },100)
    topFlip($MFT)
    bottomFlip($MFB)
  }

  if($SST.text()==9 && $SFT.text()==5 && $MST.text()==9 && $MFT.text()==5){
    $HST.text(time[1])
    $HSBB.text(time[1])
    b=time[1]==9?0:parseInt(time[1])+1
    $HSB.text(b)
    setTimeout(()=>{
      $HSBT.text(b)
    },100)
    topFlip($HST)
    bottomFlip($HSB)
  }
  if($SST.text()==9 && $SFT.text()==5 && $MST.text()==9 && $MFT.text()==5 && $HST.text()==9){
    $HFT.text(time[1])
    $HFBB.text(time[1])
    a=parseInt(time[0])+1
    $HFB.text(a)
    setTimeout(()=>{
      $HFBT.text(a)
    },100)
    topFlip($HFT)
    bottomFlip($HFB)
  }
  //23:59:59
  if($SST.text()==9 && $SFT.text()==5 && $MST.text()==9 && $MFT.text()==5 && $HFT.text()==2 && $HST.text()==3){
    $HST.text(3)
    $HSBB.text(3)
    $HSB.text(0)
    $HFT.text(2)
    $HFBB.text(2)
    $HFB.text(0)
    setTimeout(()=>{
      $HFBT.text(0)
      $HSBT.text(0)
    },100)
    topFlip($HST)
    bottomFlip($HSB)
    topFlip($HFT)
    bottomFlip($HFB)
  }

}, 1000)

function topFlip($page){
  $page.animate({  textIndent: 0 }, {
      step: function() {
        $page.css({
          'visibility':'visible',
          'transition': 'all 0.5s linear',
          'transform':'perspective(1000px) rotateX(-90deg)'})
      },
      complete: function(){
        $page.css({
          'transition': '0s',
          'visibility':'hidden',
          'transform':'perspective(1000px) rotateX(0deg)'
        })
      }
  })
}
function bottomFlip($page){
  $page.animate({  textIndent: 0 }, {
      step: function() {
        $page.css({
          'transition': '0s',
          'visibility':'hidden',
          'transform':'perspective(1000px) rotateX(90deg)'
        })
      },
      complete: function(){
        $page.css({
          'visibility':'visible',
          'transition': 'all 0.5s linear',
          'transform':'perspective(1000px) rotateX(0deg)'
        })
      }
  })
}
