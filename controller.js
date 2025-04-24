import displayMap from "./View/displayMap";
import * as model from "./model.js";
const getIpAddress=function(){
    if(displayMap._inputAddress.value){
        displayMap._ipAddress=displayMap._inputAddress.value;
        return displayMap._ipAddress;
        }
}
const getDeviceInformation=async function(){
let ip=getIpAddress();
if(!ip) return;
const data=await model.loadDeviceInfo(ip)
displayMap._renderMap(data.latitude,data.longitude)

}
 const init=function(){
    displayMap.getUserData(getDeviceInformation);
    getDeviceInformation();
 }
 init();