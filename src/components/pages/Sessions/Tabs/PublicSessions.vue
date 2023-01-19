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
import TestComp from "../../../ui.kit/TestComp2.vue";

export default {
    name      : 'PublicSessions',
    components: {
        BaseEditableRectangle,
        TestComp
    },
    data      : () => ({
        content: {
            title: 'Публичные сессии'
        }
    })
};
</script>

<style lang="scss">
</style>