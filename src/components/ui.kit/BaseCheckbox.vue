<template>
    <div class="custom-group custom-group_flex">
        <a-checkbox v-model="model"
                    class="custom-checkbox"
                    :name="name"
                    :disabled="disabled ? disabled : false">{{ label }}
        </a-checkbox>
    </div>
</template>
<script>
/* Import Components */
import {Checkbox} from 'ant-design-vue';

export default {
    name      : 'BaseCheckbox',
    props     : {
        value   : Boolean,
        label   : {type: String, required: true},
        name    : {type: String, required: true},
        disabled: Boolean
    },
    components: {
        'a-checkbox': Checkbox
    },
    watch     : {
        value() {
            this.val = this.value;
        }
    },
    computed  : {
        model: {
            get() {
                return this.val;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    created() {
        this.val = this.value;
    },
    data: () => ({
        val: false
    })
};
</script>

<style lang="scss">
.custom-checkbox {
    display     : flex !important;
    align-items : center;

    .ant-checkbox {
        top: unset;

        & + span {
            padding        : 0 0 0 16px;
            font-size      : 14px;
            font-weight    : 400;
            line-height    : 16px;
            letter-spacing : 0.1px;
            color          : #455A64;
        }

        .ant-checkbox-inner {
            width: 18px;
            height: 18px;
        }

        &-checked {
            .ant-checkbox-inner {
                border-color     : #FFE082;
                background-color : #FFE082;

                &:after, &:before {
                    border-color : #263238;
                }
            }
        }

        &-disabled {
            .ant-checkbox-inner {
                border-color     : #CFD8DC;
                background-color : #CFD8DC;

                &:after, &:before {
                    border-color : #fff;
                }
            }
        }
    }
}
</style>