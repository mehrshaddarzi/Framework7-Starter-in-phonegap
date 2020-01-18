// Initialize app
//var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
		  name:'about',
		  path: '/about/',
		templateUrl: 'about.html',
      },
    ],
	    init:false,
		//initOnDeviceReady: false,

    // ... other parameters
  });

var mainView = app.views.create('.view-main', {
	pushState: false,
	pushStateRoot: document.location.pathname.split('index.html')[0]
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
	
	
	
    // Disable Back Button
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();
            app.views.main.router.back();
    }, false);
	
	
});


$$("#go_to").on('click',function(e){
e.preventDefault();
var mainView = app.view.main;
mainView.router.navigate({ name: 'about' });
});
	
	
	
// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', '.page[data-name="home"]', function (e) {
	console.log("First Page");
	
	//setTimeout(function(){ 
	//	var mainView = app.view.main;
	//	mainView.router.navigate({ name: 'about' });
	//}, 5000);

	
    // Do something here when page loaded and initialized
    //console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    //console.log(e);
})

app.init();