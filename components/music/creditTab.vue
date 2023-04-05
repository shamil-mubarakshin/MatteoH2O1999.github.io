<template>
    <div class="credits-tab">
        <h1>{{ tabTitle }}</h1>
        <div class="cards-tab">
            <div v-for="card in this.cards" :key="card.id" class="card-div">
                <MusicMovieCard :data="card" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "CreditTab",
            cards: []
        }
    },
    async fetch() {
        this.cards = await this.$content("music", this.subFolder).sortBy('releaseDate', 'desc').fetch().catch((err) => {this.cards = []});
    },
    props: ['subFolder', 'tabTitle']
}
</script>

<style>
.credits-tab {
    margin-bottom: 30px;
    margin-top: 30px;
}

.credits-tab h1 {
    margin: 20px 30px 20px;
}

.cards-tab {
    display: grid;
    justify-content: center;
}

@media only screen and (min-width: 1024px) {
    .cards-tab {
        grid-template-columns: repeat(auto-fill, 15vw);
    }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .cards-tab {
        grid-template-columns: repeat(auto-fill, 19vw);
    }
}

@media only screen and (max-width: 767px){
    .cards-tab {
        grid-template-columns: repeat(auto-fill, 40vw);
    }
}
</style>