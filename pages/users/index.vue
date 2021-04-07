<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">USERS</h1>
      <p v-if="!users">Loading...</p>
      <ul v-else class="users">
        <li v-for="(user, index) in users" :key="index" class="user">{{ user.name }}</li>
      </ul>
      <button class="button" @click.prevent="refresh">Refresh</button>
      <br />
      <nuxt-link class="button" to="/"> Homepage </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    const users = await $axios.$get('/api/users')
    return { users }
  },
  head() {
    return {
      title: 'Users',
    }
  },
  methods: {
    refresh() {
      this.users = null
      $nuxt.refresh()
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
.button {
  display: inline-block;
  margin-top: 50px;
}
</style>
