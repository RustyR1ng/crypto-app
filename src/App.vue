<script>
import Loading from './components/LoadingScreen.vue';
export default {
	components: {
		Loading,
	},
	data() {
		return {
			isLoading: true,
		};
	},
	mounted() {
		document.documentElement.classList.add('dark');
		document.body.classList.add('dark:bg-gray-900');

		setTimeout(() => {
			this.isLoading = false;
		}, 1500);
	},
};
</script>

<template>
	<perfect-scrollbar ref="scroll" class="caret-blue-600">
		<transition name="fade">
			<Loading v-if="isLoading" />
		</transition>
		<router-view />
	</perfect-scrollbar>
</template>

<style lang="scss">
body {
	overflow: hidden;
}
#app {
	cursor: url('/default.cur') 10 10, default;
}

.ps {
	height: 100vh;
}
.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
	background-color: transparent !important;
}
.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
	background-color: rgb(37, 99, 235) !important;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.toast {
	border-radius: 10px !important;
}
</style>
