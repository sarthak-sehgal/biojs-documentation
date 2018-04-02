<template>
	<section>
		<prop-doc :component="navBarDoc"></prop-doc>
	</section>
</template>

<script>
	import propDoc from 'propdoc';
	import navBarDoc from './nav.vue';

	export default {
		components: {
			propDoc
		},

		data: 
			function() {
				return {
					navBarDoc
				}
			}
	}
</script>

<style scoped src="../../node_modules/propdoc/style.scss">
</style>