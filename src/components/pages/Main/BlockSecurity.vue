<template>
    <BaseEditableRectangle :title="content.title">
        <template slot="rectangle-content">
            <section class="security-block">
                <div class="security-block__group">
                    <BaseInput v-model="form.items.email.value"
                               :label="form.items.email.label"
                               :name="form.items.email.name"/>
                </div>

                <div class="security-block__group">
                    <BaseInput v-model="form.items.password.value"
                               :label="form.items.password.label"
                               :name="form.items.password.name"
                               :type="form.items.password.type"/>
                </div>

                <BaseButton class="profile-block__save-btn custom-btn_primary custom-btn_big"
                            :title="content.save"/>
            </section>
        </template>
    </BaseEditableRectangle>
</template>

<script>
/* Import components */
import BaseButton from "../../ui.kit/BaseButton.vue";
import BaseEditableRectangle from "../../ui.kit/BaseEditableRectangle";
import BaseInput from "../../ui.kit/BaseInput";

export default {
    name      : 'BlockSecurity',
    components: {
        BaseButton,
        BaseEditableRectangle,
        BaseInput
    },
    data      : () => ({
        form   : {
            items: {
                email   : {
                    name : 'security-email',
                    label: 'E-mail',
                    value: '2***@example.com'
                },
                password: {
                    name : 'security-password',
                    label: 'Пароль',
                    value: '123456',
                    type : 'password'
                }
            }
        },
        content: {
            title: 'Данные входа',
            save : 'Сохранить'
        }
    })
};
</script>

<style lang="scss">
.security-block {
    &__group {
        width         : 100%;
        max-width     : 250px;
        margin-bottom : 24px;
    }
}
</style>