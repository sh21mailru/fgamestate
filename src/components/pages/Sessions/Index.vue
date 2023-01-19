<template>
    <section class="page-main">
        <BaseTabs :items="arBlocks"/>
    </section>
</template>

<script>
/* Import components */
import BaseTabs from "../../ui.kit/BaseTabs.vue";

import MySessions from "./Tabs/MySessions.vue";
import FinishedSessions from "./Tabs/FinishedSessions.vue";
import PublicSessions from "./Tabs/PublicSessions.vue";

export default {
    name      : 'PageSessions',
    components: {
        BaseTabs
    },
    data      : () => ({
        arBlocks: [
            {title: 'Мои сессии', component: MySessions, refKey: 'mySessions'},
            {title: 'Публичные сессии', component: PublicSessions, refKey: 'publicSessions'},
            {title: 'Завершенные сессии', component: FinishedSessions, refKey: 'finishedSessions'}
        ]
    })
};
</script>