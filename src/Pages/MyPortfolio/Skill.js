import React from "react";
import SkillDetails from "./SkillDetails";

const Skill = () => {


    const skills = [
        {
            name: "HTML",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        {
            name: "CSS",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        {
            name: "JAVASCRIPT",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        {
            name: "REACT",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        {
            name: "NODE",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        { 
            name: "EXPRESS",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
        },
        {
           
            name: "MONGODB",
            details: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, magni! Voluptatibus deleniti sapiente explicabo eum ducimus corporis sed aliquid non. Nemo vitae reprehenderit eius iusto illo excepturi ipsum rerum numquam!"
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
