<template>
  <!-- big-box -->
  <div class="big-box">
    <!--big-content  -->
    <div class="big-content">
      <!-- content-top -->
      <div class="content-top">
           <router-link to="/login"> <div class="content-top-left" id="content-top-left" v-on:click="b">
          登录
        </div></router-link>
       

        <div class="content-top-right" id="content-top-right" v-on:click="a">
          注册
        </div>
      </div>
      <!-- content-top -->
      <hr id="one" />
      <!-- content-center -->
      <div class="content-center">
        <div class="content-center-inside">
          <input type="text" placeholder="用户名" />
          <input id="psd" type="password" placeholder="密码" />
          <input id="input3" type="submit" v-on:click="Judgment" value="注册">
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
          <div class="other-img"></div>
          <div class="other-img"></div>
          <div class="other-img"></div>
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
  data: {
    name: "vue.js",
  },
  methods: {
    a: function () {
      var move = document.getElementsByTagName("hr")[0];
      var login = document.getElementById("content-top-right");

      // console.log(login)

      // console.log(move)
      login.onmousedown = function () {
        move.style.marginLeft = "250px";
      };
    },
    b: function () {
      var login_one = document.getElementById("content-top-left");
      var move = document.getElementsByTagName("hr")[0];

      login_one.onmouseup = function () {
        move.style.marginLeft = "70px";
      };
    },
    Judgment : function(){
    var adminnamesubit = document.getElementsByTagName('input')[2]
    var  adminname = document.getElementsByTagName('input')[0]
    var pwd = document.getElementsByTagName('input')[1]
    adminnamesubit.onmousedown = function(){
        // console.log(adminname);
        // console.log(adminname.value)
        if(adminname.value == pwd.value){
          alert(adminname.value)
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
Vetur can't find `tsconfig.json'or jsconfig.json' inc:\Users\qbl\twocar.
