var XHRExample = {  
            XHRObj : null 
           }  
           
var tvKey = new Common.API.TVKeyValue(); 
var widgetAPI = new Common.API.Widget();  


XHRExample.onload = function () {  
        widgetAPI.sendReadyEvent();  
        var URL = "https://tvcurrencyapp.herokuapp.com/get";  // Test URL here
        
        if (this.XHRObj != null)  
            this.XHRObj.destroy();  
        
        this.XHRObj = new XMLHttpRequest();
       
       if (this.XHRObj) {   
                this.XHRObj.onreadystatechange = function () {    
                        if (XHRExample.XHRObj.readyState == 4) {     
                                XHRExample.recieveData();    
                         }
                 }; 
                 
                this.XHRObj.open("GET", URL, true);   
                this.XHRObj.send(null); 
      } 
}


XHRExample.recieveData = function () {

        document.getElementById("loading").style.visibility = "hidden";

        var curr = eval('(' + this.XHRObj.responseText + ')');
        
        alert(this.XHRObj.responseText);
        
        
} 
        