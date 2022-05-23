import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loginImg from "../../images/login.jpg";

const Register = () => {

  const navigate = useNavigate();
  
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
// const [token]= useToken(gUser || user);

  let signInError;

  if (loading || gLoading || updating) {
    return   <p>Loading...</p>
  }
  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500 mb-2 text-sm">
        {error?.message || gError?.message || updateError?.message}
      </p>
    );
  }
  // if (token) {
  //   navigate("/appointment")
  // }

  const onSubmit = async (data) => {
    console.log(data);
     await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
    console.log("Update complete");
   
     
  };


    const handleNavigateRegister = () => {
      navigate("/login")
    }


    return (
        <section>
      <div
        className="h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-5xl mb-3 font-bold text-primary animation-bounce">
           Register Here
          </h1>
          <p className="text-white text-xl">I am a new customer</p>
        </div>
      </div>
      <div className="px-16 ">
        <div class="hero pt-8 ">
          <div class="hero-content flex-col lg:flex-row">
            <div class="text-center lg:text-left border p-12">
              <h1 class="text-2xl font-bold">Returning Customer</h1>
              <p className="text-primary font-bold">Login</p>
              <p class="py-6">
                By creating an account you will be able to shop faster, be up to
                date on an order's status, and keep track of the orders you have
                previously made.
              </p>
              <button  onClick={handleNavigateRegister} className="btn btn-primary">Login</button>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
               className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
             
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
               className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
               className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Sign up"
            />
          </form>
              </div>
            </div>
          </div>
        </div>
        <div class="divider">OR</div>
        <div className="  mb-12">
          <h1 className="text-center text-2xl mb-4 ">Continue with</h1>
          <div className="flex justify-center items-center">
            <button onClick={() => signInWithGoogle()} class="btn btn-outline   bg-gray-50 btn-wide  mx-4">
              <svg
                height="100%"
                viewBox="0 0 20 20"
                width="20px"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                  fill="#34A853"
                ></path>
                <path
                  d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span className="ml-2"> Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Register;