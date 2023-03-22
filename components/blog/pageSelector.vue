<template>
    <div class="page-selector-wrapper">
        <div v-if="hasPrevious()">
            <div v-if="this.currentPage - 1 !== 1">
                <NuxtLink :to="localePath(`${this.basePath}?${this.queryName}=1`)">
                    1
                </NuxtLink>
                <div v-if="this.currentPage - 2 !== 1">
                    ...
                </div>
            </div>
            <NuxtLink :to="localePath(`${this.basePath}?${this.queryName}=${this.currentPage - 1}`)">
                {{this.currentPage - 1}}
            </NuxtLink>
        </div>
        <div>
            {{this.currentPage}}
        </div>
        <div v-if="hasNext()">
            <NuxtLink :to="localePath(`${this.basePath}?${this.queryName}=${this.currentPage + 1}`)">
                {{this.currentPage + 1}}
            </NuxtLink>
            <div v-if="this.currentPage + 1 !== this.lastPage">
                <div v-if="this.currentPage + 2 !== this.lastPage">
                    ...
                </div>
                <NuxtLink :to="localePath(`${this.basePath}?${this.queryName}=${this.lastPage}`)">
                    {{this.lastPage}}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'pageSelector'
        }
    },
    props: {
        currentPage: Number,
        lastPage: Number,
        basePath: String,
        queryName: String
    },
    methods: {
        hasPrevious() {
            return this.currentPage > 1;
        },
        hasNext() {
            return this.currentPage < this.lastPage;
        }
    }
}
</script>

<style>
.page-selector-wrapper {
    text-align: center;
    margin-bottom: 50px;
}

.page-selector-wrapper div {
    display: inline;
}

.page-selector-wrapper div a {
    text-decoration: none;
    color: inherit;
}
</style>