<template>
	<div class="secondary-nav">
		<div id="nav">
			<span>Components</span>
			<span class="active">Guide</span>
			<span class="nav-logo"><img src="../static/logo.png" height="50px"></span>
			<span>About</span>
			<span>Contact</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Navigation Bar',
	  	introduction: 'A custom navigation bar for the website',
		  description: `
		  The navigation bar is made up with pure CSS.
		  `,
		  token: '<div class="secondary-nav">\n\t<div id="nav">\`...\`\n\t</div>\n</div>',
		  props: {
		    span: {
		      type: String,
		      default: '',
		      note: "elements of nav bar are '<span>' elements"
		    },
		    active: {
		      type: String,
		      default: '',
		      note: "'active' class is assigned to the element of the page currently opened"
		    },
		  }
	}
</script>

<style scoped>
	#nav {
		font-family: 'Roboto', sans-serif;
		margin-top: 10px;
		line-height: 50px;
		height: 50px;
		width: 80%;
		display: flex;
		justify-content: space-around;
	}
	#nav span {
		font-size: 17px;
		cursor: pointer;
		transition: 0.2s all ease-in-out;
	}
	#nav span:hover::after {
		width: 105%;
	}
	#nav .active::after {
		width: 105%;
	}
	#nav span::after {
	    content: '';
	    display: block;
	    width: 0;
	    height: 2px;
	    background: #007E3A;
	    transition: width .3s;
	}
	#nav .nav-logo::after {
		display: none;
	}
	.secondary-nav {
		width: 100%;
		height: 70px;
		display: flex;
		justify-content: space-around;
		background: #fff;
		box-shadow: 0 3px 6px rgba(0,0,0,0.16);
	}
</style>