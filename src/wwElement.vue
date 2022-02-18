<template>
    <div></div>
</template>

<script>
import { computed, watch } from "vue";
import jwt_decode from "jwt-decode";

export default {
    props: {
        content: { type: Object, required: true },
    },
    setup(props) {
        const { setValue } = wwLib.wwVariable.useComponentVariable(props.uid, "user");
        const token = computed(() => props.content.token);
        watch(
            token,
            (token) => {
                if (!token) setValue(null);
                try {
                    setValue(jwt_decode(token));
                } catch {
                    setValue(null);
                }
            },
            { immediate: true }
        );
    },
};
</script>
