<script>
import axios from 'axios';

import Label from '@/components/forms/FormLabel.vue';
import Input from '@/components/forms/FormInput.vue';
import Button from '@/components/ButtonPrimary.vue';
import Select from '@/components/forms/FormSelect.vue';
import Textarea from '@/components/forms/FormTextarea.vue';
import api from '@/modules/api';
import toast from '@/modules/toast';

export default {
	components: {
		Label,
		Input,
		Button,
		Select,
		Textarea,
	},

	setup() {},
	data() {
		return {
			form: {
				data: {
					alg: '',
				},
				endpoint: '',
			},
			algs: [],
			api: api,
			result: '',
		};
	},
	computed: {
		alg: function () {
			return this.checkAlgSelected();
		},
		key: function () {
			return this.checkAlg('key');
		},
		params: function () {
			return this.checkAlg('params');
		},
		alph: function () {
			return this.checkAlg('alph');
		},
		mode: function () {
			return this.form.endpoint == api.ENCRYPT
				? 'encrypt_params'
				: 'decrypt_params';
		},
	},
	watch: {},
	created() {
		this.getAlgs();
		this.getDefaultAlph();
	},
	methods: {
		checkAlgSelected() {
			return this.form.data.alg ? true : false;
		},
		checkAlg(param) {
			const alg = this.form.data.alg;
			if (alg) return this.algs[alg][param];
			return false;
		},
		getAlgs() {
			axios
				.get(api.ALGS)
				.then((res) => {
					this.algs = res.data;
				})
				.catch((error) => {
					toast.show(
						this,
						'Попробуйте перезагрузить страницу',
						toast.MODE.ERROR,
					);
					console.error(console.tag, error);
				});
		},
		onSubmit() {
			console.log(this.form.data);
			let formData = Object.entries(this.form.data).reduce(
				(formData, [k, v]) => (formData.append(k, v), formData),
				new FormData(),
			);
			axios
				.post(this.form.endpoint, formData)
				.then((res) => {
					const response = res.data;

					switch (response.status) {
						case 'ok': {
							this.result = response.text;
							toast.show(this, 'Успешно', toast.MODE.GOOD);
							console.log(console.tag, response.text);
							break;
						}
						case 'error': {
							toast.show(this, response.text, toast.MODE.ERROR);
							console.error(console.tag, response.text);
							break;
						}
					}
				})
				.catch((error) => {
					toast.show(this, 'Ошибка', toast.MODE.ERROR);
					console.error(console.tag, error);
				});
		},
		getDefaultAlph() {
			axios
				.get(api.DEFAULT.ALPH)
				.then((res) => (this.form.data.alph = res.data))
				.catch((error) => {
					toast.show(
						this,
						'Не удалось загрузить дефолтный алфавит',
						toast.MODE.ERROR,
					);
					console.error(console.tag, error);
				});
		},
	},
};
</script>

<template>
	<main class="flex flex-col justify-center items-center py-5">
		<img
			src="/img/poly.jpg"
			alt=""
			class="rounded-full w-10 fixed right-5 bottom-5 animate-spin"
		/>

		<form
			id="crypt"
			method="POST"
			class="flex flex-col items-stretch w-full sm:w-8/12"
			@submit.prevent="onSubmit"
		>
			<div class="flex">
				<div class="mx-2 my-2 flex-grow">
					<Label for="alg">Алгоритм</Label>
					<Select id="alg" v-model="form.data.alg" name="alg" required>
						<option v-for="(_, name) in algs" :key="name" :value="name">
							{{ name }}
						</option>
					</Select>
				</div>

				<div class="mx-2 my-2 flex-grow">
					<Label for="mode">Режим</Label>
					<Select id="mode" v-model="form.endpoint" name="mode" required>
						<option key="encrypt" :value="api.ENCRYPT" selected>
							Шифровать
						</option>
						<option key="decrypt" :value="api.DECRYPT">Расшифровать</option>
					</Select>
				</div>
			</div>
			<template v-if="alg">
				<template v-for="param in algs[form.data.alg][mode]" :key="param.id">
					<div class="mx-2 my-2">
						<Label :for="param">{{ param }}</Label>
						<Input
							:id="param"
							v-model="form.data[param]"
							:name="param"
							type="text"
						></Input>
					</div>
				</template>
			</template>
			<div class="my-2 mx-2">
				<Label for="text">Текст</Label>
				<Textarea
					id="text"
					v-model.trim="form.data.text"
					rows="10"
					required
				></Textarea>
			</div>

			<div class="flex justify-center flex-wrap flex-grow">
				<Button id="send" name="send" type="submit" class="mx-2 my-2">
					Отправить
				</Button>
			</div>
		</form>

		<div class="flex w-2/12 items-center justify-between my-10">
			<span class="border-b flex-1 border-gray-700 rounded-full"></span>
		</div>

		<div id="out" class="w-full sm:w-8/12 px-2">
			<Label for="result">Результат</Label>
			<Textarea id="result" v-model="result" rows="10" readonly></Textarea>
		</div>
	</main>
</template>
