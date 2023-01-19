<template>
    <section class="page-main">
        <BaseTabs :items="arBlocks"/>
    </section>
</template>

<script>
/* Import components */
import BaseTabs from "../../ui.kit/BaseTabs.vue";

import BlockPersonal from "./BlockPersonal.vue";
import BlockSecurity from "./BlockSecurity";

export default {
    name      : 'PageMain',
    components: {
        BaseTabs
    },
    data      : () => ({
        arBlocks: [
            {title: 'Личные данные', component: BlockPersonal, refKey: 'personalBlock'},
            {title: 'Данные входа', component: BlockSecurity, refKey: 'securityBlock'}
        ]
    })
};
</script>