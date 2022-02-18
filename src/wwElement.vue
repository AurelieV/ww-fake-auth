<template>
    <div></div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
    },
    emits: ["trigger-event"],
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        token() {
            return this.content.token;
        },
    },
    mounted() {
        this.$emit("trigger-event", { name: "tokenChanged", event: { token: this.token } });
    },
    watch: {
        token(token) {
            this.$emit("trigger-event", { name: "tokenChanged", event: { token } });
        },
        /* wwEditor:start */
        isEditing() {
            this.$emit("trigger-event", { name: "tokenChanged", event: { token } });
        }
        /* wwEditor:end */
    },
};
</script>
