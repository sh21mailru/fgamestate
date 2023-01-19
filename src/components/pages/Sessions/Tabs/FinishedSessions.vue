<template>
    <BaseEditableRectangle :title="content.title" :isEditable="false">
        <template slot="rectangle-content">
            <section class="">
                <TestComp/>
            </section>
        </template>
    </BaseEditableRectangle>
</template>

<script>
/* Import components */
import BaseEditableRectangle from "../../../ui.kit/BaseEditableRectangle";
import TestComp from "../../../ui.kit/TestComp3.vue";

export default {
    name      : 'FinishedSessions',
    components: {
        BaseEditableRectangle,
        TestComp
    },
    data      : () => ({
        content: {
            title: 'Завершенные сессии'
        }
    })
};
</script>

<style lang="scss">
</style>