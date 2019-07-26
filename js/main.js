$(document).ready(function() {
	var common_footer = '<div class="container-fluid">'+
'					<div class="contact-wrapper">'+
'						<div class="row">'+
'							<div class="col-sm-3">'+
'								<h3>Company</h3>'+
'								<ul class="foo-list">'+
'									<li>Our Story</li>'+
'									<li>Press</li>'+
'									<li>Careers</li>'+
'								</ul>'+
'							</div>'+
'							<div class="col-sm-3">'+
'								<h3>Connect</h3>'+
'								<ul class="foo-list">'+
'									<li>FAQ</li>'+
'									<li>Contacts</li>'+
'								</ul>'+
'							</div>'+
'							<div class="col-sm-6">'+
'								<div class="email-div">'+
'									<h2>Get local travel tips</h2>'+
'									<p>Inspiration, Discounts and Recommendations</p>'+
'									<form class="form-inline email-form">'+
'							    		<div class="form-group mx-sm-4">'+
'											<input type="text" class="form-control email-input" name="email" placeholder="E-mail">'+
'							    		</div>'+
'									    '+
'								  		<button type="submit" class="btn btn-primary" id="email-submit">Submit</button>'+
'									</form>'+
'								</div>'+
'							</div>'+
'						</div>'+
'					</div>'+
'				</div>';
	
				$('.footer-wrapper').append(common_footer);
})
				