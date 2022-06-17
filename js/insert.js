// JavaScript Document

 jQuery.fn.insert = function(className,delay,duration){
	 $(this).addClass(className);
	 
	 $(this).css({'-webkit-animation-delay':delay+"s"});
	 $(this).css({'-moz-animation-delay':delay+"s"});
	 $(this).css({'-o-animation-delay':delay+"s"});
	 $(this).css({'-ms-animation-delay':delay+"s"});
	 
	 $(this).css({'-webkit-animation-duration':duration+"s"});
	 $(this).css({'-moz-animation-duration':duration+"s"});
	 $(this).css({'-o-animation-duration':duration+"s"});
	 $(this).css({'-ms-animation-duration':duration+"s"});
	 
	 $(this).css({'-webkit-animation-fill-mode':'both'});
	 $(this).css({'-moz-animation-fill-mode':'both'});
	 $(this).css({'-o-animation-fill-mode':'both'});
	 $(this).css({'-ms-animation-fill-mode':'both'});
	}