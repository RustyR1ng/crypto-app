<template>
	<div
		id="loading"
		class="bg-black absolute z-50 flex justify-center items-center"
	>
		<img
			id="spinner"
			class="rounded-full w-10 animate-spin"
			src="/img/poly.jpg"
			alt="Loading..."
		/>
	</div>
</template>

<script>
export default {
	name: 'LoadingScreen',
};
</script>
<style>
#loading {
	height: 100vh;
	width: 100vw;
	text-align: center;
}
</style>
