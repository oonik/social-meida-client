import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MediaCard from '../../shared/MediaCard/MediaCard';

const Media = () => {
    const [like, setLike] = useState(0);

    const {data: medias=[], isLoading} = useQuery({
        queryKey: ["medias"],
        queryFn: async()=>{
          const res = await fetch("http://localhost:5000/post")
          const data = await res.json();
          return data;
        }
    });

    const handleClickLike = (like) => {
        setLike(like + 1)
    }

  if(isLoading){
    return <p className='text-2xl text-center mt-20 text-purple-400'>Loading...</p>
 };
    
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-3 text-white'>All Media</h1>
            <div className='flex flex-col items-center gap-10 my-10'>
            {
                medias.map(media => <MediaCard
                key={media._id}
                media={media}
                handleClickLike={handleClickLike}
                like={like}
                ></MediaCard>)
            }
            </div>
        </div>
    );
};

export default Media;