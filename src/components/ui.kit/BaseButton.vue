<template>
    <button class="custom-btn"
            :class="disabled ? 'custom-btn_disabled' : ''">{{ title }}
    </button>
</template>

<script>
export default {
    name : 'Button',
    props: {
        disabled: Boolean,
        title   : String
    }
};
</script>

<style lang="scss">
.custom-btn {
    display         : flex;
    align-items     : center;
    justify-content : center;
    height          : 24px;
    padding         : 4px;
    font-size       : 10px;
    font-weight     : 400;
    line-height     : normal;
    letter-spacing  : 1.35px;
    text-transform  : uppercase;
    border          : unset;
    color           : #1E88E5;
    background      : unset;
    border-radius   : 4px;
    transition      : 0.3s;
    cursor          : pointer;

    &_primary {
        color      : #263238;
        background : #FFE082;
    }

    &_default {
        color      : #263238;
        background : #fff;
    }

    &_big {
        height      : 40px;
        padding     : 10px 16px;
        font-size   : 14px;
        font-weight : 500;
    }

    &_medium {
        height    : 32px;
        padding   : 8px 16px;
        font-size : 12px;
    }

    &_disabled {
        color      : #9E9E9E;
        background : unset;
        cursor     : not-allowed;
    }

    &_ico-edit {
        display         : flex;
        align-items     : center;
        justify-content : center;
        width           : 24px;
        height          : 24px;
        padding         : unset;
        background      : url('../../assets/svg/ico-edit.svg') center no-repeat;
    }
}
</style>