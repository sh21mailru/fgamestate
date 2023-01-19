<template>
    <section class="my-session-page">
        <BaseEditableRectangle :title="content.sessionsTitle">
            <template slot="rectangle-content">
                <section class="my-session-block">

                    <div class="my-session-block__group form-group form-group_flex">
                        <BaseButton class="my-session-block__create-btn custom-btn_primary custom-btn_medium"
                                    :title="content.create"/>

                        <BaseCheckbox v-model="form.items.isPublicSession.value"
                                      class="my-session-block__checkbox"
                                      :label="form.items.isPublicSession.label"
                                      :name="form.items.isPublicSession.name"/>
                    </div>

                    <div class="my-session-block__group">
                        <BaseInput v-model="form.items.sessionId.value"
                                   :label="form.items.sessionId.label"
                                   :name="form.items.sessionId.name"/>
                    </div>

                    <div class="my-session-block__group my-session-block__group_big">
                        <BaseInput v-model="form.items.sessionLink.value"
                                   :label="form.items.sessionLink.label"
                                   :name="form.items.sessionLink.name"/>
                    </div>
                </section>
            </template>
        </BaseEditableRectangle>

        <BaseEditableRectangle :title="content.currentSessionsTitle">
            <template slot="rectangle-content">
                <section class="my-current-sessions">
                    <TestComp/>
                </section>
            </template>
        </BaseEditableRectangle>
    </section>
</template>

<script>
/* Import components */
import BaseButton from "../../../ui.kit/BaseButton.vue";
import BaseCheckbox from "../../../ui.kit/BaseCheckbox.vue";
import BaseEditableRectangle from "../../../ui.kit/BaseEditableRectangle.vue";
import BaseInput from "../../../ui.kit/BaseInput.vue";

import TestComp from "../../../ui.kit/TestComp.vue"

export default {
    name      : 'MySessions',
    components: {
        BaseButton,
        BaseCheckbox,
        BaseEditableRectangle,
        BaseInput,
        TestComp
    },
    data      : () => ({
        form   : {
            items: {
                isPublicSession: {
                    name : 'my-session-is-public',
                    label: 'Публичная',
                    value: false
                },
                sessionId      : {
                    name : 'security-email',
                    label: 'Id личной сессии',
                    value: '805 278 0473'
                },
                sessionLink    : {
                    name : 'security-password',
                    label: 'Ссылка сессии',
                    value: 'ac.gov.8051780473?pwd=N3hxSWxsdWNYWmRaY25QR1dqRTRBdz09'
                }
            }
        },
        content: {
            sessionsTitle       : 'Мои сессии',
            currentSessionsTitle: 'Запущенная сессия',
            create              : 'Создать сессию'
        }
    })
};
</script>

<style lang="scss">
.my-session-block {
    &__group {
        width     : 100%;
        max-width : 250px;

        &_big {
            max-width : 600px;
        }

        &:not(:last-of-type) {
            margin-bottom : 24px;
        }
    }

    &__create-btn {
        position            : relative;
        flex-shrink         : 0;
        margin-right        : 16px;
        padding-left        : 36px;
        background-image    : url('../../../../assets/svg/ico-add.svg');
        background-position : left 12px center;
        background-repeat   : no-repeat;
    }

    &__checkbox {
        .ant-checkbox + span {
            color : #fff;
        }
    }
}
</style>