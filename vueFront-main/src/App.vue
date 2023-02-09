<template>
<!--    <div class="clock">-->
<!--        {{ clock.time }}-->
<!--    </div>-->
    <nav id="mynav" style="flex-direction: row;" class="nav">
        <router-link to="/">Home</router-link>  |
        <router-link to="/eventHandler">Event Handler </router-link>  |
        <router-link to="/list">v-for </router-link>  |
        <router-link to="/if">v-if</router-link>  |
        <router-link to="/props">Parent-Children</router-link>  |
        <router-link to="/lifeCycle">Life Cycle</router-link>  |
        <router-link to="/computed">Computed</router-link>  |
        <router-link to="/watch">Watch</router-link>  |
        <router-link :to="`/bind/${dynamicRouter}`">Dynamic Router</router-link>  |
        <router-link to="/jsonServer">Json-Server</router-link>  |
        <router-link to="/jsonServer2">Json-Server2</router-link>  |
        <router-link to="/errorPage">Error</router-link>
    </nav>
    <router-view />
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            dynamicRouter: 'vue-router Sample',
            clock: {
                interval: null,
                time: null,
            },
        }
    },
    created() {
        setInterval(() => {
            this.clock.time = this.$dayjs().format("YYYY-MM-DD dddd HH:mm:ss");
        }, 1000)
    },
    mounted() {

    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}

.nav {display:flex;background:indigo; padding: 8px 20px;}
.nav a {margin: 5px 20px; font-size:16px; color:white; text-decoration:none;}
</style>
