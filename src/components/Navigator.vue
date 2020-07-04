<template>
  <nav id="nav">
    <p class="logo">Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">
          Home
        </router-link>
      </li>
      <li v-for="dest in destinations" :key="dest.name" class="links">
        <router-link
          :to="{
            name: 'Destinations',
            params: { id: dest.id - 1 },
          }"
        >
          {{ dest.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import destinations from "@/assets/store.js";

export default {
  data() {
    return {
      destinations: destinations.destinations,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
.nav-links {
  width: 80%;
  display: flex;
  justify-items: flex-end;
  justify-content: space-evenly;
  list-style: none;
}

.links {
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 1.6em;
  color: purple;
  font-weight: bold;
  margin-left: 5%;
}
</style>
