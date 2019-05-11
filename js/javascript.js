
$(document).ready(function(){
	var dem = 0;
	$(".navbar > button").click(function(){
		if($(".collapse").css("display") == "none"){
			$(".search").addClass("absolute-search");
			dem = 1;
		}else{
			$(".search").removeClass("absolute-search");
		}
		return dem;
	});
	$(window).click(function() {
		$(".search input").css({"width":"0px","padding":"0px"});
	});
	$(".search button,.search input").click(function(event){
		if(dem == 1){
			$(".navbar-brand").css("marginLeft","70px");
		};
		 event.stopPropagation($(".search input").css({"width":"90%","padding":"5px"}));
	});
});