// Mobile Safari in standalone mode
if(("standalone" in window.navigator) && window.navigator.standalone){

	// If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
	var noddy, remotes = true;
	
	document.addEventListener('click', function(event) {
		
		noddy = event.target;
		
		// Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
		while(noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
	        noddy = noddy.parentNode;
	    }
		
		if('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(https://6b8cee78e4347b76f021f521e2c529ce722c26ed.googledrive.com/host/0B0zP7utQNB3GeGs2dnU2Rmx5OEk/FCG%20Flappy%20Bird/index.html) !== -1 || remotes))
		{
			event.preventDefault();
			https://6b8cee78e4347b76f021f521e2c529ce722c26ed.googledrive.com/host/0B0zP7utQNB3GeGs2dnU2Rmx5OEk/FCG%20Flappy%20Bird/index.html = noddy.href;
		}
	
	},false);
}
