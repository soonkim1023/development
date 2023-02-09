<template>
    <div class="hello">
        <h1>v-for Sample</h1>
        <hr/>
        <div>
            <button @click="refreshList">Refresh</button>
        </div>
        <h2> List Total Count : {{ this.listInfo.length }}</h2>
    </div>

    <div>
        <li v-for="(item,index) in listInfo" :key="index">
            <img :src="item" alt="이미지"/>
        </li>
    </div>
</template>

<script>
export default {
    name: "ListSample",
    data() {
        return {
            listInfo: [],
        }
    },
    methods: {
        async getList() {
            // this.$axios.get(`https://jsonplaceholder.typicode.com/todos`).then(resp => {
            //     if(resp.status === 200) {
            //         this.listInfo = resp.data;
            //     }
            // });

            let randomNum = Math.floor(Math.random() * 4 + 1);
            let rtn = await this.$store.dispatch("refreshList", randomNum);

            if(rtn.status === 200) {
                this.listInfo = rtn.data.message;
            }
        },
        refreshList() {
            this.getList();
        },
    },
    mounted() {
        this.getList();
    },
}
</script>

<style scoped>

</style>