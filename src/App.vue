<template>
  <div id="app">
    <Navigator />
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import Navigator from "@/components/Navigator";
export default {
  components: {
    Navigator
  }
}
</script>

<style>
#app {
  font-family:'Nunito', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 2%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
