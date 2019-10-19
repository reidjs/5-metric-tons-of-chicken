<template>
  <div id="app">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/list" :class="{'is-active': route == 'list'}" >List</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
    <!-- <img alt="Vue logo" src="./assets/logxo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to="/foo">Go to Foo</router-link> -->
    <!-- <button class="button">Button</button> -->
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  computed: {
    route() {
      console.log('this.$router', this.$router)
      return null
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  display: flex;
}
</style>
