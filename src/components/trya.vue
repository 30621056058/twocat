<template>
  <div>
    <fieldset>
        <legend>前端工程师</legend>
        <div>
            <span>姓名：</span>
            <input type="text" name="" id="a" v-model="persona.name" placeholder="请输入姓名">
        </div>
        <div>
            <span>年龄：</span>
            <input type="text" name="" id="b" v-model="persona.age" placeholder="请输入年龄">
        </div>
        <div>
            <span>性别：</span>
          <select  v-model="persona.sex">
              <option >男</option>
              <option >女</option>
          </select>
        </div>
        <div>
            <span>手机：</span>
            <input type="text" name="" id="c" v-model="persona.phone" placeholder="请输入手机号">
        </div>
        <button @click="a">创建</button>
    </fieldset>
    <div>
        <table>
          <tr>
              <td>姓名：</td>
              <td>年龄：</td>
              <td>性别：</td>
              <td>手机</td>
              <td>删除</td>
          </tr>
          <tr  v-for="p in person" :key="p.message">
              <td>{{p.name}}</td>
              <td>{{p.age}}</td>
              <td>{{p.sex}}</td>
              <td>{{p.phone}}</td>
              <td><button @click="b">删除</button></td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
   data:function(){
     return{
          person:[
               {name:'张三',age:17,sex:'男',phone:1546846468},
               {name:'王五',age:0,sex:'女',phone:'123213123'}
           ],
           persona:
               {name:'',age:'',sex:'男',phone:''}

     }
   },
   methods:{
     a:function(){
       this.person.unshift(this.persona)
    console.log(this.person)
     },
      b:function(){
       this.person.shift(0,1)
    // console.log(this.person)
     }
   },
   
   

};
</script>

<style>
</style>