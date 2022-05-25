import React from "react";
import contactImg from "../../images/d-3.jpg";

const Contact = () => {
  return (
    <section className=" py-28 min-h-screen ">
      <div className="flex justify-between pl-16">
        <div className="flex-1 ">
          <h2 className="text-5xl font-bold text-accent">Get in touch</h2>
          <p className="text-xl mt-5">
            Want to get in touch? We'd love to hear from you. <br/> Here's how you can
            reach us...
          </p>
        </div>
        <div>
          <img src={contactImg} className="full rounded-l-full " alt="img" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 px-16 -mt-40">
        <div class="card flex-1 bg-base-100  rounded-none border">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl mb-3">Talk to Sales</h2>
            <p className="mb-3">
              Interested in HubSpot’s software? Just pick up the phone to chat
              with a member of our sales team.
            </p>
            <h4 className="text-primary text-xl font-bold">+1 877 929 0687</h4>

            <div class="card-actions ">
              <button class="btn btn-ghost  hover:bg-transparent text-primary ">
                View all global numbers ❯
              </button>
            </div>
          </div>
        </div>
        <div class="card flex-1 bg-base-100  rounded-none border">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl mb-3">Contact Customer Support</h2>
            <p className="">
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Don’t worry… we’re here for you.
            </p>

            <div class="card-actions ">
              <button class="btn btn-accent hover:btn-primary hover:text-accent ">Contact Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
