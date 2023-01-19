<template>
    <div class="sidebar-block">
        <h2 v-if="title" class="sidebar-block__title">{{ title }}</h2>

        <ul v-if="items.length" class="sidebar-block-list">
            <li v-for="(item, index) in items" class="sidebar-block-list__item" :key="index">
                <router-link :to="{ name: item.component }" class="sidebar-block-list__item-link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'SidebarBlock',
    props: {
        title: String,
        items: {
            type    : Array,
            required: true
        }
    }
};
</script>