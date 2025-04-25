export default class View{
    _mapcontainer=document.querySelector('.map')
    _inputAddress=document.querySelector('#input-ip');
    _inputEl=document.querySelector('.arrow-img');
    _ipAddress;
    _sectionContainer=document.querySelector('.content-container');
    _data;
    _render(data){
        this._data=data;
        let markup=this.generateMarkUp(data);
        console.log(data);
        this._sectionContainer.insertAdjacentHTML('beforeend',markup);
    }
    
}