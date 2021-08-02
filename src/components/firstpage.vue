<template>
  <div class="big-box">
    <!-- big-box -->
    <div class="big-box-conetent">
      <div class="search-header">
        <!--search-header-->
        <van-search
          v-model="value"
          show-action
          action-text="删除"
          placeholder="请输入搜索关键词"
        />
      </div>
      <!--search-header-->
      <div class="conetent-center" v-on:click="a">
        <div class="conetent-center-header">
          <van-tabs v-model="active">
            <van-tab title="html" badge="5">
              <div class="conetent-center-header-content">
                <a v-bind:href= "url" >
                <div class="conetent-center-header-content-inside" >
                  <h1>{{ title }}</h1>
                  <span>{{ Subtitle }}</span>
                  <div class="tp-tp">
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                  </div>
                  <div class="jieshao">
                    <div class="ss">
                      <p>{{ Reading_volume }}</p>

                      <p>{{ Comment_volume }}</p>
                    </div>
                  </div>
                </div>
                <hr />
                </a>
                <div class="conetent-center-header-content-inside">
                  <h1>{{ title }}</h1>
                  <span>{{ Subtitle }}</span>
                  <div class="tp-tp">
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                    <div class="tp">
                      <img src="../assets/logo.png" alt="" />
                    </div>
                  </div>
                  <div class="jieshao">
                    <div class="ss">
                      <p>{{ Reading_volume }}</p>

                      <p>{{ Comment_volume }}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </van-tab>
            <van-tab title="css">css</van-tab>
            <van-tab title="javascript">javascript</van-tab>
            <van-tab title="vue">{{ v }}</van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <!--big-box-conetent  -->
    <van-tabbar v-model="activ" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
  <!--   big-box -->
</template>

<script>
import "../css/firstpage.css";
// import { Toast } from 'vant';
import { Notify } from "vant";
export default {
  data() {
    return {
      value: "",
      count: 0,
      isLoading: false,
      active: 0,
      activ: "home",
      v: "a",
      title: "html布局大全",
      Subtitle: "flex，三列式布局，bfc，ifc，浮动，定位",
      Comment_volume: "评论:12",
      Reading_volume: "阅读:12",
      url:'http://192.168.1.5:8080/#/content'
    };
  },
  methods: {
    a: function () {
      var hq = document.getElementsByClassName("van-tab")[0];

      // console.log(hq)
      //  alert()
    },
    // onChange(index) {
    //   Notify({ type: "primary", message: index });
    // },
   
  },
};
</script>

<style>
</style>