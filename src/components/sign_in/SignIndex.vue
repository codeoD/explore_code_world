<template>
  <div class="bg-grey-light login-view overflow-hidden">
    <header class="text-center">
      <div class="p-4">
        <span>Welcome</span>
      </div>
    </header>
    <router-view class="login-body" />
    <footer class="flex">
      <div class="my-auto">
        <div class="inline-block text-center footer-text">
          <span>Made By Lee In</span>
          <a href="">Nanjing</a>
          <span>At 2018</span>
        </div>
        <div class="inline-block text-center footer-text">
          <span>Jesus Loves You</span>
        </div>
        <div class="inline-block text-center footer-text">
          <span>Connect Me At</span>
          <a href="https://github.com/codeoD?tab=repositories" target="_blank">
          <img src="../../assets/img/github.png" alt="github icon" class="align-top w-5">
          </a>
        </div>
      </div>
    </footer>
    <div>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
      <i class="cool-animate"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignIndex',
  data () {
    return {
      // emoji pc端Chrome显示出来不好看，故未使用
      snow: '\u2744'
    }
  },
  mounted: function () {
    let snowEls = document.getElementsByClassName('cool-animate')
    let snowflakeNum = snowEls.length
    for (let i = 0; i < snowflakeNum; i++) {
      let left = Math.floor(Math.random() * 100)
      snowEls[i].style.left = `${left}%`
      snowEls[i].style.transform = `scale(${Math.random() + 1})`
      snowEls[i].animateTime = 6 + Number.parseFloat(Math.random().toFixed(2)) * 6
      snowEls[i].everyTimePercent = (100 - 0) / snowEls[i].animateTime / 60
      console.log(snowEls[i].animateTime)
      snowEls[i].animateSnow = function (timestamp) {
        // if (!start) {
        //   start = timestamp
        // }
        // let progress = timestamp - start
        let top = Number.parseFloat(snowEls[i].style.top) || 0
        snowEls[i].style.top = `${top + snowEls[i].everyTimePercent}%`
        // if (progress < 5 * 1000) {
        //   requestAnimationFrame(animateSnow)
        // }
        if (Number.parseFloat(snowEls[i].style.top) < 100) {
          requestAnimationFrame(snowEls[i].animateSnow)
        } else {
          snowEls[i].style.top = '0%'
          snowEls[i].style.left = `${Math.floor(Math.random() * 100)}%`
          snowEls[i].animateTime = 6 + Number.parseFloat(Math.random().toFixed(2)) * 6
          snowEls[i].everyTimePercent = (100 - 0) / snowEls[i].animateTime / 60
          requestAnimationFrame(snowEls[i].animateSnow)
        }
      }
      // requestAnimationFrame(snowEls[i].animateSnow)
    }
    Array.from(snowEls).forEach(el => {
      requestAnimationFrame(el.animateSnow)
    })
  }
}
</script>
<style lang="scss">
.login-view {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
header {
  height: 4rem;
}
footer {
  height: 8rem;
}
.login-body {
  flex: 1;
}
.cool-animate {
  display: inline-block;
  position: absolute;
  top: 0%;
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: contain;
  background-image: url('../../assets/img/snowflake.png');
  z-index: 100;
  opacity: 0.7;
  filter: brightness(200%) saturate(0%);
}
.footer-text {
  width: 25rem;
}
</style>
