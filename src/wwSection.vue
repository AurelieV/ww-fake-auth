<template>
    <div></div>
</template>

<script>
import { computed, watch } from "vue";

export default {
    props: {
        content: { type: Object, required: true },
    },
    setup(props) {
        const { value, setValue } = wwLib.wwVariable.useComponentVariable(props.uid, "user", undefined, "section");
        const token = computed(() => props.content.token);
        watch(
            token,
            (token) => {
                if (!token) setValue(null);
                const base64Url = token.split(".")[1];
                const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                const jsonPayload = decodeURIComponent(
                    atob(base64)
                        .split("")
                        .map(function (c) {
                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                        })
                        .join("")
                );

                try {
                    setValue(JSON.parse(jsonPayload));
                } catch {
                    setValue(null);
                }
            },
            { immediate: true }
        );
    },
};
</script>
