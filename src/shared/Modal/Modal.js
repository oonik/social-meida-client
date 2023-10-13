import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Modal = ({ user }) => {
    const { register, handleSubmit} = useForm();

    const handleUpdateUser = (data) => {
        fetch(`http://localhost:5000/users/${user?._id}`, {
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
              alert("updated successfully")
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="my_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(handleUpdateUser)} className="card-body">
                        <h4 className='text-2xl font-bold text-center mb-3 text-amber-400'>Update User</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name"
                                {...register("name")}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input type="text" placeholder="Your university"
                                {...register("university")}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email"
                                {...register("email")}
                                className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder="Your address"
                                {...register("address")}
                                className="input input-bordered" />
                        </div>
                        <div className='flex flex-row items-center justify-center gap-2'>
                            <button type="submit" className='btn bg-amber-400 text-white'>Update</button>
                            <div className="modal-action mt-0">
                                <label htmlFor="my_modal" className="btn bg-white text-black">Close!</label>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;