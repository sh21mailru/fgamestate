<template>
    <BaseEditableRectangle :title="content.title">
        <template slot="rectangle-content">
            <div>Session block</div>
        </template>
    </BaseEditableRectangle>
</template>

<script>
/* Import components */
import BaseEditableRectangle from "../../ui.kit/BaseEditableRectangle";

export default {
    name      : 'BlockSession',
    components: {
        BaseEditableRectangle
    },
    data      : () => ({
        content: {
            title: 'Сессия'
        }
    })
};
</script>