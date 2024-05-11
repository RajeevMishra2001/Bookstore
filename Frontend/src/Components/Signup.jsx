import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <>
                <Navbar />
                <div className='flex h-screen items-center justify-center'>
                    <div id="my_modal" className="modal-box">
                        <div className="p-10 rounded-2xl text-black bg-gray-300">
                            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                                <h3 className="font-bold text-2xl mb-7">SIGN UP  </h3>
                                <div>
                                    <span className='text-lg '>Name</span> <br />
                                    <input {...register("name", { required: true })}
                                        type="text" placeholder='Enter your email'
                                        className='p-2 border border-black rounded-lg w-12/12' /> <br />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}<br />
                                    <span className='text-lg '>Email</span> <br />
                                    <input {...register("email", { required: true })}
                                        type="email" placeholder='Enter your email'
                                        className='p-2 border border-black rounded-lg w-12/12' /> <br />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}<br />
                                    <span className='text-lg mt-3'>Password</span> <br />
                                    <input {...register("password", { required: true })}
                                        type="password" placeholder='Enter Password'
                                        className='p-2 border border-black rounded-lg w-12/12' /> <br />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}<br />
                                    <div className='flex justify-between mt-6'>
                                        <button className='btn btn-primary p-2 w-20 text-md font-bold text-white hover:bg-blue-800 duration-500'>Submit</button>
                                        <span className='ml-10 text-lg'> Have Account ? <span><button className='text-blue-600 underline'
                                            onClick={() =>
                                                document.getElementById('my_modal').showModal()
                                            }>Login</button>{" "} <Login /> </span></span>

                                    </div>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <Link to='/Home' className="btn bg-red-600 text-white hover:bg-red-800">Close</Link>
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </>
    )
}

export default Signup