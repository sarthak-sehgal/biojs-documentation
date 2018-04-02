<template>
	<section>
		<h1>Documentation</h1>
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

<style scoped>
	h1 {
		margin-top: 40px;
	    margin-bottom: 40px;
	    text-align: center;
	    font-size: 45px;
	    color: #007E3A;
	}
</style>