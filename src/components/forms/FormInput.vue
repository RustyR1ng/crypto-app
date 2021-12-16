<script>
export default {
	props: {
		modelValue: { type: String, default: '' },
		disabled: { type: Boolean, default: false },
	},
	emits: ['update:modelValue'],
};
</script>
<template>
	<input
		class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
		:value="modelValue"
		:disabled="disabled"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>
