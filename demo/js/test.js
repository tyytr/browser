// JavaScript Document
$(document).ready(function(){
	$("#navBar .dropdown-menu a").click(function(){
		var href= $( this ).attr("href");
		$("#tab-list a[href='"+href+"']").tab("show");
	});
	// $("#navBar .nav li a").click(function() {
	// 	/* Act on the event */
	// 	var name= $( this ).attr("href");
	// 	$("div[id='"+name+"']").tab("show");
	// });
	
});
