<script>
export default {
	props: {
		modelValue: { type: String, default: '' },
	},
	emits: ['update:modelValue'],
};
</script>

<template>
	<textarea
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	></textarea>
</template>
