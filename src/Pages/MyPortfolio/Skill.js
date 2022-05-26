import React from "react";
import SkillDetails from "./SkillDetails";

const Skill = () => {


    const skills = [
        {
            name: "HTML",
            details: "I know 99 percent HTML5. "
        },
        {
            name: "CSS",
            details: " I know 80 percent CSS3."
        },
        {
            name: "JAVASCRIPT",
            details: "I know 70 percent JAVASCRIPT"
        },
        {
            name: "REACT",
            details: " I know 75 percent REACT"
        },
        {
            name: "NODE",
            details: " I am a begenner in node js"
        },
        { 
            name: "EXPRESS",
            details: "I can make a backend project by express. but i am not expert"
        },
        {
           
            name: "MONGODB",
            details: "I Loved communication with mongodb. mongodb easy and friendly!"
        },
    ]

  return (
    <section className="pb-28">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-accent">My Skill</h1>
        <progress class="progress w-56"></progress>
      </div>
      <div className="grid  md:grid-cols-3 grid-cols-1 gap-10">
        <div className="col-span-2 ">
          <div className="grid grid-cols-3 gap-5">
                      {
                          skills.map((skill, index) => <SkillDetails key={index} skill={skill} />)
           }
        
          </div>
        </div>
              <div>
              <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center ">
            <p className="w-24">HTML:</p>{" "}
            <progress class="progress w-56" value="100" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">CSS:</p>{" "}
            <progress class="progress w-56" value="98" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">JAVASCRIPT:</p>{" "}
            <progress class="progress w-56" value="80" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">REACT:</p>{" "}
            <progress class="progress w-56" value="80" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">NODE:</p>{" "}
            <progress class="progress w-56" value="30" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">EXPRESS:</p>{" "}
            <progress class="progress w-56" value="40" max="100"></progress>
          </div>
          <div className="flex items-center ">
            <p className="w-24">MONGODB:</p>{" "}
            <progress class="progress w-56" value="50" max="100">
              40
            </progress>
          </div>
        </div>
         </div>
      </div>
    </section>
  );
};

export default Skill;
