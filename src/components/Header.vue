<template>
    <header class="page-header">
        <Logo/>
        <ProfilePanel/>
    </header>
</template>

<script>
/* Import components */
import Logo from "../components/Logo.vue";
import ProfilePanel from "../components/ProfilePanel.vue";

export default {
    name      : 'Header',
    components: {
        Logo,
        ProfilePanel
    }
};
</script>