// Mobile Safari in standalone mode
if(("standalone" in window.navigator) && window.navigator.standalone){

	window.addEventListener("load",function() {
		
		links = document.getElementsByTagName('a');
			
		for (var i=0; i < links.length; i++)
		{
			// Don't do this for javascript: links
			if(links[i].href.toLowerCase().indexOf('javascript') !== 0)
			{
				links[i].addEventListener("click",function(event){
					top.location.href = this.href;	
					event.returnValue = false;
				},false);
			}
		}
	},false);

}
