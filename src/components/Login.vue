<template>
    <div class="authorize-form">
        <h2 class="authorize-form__title">{{ content.title }}</h2>

        <div class="authorize-form__group">
            <BaseInput v-model="form.items.email.value"
                       :label="form.items.email.label"
                       :name="form.items.email.name"
                       :required="form.items.email.required"/>
        </div>

        <div class="authorize-form__group">
            <BaseInput v-model="form.items.password.value"
                       :label="form.items.password.label"
                       :name="form.items.password.name"
                       :type="form.items.password.type"
                       :required="form.items.password.required"/>
        </div>

        <div class="authorize-form__footer">
            <div class="authorize-form__group form-group form-group_flex">
                <BaseCheckbox v-model="form.items.isRemember.value"
                              :label="form.items.isRemember.label"
                              :name="form.items.isRemember.name"/>

                <BaseButton class="authorize-form__forgot custom-btn_disabled" :title="content.forgot"/>
            </div>


            <BaseButton class="authorize-form__login custom-btn_primary custom-btn_big"
                        :disabled="!isAuthorizeActive"
                        :title="content.login"/>

            <BaseButton class="authorize-form__register custom-btn_default custom-btn_big"
                        :title="content.register"/>
        </div>
    </div>
</template>

<script>
/* Import Components */
import BaseButton from "./ui.kit/BaseButton.vue";
import BaseCheckbox from "./ui.kit/BaseCheckbox.vue";
import BaseInput from "./ui.kit/BaseInput.vue";

export default {
    name      : 'Login',
    components: {
        BaseButton,
        BaseCheckbox,
        BaseInput
    },
    computed  : {
        isAuthorizeActive() {
            return this.form.items.email.value && this.form.items.password.value;
        }
    },
    data      : () => ({
        content: {
            forgot  : 'Не помню пароль?',
            login   : 'Войти',
            register: 'Регистрация',
            title   : 'Войти'
        },
        form   : {
            items: {
                email     : {
                    name    : 'authorize-email',
                    label   : 'E-mail',
                    value   : '',
                    required: true
                },
                password  : {
                    name    : 'authorize-password',
                    label   : 'Пароль',
                    value   : '',
                    type    : 'password',
                    required: true
                },
                isRemember: {
                    name : 'authorize-remember',
                    label: 'Запомнить меня',
                    value: false
                }
            }
        }
    })
};
</script>

<style lang="scss">
.authorize-form {
    width           : 498px;
    min-height      : 537px;
    margin          : 0 auto;
    padding         : 60px 74px;
    background      : rgba(11, 31, 62, 0.85);
    backdrop-filter : blur(1px);
    border-radius   : 16px;
    box-shadow      : 0px -1px 18px rgba(0, 0, 0, 0.06), 0px 6px 18px rgba(0, 0, 0, 0.06);

    &__title {
        margin         : 0 0 16px;
        font-size      : 24px;
        font-weight    : 500;
        line-height    : 33px;
        letter-spacing : 0.65px;
        text-align     : left;
        color          : #FFECB3;
    }

    &__group {
        margin-bottom : 24px;
    }

    &__footer {
        margin-top : 56px;
    }

    &__login,
    &__register {
        width : 100%;
    }

    &__login {
        margin-bottom : 24px;
    }

    .authorize-form__forgot,
    .custom-label,
    .custom-checkbox .ant-checkbox + span {
        color : #FFF8E1;
    }
}
</style>