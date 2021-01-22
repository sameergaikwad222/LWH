<template>
  <span>{{ $route.params.topic }}</span>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style></style>
