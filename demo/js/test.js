// JavaScript Document
$(document).ready(function(){
	$("#navBar .dropdown-menu a").click(function(){
			var href= $( this ).attr("href");
			$("#tab-list a[href='"+href+"']").tab("show");
		});
});