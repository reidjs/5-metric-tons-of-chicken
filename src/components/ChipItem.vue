<template>
    <div class="box">
        <div class="container">
            <h1>NodeMCU ESP8266</h1>
            <h2>{{ item.name }}</h2>
            <div class="button-container">
                <button :class="{button: true, 'is-success': !active, 'is-danger': active, 'is-small': true}" @click="toggle">{{ text }}</button>
                <button class="button is-info is-small"><router-link to="/dashboard">View</router-link></button>
            </div>
            <div class="sscc">
                <h3>Associated SSCC</h3>
                <span>103219000345672904</span>
            </div>
            <ul>
                <li v-for="sensor in sensors" :key="sensor.name">
                    <ion-icon :name="sensor.name"></ion-icon>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const randomize = arr => {
    const result = []
    while(arr.length > 0) {
        const i = Math.random() * arr.length | 0
        result.push(arr.splice(i, 1))
    }
    return result
}
export default {
    props: ['item'],
    data() {
        return {
            active: false,
            numSensors: (Math.random() * 6) | 0 + 1
        }
    },
    computed: {
        text() {
            return this.active ? 'Disable' : 'Enable'
        },
        sensors() {
            const arr = []
            const sensors = randomize(['thermometer', 'flash', 'compass', 'alarm', 'document', 'finger-print'])
            for(let i = 0; i < this.numSensors; i++) {
                arr.push({name: sensors[i]})
            }
            return arr
        },
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    },
    mounted() {
        // this.numSensors = Math.random(6) | 0
    }
}
</script>

<style scoped>
.box {
    width: 237px;
    height: 200px;
    display: flex;
    align-items: center;
    margin: 5px;
    border: 2px solid grey;
    cursor: pointer;
    /* flex-direction: column; */
}
h1 {
    text-align: center;
}
h2 {
    text-align: center;
}
.button-container {
    margin: 10px 0 10px;
    display: flex;
    justify-content: space-between;
}

.button {
    width: 60px;
}
a {
    color: inherit;
}
ul {
    display: flex; 
    justify-content: center; 
}
li {
    padding: 0 3px;
}
.sscc {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h3 {
    text-align: center;
}
.sscc > span {
    border: 1px solid black;
    text-align: center;
    margin-bottom: 10px;
}
.sscc > span:hover {
    color: green;
}

</style>