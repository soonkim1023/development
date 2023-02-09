<template>
    <div>
        <h1>{{ props }}</h1>
    </div>
</template>

<script>
export default {
    name: "DynamicBinding",
    data() {
        return {
            props: '',
        }
    },
    created() {
        this.props = this.$route.params.message;
    },
}
</script>

<style scoped>

</style>