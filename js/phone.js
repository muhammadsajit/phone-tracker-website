const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log (searchText);
    //clear data
    searchField.value = '';
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    fetch(url)
    .then ( res => res.json())
    .then (data =>displaySearchResult (data.data));

}
const displaySearchResult = data => {
   const searchResult = document.getElementById('search-result');
   data.forEach(data =>  {
        // console.log(data);
       const div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
        <div 
        class="card">
           <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.phone_name}</h5>
              <p class="card-text">${data.brand}</p>
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
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML =`
  <img src="${data.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bold fs-3"> Name :${data.name}</h5>
    <p class="card-text fw-bold"> ReleaseDate : ${data.releaseDate}</p>
    <p class="card-text fw-bold"> ReleaseDate :${data.mainFeatures}</p>
    
  </div>



  `;
  phoneDetails.appendChild(div);
}