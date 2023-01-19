<template>
    <div class="page-sidebar">
        <SidebarBlock v-for="(sidebarMenu, index) in content.menu"
                      :title="sidebarMenu.title"
                      :items="sidebarMenu.items"
                      :key="index"/>
    </div>
</template>

<script>
/* Import components */
import SidebarBlock from "../../components/Sidebar/SidebarBlock.vue";

export default {
    name      : 'Sidebar',
    components: {
        SidebarBlock
    },
    data      : () => ({
        content: {
            menu: [
                {
                    title: 'Профиль',
                    items: [
                        {component: 'PageMain', title: 'Личные данные'},
                        {component: 'PageSessions', title: 'Сессии'}
                    ]
                },
                {
                    title: 'Участники',
                    items: [
                        {component: 'PageLogin', title: 'Все пользователи'}
                    ]
                }
            ]
        }
    })
};
</script>