<!--<template>
 <div id="app">
    <mycomponent></mycomponent>
</div>
  
</template>

<script>
import mycomponent from './tryc'
 export default {
   name:'home',
   components:{
     mycomponent
   }
 }




</script>

<style>

</style>
-->
<template>
  <div id="example">
  <p>Original message: "{{ ms }}"</p>
  <p>Computed reversed message: "{{ fw }}"</p>
</div>
</template>

<script>
export default {
  // el: '#example',
data(){
    // el: '#example',
    return{
 ms: 'value',
    }
   
  
},
computed:{
  fw:function(){
      return this.ms.split('').reverse().join('')
  }
}
}
</script>

<style>

</style>