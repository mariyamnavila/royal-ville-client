import { FcGoogle } from "react-icons/fc";
import loginImage from '../../assets/login.jpg';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div>
                <img className="w-[500px] h-[500px] object-cover lg:block hidden shadow-2xl rounded-md"
                    src={loginImage}
                    alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5
            ">
                <p className="font-medium text-xs text-center mb-3 text-accent">Welcome Back!</p>
                <h2 className="font-semibold text-2xl text-center mx-5 text-primary">Login your Account</h2>
                <form
                    // onSubmit={handleLogin}
                    className="card-body">
                    <button
                        // onClick={() => { handleGoogleSignIn(googleProvider) }}
                        className="btn w-full bg-success text-black flex items-center"><FcGoogle />  Login with Google</button>
                    <div className="divider text-xs">Or continue with </div>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label font-bold text-base-200">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input border border-base-200 focus:outline-1 focus:outline-base-200"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label font-bold text-base-200">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input border border-base-200 focus:outline-1 focus:outline-base-200 mb-4"
                            placeholder="Enter your password"
                            required
                        />
                        {/* {
                            error && <p className="text-red-500 text-xs">{error}</p>
                        } */}
                        <button type="submit" className="btn relative overflow-hidden group bg-[#D6A23F] border border-[#D6A23F] text-xl text-white">
                            <span className="absolute inset-0 bg-[#1A1A1A] transform scale-y-0 transition-transform duration-300 ease-out origin-center rotate-120 group-hover:scale-y-250"></span>
                            <span className="relative z-10">Login</span>
                        </button>
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/register'} className="text-[#D6A23F]">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;