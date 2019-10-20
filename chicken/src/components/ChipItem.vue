<template>
    <div class="box">
        <div class="container">
            <h1>NodeMCU EPS8893</h1>
            <h2>{{ item.name }}</h2>
            <div class="button-container">
                <button :class="{button: true, 'is-success': !active, 'is-danger': active, 'is-small': true}" @click="toggle">{{ text }}</button>
                <button class="button is-info is-small"><router-link to="/dashboard">View</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {
            active: false
        }
    },
    computed: {
        text() {
            return this.active ? 'Disable' : 'Enable'
        }
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    margin: 5px;
    border: 2px solid grey;
    cursor: pointer;
    /* flex-direction: column; */
}
h2 {
    text-align: center;
}
.button-container {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.button {
    width: 60px;
}
a {
    color: inherit;
}

</style>