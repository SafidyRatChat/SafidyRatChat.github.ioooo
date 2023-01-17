var readerlb  = new XMLHttpRequest()|| new ActiveXObject('MSXML2.XMLHTTP');
var filelb='./geoid/LB.zip';
console.log("hhhhh"+file);



function loadlb(){
 
readerlb.open("get",filelb, true);
readerlb.onreadystatechange=storelb;


readerlb.send(null);


}

function storelb (){

if(readerlb.readyState==4) {

    console.log("hhhhh"+readerlb)

var contentslb=readerlb.response;

    
 shapfilelb = new L.Shapefile(filelb, {      
              
              style: {
        "color": "#000000",
        "fill": "none",
        "weight": 2
      },
    
     
      
      onEachFeature: function(feature, layer) {
    
      
    
        if (feature.properties && feature.properties.name) {
    
               
            
    
            
                //layer.bindPopup(feature.properties.name).openTooltip();
                var element = document.getElementById(".leaflet-tooltip");
                console.log(feature.properties.name  );
                //element.classList.remove("background-color");
    
    
                layer.bindPopup(layer.feature.properties.name, {permanent: true, opacity: 5}).openTooltip();
               
                //layer.bindTooltip("<h4>"+feature.properties.name+"</h4>", {permanent: true, opacity: 5});
                //layer.bindPopup(layer.feature.properties.name);
    
    
            }
    
    
            ///push new tree
    
    
          }
    
      
          
          

  

});
console.log(shapfilelb)

}
   
}
