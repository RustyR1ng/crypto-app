const BASE = import.meta.env.VITE_API_URL;
const ALGS = BASE + 'algs';
const ENCRYPT = BASE + 'encrypt';
const DECRYPT = BASE + 'decrypt';
const DEFAULT = {
	BASE: BASE + 'default/',
	get ALPH() {
		return this.BASE + 'alph';
	},
};

export default {
	BASE: BASE,
	ALGS: ALGS,
	ENCRYPT: ENCRYPT,
	DECRYPT: DECRYPT,
	DEFAULT: DEFAULT,
};
