<template>
    <BaseEditableRectangle :title="content.title">
        <template slot="rectangle-content">
            <section class="profile-block">
                <label class="profile-block__avatar-label custom-label">Ваше фото</label>
                <BaseAvatar class="profile-block__avatar"/>

                <div class="profile-block__group">
                    <BaseInput v-model="form.items.name.value"
                               :label="form.items.name.label"
                               :name="form.items.name.name"/>
                </div>

                <div class="profile-block__group">
                    <BaseInput v-model="form.items.lastName.value"
                               :label="form.items.lastName.label"
                               :name="form.items.lastName.name"/>
                </div>

                <div class="profile-block__group">
                    <BaseInput v-model="form.items.position.value"
                               :label="form.items.position.label"
                               :name="form.items.position.name"
                               :disabled="form.items.position.disabled"/>
                </div>

                <BaseButton class="profile-block__save-btn custom-btn_primary custom-btn_big"
                            :title="content.save"/>
            </section>
        </template>
    </BaseEditableRectangle>
</template>

<script>
/* Import components */
import BaseAvatar from "../../ui.kit/BaseAvatar";
import BaseButton from "../../ui.kit/BaseButton.vue";
import BaseEditableRectangle from "../../ui.kit/BaseEditableRectangle";
import BaseInput from "../../ui.kit/BaseInput";

export default {
    name      : 'BlockPersonal',
    components: {
        BaseAvatar,
        BaseButton,
        BaseEditableRectangle,
        BaseInput
    },
    data      : () => ({
        form   : {
            items: {
                name    : {
                    name : 'profile-name',
                    label: 'Имя',
                    value: 'Федор'
                },
                lastName: {
                    name : 'profile-lastname',
                    label: 'Фамилия',
                    value: 'Кузнецов'
                },
                position: {
                    name    : 'profile-position',
                    label   : 'Роль',
                    value   : 'Организатор',
                    disabled: true
                }
            }
        },
        content: {
            title: 'Личные данные',
            save : 'Сохранить'
        }
    })
};
</script>

<style lang="scss">
.profile-block {
    &__avatar {
        width         : 64px;
        height        : 64px;
        margin-bottom : 24px;

        &-label {
            margin-bottom : 16px;
            font-size     : 16px;
            line-height   : 19px;
        }
    }

    &__group {
        width     : 100%;
        max-width : 250px;

        &:not(:last-of-type) {
            margin-bottom : 24px;
        }
    }

    &__save-btn {
        margin-top : 24px;
    }
}
</style>