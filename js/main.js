$(document).ready(function() {
	var common_footer = '<div class="container text-center">'+
'						'+
'					<img src="images/home/Untitled-1-08.png" alt="Untitled-1-08.png">'+
'				</div>'+
'				<div class="footer-section">'+
'					<div class="container-fluid">'+
'						<div class="contact-wrapper">'+
'							<div class="row outer-footer-row">'+
'								<div class="col-md-7">'+
'									<div class="footer-wrap">'+
'										<div class="foo-details">'+
'											<h3>Company</h3>'+
'											<ul class="foo-list">'+
'												<li>Our Story</li>'+
'												<li>Press</li>'+
'												<li>Careers</li>'+
'											</ul>'+
'										</div>'+
'										<div class="foo-details">'+
'											<h3>Connect</h3>'+
'											<ul class="foo-list">'+
'												<li>FAQ</li>'+
'												<li>Contacts</li>'+
'											</ul>'+
'										</div>'+
'										<div class="foo-details">'+
'											<h3>Registered Office</h3>'+
'											<p>On A Stay,</p>'+
'											<p>XXXXXXX</p>'+
'											<p>XXXXXXX</p>'+
'											<p>XXXX,Goa</p>'+
'										</div>'+
'									</div>'+
'									'+
'								</div>'+
'								<div class="col-md-5">'+
'									<div class="email-div">'+
'										<h2>Make an online enquiry</h2>'+
'										<form class="">'+
'								    		<div class="form-group">'+
'												<input type="text" class="form-control number-input" name="name" placeholder="Name">'+
'								    		</div>'+
'								    		<div class="form-group">'+
'												<input type="text" class="form-control number-input" name="phone" placeholder="Phone">'+
'								    		</div>'+
'								    		<div class="form-group">'+
'												<textarea class="form-control" placeholder="Your Enquiry" name="query">'+'</textarea>'+ '</div>'+
'								    		<div class="form-group">'+
'												<input type="text" class="form-control" name="email" placeholder="Email">'+
'								    		</div>'+
'								    		'+
'										    '+
'									  		<button type="submit" class="btn btn-primary pull-right" id="email-submit">Submit</button>'+
'										</form>'+
'									</div>'+
'								</div>'+
'							</div>'+
'						</div>'+
'					</div>'+
'				</div>';
	

	
				$('.footer-wrapper').append(common_footer);

	var common_header = '<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top white-nav">		    	'+
'	<div class="container">			        '+
'		<a class="navbar-brand" href="index.html">			        	'+
'			<img src="images/home/Logo.png" alt="logo" class="img-fluid">			        	'+
'						  </a>			        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">			            <span class="navbar-toggler-icon"></span>			        </button>			        <div id="navbarNavDropdown" class="navbar-collapse collapse">			            <ul class="navbar-nav ml-auto navbar-list">			                <li class="nav-item">			                    <a class="nav-link" href="places_to_stay.html">Book a stay <span class="sr-only">(current)</span></a>			                </li>			                <li class="nav-item">			                    <a class="nav-link" href="partner_with_us.html">Be a Home Partner</a>			                </li>			                <li class="nav-item">			                    <a class="nav-link" href="#">Contact</a>			                </li>														<ul class="social-list">				                <li class="nav-item social-items"><a href=""><img src="images/home/Social-media-linkden.png" alt="linked-in logo" class="img-fluid"></a></li>								<li class="nav-item social-items"><a href=""><img src="images/home/Social-media--Facebook.png" alt="facebook icon" class="img-fluid"></a></li>								<li class="nav-item social-items"><a href=""><img src="images/home/Social-media-instagram.png" alt="instagram icon" class="img-fluid"></a></li>															</ul>'+
'						  	<ul class="social-list whatapp-list">									<li class="social-items nav-item"><a href=""><img src="images/home/Call_Now.png" alt="call now icon" class="img-fluid call-now-icon"></a><br><a href=""><img src="images/home/Call_Now.png" alt="call now icon" class="img-fluid call-now-icon"></a></li>							</ul>'+
'						  										            </ul>			        </div>		        </div>		    </nav>';
	



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
				
