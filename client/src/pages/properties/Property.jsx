import React from 'react';
import "./Property.css";
import SearchBar from "../../components/searchBar/Searchbar";
import useProperty from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import Propertycard from '../../components/propertyCard/Propertycard';
const Property = () => {
  const { data, isError, isLoading } = useProperty();
  // console.log(data);
  // console.log("hi");
  if (isError) {
    return (
      <div className='wrapper'>
        <span>
          Error While Fetching
        </span>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className='wrapper'>
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
        <div className='paddings fexCenter properties' style={{ display: "flex", flexWrap: "wrap" }}>
          {
            data.map((card, i) => (<Propertycard card={card} key={i} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Property