import View from "./view";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markIcon from 'url:../images/icon-location.svg';
class DisplayMap extends View{
    
   
    getUserData(handler){
     
        this._inputEl.addEventListener('click',()=>{
            handler();
        })
    }
_renderMap(lat,lng){
    const container=L.DomUtil.get(this._mapcontainer);
    if(container!==null){
        alert("Hello");
        container._leaflet_id=null;
    }
    let  myMap=L.map(this._mapcontainer, {
        center: [lat, lng],
        zoom: 18,
        preferCanvas:true,
        dragging:true,
    });
    let myIcon=L.icon({
        iconUrl:`${markIcon}`
    })

    
    L.marker([lat,lng],{icon: myIcon}).addTo(myMap);
    L.tileLayer(`https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png`, {
        
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
}
return;
}
export default new DisplayMap();