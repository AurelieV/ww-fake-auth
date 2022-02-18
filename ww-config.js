export default {
    editor: {
        label: {
            en: "Fake authent",
        },
    },
    triggerEvents: [
        { name: "tokenChanged", label: { en: "On token changed" }, event: { token: "" } },
    ],
    properties: {
        token: {
            label: {
                en: "JWT Token",
            },
            bindable: true,
            type: "Text",
        },
    },
};
