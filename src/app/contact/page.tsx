"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsArrowRightShort,
} from "react-icons/bs";
const Page = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      toast.success("Message sumbitted ! I'll reach you ASAP.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("All are required feild.");
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4">
      <h2 className="border-b text-xl">Contact me</h2>
      <div className="w-full flex  flex-col-reverse md:flex-row gap-4 items-center justify-center ">
        <div className=" flex flex-row flex-wrap md:flex-col items-center justify-center flex-1 gap-2">
          <div className=" w-[120px] md:w-[180px] flex flex-col gap-2 items-center justify-center bg-white p-2 px-4 rounded-md  text-black">
            <BsLinkedin />
            <p>LinkedIn</p>
            <a
              className="flex items-center gap-2 hover:gap-5 transition-all shadow-inner shadow-gray-600 rounded-sm w-full justify-center"
              target="_blank"
              href="https://www.linkedin.com/in/samshad-ali-406525256/"
            >
              visit
              <BsArrowRightShort />
            </a>
          </div>
          <div className=" w-[120px] md:w-[180px] flex flex-col gap-2 items-center justify-center bg-white p-2 px-4 rounded-md  text-black">
            <BsGithub />
            <p>Github</p>
            <a
              className="flex items-center gap-2 hover:gap-5 transition-all shadow-inner shadow-gray-600 rounded-sm w-full justify-center"
              target="_blank"
              href="https://github.com/Samshad-Ali"
            >
              visit
              <BsArrowRightShort />
            </a>
          </div>
          <div className=" w-[120px] md:w-[180px] flex flex-col gap-2 items-center justify-center bg-white p-2 px-4 rounded-md  text-black">
            <BsInstagram />
            <p>Instagram</p>
            <a
              className="flex items-center gap-2 hover:gap-5 transition-all shadow-inner shadow-gray-600 rounded-sm w-full justify-center"
              target="_blank"
              href="https://www.instagram.com/___sam___102/"
            >
              visit
              <BsArrowRightShort />
            </a>
          </div>
        </div>
        <div className="border w-full flex-1 rounded-md p-4">
          <form
            onSubmit={submitHandler}
            className="flex flex-col justify-center items-center gap-4"
          >
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="border rounded-md w-full px-2 p-1 resize-none bg-transparent outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="border rounded-md w-full px-2 p-1 resize-none bg-transparent outline-none"
              type="email"
              placeholder="Email"
            />
            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              className="border rounded-md w-full px-2 p-1 resize-none bg-transparent outline-none"
              rows={5}
              placeholder="Write your message here..."
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 transition-all w-full p-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
