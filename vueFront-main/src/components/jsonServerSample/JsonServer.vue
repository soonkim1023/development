<template>
    <div>
        <h1>Options API</h1>
        <button @click="add">Add Data</button>
        <button @click="patch">Modify Data</button>
        <button @click="remove" :disabled="list.length === 0">Remove Data</button>

        <template v-if="list.length">
            <div v-for="(item, index) in list" :key="index">
                <span>Id : {{ item.id }}  |  Name : {{ item.name }}  {{ item.desc ? `  |  Desc : ${item.desc}` : '' }}</span>
            </div>
        </template>
        <template v-else>
            <div>No Data</div>
        </template>
    </div>
</template>

<script>
export default {
    name: "JsonServer",
    data() {
        return {
            url: `http://localhost:3000`,
            list: [],
        }
    },
    methods: {
        async getList() {
            let rtn = await this.$axios.get(`${this.url}/sample`);

            if(rtn.status === 200) {
                this.list = rtn.data;
            }
        },
        async add() {
            let data = {
                id: this.list.length+1,
                name: `sample${this.list.length+1}`
            }
            await this.$axios.post(`${this.url}/sample`, data);

            await this.getList();
        },
        async patch() {
            let data = {
                desc: "patch"
            }

            await this.$axios.patch(`${this.url}/sample/${this.list.length}`, data);

            await this.getList();
        },
        async remove() {
            if(this.list.length === 0) {
                alert("No Data")
            } else {
                await this.$axios.delete(`${this.url}/sample/${this.list.length}`);

                await this.getList();
            }
        }
    },
    async mounted() {
        await this.getList();
    }
}
</script>

<style scoped>
button {
    margin: 20px;
}
</style>