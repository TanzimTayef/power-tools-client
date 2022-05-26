import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const email = user.email;
    const userInfo = {
      name: user.displayName,
      email: user.email,
      education: data.education,
      location: data.location,
      phone: data.phone,
      profile: data.profile,
    };
    fetch(`https://young-springs-65716.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Updated your information. Thanks!");

      });
  };
  return (
      <section className="container mx-auto my-16 ">
          <h3 className="text-2xl text-gray-500 font-bold uppercase border-b-2 border-gray-200 pb-1">Profile</h3>
      <div className=" my-16 ">
        <div className="flex items-center">
          <div className="">
            <div class="avatar online">
              <div class="w-24 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=28212" />
              </div>
            </div>
          </div>
          <div className="ml-8">
            <h1 className="text-2xl font-bold text-gray-500 ">{user?.displayName}</h1>
            <h4 className="text-gray-500">Email: {user?.email}</h4>
          </div>
        </div>
      </div>
      <div className="p-10 shadow-md bg-slate-50">
        <div className="mb-10">
          <h1 className="text-2xl text-gray-500 border-b-2 text-center pb-4">
            Update Your Information
          </h1>
        </div>

        <form
          className="grid grid-cols-1 gap-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border p-2 rounded-md"
            placeholder="Your education"
            {...register("education", { required: true, maxLength: 20 })}
          />
          <input
            className="border p-2 rounded-md"
            placeholder="City/District"
            {...register("location", { required: true, maxLength: 20 })}
          />
          <input
            className="border p-2 rounded-md"
            placeholder="Phone"
            {...register("phone", { required: true, maxLength: 20 })}
          />
          <input
            className="border p-2 rounded-md"
            placeholder="profile"
            {...register("profile", { required: true, maxLength: 20 })}
          />
          <input
            type="submit"
            className="btn w-full"
            value="Update Information"
          />
        </form>
      </div>
    </section>
  );
};

export default MyProfile;
