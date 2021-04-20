import React from 'react';
import { Col } from 'react-bootstrap';
import './TeamCard.css'
const TeamCard = ({team}) => {
    return (
        <Col md="4">
            <div className="team-card mt-5 mb-5">
                    <img className="team-img" src={team.img} alt=""></img>
                    <h4 className="mb-3">{team.name}</h4>
                    <h6>{team.title}</h6>
                
            </div>
        </Col>
    );
};

export default TeamCard;