<template>
    <div class="check-on-graph">
        <div class="row">
            <div class="col-lg-12">
                <highcharts :options="chartOptions" style="width: 100%; height: 550px" v-show="graphVisible"></highcharts>
                <div style="width: 100%; height: 550px" class="d-flex justify-content-center align-items-center" v-show="!graphVisible">
                    <div class="text-center">
                        <h1>
                            First add name to display graph!
                        </h1>
                        <p>
                            Input is under!
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 ml-auto mt-2">
                <p class="mb-1">
                    Add name to graph here:
                </p>
                <div class="d-flex">
                    <input class="form-control" v-model="newName" placeholder="Name..." @keyup.enter="addNameToGraph()">
                    <button class="btn btn-outline-dark" @click="addNameToGraph()">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Chart} from 'highcharts-vue'

    export default {
        comments: {
            Chart
        },
        data() {
            return {
                newName: '',
                nameIndex: 0,
                visibleNames: [],
                graphVisible: false,
                chartOptions: {
                    title: {
                        text: ''
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2000
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Names given'
                        }
                    },
                    xAxis: {
                        title: {
                            text: 'Year'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    noData: {},
                    series: []
                }
            }
        },
        created() {
        },
        methods: {
            addNameToGraph() {
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