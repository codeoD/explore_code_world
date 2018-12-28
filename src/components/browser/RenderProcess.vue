<template>
  <div>
    <h3 id="render_mechanism" class="mt-4">渲染机制</h3>
    <div>
      <div>
        <img src="../../assets/img/render_process.png" alt="" class="h-64">
      </div>
      <ol class="ml-4">
        <li><span>HTML代码转化为DOM Tree</span></li>
        <li><span>CSS代码转化为CSSOM Tree</span></li>
        <li><span>结合DOM Tree和CSSOM Tree生成Render Tree</span></li>
        <li><span>根据渲染树计算布局等信息</span></li>
        <li><span>在屏幕上绘制</span></li>
      </ol>
      <div class="mt-4">
        <h4>重排和重绘(reflow & repaint)</h4>
        <div>
          <span>页面生成的时候，至少会渲染一次。用户和页面交互时，也会不断重新渲染。</span>
          <span>修改DOM、修改样式表、用户事件都会导致不同程度的页面重新渲染。</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RenderProcess'
}
</script>
