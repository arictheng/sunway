/* 
	jQuery Mobile Boilerplate
	mobileinit.js
	http://jquerymobile.com/demos/1.0.1/docs/api/globalconfig.html

	This file is only required if you need to apply overrides to the
	page before anything else has run. It MUST be loaded before
	the jQuery Mobile javascript file.
*/

$(document).on("mobileinit", function(){
$.mobile.buttonMarkup.hoverDelay = 10000;
$.mobile.defaultPageTransition= "fade";

//$.mobile.loadPage( pageUrl, { showLoadMsg: false } );
	});
		
		


//$(document).on("mobileinit", function(event){
	// apply overrides here
	//$.mobile.loadingMessage = "Loading ...";
  //  $.mobile.loadingMessageTheme = "a";
   // $.mobile.loadingMessageTextVisible = true; 
	//$.mobile.defaultPageTransition= "slide";
  //   $.mobile.pageLoadErrorMessageTheme = "a";

	// Navigation
	//$.mobile.page.prototype.options.backBtnText = "Go back";
	//$.mobile.page.prototype.options.addBackBtn      = true;
	//$.mobile.page.prototype.options.backBtnTheme    = "d";
	
	// Page
//	$.mobile.page.prototype.options.headerTheme = "b";  // Page header only
	//$.mobile.page.prototype.options.contentTheme    = "b";
	//$.mobile.page.prototype.options.footerTheme = "b";
	
	// Listviews
	//$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
	//$.mobile.listview.prototype.options.theme           = "a";  // List items / content
	//$.mobile.listview.prototype.options.dividerTheme    = "a";  // List divider
//	$.mobile.listview.prototype.options.splitTheme   = "a";
//	$.mobile.listview.prototype.options.countTheme   = "a";
//	$.mobile.listview.prototype.options.filterTheme = "a";
	//$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
	
	//$.mobile.dialog.prototype.options.theme
	//$.mobile.selectmenu.prototype.options.menuPageTheme
	//$.mobile.selectmenu.prototype.options.overlayTheme
//});