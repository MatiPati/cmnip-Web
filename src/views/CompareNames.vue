<template>
    <div class="compare-names">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="mb-0">
                    Compare names
                </h1>
                <hr class="mb-2">
            </div>
            <div class="col-12 mt-3" v-show="!chartVisible">
                <div class="row">
                    <div class="col-5">
                        <div class="d-flex mt-2">
                            <input class="form-control" placeholder="Name 1" v-model="name1" @keyup="search(1)">
                        </div>
                        <div class="search-helper" v-show="searchHelper.visible1">
                            <p v-for="name in searchHelper.helps1" @click="setName(1, name)">
                                {{name}}
                            </p>
                        </div>
                    </div>
                    <div class="col-2 text-center px-0">
                        <button class="btn btn-primary mt-1" @click="getData()" data-toggle="tooltip" title="Compare names!">
                            <box-icon name="git-compare" color="white" size="sm"></box-icon>
                        </button>
                    </div>
                    <div class="col-5">
                        <div class="d-flex mt-2">
                            <input class="form-control" placeholder="Name 2" v-model="name2" @keyup="search(2)">
                        </div>
                        <div class="search-helper" v-show="searchHelper.visible2">
                            <p v-for="name in searchHelper.helps2" @click="setName(2, name)">
                                {{name}}
                            </p>
                        </div>
                    </div>
                </div>
                <small class="text-danger mb-0" v-show="error.visible">
                    {{error.message}}
                </small>
            </div>
            <div class="col-lg-12 mt-3" v-show="chartVisible">
                <button @click="clearChart()" class="btn btn-danger">Compare again</button>
                <highcharts :options="chartOptions" style="width: 100%; height: 400px" class="mt-3"></highcharts>
                <div class="card p-3 mt-3">
                    <h4 class="text-center m-0">
                        Summary comparison
                    </h4>
                    <hr>
                    <div class="row p-1">
                        <div class="col-4 col-lg-5 text-right px-0">
                            <h3 class="m-0">
                                {{name1}}
                            </h3>
                        </div>
                        <div class="col-4 col-lg-2 text-center pt-2">
                            <small>difference</small>
                        </div>
                        <div class="col-4 col-lg-5 px-0">
                            <h3 class="m-0">
                                {{name2}}
                            </h3>
                        </div>
                    </div>
                    <hr>
                    <div class="row p-1">
                        <div class="col-4 col-lg-5 text-right px-0">
                            <h4 class="m-0">
                                {{compareData.sum1}}
                            </h4>
                        </div>
                        <div class="col-4 col-lg-2 text-center pt-2">
                            <p v-if="compareData.sum1 - compareData.sum2 > 0" class="text-success">
                                +{{compareData.sum1 - compareData.sum2}} <box-icon name="chevron-up" size="sm" color="green"></box-icon>
                            </p>
                            <p v-if="compareData.sum1 - compareData.sum2 < 0" class="text-danger">
                                {{compareData.sum1 - compareData.sum2}} <box-icon name="chevron-down" size="sm" color="red"></box-icon>
                            </p>
                        </div>
                        <div class="col-4 col-lg-5 px-0">
                            <h4 class="m-0">
                                {{compareData.sum2}}
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="card p-3 mt-4">
                    <h4 class="text-center m-0">
                        Per year comparison
                    </h4>
                    <hr>
                    <div class="row p-1">
                        <div class="col-4 col-lg-5 text-right px-0">
                            <h3 class="m-0">
                                {{name1}}
                            </h3>
                        </div>
                        <div class="col-4 col-lg-2 text-center">
                            <strong>Year</strong><br>
                            <small>difference</small>
                        </div>
                        <div class="col-4 col-lg-5 px-0">
                            <h3 class="m-0">
                                {{name2}}
                            </h3>
                        </div>
                    </div>
                    <hr>
                    <div class="row p-1" v-for="(compare, index) in compareData.years">
                        <div class="col-12 text-center">
                            <strong>{{index}}</strong>
                        </div>
                        <div class="col-5 text-right">
                            <p class="h4">
                                {{compare.uses1}}
                            </p>
                        </div>
                        <div class="col-2 text-center">
                            <p v-if="compare.difference > 0" class="text-success">
                                +{{compare.difference}} <box-icon name="chevron-up" size="sm" color="green"></box-icon>
                            </p>
                            <p v-if="compare.difference < 0" class="text-danger">
                                {{compare.difference}} <box-icon name="chevron-down" size="sm" color="red"></box-icon>
                            </p>
                        </div>
                        <div class="col-5">
                            <p class="h4">
                                {{compare.uses2}}
                            </p>
                        </div>
                        <div class="col-6 mx-auto">
                            <hr>
                        </div>
                    </div>
                    <button @click="clearChart()" class="btn btn-danger my-2">Compare again</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    import {Chart} from 'highcharts-vue'

    export default {
        name: 'CompareNames',
        components: {
            highcharts: Chart
        },
        data() {
            return {
                chartVisible: false,
                name1: '',
                name2: '',
                compareData: {},
                searchHelper: {
                    visible1: false,
                    visible2: false,
                    helps1: [],
                    helps2: [],
                },
                error: {
                    visible: false,
                    message: '',
                },
                chartOptions: {
                    title: {
                        text: '',
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false,
                            },
                            pointStart: 2000,
                        },
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
                    series: []
                }
            }
        },
        created() {
            //this.getData(this.name1, this.name2);
        },
        methods: {
            clearChart() {
                this.chartVisible = false;
                this.name1 = '';
                this.name2 = '';
                this.chartOptions.series = [];
            },
            search(nameIndex) {
                if (nameIndex === 1) {
                    if (this.name1 !== '') {
                        fetch('https://mvtthew.pl:11290/search/' + this.name1 + '?limit=10', {
                            method: 'GET'
                        }).then(res => res.json()).then(data => {
                            let helps = [];
                            data.forEach(item => {
                                helps.push(item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase());
                            });
                            this.searchHelper.helps1 = helps;
                            this.searchHelper.visible1 = true;
                        });
                    }
                } else if (nameIndex === 2) {
                    if (this.name2 !== '') {
                        fetch('https://mvtthew.pl:11290/search/' + this.name2 + '?limit=10', {
                            method: 'GET'
                        }).then(res => res.json()).then(data => {
                            let helps = [];
                            data.forEach(item => {
                                helps.push(item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase());
                            });
                            this.searchHelper.helps2 = helps;
                            this.searchHelper.visible2 = true;
                        });
                    }
                }
            },
            setName(nameIndex, name) {
                if (nameIndex === 1) {
                    this.name1 = name;
                    this.searchHelper.visible1 = false;
                }
                if (nameIndex === 2) {
                    this.name2 = name;
                    this.searchHelper.visible2 = false;
                }
            },
            getData() {

                if (this.name1 !== '' && this.name2 !== '') {
                    if (this.name1 !== this.name2) {
                        fetch('https://mvtthew.pl:11290/name/' + this.name1, {
                            method: 'GET'
                        }).then(res => res.json()).then(data => {
                            if ((typeof data) !== "string") {
                                fetch('https://mvtthew.pl:11290/name/' + this.name2, {
                                    method: 'GET'
                                }).then(res => res.json()).then(data => {
                                    if ((typeof data) !== "string") {
                                        this.getServerData();
                                    } else {
                                        this.error.message = data;
                                        this.showError(1);
                                    }
                                });
                            } else {
                                this.error.message = data;
                                this.showError(1);
                            }
                        });
                    } else {
                        this.error.message = 'Names cannot be this same.';
                        this.showError(1);
                    }
                } else {
                    this.error.message = 'Names inputs cannot be empty.';
                    this.showError(1);
                }

            },
            getServerData() {

                // CHART

                this.chartVisible = true;

                this.chartOptions.title.text = this.name1 + ' VS ' + this.name2;

                this.chartOptions.series = [];
                this.chartOptions.series.push(
                    {
                        name: this.name1,
                        data: [],
                        cursor: 'pointer',
                        marker: {
                            symbol: 'circle',
                        }
                    },
                    {
                        name: this.name2,
                        data: [],
                        cursor: 'pointer',
                        marker: {
                            symbol: 'circle',
                        }
                    }
                );
                // Get first name
                fetch('https://mvtthew.pl:11290/name/' + this.name1, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {

                    const values = Object.values(data.years);
                    values.forEach(name => {
                        this.chartOptions.series[0].data.push(parseInt(name.uses));
                    });

                });
                // Get second name
                fetch('https://mvtthew.pl:11290/name/' + this.name2, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {

                    const values = Object.values(data.years);
                    values.forEach(name => {
                        this.chartOptions.series[1].data.push(parseInt(name.uses));
                    });

                });


                // COMPARE DATA
                fetch('https://mvtthew.pl:11290/compare/' + this.name1 + '/' + this.name2, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {
                    this.compareData = data;
                });
            },
            showError(state) {
                if (state === 1) {
                    this.error.visible = true;
                    setTimeout(() => {
                        this.showError(0);
                    }, 6000);
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
        width: 100%;
        p {
            padding: 0.3rem 0.6rem;
            margin: 0;
            cursor: pointer;
            &:hover {
                background-color: rgba(0, 0, 0, 0.04);
            }
        }
    }
</style>