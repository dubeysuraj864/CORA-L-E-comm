import { useState } from "react";

function Description() {
  const [para, setPara] =
    useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, autem. A obcaecati magni, labore quibusdam ipsum eum cupiditate minus maiores libero pariatur? Pariatur tenetur eos fuga deleniti dicta ut error quasi tempora autem accusantium cum, odio facere? Quisquam nobis molestias accusamus temporibus nostrum illo alias ipsa rem, laudantium aspernatur?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, autem. A obcaecati magni, labore quibusdam ipsum eum cupiditate minus maiores libero pariatur? Pariatur tenetur eos fuga deleniti dicta ut error quasi tempora autem accusantium cum, odio facere? Quisquam nobis molestias accusamus temporibus nostrum illo alias ipsa rem, laudantium aspernatur?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, autem. A obcaecati magni, labore quibusdam ipsum eum cupiditate minus maiores libero pariatur? Pariatur tenetur eos fuga deleniti dicta ut error quasi tempora autem accusantium cum, odio facere? Quisquam nobis molestias accusamus temporibus nostrum illo alias ipsa rem, laudantium aspernatur? Nulla.`);
  return (
    <>
      <div className="flex flex-col mb-5 w-full md:max-w-[80%] ">
        <div className="description bg-white rounded-md p-2 ">
          <section className="p-1 flex flex-col items-start md:flex-row">
            <span
              onClick={() => {
                setPara(`Product Description`);
              }}
              className="md:mx-2 cursor-pointer bg-gray-100 my-1 text-[#626262] hover:bg-[#1B4B66] px-4 py-2.5 rounded-lg text-center hover:text-white transition-all text-sm"
            >
              Product Description
            </span>
            <span
              onClick={() => {
                setPara(`Related Products`);
              }}
              className="md:mx-2 cursor-pointer  bg-gray-100 my-1 text-[#626262] hover:bg-[#1B4B66] px-4 py-2.5 rounded-lg text-center hover:text-white transition-all text-sm"
            >
              Related Products
            </span>
            <span
              onClick={() => {
                setPara(`Ratings and Reviews`);
              }}
              className="md:mx-2 cursor-pointer bg-gray-100 my-1 text-[#626262] hover:bg-[#1B4B66] px-4 py-2.5 rounded-lg text-center hover:text-white transition-all text-sm"
            >
              Ratings and Reviews
            </span>
          </section>
        </div>
        <p className="my-5 px-2 text-justify leading-7 text-[#626262] text-sm">
          {para}
        </p>
      </div>
    </>
  );
}

export default Description;
