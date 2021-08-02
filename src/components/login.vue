<template>
  <!-- big-box -->
  <div class="big-box">
    <!--big-content  -->
    <div class="big-content">
      <!-- content-top -->
      <div class="content-top">
       
          <div class="content-top-left" id="content-top-left" >
          登录
        </div>
          <router-link to="/register"><div class="content-top-right" id="content-top-right" >
          注册
        </div></router-link>
        
      </div>
      <!-- content-top -->
      <!-- <hr id="one" /> -->
      <!-- content-center -->
      <div class="content-center">
        <div class="content-center-inside">
          <input type="text" placeholder="用户名1" />
          <input id="psd" type="password" placeholder="密码" />
          <input id="input3" type="button" style="background:beige;" v-on:click="Judgment"  value="登录">
        </div>
      </div>
      <!-- content-center -->
      <!-- forget -->
      <div class="forget">
        <hr />
        <span>忘记密码</span>
        <hr />
      </div>
      <!-- forget -->
      <div class="other-login">
        <div class="other-login-center">
          <div class="iconfont icon-weixin" ></div>
          <div class=" iconfont icon-QQ"></div>
          <div class="iconfont icon-weibo"></div>
        </div>
      </div>
    </div>
    <!--big-content  -->
  </div>
  <!-- big-box -->
</template>

<script>
import "../css/login.css";
import login from "../js/login";
export default {
  // el : '#one' ,
  data() {
    // name: "vue.js",
    return{
      
    }
  },
  methods: {
  
    Judgment : function(){
    var adminnamesubit = document.getElementsByTagName('input')[2]
    var  adminname = document.getElementsByTagName('input')[0]
    var pwd = document.getElementsByTagName('input')[1]
    adminnamesubit.onmousedown = function(){
        // console.log(adminname);
        // console.log(adminname.value)
        if(adminname.value == pwd.value){
          alert('登录成功')
        }
        else{
          alert('用户名或者密码错误')
        }
    } 
  }
  },
  
};
</script>

<style>
</style>

