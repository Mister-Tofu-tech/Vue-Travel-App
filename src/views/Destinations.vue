<template>
    <section class="destination">
        <h1>{{dest.name}}</h1>
        <div class="destinations">
            <figure>
                <img :src="require(`@/assets/${dest.image}`)" :alt="dest.name">
            </figure>
            <p>
                {{dest.description}}
            </p>
        </div>
    </section>
</template>

<script>
import destinations from "@/assets/store.js";
export default {
    data(){
        return {
            destCountry: this.$route.params.country
        }
    },
    computed:{
        dest(){
            return destinations.destinations.find(dest => dest.name === this.destCountry)
        }
    }
};
</script>

<style scoped>

.destinations {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

p {
    font-size: 20px;
    text-align: left;
}

</style>