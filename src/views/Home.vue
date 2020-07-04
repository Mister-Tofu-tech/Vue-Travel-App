<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <md-card v-for="dest in destinations" :key="dest.name" class="dest-cards">
        <md-card-header>
          <router-link :to="{ name: 'Destinations', params: { id: dest.id } }">
            <div class="md-title">{{ dest.name }}</div>
          </router-link>
        </md-card-header>

        <md-card-media-actions class="media-actions">
          <md-card-media md-big>
            <router-link
              :to="{ name: 'Destinations', params: { id: dest.id - 1 } }"
            >
              <figure>
                <img
                  :src="require(`@/assets/${dest.image}`)"
                  :alt="dest.name"
                />
              </figure>
            </router-link>
          </md-card-media>

          <!-- <div>
            <md-card-actions>
              <md-button class="md-icon-buttons">
                <md-icon>delete</md-icon>
              </md-button>
            </md-card-actions>
          </div> -->
          <md-button v-on:click="remove(dest.id)">
            <md-icon>delete</md-icon>
          </md-button>
        </md-card-media-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/firebaseConfig";

export default {
  name: "Home",
  data() {
    return {
      destinations: [],
    };
  },
  mounted() {
    db.ref("/destinations").on("value", (snapshot) => {
      snapshot.forEach((data) => {
        this.destinations.push(data.val());
      });
    });
  },
  methods: {
    remove(targetId) {
      console.log(targetId);
      db.ref(`/destinations/${targetId - 1}`)
        .remove()
        .then();
      setTimeout(function() {
        this.$router.push("/").catch(() => {});
      }, 1000);
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 80%;
  margin: 0 auto;
}

.destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: center;
}

.dest-cards {
  margin-top: 3%;
  width: 30%;
}

.md-title {
  font-size: 15px;
}

.media-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  max-width: 400px;
  height: auto;
}

/* .md-card-actions {
  display: flex;
  align-items: center;
}

.md-icon-buttons {
  align-self: center;
  justify-self: center; */
</style>
