<script>
export default {
	props: {
		modelValue: { type: String, default: '' },
	},
	emits: ['update:modelValue'],
};
</script>

<template>
	<select
		class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light overflow-ellipsis"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	>
		<option value="" selected disabled hidden>Не выбрано</option>
		<slot></slot>
	</select>
</template>
