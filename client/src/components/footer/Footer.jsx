import "./footer.css";
import {
  faMedal,
  faCar,
  faChild,
  faUserCheck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="about">
      <h1 className="abooutTitle">
        Be our guest, relax whilst our team takes care of the details.
      </h1>
      <div className="footer">
        <div className="aboutList">
          <div className="aboutListItem active">
            <FontAwesomeIcon icon={faUserCheck} />
            <span>Private Chef</span>
          </div>
          <div className="aboutListItem">
            <FontAwesomeIcon icon={faUtensils} />
            <span>Table Booking</span>
          </div>
          <div className="aboutListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Private Chofer</span>
          </div>
          <div className="aboutListItem">
            <FontAwesomeIcon icon={faMedal} />
            <span>Exclusive Experiences</span>
          </div>
          <div className="aboutListItem">
            <FontAwesomeIcon icon={faChild} />
            <span>Childcare</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItem">Countries</li>
            <li className="fListItem">Regions</li>
            <li className="fListItem">Cities</li>
            <li className="fListItem">Districts</li>
            <li className="fListItem">Airports</li>
            <li className="fListItem">Hotels</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Homes </li>
            <li className="fListItem">Apartments </li>
            <li className="fListItem">Resorts </li>
            <li className="fListItem">Villas</li>
            <li className="fListItem">Hostels</li>
            <li className="fListItem">Guest houses</li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Unique places to stay </li>
            <li className="fListItem">Reviews</li>
            <li className="fListItem">Unpacked: Travel articles </li>
            <li className="fListItem">Travel communities </li>
            <li className="fListItem">Seasonal and holiday deals </li>
          </ul>
          <ul className="fList">
            <li className="fListItem">Car rental </li>
            <li className="fListItem">Flight Finder</li>
            <li className="fListItem">Restaurant reservations </li>
            <li className="fListItem">Travel Agents </li>
          </ul>
      
        </div>
      </div>

      <div className="fText">© All Content The Luxmemo Travel Book 2022. Site Designed, Crafted &  Developed by Karla Rodriguez Gonzalez.</div>
    </div>
  );
};

export default Footer;
