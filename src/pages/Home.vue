<template>
  <div class="home-wrapper">
    <el-button v-debounce="getName">click</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { name: "111" };
  },
  methods: {
    getName() {

    }
  }
};
</script>

<style scoped>
.home-wrapper {
  color: red;
}
</style>
