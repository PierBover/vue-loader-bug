<template>
	<div>
		<h1>App</h1>
	</div>
</template>

<script>
async function someAsyncFunction () {
	throw 'There was an error!';
}

export default {
	data () {
		return {};
	},
	mounted () {
		this.catchWithTryCatch();
		this.catchWithPromise();
	},
	methods: {
		// using a promise catches the error
		catchWithPromise () {
			someAsyncFunction().catch((error) => {
				console.log('promise');
				console.log(error);
			});
		},
		// using async with try/catch does not catch the error
		catchWithTryCatch () {
			try {
				someAsyncFunction();
			} catch (error) {
				console.log('try catch');
				console.log(error);
			}
		}
	}
};

</script>
