

export default function EditAccount() {
  return(
    <div className="accordion-item single-my-account mb-20 card">
      <div className="panel-heading card-header" id="panelsStayOpen-headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          <h3 className="panel-title"><span>1 .</span> Edit your account information </h3>
        </button>
      </div>
      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div className="card-body">
          <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
              <h4>My Account Information</h4>
              <h5>Your Personal Details</h5>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>First Name</label>
                  <input type="text"/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Last Name</label>
                  <input type="text"/>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info">
                  <label>Email Address</label>
                  <input type="email"/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Telephone</label>
                  <input type="text"/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Fax</label>
                  <input type="text"/>
                </div>
              </div>
            </div>
            <div className="billing-back-btn">
              <div className="billing-btn">
                <button type="submit">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}