<template>
    <div></div>
</template>

<script>
import { computed, watch } from "vue";

export default {
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
    },
    emits: ["trigger-event"],
    setup(props, context) {
        const token = computed(() => props.content.token);
        watch(
            token,
            (token) => {
                context.emit("trigger-event", { name: "token", event: token });
            },
            { immediate: true }
        );
    },
};
</script>
