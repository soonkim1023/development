<template>
    <div>
        <button @click="fnToggle">토글</button>

        <TrueComp v-if="toggle"></TrueComp>
        <FalseComp v-else-if="!toggle"></FalseComp>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TrueComp from '@/components/ifSample/true.vue';
import FalseComp from '@/components/ifSample/false.vue';

let toggle = ref(true);

const fnToggle = () => {
    toggle.value = !toggle.value;
}
</script>

<style scoped>

</style>