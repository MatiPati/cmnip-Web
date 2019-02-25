<template>
    <div class="home">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="m-0">
                    This is HOME
                </h1>
                <hr class="mb-2">
                <p>
                    What I'm doing here?
                </p>
            </div>
            <div class="col-lg-6">
                <div class="card p-4">
                    <p class="mb-0">
                        Most used name in
                        <input type="number" id="year-input" max="2017" min="2000" v-model="mostUsed.year" @click="getMostUsedName()"><br>
                        <button class="btn btn-outline-dark btn-sm" @click="getMostUsedName()">Check</button>
                    </p>
                    <p class="display-3 text-center">
                        <span v-show="!mostUsed.loading">
                            {{mostUsed.name}}
                        </span>
                        <box-icon name="loader-alt" animation="spin" v-show="mostUsed.loading" size="lg"></box-icon>
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                mostUsed: {
                    name: '',
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
                if(this.mostUsed.year > 2017) this.mostUsed.year = 2017;
                if(this.mostUsed.year < 2000) this.mostUsed.year = 2000;
                fetch('http://mvtthew.pl:11290/names?start=0&limit=1&year=' + this.mostUsed.year, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {
                    this.mostUsed.name = data[0];
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
        border: 0;
        padding: 0.2rem;
    }
</style>