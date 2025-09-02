import Link from "next/link"
import { useEffect , useState } from 'react'

export default function Hero() {
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkIsMobile = () => {
          const userAgent = window.navigator.userAgent;
          setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
      };

      checkIsMobile();

      window.addEventListener("resize", checkIsMobile);

      return () => {
          window.removeEventListener("resize", checkIsMobile);
      };
  }, []);

    return (
        <div className={`${isMobile ? "mt-36 flex flex-col items-center justify-center" : "mt-36 m-auto max-w-[1000px]"}`}>
            <p className="text-aqua text-base flex flex-col items-center justify-center">Hi, my name is</p>
            <h1 className={`${isMobile ? "pt-4 text-5xl font-bold text-white" : "pt-4 text-7xl font-bold text-white"}`}>Ian Holsteen.</h1>
            <h1 className={`${isMobile ? "pt-4 text-3xl font-bold text-silver" : "pt-4 text-7xl font-bold text-silver"}`}>I'm a Digital Crafter.</h1>
            <p className="pt-8 pb-4 text-xl w-1/2 text-silver">I am a musician and software engineer that has a passion for <em className="text-salmon not-italic">creativity.</em></p>
            <button className="px-8 py-2 mt-10 border border-mustard text-mustard"><Link href="/contact">Say hello</Link></button>
        </div>
    );
}