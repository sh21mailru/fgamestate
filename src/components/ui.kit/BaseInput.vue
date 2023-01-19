<template>
    <div class="custom-group"
         :class="type === 'password' ? 'custom-group_relative' : ''">

        <label v-if="label" :for="name"
               class="custom-label"
               :class="[{'custom-label_required': required}]">{{ label }}</label>

        <masked-input v-model="val"
                      :id="label ? name : ''"
                      class="custom-input"
                      :class="[
                            {'custom-input_error' : errorStatus },
                          ]"
                      :name="name"
                      :ref="name"
                      :type="type ? type : 'text'"
                      :placeholder="placeholder ? placeholder : ''"
                      :placeholderChar="placeholderChar"
                      :pipe="type === 'dateMask' ? pipe : undefined"
                      :mask="mask ? mask : false"
                      :guide="guide"
                      :disabled="disabled ? disabled : false"
                      v-on:input="onInput"
                      @blur="onBlur"/>

        <span v-if="type === 'password'" class="show-password" @click="toggleVisibilityChars"/>
    </div>
</template>

<script>
/* Import Components */
import MaskedInput from 'vue-text-mask';

/**
 * Import Addons
 *
 * See the options of text-mask/addons/createNumberMask
 * https://github.com/text-mask/text-mask/tree/master/addons/#readme
 */
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

export default {
    name      : 'BaseInput',
    props     : {
        value          : [String, Number],
        mask           : [Array, Function],
        label          : String,
        name           : {type: String, required: true},
        type           : {type: String},
        placeholder    : String,
        placeholderChar: String,
        guide          : String,
        validExp       : RegExp,
        disabled       : Boolean,
        required       : Boolean,
        errorStatus    : String
    },
    components: {
        'masked-input': MaskedInput
    },
    watch     : {
        value() {
            this.val = this.value;
        }
    },
    created() {
        if (this.value) {
            this.val = this.value;
        }
    },
    data   : () => ({
        val : '',
        pipe: createAutoCorrectedDatePipe('dd/mm/yyyy')
    }),
    methods: {
        getData() {
            return this.val;
        },
        clearVal() {
            this.val = '';
        },
        validateVal() {
            return this.validExp.test(this.val);
        },
        toggleVisibilityChars() {
            const passwordField = this.$refs[this.name].$el;

            passwordField.type === 'text' ? passwordField.type = 'password' : passwordField.type = 'text';
        },
        onInput(value) {
            this.$emit('input', value);

            this.$emit('setValue', {
                name : this.name,
                value: this.validExp && !this.validateVal() ? '' : this.val
            });
        },
        onBlur() {
            if (this.validExp) {
                if (!this.validateVal()) this.clearVal();
                this.onInput();
            }
        }
    }
};
</script>

<style lang="scss">
.custom {
    &-group {
        &_relative {
            position : relative;
        }
    }

    &-label {
        display        : flex;
        align-items    : center;
        margin-bottom  : 8px;
        font-size      : 14px;
        font-weight    : 500;
        letter-spacing : 0.1px;
        line-height    : 16px;
        color          : #37474F;

        &_required {
            &:after {
                $itemSize     : 4px;

                content       : ' ';
                flex-shrink   : 0;
                display       : block;
                width         : $itemSize;
                height        : $itemSize;
                margin-left   : 5px;
                background    : #EF5350;
                border-radius : 50%;
            }
        }

    }

    &-input {
        width         : 100%;
        height        : 40px;
        padding       : 10px 8px;
        font-size     : 14px;
        border        : solid 1px #eee;
        color         : #546E7A;
        border-radius : 4px;
        background    : #fff;
        box-shadow    : unset;
        outline       : none;
        transition    : 0.3s;
        overflow      : hidden;
        text-overflow : ellipsis;

        &:hover, &:focus {
            border     : solid 1px #78909C;
            box-shadow : unset;
        }

        &:focus {
            border-color : #78909C;
        }

        &_error {
            border-color : #e3342f;
        }

        &[disabled] {
            border           : solid 1px #eee;
            color            : #9E9E9E;
            background-color : #F5F5F5;
            cursor           : not-allowed;
        }

        &::placeholder {
            font-size   : inherit;
            font-weight : inherit;
            line-height : inherit;
            color       : inherit;
        }

        &[name='authorize-password'] {
            padding-right : 38px;
        }
    }
}

.show-password {
    position   : absolute;
    right      : 10px;
    bottom     : 0;
    display    : block;
    width      : 20px;
    height     : 40px;
    background : url('../../assets/svg/ico-hidden-password.svg') right center no-repeat;
    cursor     : pointer;
}
</style>