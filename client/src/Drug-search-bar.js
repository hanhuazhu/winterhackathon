import { useState } from 'react';


const SearchBar = ({keyword, onChange}) => {
  const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

  const [drug, setDrug] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getDrug(drug)
  }

  function getDrug(drug) {
    return fetch(`https://api.fda.gov/drug/event.json?search=${drug}&limit=2`)
      .then(response => response.json())
      .then(data => {
        console.log("data: ", data)
        return data
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <input 
     style={BarStyle}
     key="search-bar"
     value={keyword}
     placeholder={"drug name"}
     onChange={(e) => setDrug(e.target.value)}
    />
    <button type="button" class="btn btn-light" onClick={handleFormSubmit}>Search</button>
    </div>
    
  );
}





export default SearchBar;