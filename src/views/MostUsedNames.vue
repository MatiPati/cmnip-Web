<template>
    <div class="home">
        <h1 class="m-0">
            Most used names
        </h1>
        <hr class="mb-2">
        <p class="mb-0">
            Here is the list of 100 most used names per year!
        </p>
        <p>
            You can change current showing year
        </p>
        <div class="card p-4">
            <p class="mb-0 text-lg-right">
                Most used names in
                <input type="number" id="year-input" max="2017" min="2000" v-model="mostUsed.year"
                       @click="getMostUsedName()">
                <button class="btn btn-outline-dark btn-sm" @click="getMostUsedName()">Check</button>
            </p>
            <div class="card py-3 px-4 mt-4">
                <div v-show="!mostUsed.loading">
                    <p v-for="(name, index) in mostUsed.names" class="m-0">
                        {{index + 1}}. {{name}}
                    </p>
                </div>
                <div v-show="mostUsed.loading" class="text-center">
                    <box-icon name="loader-alt" animation="spin" size="lg" class="my-5"></box-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MostUsedNames',
        data() {
            return {
                mostUsed: {
                    names: '',
                    year: 2017,
                    loading: false,
                }
            }
        },
        created() {
            this.getMostUsedName();
        },
        methods: {
            getMostUsedName() {
                this.mostUsed.loading = true;
                if (this.mostUsed.year > 2017) this.mostUsed.year = 2017;
                if (this.mostUsed.year < 2000) this.mostUsed.year = 2000;
                fetch('https://mvtthew.pl:11290/names?start=0&limit=100&year=' + this.mostUsed.year, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {
                    this.mostUsed.names = data;
                    this.mostUsed.loading = false;
                });
            }
        },
    }
</script>

<style lang="scss">
    #year-input {
        display: inline-block !important;
        font-weight: 700;
        font-size: 1.2rem;
        border: 0;
        padding: 0.2rem;
    }
</style>