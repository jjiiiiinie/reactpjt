import React, { useState } from 'react';

import Nav from '../../elements/UI/Nav';
import Footer from '../../layout/Footer';
import Bread from '../productdetail/Bread';

import EditAccount from './EditAccount';
import ChangePwd from './ChangePwd';
import ModifyAddress from './ModifyAddress';

export default function MyAccount() {
  return(
    <div id="wrap">
      <Nav />
      <Bread productName="MY ACCOUNT"/>
      <div className="myaccount-area pb-80 pt-100">
        <div className="container">
          <div className="row">
            <div className="ml-auto mr-auto col-lg-9"> 
                <div className="myaccount-wrapper"> 
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <EditAccount />
                    <ChangePwd />
                    <ModifyAddress />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}