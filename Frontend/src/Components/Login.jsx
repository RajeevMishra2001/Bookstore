import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
    return (
        <div>
            <dialog id="my_modal" className="modal">
                <div className="modal-box text-black bg-gray-300">
                    <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                        <h3 className="font-bold text-lg mb-7">LOGIN </h3>
                        <div>
                            <span className='text-lg '>Email</span> <br />
                            <input {...register("email", { required: true })} 
                            type="email"
                             placeholder='Enter your email' 
                             className='p-2 border border-black rounded-lg w-8/12' /> <br />
                             {errors.email && <span className='text-red-500'>This field is required</span>}
                              <br />

                            <span className='text-lg mt-3'>Password</span> <br />
                            <input {...register("password", { required: true })}
                             type="password" placeholder='Enter Password'
                              className='p-2 border border-black rounded-lg w-8/12' /> <br />
                              {errors.password && <span className='text-red-500'>This field is required</span>} <br />
                            <div className='flex justify-between mt-6'>
                                <button className='btn btn-primary p-2 w-20 text-md font-bold text-white hover:bg-blue-800 duration-500'>Submit</button>
                                <span className='text-lg'> Not Registered ? <span><Link to='/signup' className='text-blue-600 underline'>Signup</Link>{" "} </span>  </span>
                            </div>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn bg-red-600 text-white hover:bg-red-700"><a href='/Home'>Close</a></button>
                            </form>

                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login