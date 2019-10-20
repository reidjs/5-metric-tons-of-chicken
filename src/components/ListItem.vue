<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-128x128">
                <img :src="item.url" alt="Placeholder image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{{item.what}}</p>
                <h3 class="is-5"><small>SSCC</small>:<strong>{{item.sscc}}</strong></h3>
                <h3>{{item.where}}</h3>
                <h3><small>GLN</small>:<strong>{{item.gln}}</strong></h3>
                
            </div>
            </div>

            <div class="content">
            <p>{{item.why}}</p>

            <time datetime="2016-1-1">{{item.time}}</time>
            <br>
            <div class="button-container">
                <button class="button is-info is-light"><router-link to="/dashboard">View Sensor Information</router-link></button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: ['item']
}
</script>

<style scoped>
h3 {
    margin: 0;
}
.button-container {
    display: flex;
    justify-content: flex-end;
}
.card {
    margin: 20px;
}
</style>