<template>
    <div style="margin: 10px; border: dotted gray;">
        <h2>
           Children Section
        </h2>
        <div>
            <h2 :style="titleStyle">{{ title }}</h2>
            <h3 :style="descStyle">{{ desc }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChildrenComponent",
    props: {
        title: {
            type: String,
            default: "Default Title",
        },
        desc: {
            type: String,
            default: "Default Desc",
        },
        titleStyle: {
            type: Object,
            default: () => {
                return {}
            },
        },
        descStyle: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
}
</script>

<style scoped>

</style>