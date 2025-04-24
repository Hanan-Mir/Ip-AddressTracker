export let deviceData={
}




export let loadDeviceInfo=async function(ipaddress){
    let response=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_XzqN48IY88Xu8tMGqSVQ76tWUbwVQ&ipAddress=${ipaddress}`)
let data=await response.json();
console.log(data);
deviceData={
    ip:data.ip,
    location:`${data.location.city} ${data.location.country} ${data.location.postalCode}`,
    latitude:data.location.lat,
    longitude:data.location.lng,
    timezone:data.location.timezone,
    isp:data.isp
}
console.log(deviceData);
return deviceData;
}