<template>
    <div class="home">
        <div class="row">
            <div class="col-lg-3">
                <h1 class="m-0">
                    This is HOME
                </h1>
                <hr class="mb-2">
                <p>
                    What I'm doing here?
                </p>
            </div>
            <div class="col-lg-9">
                <highcharts :options="chartOptions" style="width: 100%; height: 500px"></highcharts>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="d-flex mt-3">
                            <input class="form-control" v-model="newName">
                            <button class="btn btn-outline-dark" @click="addNameToGraph()">Add</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>


    </div>
</template>

<script>

    import {Chart} from 'highcharts-vue'

    export default {
        components: {
            highcharts: Chart
        },
        data() {
            return {
                newName: '',
                nameIndex: 0,
                visibleNames: [],
                chartOptions: {
                    title: {
                        text: 'Name uses frequency graph'
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2000
                        }
                    },
                    series: []
                }
            }
        },
        created() {
            this.getData('Antoni');
            setTimeout(() => {
                this.getData('Jakub');
            }, 2000);
            setTimeout(() => {
                this.getData('Jan');
            }, 4000);
            setTimeout(() => {
                this.getData('Szymon');
            }, 6000);
        },

        methods: {
            addNameToGraph () {
                this.getData(this.newName.charAt(0).toUpperCase() + this.newName.slice(1));
                this.newName = '';
            },
            getData(name) {
                fetch('https://mvtthew.pl:11290/name/' + name, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {

                    // if (this.nameIndex === 0) {
                    //     const years = Object.keys(data.years);
                    //     years.forEach(year => {
                    //         this.option.xAxis.data.push(year);
                    //     });
                    // }

                    this.chartOptions.series.push(
                        {
                            name: name,
                            data: [],
                            cursor: 'pointer',
                            marker: {
                                symbol: 'circle',
                            }
                        }
                    );

                    const values = Object.values(data.years);
                    values.forEach(name => {
                        this.chartOptions.series[this.nameIndex].data.push(parseInt(name.uses));
                    });

                    this.visibleNames.push({
                        name: name,
                        index: this.nameIndex,
                    });

                    this.nameIndex++;

                });
            },
        }
    }
</script>

<style lang="scss">

</style>