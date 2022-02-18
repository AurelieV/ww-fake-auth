<template>
    <div></div>
</template>

<script>
import { computed, watch, onMounted } from "vue";

export default {
    props: {
        content: { type: Object, required: true },
    },
    emits: ["trigger-event"],
    computed: {
        token() {
            this.content.token;
        },
    },
    onMounted() {
        this.$emit("trigger-event", { name: "token", event: this.token });
    },
    watch: {
        token(token) {
            this.$emit("trigger-event", { name: "token", event: token });
        },
    },
};
</script>
