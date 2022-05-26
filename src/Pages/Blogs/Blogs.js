import React from "react";

const Blogs = () => {
  return (
    <section className=" my-16 bg-slate-50">
      <div className="bg-base-100 container mx-auto p-10">
        <h2 className="text-4xl border-b-2 text-gray-500 pb-1 ">
          Our Questions Answer
        </h2>

        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl mb-3">
            1. How will you improve the performance of a React Application?
          </h4>
          <p>
            There have more many way to improve my react application performance
            I can use immutable data structure, function stateless component,
            multiple chunk file, using product modal flage in webpack dependency
            optimization, avoid inline function definition in the rander
            function avid using index as key for map etc.
          </p>
        </div>
        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl mb-3">
            2. What are the different ways to manage a state in a React
            application?
          </h4>
          <p>
            There are four main four types of state. Local state, global state,
            server state and url state. Local state we manage data in component
            and other component. Global component mange data in multiple
            component. Server sate come from external server. Url state data
            exist on our url. Including the pathname and query parameter.
          </p>
        </div>
        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl mb-3">
            3. How does prototypical inheritance work?
          </h4>
          <p>
            Prototypeicla inheritance feature in javascript. It used add method
            and properties. It is a object. In can inherit the properties and
            method. Of another object.
          </p>
        </div>
        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl ">
            4. Why you do not set the state directly in React?
          </h4>
          <p>
            When you directly update the state, it does not change this.state
            immediately. Instead, it creates a pending state transition, and
            accessing it after calling this method will only return the present
            value.
          </p>
        </div>
        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl mb-3">
            5. You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h4>
          <p>
            I will use filter method for find the product by name. Filter method
            return a new arry i will set a condition by name for searching. At
            first will mapping the array. I will get form map every procut. The
            i will implement the filter method with condition procut dot name.
            Then i will get return a new array.
          </p>
        </div>
        <div className="mt-10 border-b pb-5">
          <h4 className="text-2xl mb-3">
            6. What is a unit test? Why should write unit tests?
          </h4>
          <p>
            Unit test automatically tests written and run by software developer
            to ensure that a section of an application meet its design an
            behaves as intended.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
