import View from "./view";
import displayMap from './displayMap';
class InfoView extends View{

    generateMarkUp(data){
        return `<section class="informationResponse">
  <div class="ipaddress response ">
  <h3 class="name">IP Address</h3>
  <h2 class="value">${data.ip}</h2>
</div>
<div class="location response">
  <h3 class="name">LOCATION</h3>
  <h2 class="value">${data.location}</h2>
</div>
<div class="timezone response">
  <h3 class="name">TIMEZONE</h3>
  <h2 class="value">${data.timezone}</h2>
</div>
<div class="isp response">
  <h3 class="name">ISP</h3>
  <h2 class="value ispvalue">${data.isp}</h2>
</div>

</section`
    }
}
export default new InfoView();