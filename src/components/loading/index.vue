<template>
  <div class="spinner-box flex column center" v-if="load">
    <div class="spinner-fade">
      <div class="spinner-fade-item" v-for="i in 12" :key="i"></div>
    </div>
    <div class="spinner-ing f-10 color-ff">加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'm-loading',
  props: {
    load: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  .spinner-box{
    position: fixed;
    z-index: 100;
    height: 60px;
    width: 60px;
    top: 45%;
    left: 50%;
    border-radius: 3px;
    transform: translate(-50%, -50%);
    background-color:rgba(0,0,0,0.7);
  }
  .spinner-ing{
    margin-top: 6px;
  }
  .spinner-fade{
    position: relative;
    margin-top: 4px;
    height: 20px;
    width: 21px;
    .spinner-fade-item{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      &::before{
        content: '';
        display: block;
        margin: 0 auto;
        width: 1px;
        height: 5px;
        background-color: #fff;
        animation: circleFadeDelay 1s infinite ease-in-out both;     
      }       
      $line-rotation: 0deg;
      $animation-delay: 0s;
      @for $i from 1 through 12{
        &:nth-child(#{$i}){
          transform: rotate($line-rotation); 
          $line-rotation: $line-rotation + 30;
          &::before{
            animation-delay: $animation-delay;
            $animation-delay: $animation-delay + 0.083;
          }                   
        }
      }
    }
  }
  @keyframes circleFadeDelay {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; } 
  }    
</style>