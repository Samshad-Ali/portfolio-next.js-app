import crypto from "./../../../public/crypto.png";
import oyo from "../../../public/oyo.png";
import youtube from "../../../public/youtube.png";
import { StaticImageData } from "next/image";

export interface IData {
    name:string,
    img:StaticImageData,
    link:string

}

export const data : IData[] = [
  {
    name: "Youtube Clone Nextjs",
    img: youtube,
    link: "https://youtube-clone-next-app.netlify.app/",
  },
 
  {
    name: "Crypto Web-App",
 
    img: crypto,
    link: "https://crypto-web-app-react.netlify.app",
  },
 
  {
    name: "Oyo-Clone",
    img: oyo,
    link: "https://github.com/Samshad-Ali/oyo-clone-full-stack-app",
  },
 
];

export default data;
