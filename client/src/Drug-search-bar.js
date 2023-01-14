import { useState } from 'react';


const SearchBar = ({setAdverseEvents, setTest}) => {
  const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};

  const [drug, setDrug] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getDrugADE(drug)
    //getInteraction(drug)
  }

  const getDrugADE = (drug)  => {
    return fetch(`https://api.fda.gov/drug/event.json?search=patient.drug.openfda"${drug}"&count=patient.reaction.reactionmeddrapt.exact&limit=5`)
      .then(response => response.json())
      .then(data => {
        //console.log("data: ", data)
        const amount = [data.results[0].count, data.results[1].count, data.results[2].count, data.results[3].count, data.results[4].count]
        const ade = [data.results[0].term, data.results[1].term, data.results[2].term, data.results[3].term, data.results[4].term]
        
        const result = {amount, ade}
        setAdverseEvents({
          ade,
          amount
        })
        return;
        // return result
      })
      .catch(err => console.error(err))
  }

  const getInteraction = (drug)  => {
    return fetch(`https://api.fda.gov/drug/label.json?search=drug_interactions:${drug}&limit=5`)
      .then(response => response.json())
      .then(data => {
        
        setTest(data)
        return data
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <input 
     style={BarStyle}
     key="search-bar"
     value={drug}
     placeholder={"drug name"}
     onChange={(e) => setDrug(e.target.value)}
    />
    <button type="button" class="btn btn-light" onClick={handleFormSubmit}>Search</button>
    </div>
    
  );
}



// console.log("finalade"), SearchBar.getDrugADE.ade)


export default SearchBar;