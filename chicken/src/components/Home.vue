<template>
    <div class="container">
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Pallet Sensors
                </h1>
                <h2 class="subtitle">
                    Manage your active gs1 sensors
                </h2>
                </div>
            </div>
        </section>
        <ul>
            <li v-for="item in items" :key="item.name">
                <ChipItem :item="item"/>
            </li>
        </ul>
    </div>
</template>
<script>
import ChipItem from './ChipItem'
const arr = []
for(let i = 0; i < 35; i++) {
    arr.push(
        {
            name: `#${i}43ddfe9${i+400}`
        }
    )
}
export default {
    name: 'Home',
    components: {
        ChipItem,
    },
    computed: {
        items() {
            return arr
        }
    },
}
</script>
<style scoped>
.container {
    width: 800px;
}
ul {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: center;
}
</style>