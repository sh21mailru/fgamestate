<template>
    <div>
        <a-table class="custom-table-wrapper"
                 :columns="columns"
                 :data-source="arActivities"
                 :scroll="{ x: config.table.scrollWidth }"
                 :loading="config.table.isLoading"
                 :pagination="false"
                 :expanded-row-keys.sync="config.table.expandedRowKeys">

            <template slot="status" slot-scope="status">
                <!--                <router-link :to="{ name: 'PageActivityDetail', params: { id: item.id } }">{{ name }}</router-link>-->
                <a-tag v-if="status.title" :class="'custom-tag custom-tag_' + status.type">{{ status.title }}</a-tag>
            </template>

            <template slot="actions" slot-scope="actions, item">
                <a-dropdown :trigger="['click']">
                    <span class="custom-table-wrapper__actions ant-dropdown-link" @click="e => e.preventDefault()">
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z"
                                    fill="#78909C"/>
                        </svg>
                    </span>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <router-link :to="{ name: 'PageActivityDetail', params: { id: item.id } }">Подробнее
                            </router-link>
                        </a-menu-item>
                        <a-menu-item @click="toggleDeleteModal(item.id)">Удалить</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </template>

        </a-table>

        <!--        <ModalDeleteItem :title="modals.isDelete.title"
                                 :is-visible="modals.isDelete.value"
                                 @doCancel="toggleDeleteModal"
                                 @doApply="doActivityDelete"/>-->
    </div>

</template>
<script>
/* Import components */
//import ModalDeleteItem from './ModalDeleteItem.vue';
import {Dropdown, Menu, Table, Tag} from 'ant-design-vue';

/* Import Others */
//import {mapState, mapActions} from "vuex";
//import {EVENTS} from "../../../api";

export default {
    name      : 'PageActivities',
    components: {
        //ModalDeleteItem,
        'a-dropdown' : Dropdown,
        'a-menu'     : Menu,
        'a-menu-item': Menu.Item,
        'a-table'    : Table,
        'a-tag'      : Tag
    },
    created() {
        /*if(this.riskId) {
            this.getEventsPage({is_risk: 1});
        } else {
            this.getEventsPage();
        }*/

        //this.getSocialResults();
    },
    computed: {
        /*...mapState({
            events  : state => state.events.events,
            statuses: state => state.events.statuses
        }),*/
        arActivities() {
            return [
                {
                    'id'          : '1',
                    'key'         : '1',
                    'participants': 'Сергей, Алексей, Виктор, Илья, Константин',
                    'watchers'    : '12',
                    'description' : 'Описание игровой сессии',
                    'createdAt'   : '1/28/17',
                    'status'      : this.checkStatus('Перейти к сессии') ?? ''
                }
            ];
        }
    },
    data() {
        return {
            columns      : [
                {
                    title    : 'Участники',
                    dataIndex: 'participants',
                    key      : 'participants',
                    width    : '20%'
                },
                {
                    title    : 'Наблюдатели',
                    dataIndex: 'watchers',
                    key      : 'watchers'
                },
                {
                    title    : 'Описание',
                    dataIndex: 'description',
                    key      : 'description',
                    width    : '35%'
                },
                {
                    title    : 'Дата',
                    dataIndex: 'createdAt',
                    key      : 'createdAt'
                },
                {
                    title      : '',
                    dataIndex  : 'status',
                    key        : 'status',
                    scopedSlots: {customRender: 'status'}
                },
                {
                    dataIndex  : 'actions',
                    width      : '54px',
                    fixed      : 'right',
                    scopedSlots: {customRender: 'actions'}
                }
            ],
            socialResults: [],
            config       : {
                table     : {
                    scrollWidth    : 1300,
                    expandedRowKeys: [],
                    isLoading      : false
                },
                pagination: {
                    current_page: 1,
                    per_page    : 10
                }
            },
            modals       : {
                isDelete: {
                    targetId: null,
                    title   : 'Удаление мероприятие',
                    value   : false
                }
            }
        };
    },
    methods: {
        /*...mapActions([
            'deleteEvent',
            'getEventsPage',
            'getStatuses'
        ]),*/
        checkStatus(strStatus) {
            return this.getObTag(strStatus, 'success');
        },
        getObTag(strTitle, strType) {
            return {
                title: strTitle,
                type : strType
            };
        },
        async getSocialResults() {
            //this.socialResults = await EVENTS.listAllSocialResults();
        },
        formatDate(strDate) {
            if (strDate) {
                const arDate = strDate.split(' ');

                return new Date(arDate[0]).toLocaleString('ru', {
                    year : '2-digit',
                    month: 'numeric',
                    day  : 'numeric'
                });
            }
        },
        async doActivityDelete() {
            this.config.table.isLoading = true;
            await this.deleteEvent(this.modals.isDelete.targetId);
            this.config.table.isLoading = false;

            this.toggleDeleteModal();
        },
        /* Modals */
        toggleDeleteModal(activityId = 0) {
            this.modals.isDelete.targetId = activityId;
            this.modals.isDelete.value = !this.modals.isDelete.value;
        }
    }
};
</script>


<style lang="scss">
// TODO: Add assets scss with webpack
.text-color {
    &_warning {
        color : #FF5252;
    }
}

.custom-table-wrapper {
    &__actions {
        display         : flex;
        align-items     : center;
        justify-content : center;
        width           : 24px;
        height          : 24px;
        cursor          : pointer;
    }

    .ant-checkbox {
        top : unset;

        &-wrapper {
            display         : flex;
            align-items     : center;
            justify-content : center;
            width           : 24px;
            height          : 24px;
        }

        &-inner {
            display        : inline-block;
            vertical-align : middle;
            width          : 18px;
            height         : 18px;
            border         : 2px solid #78909C;
        }

        &-checked {
            .ant-checkbox-inner {
                background-color : #78909C;
                border-color     : #78909C;
            }
        }

        &-indeterminate {
            .ant-checkbox-inner::after {
                background-color : #78909C;
            }
        }
    }

    .ant-table {
        &-title {
            top             : unset;
            display         : flex;
            align-items     : center;
            justify-content : space-between;
            padding         : 24px 16px;
            border-radius   : unset;
            background      : #fff;
        }

        &-thead {
            th {
                font-size      : 14px;
                font-weight    : normal;
                line-height    : normal;
                letter-spacing : 0.35px;
                white-space    : nowrap;
                color          : #78909C;
                background     : #ECEFF1;
                border-radius  : unset;
            }
        }

        &-tbody {
            background : #fff;
        }

        &-row {
            &-level-1, &-level-2 {
                td {
                    background : #EEEEEE;
                }
            }
        }
    }

    table {
        table-layout : unset;

        td {
            overflow-wrap : unset;
        }
    }
}

.custom-tag {
    &.ant-tag {
        margin        : unset;
        padding       : 4px 8px;
        font-size     : 12px;
        font-weight   : 500;
        border        : unset;
        background    : #F5F5F5;
        border-radius : 4px;
    }

    &_warn {
        color      : #FF5252 !important;
        background : #FFEBEE !important;
    }

    &_success {
        color      : #00897B !important;
        background : #B2DFDB !important;
    }

    &_info {
        color      : #2196F3 !important;
        background : #E3F2FD !important;
    }
}
</style>