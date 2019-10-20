<template>
    <div class="container">
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Sensor Dashboard
                </h1>
                <h2 class="subtitle">
                    View data collected by a sensor between EPCIS events
                </h2>
                </div>
            </div>
        </section>
        <h1>Sensor #043ddfe9400</h1>
        <h2 class="desc"><strong>NodeMCU EPS8893</strong></h2>
        <ul>
            <li @click="setThermometer"><a>Thermometer</a></li>
            <li @click="setAccelerometer"><a>Accelerometer</a></li>
            <li @click="setHumidity"><a>EPCIS Events</a></li>
            <li></li>
        </ul>
        <canvas id="chart-1"></canvas>
        <!-- <canvas v-if="chartToShow == 2" id="chart-2"></canvas> -->
    </div>
</template>

<script>
import Chart from 'chart.js';
import chart1Data from './chart-1.js';
import chart2Data from './chart-2.js';
import chart3Data from './chart-3.js';

export default {
    data() {
        return {
            // chartToShow: 1,
            chart1Data,
            chart2Data,
            chart3Data,
        }
    },
    methods: {
        createChart(chartId, chartData) {
                const ctx = document.getElementById('chart-1');
                const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        },
        // changeData() {
        //     console.log('chart1Data', this.chart1Data.data)
        //     this.chart1Data.data = []
        //     this.createChart('chart1Data', this.chart1Data);
        // },
        setThermometer() {
            this.createChart('chart2Data', chart2Data);
        },
        setAccelerometer() {
            this.createChart('chart1Data', this.chart1Data);
        },
        setHumidity() {
            this.createChart('chart3Data', chart3Data);
        }
    },
    mounted() {
        this.setThermometer()
    }
}
</script>

<style scoped>
.desc {
    margin-bottom: 20px;
}
ul {
    display: flex;
    margin: 0 0 20px;
}
li {
    margin: 0 10px;
}
</style>
