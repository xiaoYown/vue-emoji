<template lang="jade">
  .index-wrap
    .container
      el-emoji
      
</template>

<script>
  export default{
    components: {
      'el-emoji': require('components/emot/emot.vue')
    }
  }
</script>

<style lang="sass">
  .index-wrap{
    .container{
      width: 800px;
      padding: 50px;
      margin: 0 auto;
      font-size: 20px;
    }
  }
</style>
