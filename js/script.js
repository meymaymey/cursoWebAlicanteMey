//para que la imagen se ponga como la altura
$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "50px","height":"50px"});

				$("header").css({"background-color": "#3C3C3C"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "250px","height":"250px"});

				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


    });
   
    if($("body").height < $ (window).height()){
        $("footer").css({"postition": "absolute","botton":"0px"});
	}

	//nombre k pasa
	
	var typed = $(".typed");

	$(function() {
		typed.typed({
		strings: ["{ mey_may_mey }", "{ Diseñadora de páginas Web }", " { Fotógrafa } ", " { Ingeniera } "],
		typeSpeed: 100,
		loop: true,
		});
	});

	//Responsive
	
	$('.responsive').on('click', function(e) {
		$('.nav-menu').slideToggle();
	  });

});

