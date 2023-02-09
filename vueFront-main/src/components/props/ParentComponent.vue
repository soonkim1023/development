<template>
    <div style="margin-top: 20px; border: dashed red;">
        <h1>Parent Section</h1>
        <hr/>
        <Child
            :titleStyle="propsData.titleStyle"
            :descStyle="propsData.descStyle"
            :title="propsData.title"
            :desc="propsData.desc"
        ></Child>
    </div>
</template>

<script>
import Child from '@/components/props/ChildrenComponent.vue'
export default {
    name: "ParentComponent",
    components: {
        Child,
    },
    data() {
        return {
            propsData: {
                titleStyle: {
                    color: '#3300FF',
                },
                descStyle: {
                    color: '#FF9999',
                },
                title: "Children - 타이틀이당",
                desc: "Children - 설명이당",
            },
        }
    },
}
</script>

<style scoped>

</style>