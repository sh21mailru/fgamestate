<template>
    <div class="page-wrap page-wrap_auth">
        <Logo/>

        <router-view/>

        <Copyright/>
    </div>
</template>

<script>
/* Import components */
import Copyright from "../../components/Copyright.vue";
import Logo from "../../components/Logo.vue";

export default {
    name      : 'LayoutAuthorize',
    components: {
        Copyright,
        Logo
    }
};
</script>