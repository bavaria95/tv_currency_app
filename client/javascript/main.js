var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
//var pluginAPI = new Common.API.Plugin(); 

var Main = 
{
}


Main.onLoad = function()
{
	alert("Main.onLoad()");     
    widgetAPI.sendReadyEvent();                     // Send ready message to Application Manager     
    //document.getElementById("anchor").focus();           // Focus to Anchor for handling key inputs      
                                                                                                // from remote controller   
}

Main.onUnload = function()
{

}

Main.keyDown = function(){
  // Key handler
  var keyCode = event.keyCode;
  alert("Main Key code : " + keyCode);
}

Main.MainKeyHandler = function()
{
	var KeyCode = event.keyCode;

	switch(keyCode)
	{
		case tvKey.KEY_LEFT :
			break;
		case tvKey.KEY_RIGHT :
			break;
		case tvKey.KEY_UP :
			break;
		case tvKey.KEY_DOWN :
			break;
		default :
			break;
	}
}
