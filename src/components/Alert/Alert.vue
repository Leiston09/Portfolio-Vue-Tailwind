<template>
    <div :class="alert" v-if="alert !== ''">
        <p>{{ props.message }}</p>
    </div>
</template>

<script setup>

const props = defineProps({

    type: {
        type: String,
        default: "",
    },
    message: {
        type: String,
        default: "",
    },
});

const alert = computed(() => {
    switch (props.type) {
        case "success":
            return "alert-success";
        case "error":
            return "alert-error";
        case "warning":
            return "alert-warning";
        default:
            return "";
    }
});

</script>

<style lang="scss" scoped>

.alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    padding: 10px;
    border-radius: 5px;
}
.alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    padding: 10px;
    border-radius: 5px;
}
.alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    padding: 10px;
    border-radius: 5px;
}

</style>