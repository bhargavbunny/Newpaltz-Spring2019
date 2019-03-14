<template>
  <div class="row">
    <div class="col1">
    <h1>This is {{name}}'s page. He's {{age}} years old</h1>
    <input v-model="age" type="text" class = "force-control" placeholder="age" />
<div class="progress">
  <div class="progress-bar" role="progressbar" :style="{width: '75%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    name :"bhargav reddy",
    age :"25"
  }) 
}
</script>

<style type="scss">

</style>
