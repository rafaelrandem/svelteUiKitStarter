import App from './App.svelte';

const app = new App({
	target: document.body.querySelector('rl-app'),
	props: {
		name: 'RafaeL',
	}
});

export default app;
