<template>
    <div class="home">
        <div class="row">
            <div class="col-lg-5">
                <h1 class="m-0">
                    CMNiN
                </h1>
                <p class="mb-1">
                    Check My Name in Poland
                </p>
                <hr class="mb-3">

                <div class="card p-3">
                    <p class="font-weight-bold m-0">
                        <box-icon name="chevron-right" size="xs"></box-icon> What is this site?
                    </p>
                    <p class="m-0 text-justify">
                        Here you can check most used names in Poland, look at the charts with compares names gives count and much more!
                    </p>

                    <p class="font-weight-bold m-0 mt-4">
                        <box-icon name="chevron-right" size="xs"></box-icon> Why this project exist?
                    </p>
                    <p class="m-0 text-justify">
                        This small project aims to prove some students, there is time for school, all homework, and our aim - evolve our passions and talents!
                    </p>

                    <p class="font-weight-bold m-0 mt-4">
                        <box-icon name="chevron-right" size="xs"></box-icon> Why Poland?
                    </p>
                    <p class="m-0 text-justify">
                        We live in Poland and we want to find out where on rankings and charts our names are!
                    </p>
                </div>

                <div class="card p-3 mt-3">
                    <h5>
                        Quick navigation
                    </h5>
                    <router-link to="/mostused"><box-icon name="link" size="xs"></box-icon> Most used names</router-link>
                    <router-link to="/chart"><box-icon name="link" size="xs"></box-icon> Check name on chart</router-link>
                </div>

            </div>
            <div class="col-lg-7">
                <highcharts :options="chartOptions" style="width: 100%; height: 500px" class="mt-3"></highcharts>
                <small>
                    Only few of Polish names are visible on chart. You can check yours by clicking button bellow.
                </small>
                <router-link to="/chart" class="btn btn-outline-dark mt-1">Check other names on chart</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import {Chart} from 'highcharts-vue'

    export default {
        name: 'Home',
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
                        text: 'Polish names giving frequency'
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
                    series: []
                }
            }
        },
        created() {
            this.getData('Karolina');
            setTimeout(() => {
                this.getData('Patryk');
            }, 2000);
            setTimeout(() => {
                this.getData('Gabriela');
            }, 4000);
            setTimeout(() => {
                this.getData('Mateusz');
            }, 6000);
            setTimeout(() => {
                this.getData('Paweł');
            }, 8000);
            setTimeout(() => {
                this.getData('Jan');
            }, 10000);
        },

        methods: {
            getData(name) {
                fetch('https://mvtthew.pl:11290/name/' + name, {
                    method: 'GET'
                }).then(res => res.json()).then(data => {

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