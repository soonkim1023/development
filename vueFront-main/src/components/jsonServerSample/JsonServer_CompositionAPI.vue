<template>
    <div>
        <h1>Composition API</h1>
        <button @click="add">Add Data</button>

        <p>{{ computed_test }}</p>
        <p>{{ ref_data }}</p>
        <p>{{ reactive_data.value }}</p>

        <template v-if="list.length">
            <div class="table_section">
                <table class="table">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(item, index) in list" :key="index">
                        <td>{{ item.mmbr_id }}</td>
                        <td>{{ item.mmbr_nm }}</td>
                        <td>
                            <button @click="updMember(item.mmbr_id)">Modify</button>
                            <button @click="delMember(item.mmbr_id)">Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </template>
        <template v-else>
            <div>No Data</div>
        </template>
    </div>
</template>


<!--
    composition API는 Components import 시 컴포넌트 명 대문자로 지정
-->
<script setup>
/**
 * ---inject---
 * composition API 사용 시 main.js에서 라이브러리를 provide 함수로 (key: value) 형식으로 명시하여 제공
 * app.provide('$axios', axios);
 * 사용할 라이브러리는 컴포넌트 내에서 inject import 후 provide 함수로 명시한 key 값으로 의존성 inject
 * */
import {inject, ref, reactive, onMounted, watch, computed} from "vue";

/**
 * ref => 모든 데이터 형에 적용 가능, 변수명.value 로 접근
 * reactive => object, array 이외 사용 불가, 변수명.field 로 접근
 */
const $axios = inject('$axios');
const $dayjs = inject('$dayjs');
let url = `http://localhost:3000`;
let list = ref([]);
let ref_data = ref('');
let reactive_data = reactive({});

/**
 *  Methods
 */
const getList  = async () => {
    let rtn = await $axios.get("/v1/select");
    if(rtn.status === 200) {
        list.value = rtn.data;
    }
};

const add = async () => {
    let data = {
        "mmbr_id": list.value.length+1,
        "mmbr_pwd": `test_${list.value.length+1}`,
        "mmbr_nm": `test_${list.value.length+1}`
    }
    await $axios.post(`/v1/insert`, data);
    ref_data.value = "Execute Add"
    reactive_data.value = "Complete Add";

    await getList();
};

const delMember = async (params) => {
    let data = {
        "mmbr_id": params
    }

    try {
        await $axios.post(`/v1/delete`, data);
        ref_data.value = "Execute Delete"
        reactive_data.value = "Complete Delete";
    } catch(e) {
        alert("remove error")
    }

    await getList();
}

const updMember = async (params) => {
    let data = {
        "mmbr_id": params
    }
    try {
        await $axios.post(`/v1/update`, data);
        ref_data.value = "Execute Update"
        reactive_data.value = "Complete Update";
    } catch(e) {
        alert("update error")
    }

    await getList();
}

/**
 * computed
 */
const computed_test = computed(() => `length : ${list.value.length}`);


/**
 *  onMounted Hook
 */
onMounted(() => {
    getList();
});

/**
 *  watch
 * */
watch(() => list.value, (newValue, oldValue) => {
    // console.log('list Changed ---- ', {newValue, oldValue})
}, {deep: true, immediate: true})
watch(() => ref_data.value, (newValue, oldValue) => {
    // console.log('ref_data Changed ---- ', {newValue, oldValue})
})
</script>

<style scoped>
button {
    margin: 20px;
}

.table_section {
    width:100%;
}

.table {
    margin: auto;
    border: #2c3e50 solid 1px;
}
th, td {
    border: 1px solid #444444;
    padding-left: 10px;
    padding-right: 10px;
}
</style>