import { FcGoogle } from 'react-icons/fc';
import registerImage from '../../assets/register.jpg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div>
                <img className="w-[500px] h-[640px] object-cover lg:block hidden shadow-2xl rounded-md" src={registerImage} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <div>
                    <p className="font-medium text-xs text-center mb-3 text-accent">Register </p>
                    <h2 className="font-semibold text-3xl text-center mx-5 text-">Start for from Today</h2>
                    <form
                        // onSubmit={handleRegister}
                        className="card-body">
                        <button
                            // onClick={() => { handleGoogleSignIn(googleProvider) }} 
                            className="btn w-full bg-success text-primary flex items-center"><FcGoogle />  Login with Google</button>
                        <div className="divider text-xs">Or continue with </div>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label font-bold text-base-200">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input focus:outline-1 focus:outline-primary"
                                placeholder="Enter your name"
                                required
                            />
                            {/* {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        } */}
                            {/* email */}
                            <label className="label font-bold text-base-200">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input focus:outline-1 focus:outline-primary"
                                placeholder="Enter your email address"
                                required
                            />
                            {/* photo url */}
                            <label className="label font-bold text-base-200 ">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input focus:outline-1 focus:outline-primary"
                                placeholder="Enter your photo URL"
                                required
                            />
                            {/* password */}
                            <label className="label font-bold text-base-200">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input focus:outline-1 focus:outline-primary"
                                placeholder="Enter your password"
                                required
                            />
                            {/* {
                                error && <p className="text-red-500 text-xs">{error}</p>
                            } */}
                            <button type="submit" className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-xl text-white">
                                <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                                <span className="relative z-10">Register</span>
                            </button>
                            <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/login'} className="text-[#D6A23F]">Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;