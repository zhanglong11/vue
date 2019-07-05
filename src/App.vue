<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/hello">hello</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/Message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

</style>
