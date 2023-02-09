<template>
    <div>
        <h1>Watch Sample</h1>
        <hr/>
        <div>
            <button @click="increaseNum" :disabled="increaseDisabled">Increase</button>
            <button @click="decreaseNum" :disabled="decreaseDisabled">Decrease</button>
        </div>
        <h2>{{ intA }} {{ this.strMessage }}</h2>
    </div>
</template>

<script>
export default {
    name: "WatchSample",
    data() {
        return {
            intA: 0,
            strMessage: "",

            increaseDisabled: false,
            decreaseDisabled: false,
        }
    },
    methods: {
        increaseNum() {
            this.intA++;
            this.increaseDisabled = this.intA >= 5;
            this.decreaseDisabled = false;
        },
        decreaseNum() {
            this.intA--;
            this.decreaseDisabled = this.intA <= -5;
            this.increaseDisabled = false;
        },
    },
    watch: {
        intA(newVal, oldVal) {
            if(newVal === 0) {
                this.strMessage = "";
                return;
            }
            if(newVal > oldVal) {
                this.strMessage = "increase"
            } else {
                this.strMessage = "decrease"
            }
        },
    },
}
</script>

<style scoped>
button {
    padding: 5px;
    margin: 5px;
}
</style>