<template>
  <div class="demo-slider" ref="slider">
    <div class="banner-box">
      <m-slider autoplay="4000">
        <m-slider-item>
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </m-slider-item>
        <m-slider-item>
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </m-slider-item>
        <m-slider-item>
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </m-slider-item>
      </m-slider>
    </div>
    <div class="notice-box">
      <m-slider autoplay="3000" direction="vertical" :show-pagination="false" :no-swiping="true">
        <m-slider-item>
          <span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！ </m-slider-item>
        <m-slider-item>
          <span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典 </m-slider-item>
        <m-slider-item>
          <span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折 </m-slider-item>
      </m-slider>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'ui/slider'

export default {
  name: 'demo-slider',
  components: {
    [Slider.name]: Slider,
    [SliderItem.name]: SliderItem,
  }
}
</script>

<style lang="scss">
.demo-slider {
  .banner-box {
    position: relative;
    padding-top: 100 / 375 * 100%;
  }
  .m-slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .notice-box {
    position: relative;
    height: 36px;
    line-height: 36px;
    border-top: 8px;
    background-color: #fff;
  }
}
</style>
