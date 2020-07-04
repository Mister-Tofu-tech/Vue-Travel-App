<template>
  <section class="destination">
    <h1>{{ dest.name }}</h1>
    <md-button v-on:click="remove(dest.id)">
      <md-icon>delete</md-icon>
    </md-button>
    <div class="destinations">
      <figure>
        <img :src="require(`@/assets/${dest.image}`)" :alt="dest.name" />
      </figure>
      <p>
        {{ dest.description }}
      </p>
    </div>
  </section>
</template>

<script>
import db from "@/firebaseConfig";

export default {
  data() {
    return {
      destId: this.$route.params.id,
      dest: [],
    };
  },
  mounted() {
    console.log(this.destId);
    db.ref(`/destinations/${this.destId}`).on("value", (snapshot) => {
      this.dest = snapshot.val();
      console.log(this.dest);
    });
  },
  methods: {
    remove(targetId) {
      console.log(targetId);
      db.ref(`/destinations/${targetId - 1}`).remove();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.destinations {
  display: flex;
  justify-content: space-evenly;
}

img {
  max-width: 400px;
  height: auto;
}

p {
  font-size: 20px;
  text-align: left;
}
</style>
