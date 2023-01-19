<template>
    <div class="header-profile">
        <BaseAvatar class="header-profile__avatar"/>
    </div>
</template>

<script>
/* Import Components */
import BaseAvatar from "./ui.kit/BaseAvatar.vue";

export default {
    name      : 'ProfilePanel',
    components: {
        BaseAvatar
    }
};
</script>

<style lang="scss">
.header-profile {
    display         : flex;
    align-items     : center;
    justify-content : space-between;

    &__avatar {
        width       : 40px;
        height      : 40px;
        margin-left : 16px;
        border      : solid 1px #FFECB3;
    }
}
</style>