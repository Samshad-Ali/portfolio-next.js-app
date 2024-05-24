"use client";
import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import { useTypewriter } from "react-simple-typewriter";
const Homepage = () => {
  const [text] = useTypewriter({
    words: ["React Developer", "Nextjs (Full Stack)", "A Learner"],
    loop: true,
  });
  return (
    <div className="w-full  h-full flex gap-4 justify-center items-center flex-col">
      <div className="bg-orange-600 p-2 rounded-full">
        <Image src={avatar} alt="avatar" width={500} height={500}
        className="rounded-full w-[280px]  md:w-[320px] object-cover"
        />
      </div>
      <h1 className="text-3xl font-extrabold text-blue-600">Samshad Ali 👋</h1>
      <p className="text-orange-600 font-bold text-xl"> I am  <span className="text-white"> {text} </span> </p>
      <p className="text-gray-400">I am a motivated and enthusiastic React developer, eager to launch a career in web development. With a solid understanding of JavaScript and React, gained through personal projects and coursework, i am passionate about creating dynamic and responsive web applications. Ready to contribute fresh ideas and innovative solutions, I am committed to continuous learning and professional growth.</p>
    </div>
  );
};

export default Homepage;
