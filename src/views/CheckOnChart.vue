<template>
    <div class="check-on-chart">
        <div class="row">
            <div class="col-lg-9">
                <h1 class="mb-0">
                    Check name on chart
                </h1>
                <hr class="mb-2">
                <highcharts :options="chartOptions" style="width: 100%; height: 630px"
                            v-show="chartVisible" class="mt-3"></highcharts>
                <div v-show="!chartVisible" class="mt-3">
                    <div style="width: 100%; height: 630px" class="d-flex justify-content-center align-items-center">
                        <div class="text-center">
                            <h1>
                                Chart is empty!<br>
                                <small>Add name to display chart!</small>
                            </h1>
                            <p>
                                Input is bellow!
                            </p>
                        </div>
                    </div>
                </div>
                <button class="btn btn-danger" @click="clearChart()">Clear chart</button>
            </div>
            <div class="col-3">
                <p class="mb-1">
                    Add name to chart here:
                </p>
                <div class="d-flex">
                    <input class="form-control" v-model="newName" placeholder="Name..." @keyup="search()"
                           @keyup.enter="addNameToChart()">
                    <button class="btn btn-outline-dark" @click="addNameToChart()">Add</button>
                </div>
                <div class="search-helper">
                    <p v-for="name in searchHelper.helps" @click="addNameToChartFromSearch(name)">
                        {{name}}
                    </p>
                </div>
                <small class="text-danger mb-0" v-show="error.visible">
                    {{error.message}}
                </small>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'CheckOnChart',
        data() {
            return {
                newName: '',
                nameIndex: 0,
                visibleNames: [],
                chartVisible: false,
                searchHelper: {
                    visible: false,
                    helps: [],
                },
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
        methods: {
            addNameToChart() {
                this.getData(this.newName.charAt(0).toUpperCase() + this.newName.slice(1).toLowerCase());
                this.newName = '';
            },
            search() {
                if (this.newName !== '') {
                    fetch('https://mvtthew.pl:11290/search/' + this.newName, {
                        method: 'GET'
                    }).then(res => res.json()).then(data => {
                        let helps = [];
                        data.forEach(item => {
                            helps.push(item.name);
                        });
                        this.searchHelper.helps = helps;
                    });
                }
            },
            addNameToChartFromSearch(name) {
                this.getData(name);
                this.newName = '';
                this.searchHelper.helps = [];
            },
            clearChart() {
                this.chartOptions.series = [];
                this.nameIndex = 0;
                this.chartVisible = false;
            },
            getData(name) {
                if (this.newName !== '') {
                    fetch('https://mvtthew.pl:11290/name/' + name, {
                        method: 'GET'
                    }).then(res => res.json()).then(data => {

                        this.showError(0);

                        if ((typeof data) !== "string") {
                            if (!this.chartVisible) {
                                this.chartVisible = true;
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
                }
            },
            showError(state) {
                if (state === 1) {
                    this.error.visible = true;
                    setTimeout(() => {
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
    .search-helper {
        position: relative;
        background-color: rgba(0, 0, 0, 0.01);
        max-height: 34rem;
        width: 100%;
        overflow-y: scroll;
        p {
            padding: 0.2rem;
            margin: 0;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>