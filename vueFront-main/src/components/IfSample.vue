<template>
    <div class="hello">
        <h1>v-if Sample</h1>
        <hr/>
        <button @click="changeComponents">토글</button>
        <VifTrue v-if="toggle"/>
        <VifFalse v-if="!toggle"/>
    </div>
</template>

<script>

import VifTrue from '@/components/vIfComponents/vIfTrue.vue';
import VifFalse from '@/components/vIfComponents/vIfFalse.vue';

export default {
    name: "IfSample",
    data() {
        return {
            toggle: true,
        }
    },
    components: {
        VifFalse,
        VifTrue,
    },
    methods: {
        changeComponents() {
            this.toggle = !this.toggle;
        },
    },
}
</script>

<style scoped>

</style>