import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/* Import Layouts */
import LayoutDefault from './components/layouts/default.vue';
import LayoutGame from './components/layouts/game.vue';
import LayoutAuthorize from './components/layouts/authorize.vue';

/* Import components */
import PageGame from './components/pages/Game/Index.vue';
import PageMain from './components/pages/Main/Index.vue';
import PageLogin from './components/pages/Login/Index.vue';
import PageSessions from './components/pages/Sessions/Index.vue';


const router = new VueRouter({
	mode  : 'history',
	base  : '/',
	routes: [
		{
			path     : '/',
			component: LayoutDefault,
			children : [
				{
					path     : '',
					name     : 'PageMain',
					component: PageMain,
					meta     : {title: 'Профиль'}
				},
				{
					path     : 'sessions/',
					name     : 'PageSessions',
					component: PageSessions,
					meta     : {title: 'Сессии'}

				}
			]
		},
		{
			path     : '/game',
			component: LayoutGame,
			children : [
				{
					path     : '',
					name     : 'PageGame',
					component: PageGame,
					meta     : {title: 'Игра'}
				}
			]
		},
		{
			path     : '/login',
			component: LayoutAuthorize,
			children : [
				{
					path     : '',
					name     : 'PageLogin',
					component: PageLogin,
					meta     : {title: 'Форма входа'}
				}
			]
		}
	]
});

export default router;