import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [firstMenuOpen, setFirstMenuOpen] = useState(false);

  useEffect(() => {
    document.getElementById("appLayer").addEventListener("click", (e) => {
      if (e.target.closest(".firstMenu")) return;
      setFirstMenuOpen(false);
    });
  }, []);

  return (
    <main>
      <section
        id="appLayer"
        className={`flex min-h-screen flex-col h-screen overflow-auto`}
      >
        <div className="grid shrink-0 grid-cols-2 divide-x divide-black border-b border-black">
          <button className="h-[99px] flex items-center justify-center">
            <span>он</span>
          </button>
          <button className="h-[99px] flex items-center justify-center">
            <span>она</span>
          </button>
        </div>

        <div className=" h-full bg-red-50 flex items-center overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/dxgffzdxi/image/upload/v1693655587/2plus2equals5/2fcf714473b57b315b42f13b7075091f_q4r269.jpg"
            alt=""
          />
        </div>
      </section>
      <section
        id="appLayer"
        className={`flex min-h-screen flex-col h-screen overflow-auto`}
      >
        <div className="h-full relative flex items-center overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="/hero-4.png"
            alt=""
          />
          <p className="absolute top-16 left-9 uppercase leading-9">
            Провокация, заложенная <br /> в основу бренда, отражает <br />{" "}
            внутренний бунт, который <br /> способен преодолеть <br /> рамки
            привычного
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
