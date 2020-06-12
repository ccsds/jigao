// ==UserScript==
// @name         Dims
// @namespace    http://tampermonkey.net/
// @version    
// @description  try to take over the world!
// @author       You
// @match        https://dims.uniview.com/Production_queryProductionByID.action?*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @require     https://gist.githubusercontent.com/ccsds/22cc3c03af72f39ad3977de04a8daf16/raw/792dd2bfba4f0d5f7f2bdb0ccc4725004d048c42/mywaitForKeyElements.js

// @grant        none
// ==/UserScript==
var $1;
function f1(){

var myDivs=$1("#product_datails_content_lab").find("div");

    console.log();
    if(myDivs[2].innerHTML.indexOf("通用")!=-1){
        console.log(myDivs[3].innerHTML.replace("价格：","").replace("元","")/0.32*0.25)
        var newPrice=myDivs[3].innerHTML.replace("价格：","").replace("元","")/0.32*0.25;
            var oNewP = $1("<div id='newP'>"+newPrice+"</div>");


            var logIndent=document.createElement("div");
        logIndent.innerHTML=newPrice;
        logIndent.style.cssText="background:red;position:fixed;left:750px;top:70px;z-index:1;height:36px;cursor:pointer;width:120px;text-align:center; border-radius: 7px 7px;font-size: 25px;";
        myDivs[3].append(logIndent)


    }


}
(function() {
    'use strict';
        $1=$.noConflict(true);

    // Your code here...   product_datails_content_lab
waitForKeyElements("#product_datails_content_lab",f1)

})();
