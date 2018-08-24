<template>
  <div class="demo-swiper" title="Swiper(触摸滑动)">
    <m-cell title="环路模式，播放间隔2.5s，显示分页器">
      <m-swiper :loop="true" :autoplay="2500" :show-pagination="true">
        <m-swiper-item v-for="n of 3" :key="n" :class="'swiper-slide-' + n">
          slide{{n}}
        </m-swiper-item>
      </m-swiper>
    </m-cell>

    <m-cell title="非环路模式，自定义分页器，分页可点击">
      <m-swiper class="demo-swiper-pagination" :loop="false" :autoplay="3000" :show-pagination="true" :paginationBulletRender="paginationBulletRender"
        :pagination-clickable="true">
        <m-swiper-item v-for="n of 10" :key="n" :class="'swiper-slide-' + n">
          slide{{n}}
        </m-swiper-item>
      </m-swiper>
    </m-cell>

    <m-cell title="允许滑动角度值90deg，完全响应slide列表变化(5s后变为0，再过5s变为30)，事件展示(请在控制台查看)">
      <m-swiper :loop="true" :autoplay="false" :show-pagination="true" :touch-angle="90" @init="onInit" @slide-start="onSlideStart"
        @slide-move="onSlideMove" @slide-move-opposite="onSlideMoveOpposite" @slide-end="onSlideEnd" :pagination-clickable="true"
        @pagination-click="onPaginationClick" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend">
        <m-swiper-item v-for="n of num" :key="n" :class="'swiper-slide-' + n" @click="onSlideClick($event, n)">
          slide{{n}}
        </m-swiper-item>
      </m-swiper>

      <div>SwiperItem组件上绑定原生事件请
        <b>不要</b>加
        <code>.native</code>修饰符</div>
    </m-cell>

    <m-cell title="丰富API展示">
      <m-swiper :class="{ 'demo-swiper-api': paginationBulletRenderFun }" ref="swiper" :loop="true" :threshold="threshold"
        :touch-angle="touchAngle" :autoplay="autoplay" :speed="speed" :show-pagination="showPagination" :paginationBulletRender="paginationBulletRenderFun"
        :pagination-clickable="paginationClickable">
        <m-swiper-item v-for="n of 5" :key="n" :class="'swiper-slide-' + n">slide{{n}}</m-swiper-item>
      </m-swiper>

      <m-button size="small" @click.native="slidePrev">上一个</m-button>
      <m-button size="small" @click.native="slideNext">下一个</m-button>
      <m-button size="small" @click.native="slideTo(4)">第4个</m-button>
      <m-button size="small" @click.native="slideTo(2, 2000)">2s到第2个</m-button>
      <m-button size="small" @click.native="stopAutoplay">停止播放</m-button>
      <m-button size="small" @click.native="startAutoplay(5000)">开始5s间隔播放</m-button>

      <m-button size="small" @click.native="threshold = 100">最小滑动距离100</m-button>
      <m-button size="small" @click.native="touchAngle = 90">滑动角度90</m-button>
      <m-button size="small" @click.native="autoplay = 2000">播放间隔2s</m-button>
      <m-button size="small" @click.native="speed = 500">动画过渡500ms</m-button>
      <m-button size="small" @click.native="showPagination = true">显示分页器</m-button>
      <m-button size="small" @click.native="paginationBulletRenderFun = paginationBulletRender">修改分页点样式</m-button>
      <m-button size="small" @click.native="paginationClickable = true">分页器可以点击</m-button>
    </m-cell>

    <m-cell title="垂直滑动">
      <m-swiper direction="vertical" :loop="true" :autoplay="false" :show-pagination="true" :pagination-clickable="true">
        <m-swiper-item v-for="n of 5" :key="n" :class="'swiper-slide-' + n">
          slide{{n}}
        </m-swiper-item>
      </m-swiper>
    </m-cell>
  </div>
</template>

<script>
import { Cell, CellItem } from 'ui/cell'
import { Swiper, SwiperItem } from 'ui/swiper'
import Button from 'ui/button'

export default {
  name: 'demo-swiper',
  components: {
    [Cell.name]: Cell,
    [CellItem.name]: CellItem,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
    [Button.name]: Button,
  },
  data() {
    return {
      num: 5,

      threshold: 30,
      touchAngle: 45,
      autoplay: 3000,
      speed: 300,
      showPagination: false,
      paginationBulletRenderFun: undefined,
      paginationClickable: false
    }
  },
  created() {
    setTimeout(() => {
      this.num = 0
      console.log('after 5s...')
    }, 5000)
    setTimeout(() => {
      console.log('after 5s...')
      this.num = 30
    }, 10000)
  },
  methods: {
    onSlideClick(event, n) {
      console.log(event, n)
    },

    onInit() {
      console.log('组件初始化完成了。')
    },
    onSlideStart(evt) {
      console.log('slide-start', evt)
    },
    onSlideMove(evt) {
      console.log('slide-move', evt)
    },
    onSlideMoveOpposite(evt) {
      console.log('slide-move-opposite', evt)
    },
    onSlideEnd(evt) {
      console.log('slide-end', evt)
    },

    onTouchstart(event) {
      console.log('touchstart', event)
    },
    onTouchmove(event) {
      console.log('touchmove', event)
    },
    onTouchend(event) {
      console.log('touchend', event)
    },

    paginationBulletRender(index) {
      return `<span>${index + 1}</span>`
    },
    onPaginationClick(event, index) {
      console.log('pagination-click', event, index)
    },

    slidePrev() {
      this.$refs.swiper.slidePrev()
    },
    slideNext() {
      this.$refs.swiper.slideNext()
    },
    slideTo(no, speed) {
      this.$refs.swiper.slideTo(no - 1, speed)
    },
    stopAutoplay() {
      this.$refs.swiper.stopAutoplay()
    },
    startAutoplay(autoplay) {
      this.autoplay = autoplay
      this.$refs.swiper.startAutoplay()
    }
  }
}
</script>

<style lang="scss">
.demo-swiper {
  .m-swiper {
    height: 128px;
  }
  .m-swiper-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .m-btn {
    width: auto;
    display: inline-block;
    margin: 2px;
    padding: 0 10px;
  }

  .demo-swiper-pagination,
  .demo-swiper-api {
    .m-swiper-pagination-bullet {
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
    }
  }

  @for $n from 1 through 11 {
    .swiper-slide-#{$n} {
      background-color: lighten(#6abf47, (11 - $n) * 4%);
    }
  }

  @for $n from 11 through 20 {
    .swiper-slide-#{$n} {
      background-color: lighten(#f86e21, (21 - $n) * 4%);
    }
  }

  @for $n from 21 through 30 {
    .swiper-slide-#{$n} {
      background-color: lighten(#f4333c, (31 - $n) * 4%);
    }
  }
}
</style>
