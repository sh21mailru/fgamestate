<template>
    <div class="custom-tabs">
        <a-tabs v-model="activeTab" :animated="false" default-active-key="1" ref="tabs">
            <a-tab-pane v-for="(item, index) in items"
                        :tab="item.title"
                        :ref="item.refKey"
                        :key="(++index)">

                <component :is="item.component"/>

            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
/* Import Components */
import BlockPersonal from '../pages/Main/BlockPersonal.vue';
import BlockSecurity from '../pages/Main/BlockSecurity.vue';
import {Affix, Tabs} from 'ant-design-vue';

export default {
    name      : 'BaseTabs',
    props     : {
        items: Array
    },
    components: {
        BlockPersonal,
        BlockSecurity,
        'a-affix'   : Affix,
        'a-tabs'    : Tabs,
        'a-tab-pane': Tabs.TabPane
    },
    data() {
        return {
            activeTab: 1
        };
    }
};
</script>

<style lang="scss">
.custom-tabs {
    .ant-tabs-bar {
        margin-bottom : 24px;
        border        : unset;
    }

    .ant-tabs-nav {
        .ant-tabs-tab {
            margin-right   : 8px;
            font-size      : 16px;
            font-weight    : 900;
            line-height    : 16px;
            letter-spacing : 0.1px;
            text-transform : uppercase;
            border-bottom  : 3px solid transparent;
            color          : #FFECB3;
            transition     : 0.3s;

            &:hover, &:active {
                color         : #FFECB3;
                background    : unset;
                border-bottom : 3px solid #FFECB3;
            }
        }

        .ant-tabs-tab-active {
            background    : unset;
            text-shadow   : unset;
            border-bottom : 3px solid #FFECB3;
        }

        .ant-tabs-ink-bar {
            display : none !important;
        }
    }
}
</style>