import React, { Component } from 'react';

class authFooter extends Component {
	render(){
		return(
			<footer class="page-footer grey darken-1">
			<div class="footer-copyright grey darken-2">

			<div class="container">
			Made by <a class="grey-text text-lighten-3">Brandon, Eva, Francis, and Olivia</a>
			<a class="grey-text text-lighten-1" href="./user-about.html" style="padding-left: 10px;">Learn More</a>
			<button class="btn black right" style="margin-left: 20px;">Sign Out</button>
			</div>
			</div>
			</footer>
			);
	}
}
export default authFooter;