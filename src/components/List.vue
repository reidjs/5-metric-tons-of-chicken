<template>
    <div class="container">
        <section class="hero is-warning">
            <div @click="addElement" class="hero-body">
                <div class="container">
                <h1 class="title">
                    EPCIS Events
                </h1>
                <h2 class="subtitle">
                    List of EPCIS Events across all sensors
                </h2>
                </div>
            </div>
        </section>
        <ul id="foo">
            <li v-for="item in items" :key="item.name">
                <ListItem :item="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem'
export default {
    name: 'List',
    data() {
        return {
            items: [{
                what: '24 lbs Lettuce',
                sscc: '003210112345678908',
                time: '11:09 PM - 1 Jan 2016',
                why: 'Shipping',
                where: 'Frank\'s Farm, Salinas, California 91022',
                gln: '0321011246530',
                url: 'https://picsum.photos/id/235/200/200'
            }, {
                what: '13 bushels Corn',
                sscc: '103210112345672904',
                time: '10:01 AM - 1 Feb 2018',
                why: 'Packaging',
                where: 'Juan\'s Farm, Oxaca, Mexico',
                gln: '0321011246530',
                url: 'https://picsum.photos/id/135/100/100',
            },
            {
                what: 'Specialty Hardware',
                sscc: '103219000345672904',
                time: '1:33 PM - 1 Mar 2018',
                why: 'Aggregation',
                where: 'National Aerospace Museum',
                gln: '03088911246530',
                url: 'https://picsum.photos/id/215/100/100'
            }]
        }
    },
    components: {
        ListItem,
    },
    mounted() {
    },
    computed: {
        reversedItems() {
            return this.items.slice(0).reverse()
        }
    },
    methods: {
        addElement(){
            const item = {
                what: '5 Metric Tons of Chicken',
                sscc: '10321999345672911',
                time: '2:33 PM - 20 Oct 2019',
                why: 'Delivery',
                where: '435 Broadway',
                gln: '03088911246530',
                url: 'https://picsum.photos/id/200/100/100',
                load: true
            }
            const items = this.items.slice(0)
            items.unshift(item)
            this.items = items
            this.pulse()
            
            // console.log('this.items.length', this.items.length)
        },
        pulse() {
            // Ideally this would be done in CSS
            const el = document.getElementById('foo')
            const e = el.firstChild.firstChild
            e.style.border = '2px solid rgb(0, 200, 0, 0.8)'
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.7)'
            }, 500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.6)'
            }, 1000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.5)'
            }, 1500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.4)'
            }, 2000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.3)'
            }, 2500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.2)'
            }, 3000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.3)'
            }, 3500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.4)'
            }, 4000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.5)'
            }, 4500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.6)'
            }, 5000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.7)'
            }, 5500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.8)'
            }, 6000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.7)'
            }, 6500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.6)'
            }, 7000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.5)'
            }, 7500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.4)'
            }, 8000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.3)'
            }, 8500)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.2)'
            }, 9000)
            setTimeout(() => {
                e.style.border = '2px solid rgb(0, 200, 0, 0.1)'
            }, 9500)
            e.style.border = '0px solid black'
        }
    },
}
</script>

<style scoped>
div {
    /* width: 75%; */
    /* margin: 20px 0 */
}
h3 {
    margin: 0;
}
</style>