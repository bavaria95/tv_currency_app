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
        
        var usd = curr['usd'];
        
        var usd_buy_label = usd[0][0];
        document.getElementById("usd_buy_label").innerHTML =  usd_buy_label;
        var usd_buy_number = usd[0][1];
        document.getElementById("usd_buy_number").innerHTML =  usd_buy_number;
        
        var usd_sell_label = usd[1][0];
        document.getElementById("usd_sell_label").innerHTML =  usd_sell_label;
        var usd_sell_number = usd[1][1];
        document.getElementById("usd_sell_number").innerHTML =  usd_sell_number;
        
        
        var eur = curr['eur'];
        
        var eur_buy_label = eur[0][0];
        document.getElementById("eur_buy_label").innerHTML =  eur_buy_label;
        var eur_buy_number = eur[0][1];
        document.getElementById("eur_buy_number").innerHTML =  eur_buy_number;
        
        var eur_sell_label = eur[1][0];
        document.getElementById("eur_sell_label").innerHTML =  eur_sell_label;
        var eur_sell_number = eur[1][1];
        document.getElementById("eur_sell_number").innerHTML =  eur_sell_number;
        
        document.getElementById("tbl").style.visibility = "visible";
        
} 
        