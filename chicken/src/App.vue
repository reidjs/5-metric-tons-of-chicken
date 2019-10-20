<template>
  <div id="app">
    <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><router-link to="/" :class="{'is-active': route == '/'}">Sensors</router-link></li>
        <li><router-link to="/list" :class="{'is-active': route == '/list'}" >Events</router-link></li>
        <li><router-link to="/dashboard" :class="{'is-active': route == '/dashboard'}">Dashboard</router-link></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Organization Settings</a></li>
        <li>
          <a>Alert Settings</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Tracking </a></li>
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
    <div :class="{modal: true, 'is-active': showModal}">
      <div class="modal-background" @click="toggleModal"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <div class="card">
          <div class="content">
            Hello there
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toggleModal"></button>
    </div>
    <!-- <button class="button" @click="toggleModal">Show modal</button> -->
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    route() {
      return this.$route.path
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  display: flex;
  margin: 25px;
}

.menu {
  margin-right: 20px;
  width: 250px;
}
</style>
