<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <div v-for="dest in destinations" :key="dest.name">
        <router-link :to="{name : 'Destinations', params: {country : dest.name}}">
          <h2>{{ dest.name }}</h2>
        </router-link>
        <router-link :to="{name : 'Destinations', params: {country : dest.name}}">
          <figure>
              <img :src="require(`@/assets/${dest.image}`)" :alt="dest.name">
          </figure>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/assets/store.js";

export default {
  name: "Home",
  components: {
  },
  data(){
    return {
      destinations: store.destinations
    }
  }
};
</script>

<style scoped>
  .home{
    max-width: 80%;
    margin: 0 auto;
  }
  img {
    max-width: 200px;
  }
  .destinations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>