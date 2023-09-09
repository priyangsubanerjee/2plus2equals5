import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

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
        <nav className="flex shrink-0 items-center px-10 h-[50px] border-b border-black justify-between relative">
          {firstMenuOpen && (
            <div className="firstMenu absolute z-20 border border-black min-h-[490px] top-[49px] left-0 w-[275px] bg-white px-[38px] py-[30px]">
              <ul className="text-sm space-y-3">
                <li>ОН</li>
                <li>ОНА</li>
              </ul>

              <div className="mt-10">
                <p className="uppercase font-medium text-sm">всЕ ТОВАРЫ</p>
                <ul className="text-sm space-y-3 mt-3 uppercase">
                  <li>футболки</li>
                  <li>рубашки</li>
                  <li>лонгсливы</li>
                  <li>рубашки-ветровки</li>
                  <li>худи</li>
                  <li>толстовки</li>
                  <li>свитшоты</li>
                  <li>ветровки</li>
                </ul>
              </div>
            </div>
          )}
          <ul className="flex items-center space-x-7 uppercase text-sm">
            <li>о проекте</li>
            <li
              className="cursor-pointer select-none"
              onClick={() => setFirstMenuOpen(!firstMenuOpen)}
            >
              КАТАЛОГ
            </li>
            <li>акции</li>
            <li>ТИХО</li>
            <li>ГРОМКО</li>
          </ul>
          <div className="-translate-x-[40%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="231"
              height="11"
              viewBox="0 0 231 11"
              fill="none"
            >
              <g clip-path="url(#clip0_1_5)">
                <path
                  d="M15.3506 0H2.35646V4.23884H0V10.9945H2.55844V6.75564H15.0813V10.9945H17.6398V4.23884H15.3506V0ZM12.7922 4.23884H4.91489V2.51681H12.7922V4.23884Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M88.872 0H75.8779V4.23884H73.5214V10.9945H76.0799V6.75564H88.6027V10.9945H91.1612V4.23884H88.872V0ZM86.3136 4.23884H78.4363V2.51681H86.3136V4.23884Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M127.653 0H114.658V4.23884H112.302V10.9945H114.86V6.75564H127.383V10.9945H129.942V4.23884H127.653V0ZM125.094 4.23884H117.217V2.51681H125.094V4.23884Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M198.548 2.51681H206.089V11H208.647V2.51681H216.188V0H198.548V2.51681Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M34.5165 0H19.3903V10.9945H37.03V4.23884H34.5165V0ZM21.9487 2.51681H31.958V4.23884H21.9487V2.51681ZM34.4716 8.47767H21.9487V6.75564H34.4716V8.47767Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M219.824 4.23884V0H217.265V10.9945H231V4.23884H219.824ZM228.442 8.47767H219.824V6.75564H228.442V8.47767Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M49.8222 0.132446H38.6459V11H41.2043V6.75563H49.8222V11H52.3806V0.132446H49.8222ZM49.8222 4.23882H41.2043V2.64926H49.8222V4.23882Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M177.744 0H169.194H168.79H166.635V10.9945H169.194V2.51681H177.744V10.9945H180.303V0H178.552H177.744Z"
                  fill="#1D1D1B"
                />
                <path d="M110.686 0H108.128V11H110.686V0Z" fill="#1D1D1B" />
                <path
                  d="M146.785 0H131.659V10.9945H149.298V4.23884H146.785V0ZM134.217 2.51681H144.226V4.23884H134.217V2.51681ZM146.74 8.47767H134.217V6.75564H146.74V8.47767Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M162.461 0H151.217V10.9945H153.776V6.75564H162.461V10.9945H165.019V0H162.461ZM162.461 4.23884H153.776V2.51681H162.461V4.23884Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M95.3355 0H92.777V10.9945H106.512V4.23884H95.3355V0ZM103.953 6.75564V8.47767H95.3355V6.75564H103.953Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M184.135 4.23884H181.649V11H184.208V6.75564H195.047V11H197.606V0H184.135V4.23884ZM186.693 2.51681H195.047V4.23884H186.693V2.51681Z"
                  fill="#1D1D1B"
                />
                <path
                  d="M69.4201 0.132446H66.8616V4.23882H64.3874V0.132446H61.8289V4.23882H59.1863V0.132446H56.6279V4.23882H54.1312V11H56.6896V6.75563H61.8289V11H64.3874V6.75563H69.3471V11H71.9056V4.23882H69.4201V0.132446Z"
                  fill="#1D1D1B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5">
                  <rect width="231" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <ul className="flex items-center space-x-5 uppercase text-sm">
            <li>войти</li>
            <li>корзина</li>
            <li>ru</li>
          </ul>
        </nav>
        <div className="grid shrink-0 grid-cols-2 divide-x divide-black">
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
      </section>{" "}
      <section
        id="appLayer"
        className={`flex min-h-screen flex-col h-screen overflow-auto`}
      >
        <div className=" h-full bg-red-50 flex items-center overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://res.cloudinary.com/dxgffzdxi/image/upload/v1693655587/2plus2equals5/2fcf714473b57b315b42f13b7075091f_q4r269.jpg"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
