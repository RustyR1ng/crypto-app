const MODE = {
	ERROR: -2,
	WARN: -1,
	INFO: 0,
	GOOD: 1,
};
function toast(app, text, mode) {
	switch (mode) {
		case MODE.ERROR: {
			app.$wkToast(text, {
				className: 'toast, toast-error, wk-alert',
			});
			break;
		}
		case MODE.WARN: {
			app.$wkToast(text, {
				className: 'toast, toast-warning, wk-warn',
			});
			break;
		}
		case MODE.INFO: {
			app.$wkToast(text, {
				className: 'toast, toast-info, wk-info',
			});
			break;
		}
		case MODE.GOOD: {
			app.$wkToast(text);
			break;
		}
		default:
			console.error('Invalid Toast mode.');
	}
}

export default {
	show: toast,
	MODE: MODE,
};
