import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Het Patel</span>👋
            <br />
            A B.Tech Student from BVM, Gujarat
        </h1>
    ),
    2: (
        <InfoBox
            text="21, Currently in Third Year of B.Tech - IT"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="21, Currently in Third Year of B.Tech - IT"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="21, Currently in Third Year of B.Tech - IT"
            link="/contact"
            btnText="Wanna Chat?"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;