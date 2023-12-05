import React from 'react'
import { faCartShopping,
   faPersonWalking, faDumbbell,
    faCar, faBicycle,
  faBasketballBall, faShower, faMedal, faDice, faUtensils,
  faTv, faSchool, faBookOpen, faBook, faHeartPulse,
  faVirusCovid, faDollarSign, faHandHoldingDollar, faFaceSmile, faDog,
  faDragon, faCat, faBowlFood, faSun, faBroom} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './support.css'
import IconSelection from '../components/modals/iconSelection/IconSelection';

const Support = () => {
  return (
    <div>
       <IconSelection /> 
      <h1>Support page for icons</h1>
      <div className="icon-container">
        <div className="arr1">
          <FontAwesomeIcon style={{ height: "50px"}}icon={faCartShopping} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faPersonWalking} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faDumbbell} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faCar} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBicycle} />
        </div>
        <div className="arr2">
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBasketballBall} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faShower} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faMedal} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faDice} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faUtensils} />
        </div>
        <div className="arr3">
          <FontAwesomeIcon style={{ height: "50px"}}icon={faTv} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faSchool} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBookOpen} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBook} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faHeartPulse} />
        </div>
        <div className="arr4">
          <FontAwesomeIcon style={{ height: "50px"}}icon={faVirusCovid} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faDollarSign} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faHandHoldingDollar} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faFaceSmile} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faDog} />
        </div>
        <div className="arr5">
          <FontAwesomeIcon style={{ height: "50px"}}icon={faCat} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faDragon} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBowlFood} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faSun} />
          <FontAwesomeIcon style={{ height: "50px"}}icon={faBroom} />

        </div>

      </div>
    </div>
  )
}

export default Support;