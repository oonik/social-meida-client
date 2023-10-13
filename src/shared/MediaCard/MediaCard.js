import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = ({ media, handleClickLike, like }) => {
    const { picture, message, _id } = media;

    return (
        <div>
            <div className="card w-full shadow-xl bg-white">
                <figure><img src={picture} alt="Shoes" className='w-full h-96' /></figure>
                <div className="card-body">
                    <p>{message?.length > 100 ? message.slice(0, 100) + '...' : message}</p>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <div className="card-actions justify-end mb-5">
                            <button
                                className="btn btn-sm"
                                onClick={() => handleClickLike(like)}
                            >Like <span>{like}</span></button>
                            <button className="btn btn-sm">
                                <Link to={`/mediaDetails/${_id}`}>Details</Link>
                            </button>
                        </div>
                        <form className='card-actions justify-start flex flex-col'>
                            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            <button className='btn btn-sm btn-success' type="submit">comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;