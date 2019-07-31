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
'									<form class="form-inline">'+
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

	var common_header = '<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top white-nav">'+
'		    	<div class="container">'+
'			        <a class="navbar-brand" href="#">'+
'			        	<img src="images/home/Logo.png" alt="logo" class="img-fluid">'+
'			        	<!-- <span>Experience</span>'+
'			        	<span>the feeling</span> -->'+
'			        </a>'+
'			        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">'+
'			            <span class="navbar-toggler-icon"></span>'+
'			        </button>'+
'			        <div id="navbarNavDropdown" class="navbar-collapse collapse">'+
'			            <ul class="navbar-nav ml-auto navbar-list">'+
'			                <li class="nav-item active">'+
'			                    <a class="nav-link" href="#">Places to Stay <span class="sr-only">(current)</span></a>'+
'			                </li>'+
'			                <li class="nav-item">'+
'			                    <a class="nav-link" href="#">Partners</a>'+
'			                </li>'+
'			                <li class="nav-item">'+
'			                    <a class="nav-link" href="#">Contact</a>'+
'			                </li>'+
'							'+
'							<ul class="social-list">'+
'				                <li class="nav-item social-items"><a href=""><img src="images/home/Social-media-linkden.png" alt="linked-in logo" class="img-fluid"></a></li>'+
'								<li class="nav-item social-items"><a href=""><img src="images/home/Social-media--Facebook.png" alt="facebook icon" class="img-fluid"></a></li>'+
'								<li class="nav-item social-items"><a href=""><img src="images/home/Social-media-instagram.png" alt="instagram icon" class="img-fluid"></a></li>'+
'								<li class="social-items nav-item"><a href=""><img src="images/home/Call_Now.png" alt="call now icon" class="img-fluid call-now-icon"></a></li>'+
'							</ul>'+
'							'+
''+
'			            </ul>'+
'			        </div>'+
'		        </div>'+
'		    </nav>';
			$('.header').append(common_header);


	// mobile menu
	$('.hamburger').on('click', function() {
		$(".navigation-menu").show();
		setTimeout(function(){ $(".navigation-menu").animate({right: "0"},1500) }, 100);
	});
	$('.inner-ham').on('click', function() {
		
		$(".navigation-menu").animate({right: "-9999px"},1500);
		setTimeout(function(){$(".navigation-menu").hide();  }, 1600);

	})

})
				
