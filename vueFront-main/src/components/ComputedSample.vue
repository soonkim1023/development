<template>
    <div>
        <h1>Computed Sample</h1>
        <hr/>
        Input Field A  <input type="text" v-model="str1"><br>
        Input Field B  <input type="text" v-model="str2">
        <h2> {{ concat }}</h2>
    </div>
</template>

<script>
export default {
    name: "ComputedSample",
    data() {
        return {
            str1: "",
            str2: "",
        }
    },
    computed: {
        concat() {
            return `${this.str1} ${this.str2}`
        },
    },
}
</script>

<style scoped>
input {
    padding: 5px;
    margin: 5px;
}
</style>