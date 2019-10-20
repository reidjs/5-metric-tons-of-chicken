<template>
    <div class="container">
        <!-- <h1 class="title">EPCIS Events</h1> -->
        <section class="hero is-warning">
            <div class="hero-body">
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
        <ul id="example-1">
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
    components: {
        ListItem,
    },
    computed: {
        items() {
            return [{
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
    }
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