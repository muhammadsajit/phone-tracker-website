const error =document.getElementById('error-show');
 error.style.display ='none';

const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log (searchText);
    //clear data
    searchField.value = '';
    //load data
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    fetch(url)
    .then ( res => res.json())
    .then (data =>displaySearchResult (data.data));

}
const displaySearchResult = data => {
   const searchResult = document.getElementById('search-result');
   searchResult.textContent ='';
   if(data.length == 0){
    const error =document.getElementById('error-show');
    error.style.display ='block';
   }
   
    data.forEach(data =>  {
      //  console.log(data);
     const div = document.createElement('div');
     div.classList.add('col');
     div.innerHTML = `
      <div 
      class="card">
         <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"> Name :${data.phone_name}</h5>
            <p class="card-text"> Brand :${data.brand}</p>
            <button  onclick ="loadPhoneDetail('${data.slug}') " type="button" class="btn btn-primary"  >
            Explore
          </button>
         </div>
       </div>
     `;
   searchResult.appendChild(div);
 })
   
  

}

const loadPhoneDetail = slug => {
  console.log(slug);
  const url =`https://openapi.programming-hero.com/api/phone/${slug}`;
  fetch(url)
  .then (res => res.json())
  .then (data => displayPhoneDetail(data.data) )
}
const displayPhoneDetail = data =>{
  console.log (data);
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML =`
  <img src="${data.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bold fs-3"> Name :${data.name}</h5>
    <p class="card-text fw-bold"> Brand :${data.brand}</p>
    <p class="card-text fw-bold"> ReleaseDate : ${data.releaseDate?data.releaseDate:'Comming soon'}</p>
    <p class="card-text fw-bold text-primary"> Mainfeatures:</p>

    <p class="card-text fw-bold"> Storge :${data.mainFeatures.storage}</p>
    <p class="card-text fw-bold"> DisplaySize:${data.mainFeatures.displaySize}</p>
    <p class="card-text fw-bold"> ChipSet :${data.mainFeatures.chipSet}</p>
    <p class="card-text fw-bold"> Memory :${data.mainFeatures.memory}</p>
    
    <p class="card-text fw-bold text-primary"> Sensors Info:</p>
    <p class="card-text fw-bold"> Sensor :${data.mainFeatures.sensors}</p>
    <p class="card-text fw-bold text-primary"> Others Information:</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>
    <p class="card-text fw-bold"> WLAN :${data.others.WLAN}</p>


    
  </div>



  `;
  phoneDetails.appendChild(div);
}