<template>
    <div class="home">
        <div class="row">
            <div class="col-lg-3">
                <h1 class="m-0">
                    CMNiN
                </h1>
                <hr class="mb-2">
                <p>
                    What I'm doing here?
                </p>
            </div>
            <div class="col-lg-9">
                <highcharts :options="chartOptions" style="width: 100%; height: 500px"></highcharts>
                <div class="mt-3 text-right">
                    <button class="btn btn-outline-dark">Check name on graph</button>
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
                        text: 'Name uses frequency'
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