import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handlePost = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("file", image)
        formData.append("upload_preset", "socialmediademoapp")

        axios.post(
            "https://api.cloudinary.com/v1_1/du3fgvjll/image/upload",
            formData
        ).then((response)=>{
            if(response.statusText){
                const img = response.data.url;
                const post = {
                    message: data.message,
                    picture: img,
                };
             fetch("http://localhost:5000/post", {
                method: "POST",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(post)
             })
             .then(res => res.json())
             .then(data => {
                if(data.acknowledged){
                  navigate('/media')
                }
             })
            }
        })
    }
    return (
        <div className='py-10 bg-amber-500'>
            <h1 className='text-3xl font-semibold text-center mb-5 text-white'>Create a post</h1>
            <form onSubmit={handleSubmit(handlePost)} className='flex flex-col gap-5 items-center '>

            <textarea placeholder="Whats your mind" {...register("message", { required: "This field is required" })} className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
            {errors?.message && <span className='text-red-500'>{errors.message?.message}</span>}

            <input type="file" {...register("image", { required: "This field is required" })} className="file-input file-input-bordered w-full max-w-xs" />
            {errors?.image && <span className='text-red-500'>{errors.image?.message}</span>}

            <button type="submit" className='btn btn-primary bg-white border-none text-black w-full max-w-xs'>POST</button>
            </form>
        </div>
    );
};

export default CreatePost;

//onChange={(e)=>setImage(e.target.files[0])}