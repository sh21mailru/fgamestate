<template>
    <div class="page-wrap page-wrap_auth">
        <Logo/>

        <router-view/>
    </div>
</template>

<script>
/* Import components */
import Logo from "../../components/Logo.vue";

export default {
    name      : 'LayoutAuthorize',
    components: {
        Logo
    }
};
</script>