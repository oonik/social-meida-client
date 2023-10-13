import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MediaDetailsCard = () => {
    const media = useLoaderData();
    const {picture, message} = media;
    return (
        <div className='my-10 lg:m-10'>
            <div className="card w-full shadow-xl bg-white">
                <figure><img src={picture} alt="Shoes" className='w-full' /></figure>
                <div className="card-body">
                    <p>{message}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm">
                       <Link to="/media">Back to media</Link>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaDetailsCard;