import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface PhoneNavProps {
    isToggleBar: boolean;
    setIsToggleBar: Dispatch<SetStateAction<boolean>>;
  }

const PhoneNav : React.FC<PhoneNavProps>=({isToggleBar,setIsToggleBar})=>{
    return( <div className={` ${isToggleBar?"translate-y-0":"-translate-y-[100%]"} md:hidden absolute flex justify-center transition-all p-4 items-center flex-col top-0 right-0 z-20 w-full h-[200px] bg-black`}>
    <ul className=" flex flex-col gap-4 items-center">
      <li className="">
        {" "}
        <Link
          onClick={() => {
            setIsToggleBar(false);
          }}
          href={"/"}
        >
          {" "}
          About{" "}
        </Link>
      </li>
      <li className="">
        {" "}
        <Link
          onClick={() => {
            setIsToggleBar(false);
          }}
          href={"/project"}
        >
          {" "}
          Project{" "}
        </Link>
      </li>
      <li className="">
        {" "}
        <Link
          onClick={() => {
            setIsToggleBar(false);
          }}
          href={"/contact"}
        >
          {" "}
          Contact{" "}
        </Link>
      </li>
    </ul>
  </div>)
  }

  export default PhoneNav;