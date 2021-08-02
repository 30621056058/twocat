<template>
  <div class="big-box-c">
    <div class="big-box-content">
      <div class="big-box-content-inside">
        <div class="content-header">
          <van-nav-bar title="标题" left-text="返回" left-arrow   @click-left="onClickLeft">
            <template #right>
             <router-link to='/firstpage'><van-icon name="share-o" font-size="18" /></router-link> 
            </template>
          </van-nav-bar>
          <h1 id="header-h" class="h-h">javascript基础</h1>
          <div class="content-header-data">
            <van-image
              round
              width="1rem"
              height="1rem"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <span>坎坷的程序员<br />原创</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/content.css";
import { Toast } from 'vant';
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
    //   Toast("返回");
    this.$router.replace('/firstpage')
    },
  },
};
</script>

<style>
</style>