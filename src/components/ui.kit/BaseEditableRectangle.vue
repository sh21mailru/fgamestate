<template>
    <div class="rectangle-block">
        <div class="rectangle-block__header">
            <h3 v-if="title" class="rectangle-block__title">{{ title }}</h3>
            <BaseButton v-if="isEditable" class="custom-btn_ico-edit custom-btn_medium"/>
        </div>

        <div class="rectangle-block__content">
            <slot name="rectangle-content"/>
        </div>
    </div>
</template>

<script>
/* Import components */
import BaseButton from "../../components/ui.kit/BaseButton.vue";

export default {
    name      : 'BaseEditableRectangle',
    props     : {
        title     : String,
        isEditable: {
            type   : Boolean,
            default: true
        }
    },
    components: {
        BaseButton
    },
    data      : () => ({
        content: {
            edit: 'Редактировать'
        }
    })
};
</script>

<style lang="scss">
.rectangle-block {
    padding         : 24px;
    border-radius   : 16px;
    color           : #fff;
    background      : rgba(11, 31, 62, 0.85);
    backdrop-filter : blur(1px);

    &__header {
        display         : flex;
        align-items     : center;
        justify-content : space-between;
        margin-bottom   : 24px;
    }

    &__title {
        font-family    : 'Rubik', sans-serif;
        margin         : 0 24px 0 0;
        font-size      : 16px;
        line-height    : 19px;
        letter-spacing : 1.15px;
        text-transform : uppercase;
        color          : #fff;
    }

    .custom-label {
        color : #fff;
    }

    &:not(:last-of-type) {
        margin-bottom : 24px;
    }
}
</style>