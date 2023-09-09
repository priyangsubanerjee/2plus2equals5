import React from "react";

function Footer({ hideColumns = false }) {
  return (
    <footer className="">
      <div className="grid grid-cols-2 divide-x divide-black border-y border-black">
        <div className="relative">
          <div className="p-8">
            <p
              style={{
                visibility: hideColumns ? "hidden" : "visible",
              }}
              className="text-xl leading-6 font-light"
            >
              Стремясь к всеобщему миропорядку, общество правил и стандартов
              приводит индивидуальность человека к единому знаменателю. Сознание
              принимает заданную извне форму, начинает двигаться по
              общепринятому вектору. Эта инерция создает мироустройство, где
              каждый мыслит согласно заданному формату «2х2=4» и постепенно
              становится тем, во что верит.
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <button className="h-16 w-48 bg-black text-white">о проекте</button>
          </div>
        </div>
        <div className="flex justify-between">
          <div
            style={{
              visibility: hideColumns ? "hidden" : "visible",
            }}
            className="p-8 w-[371px]"
          >
            <p className="text-sm leading-6 font-light">
              «Дваждыдвапять» — это формула свободы воли. Исследуя символы
              забетонированного мира, мы тихо и громко напоминаем о возможности
              выбора и индивидуальности. Этот заряд создает траекторию, ведущую
              сквозь монументальные конструкции восприятия.
            </p>
          </div>
          <div className="border-l border-black">
            <div className="-ml-[3px] -mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="full"
                height="full"
                viewBox="0 0 283 295"
                fill="none"
              >
                <path
                  d="M178.155 293.555L212.457 200.414L212.421 200.414M178.155 293.555L212.56 200.136L212.477 200.361L212.421 200.414M178.155 293.555L143.754 200.396L212.421 200.414L212.421 200.414M178.155 293.555L212.421 200.414M282.5 293.389L213.729 200.415H213.734L213.734 200.414H282.5V293.389ZM281.439 134.404L213.404 199.474L190.499 134.11L281.439 134.404ZM281.147 67.814L190.063 132.814L167.113 67.3537L281.147 67.814ZM166.675 66.1196L143.132 0.5H280.808L166.675 66.1196ZM2.608 0.5H141.715L118.517 66.2527L2.608 0.5ZM2.99031 67.7972L118.085 67.4842L95.2061 133.172L2.99031 67.7972ZM2.68808 133.687L94.7578 134.459L72.2333 199.102L72.2112 199.04L71.8531 199.524L2.68808 133.687ZM72.6958 200.396H72.7687H142.305L105.991 293.552L72.6958 200.396ZM71.209 200.396L2.50003 293.351V200.396H71.209Z"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[83px] px-7 flex items-center text-sm">
        <span className="uppercase">
          шоурум. Москва. Спасоглинищеский переулок 13/2.
        </span>
        <span className="ml-16 uppercase">2х2=5@gmail.com</span>
        <span className="ml-auto uppercase">created by artem shaginyan</span>
        <span className="flex items-center ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="2"
            viewBox="0 0 568 2"
            fill="none"
          >
            <path d="M0 1L568 1.00005" stroke="black" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="29"
            viewBox="0 0 15 29"
            className="-ml-[13px] -mt-[1px]"
            fill="none"
          >
            <path
              d="M0.82114 28.2582L14.2584 14.8209L0.437221 0.999791"
              stroke="black"
            />
          </svg>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
