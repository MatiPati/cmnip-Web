<template>
    <div class="check-on-graph">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="mb-0">
                    Check name on graph
                </h1>
                <hr class="mb-2">
                <highcharts :options="chartOptions" style="width: 100%; height: 550px"
                            v-show="graphVisible" class="mt-3"></highcharts>
                <div v-show="!graphVisible">
                    <div style="width: 100%; height: 550px" class="d-flex justify-content-center align-items-center">
                        <div class="text-center">
                            <h1>
                                Add name to display graph!
                            </h1>
                            <p>
                                Input is under!
                            </p>
                        </div>
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
                <small class="text-danger mb-0" v-show="error.visible">
                    {{error.message}}
                </small>
            </div>
        </div>
    </div>
</template>

<script>
    import {Chart} from 'highcharts-vue'

    export default {
        name: 'CheckOnGraph',
        comments: {
            Chart
        },
        data() {
            return {
                newName: '',
                nameIndex: 0,
                visibleNames: [],
                graphVisible: false,
                error: {
                    visible: false,
                    message: '',
                },
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

                    this.showError(0);

                    if ((typeof data) !== "string") {
                        if (!this.graphVisible) {
                            this.graphVisible = true;
                        }

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

                    } else {
                        this.error.message = data;
                        this.showError(1);
                    }
                });
            },
            showError (state) {
                if (state === 1) {
                    this.error.visible = true;
                    setTimeout( () => {
                        this.showError(0);
                    }, 4000);
                } else if (state === 0) {
                    this.error.visible = false;
                }
            }
        }
    }
</script>

<style lang="scss">

</style>