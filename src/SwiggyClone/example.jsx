{/* <>
    <h3>Restaurants Delivering Online in Hyderabad</h3>
    <section className="firmCollectionSection">
      {firmItems.map((item) => {
        return (
          <div className="FirmSection">
            {item.firm.map((unit) => {
              return (
                <div className="firmDetails">
                  <p>{unit._id}</p>
                  <div className="firmImgs">
                    <img src={`${API_URL}/uploads/${unit.image}`} alt="FirmImages"/>
                  </div>
                  <div className="firmOffer">
                        {unit.offer}
                    </div>
                  <div className="FirmName">
                    <strong>{unit.firmName}</strong>
                  </div>
                  <div className="firmRegions">
                    {unit.area},{unit.region.join(',')}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
    </>


<></>
<div className="FirmSection">
            {item.firm.map((unit) => {
              return (
                <Link to={`/products/${unit._id}/${unit.firmName}`} key={unit._id}className="link">
                <div className="firmDetails">
                  <div className="firmImgs">
                    <img src={`${API_URL}/uploads/${unit.image}`} alt="FirmImages"/>
                  </div>
                  <div className="firmOffer">
                        {unit.offer}
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
            })}
          </div>
          </> */}