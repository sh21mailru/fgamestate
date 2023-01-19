<template>
    <div class="profile-avatar">
        <img class="profile-avatar__img" src="@/assets/img/avatar.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'BaseAvatar'
};
</script>

<style lang="scss">
.profile-avatar {
    flex-shrink   : 0;
    border-radius : 50%;
    background    : #fff;
    overflow      : hidden;

    &__img {
        width  : 100%;
        height : 100%;
    }
}
</style>