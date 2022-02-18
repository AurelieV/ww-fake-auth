<template>
    <div></div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    emits: ["trigger-event"],
    computed: {
        token() {
            return this.content.token;
        },
    },
    onMounted() {
        console.log("mount")
        this.$emit("trigger-event", { name: "token", event: { token: this.token } });
    },
    watch: {
        token(token) {
            console.log("watch")
            this.$emit("trigger-event", { name: "token", event: { token } });
        },
    },
};
</script>
