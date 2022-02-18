<template>
    <div></div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    emits: ['trigger-event'],
    computed: {
        token() {
            return this.content.token;
        },
    },
    mounted() {
        console.log("mounted")
        this.$emit("trigger-event", { name: "tokenChanged", event: { token: this.token } });
    },
    watch: {
        token(token) {
            console.log("action")
            this.$emit("trigger-event", { name: "tokenChanged", event: { token } });
        },
    },
};
</script>
