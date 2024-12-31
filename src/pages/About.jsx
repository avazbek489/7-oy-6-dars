import React from "react";

function About() {
  return (
    <div className="mt-[75px] flex container mx-auto justify-center items-center flex-col gap-5">
      <div className="flex gap-6 items-center justify-center">
        <h1 className="text-4xl tracking-tight sm:text-6xl text-gray-600 font-bold">
          We love
        </h1>
        <span className="stat-title p-4 text-primary-content text-4xl font-bold  tracking-widest bg-blue-500 px-6 rounded-2xl flex items-center justify-center">
          comfy
        </span>
      </div>
      <div className="">
        <p className="text-lg mx-auto mt-1 leading-8 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </div>
  );
}

export default About;
