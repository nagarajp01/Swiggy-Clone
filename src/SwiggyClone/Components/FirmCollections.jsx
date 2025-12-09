import React, { useState, useEffect } from "react";
import { API_URL } from "../Api";
import { Link } from "react-router-dom";
const FirmCollections = () => {
  const [firmItems, setFirmItems] = useState([]);
  const [regionsSelected,setSelectedRegions]=useState("All")
  const[activeBtnCategory,setActiveBtnCategory]=useState("all")
  const firmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const ApiData = await response.json();
      setFirmItems(ApiData.vendors);
    } catch (error) {
      alert("FirmCollection fetching error");
      console.log("FirmData error", error);
    }
  };
  useEffect(() => {
    firmHandler();
  }, []);
  const filterHandler=(region,category)=>{
    setSelectedRegions(region)
    setActiveBtnCategory(category)

  }
  return (
    <>
    <h3>Restaurants Delivering Online in Hyderabad</h3>
    <div className="filterButtons">
      <button onClick={()=>filterHandler("All","all")} className={activeBtnCategory==="all"?"activeBtn":""}>All</button>
      <button onClick={()=>filterHandler("South-Indian","south-indian")} className={activeBtnCategory==="south-indian"?"activeBtn":""}>South-Indian</button>
      <button onClick={()=>filterHandler("North-Indian", "north-indian")} className={activeBtnCategory==="north-indian"?"activeBtn":""}>North-Indian</button>
      <button onClick={()=>filterHandler("Chinese","chinese")} className={activeBtnCategory==="chinese"?"activeBtn":""}>Chinese</button>
      <button onClick={()=>filterHandler("Bakery","bakery")} className={activeBtnCategory==="bakery"?"activeBtn":""}>Bakery</button>
    </div>
    <section className="firmCollectionSection">
      {firmItems.map((item) => {
        return item.firm.map((unit)=>{
          if(regionsSelected==="All" || unit.region.includes(regionsSelected.toLocaleLowerCase())
          ){
              return (
                <Link to={`/products/${unit._id}/${unit.firmName}`} key={unit._id}className="link">
                <div className="firmDetails">
                  <div className="firmImgs">
                    <img src={`${API_URL}/uploads/${unit.image}`} alt="FirmImages"/>
                    <div className="firmOffer">
                        {unit.offer}
                    </div>
                  </div>
                  <div className="FirmName">
                    <strong>{unit.firmName}</strong>
                  </div>
                  <div className="firmRegions">
                    {unit.area},{unit.region.join(',')}
                  </div>
                </div>
                </Link>
              );
        }
        })
        return null;
      })}
    </section>
    </>
  );
};

export default FirmCollections;
