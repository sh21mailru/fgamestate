<template>
    <section class="page-main">
        <div class="role-cards">
            <div class="role-card">
                <span class="role-card__ico role-card__ico_analytic-1"/>
                <p class="role-card__title">Аналитик-1</p>

                <div class="role-card__player-info">
                    <img class="role-card__avatar" src="@/assets/img/avatar-b.png" alt=""/>
                    <p class="role-card__name">Александр</p>
                    <p class="role-card__email">name@email.com</p>
                </div>
            </div>
            <div class="role-card">
                <span class="role-card__ico role-card__ico_analytic-2"/>
                <p class="role-card__title">Аналитик-2</p>

                <div class="role-card__player-info">
                    <img class="role-card__avatar" src="@/assets/img/avatar-b.png" alt=""/>
                    <p class="role-card__name">Александр</p>
                    <p class="role-card__email">name@email.com</p>
                </div>
            </div>
            <div class="role-card">
                <span class="role-card__ico role-card__ico_risk-manager"/>
                <p class="role-card__title">Риск менеджер</p>

                <div class="role-card__player-info">
                    <img class="role-card__avatar" src="@/assets/img/avatar-b.png" alt=""/>
                    <p class="role-card__name">Александр</p>
                    <p class="role-card__email">name@email.com</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
/* Import components */

export default {
    name      : 'PageGame',
    components: {},
    data      : () => ({})
};
</script>

<style lang="scss">
.role-cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.role-card {
    width           : 328px;
    height          : 776px;
    margin: 0 12px;
    padding         : 32px 24px;
    text-align      : center;
    border-radius   : 16px;
    background      : radial-gradient(207.77% 141.93% at 50.14% -34.78%, rgba(21, 101, 192, 0) 0%, rgba(11, 31, 62, 0.9) 49.04%, #0B1F3E 71.87%, rgba(11, 31, 62, 0) 100%);
    backdrop-filter : blur(40px);

    &__ico {
        display : block;
        width   : 80px;
        height  : 80px;
        margin  : 0 auto 32px;

        &_analytic-1 {
            background-image : url('../../../assets/svg/ico-role-analytic-1.svg');
        }

        &_analytic-2 {
            background-image : url('../../../assets/svg/ico-role-analytic-2.svg');
        }

        &_risk-manager {
            background-image : url('../../../assets/svg/ico-role-risk-manager.svg');
        }
    }

    &__title {
        min-height: 42px;
        margin-bottom  : 32px;
        font-size      : 18px;
        font-weight    : 600;
        line-height    : 21px;
        letter-spacing : 0.8px;
        color          : #fff;
    }

    &__player-info {
        height : 160px;
        margin-bottom : 32px;
    }

    &__avatar {
        width: 100px;
        height: 100px;
        margin-bottom : 16px;
        border-radius: 50%;
        border: 2px solid #FFF8E1;
    }

    &__name {
        margin         : 0 0 4px;
        font-size      : 16px;
        font-weight    : 600;
        line-height    : 22px;
        letter-spacing : 0.1px;
        color          : #fff;
    }

    &__email {
        margin         : unset;
        font-size      : 14px;
        font-weight    : 300;
        line-height    : 19px;
        letter-spacing : 0.1px;
        color          : #fff;
    }
}
</style>