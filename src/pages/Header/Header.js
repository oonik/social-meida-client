import React from 'react';
import bgImg from '../../assets/images/Importance_of_Social_Media_in_Todays_World.avif'

const Header = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">SOCIAL MEDIA PLATFORM</h1>
                    <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;