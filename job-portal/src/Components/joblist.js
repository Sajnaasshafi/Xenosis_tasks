import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign, FaBuilding } from 'react-icons/fa';
import './joblist.css'

function Joblist(props) {
    return (
        <div className="card">
            <div className="card-icon-div">
                <FaBriefcase className="card-icon" />
            </div>
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <div>
                <FaBuilding className="card-detail-icon" />
                <span className="card-subdetail">{props.companyname}</span></div>
                   <div>
                        <FaMapMarkerAlt className="card-detail-icon" />
                        <span className="card-detail">{props.location}</span>
                    <div/>
                    <div>
                        <FaBriefcase className="card-detail-icon" />
                        <span className="card-detail">{props.type}</span>
                    </div>
                    <div>
                        <FaDollarSign className="card-detail-icon" />
                        <span className="card-detail">{props.salary}</span>
                </div>
                <p className="card-description">
                    <span>{props.description}</span>
                </p>
                <p className="grey">
                    <a href={props.applyLink}>Apply Now</a>
                </p>
            </div>
        </div>
        </div>
    );
}



export default Joblist;

