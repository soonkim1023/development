<template>
    <div>
        <h1>Event Handler</h1>
        <hr/>

        <h3>Click Event</h3>
        <button class="w-btn w-btn-gra1"
                v-on:click="click"
        >
            v-on:click
        </button>
        <button class="w-btn w-btn-blue"
                @click="clickWithParam('hello')"
        >
            @click with Message
        </button>
        <button
            :class="!toggle ? 'w-btn w-btn-gra2' : 'w-btn w-btn-gra2-dis'"
            @click="toggleDisabled"
            :disabled="toggle"
        >
            {{ message }}
        </button>

        <h3>Keyup Event</h3>
        <input placeholder="keyup.enter"
               @keyup.enter="keyupEnter"/>
        keyup.enter Str : {{ str ? str : 'Empty'}}
    </div>
</template>

<script>
export default {
    name: "EventHandling",
    data() {
        return {
            str: '',
            message: 'Click Disabled',
            toggle: false,
        }
    },
    methods: {
        async click() {
            alert("click");
        },
        clickWithParam(data) {
            alert(data);
        },
        toggleDisabled() {
            this.toggle = !this.toggle;
            this.message = `Disabled True`;

            setTimeout(() => {
                this.toggle = !this.toggle;
                this.message = `Disabled False`;
            }, 1500)
        },
        keyupEnter(e) {
            this.str = e.target.value;
        },
    },
}
</script>

<style scoped>
button {
    margin: 20px;
}

.w-btn {
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
}

.w-btn-blue {
    background-color: #6aafe6;
    color: #ffffff;
}
.w-btn-gra1 {
    background: linear-gradient(-45deg, #33ccff 0%, #ff99cc 100%);
    color: #ffffff;
}

.w-btn-gra2 {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    color: #ffffff;
}

.w-btn-gra2-dis {
    background: lightgray;
    color: #00000050;
}
</style>