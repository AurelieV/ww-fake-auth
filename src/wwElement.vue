<template>
    <div></div>
</template>

<script>
import { computed, watch, onMounted } from "vue";

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
                console.log("watch")
                context.emit("trigger-event", { name: "token", event: token });
            }
        );
        onMounted(() => {
            console.log("mounted")
            context.emit("trigger-event", { name: "token", event: token });
        })
    },
};
</script>
