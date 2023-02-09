<template>
    <div></div>
</template>

<script>
export default {
    name: "LifeCycle",
    beforeCreate() {
        console.log(`
            1. beforeCreated
            Vue 인스턴스가 초기화 된 직후에 발생
            컴포넌트가 DOM에 추가되기도 전이어서 this.$el에 접근 ❌
            또한 data, event, watcher에도 접근하기 전이라 data, methods에도 접근 ❌
        `);
    },
    created() {
        console.log(`
            2. created
            data를 반응형으로 추적 가능
            computed, methods, watch 등이 활성화되어 접근이 가능, but DOM에는 추가되지 않은 상태
            컴포넌트 초기에 외부에서 받아온 값들로 data를 세팅해야 하거나 이벤트 리스너를 선언해야 한다면 이 단계에서 하는 것이 가장 적절
        `);
    },
    beforeMount() {
        console.log(`
            3. beforeMount
            가상 DOM이 생성되어 있으나 실제 DOM에 부착되지는 않은 상태
        `);
    },
    mounted() {
        console.log(`
            4. mounted
            상 DOM의 내용이 실제 DOM에 부착되고 난 이후에 실행되므로,
            this.$el을 비롯한 data, computed, methods, watch 등 모든 요소에 접근 가능
        `);
    },
}
</script>

<style scoped>

</style>