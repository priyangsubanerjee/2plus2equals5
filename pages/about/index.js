import Footer from "@/components/Footer";
import React from "react";

function About() {
  return (
    <main className="h-full overflow-auto">
      <section className="grid grid-cols-2 h-full snap-center snap-always border-b border-black">
        <div className="h-full bg-white grid grid-rows-2">
          <div className="p-8">
            <p className="uppercase text-[60px] leading-none font-light">
              brand <br /> id
            </p>
          </div>
          <div className="p-8 border-t border-black">
            <p className="uppercase w-[80%]">
              «Дваждыдвапять» — Премиальный бренд повседневной и спортивной
              одежды, созданный в 2023 году. В основу концепции заложены
              утилитарность и минималистичный дизайн. Эстетика киберпанка,
              элементарных символов и геометрии отражает черты технологической
              эпохи Web 3.0, в которую уверенно шагнуло человечество. Высокое
              качество и современные материалы являются базовыми принципами
              бренда.
            </p>
          </div>
        </div>
        <div className="flex h-full overflow-hidden">
          <img
            src="/brand-id.png"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </section>
      <section className="h-full snap-always snap-center">
        <div className="p-8">
          <p className="uppercase text-[60px] leading-none font-light">
            провокация <br /> и внутренний <br /> бунт
          </p>
        </div>
        <div className="mt-[120px] h-[380px] border-y border-black grid grid-cols-2  divide-x divide-black">
          <div className="p-8">
            <p className="uppercase">
              Стремясь к всеобщему миропорядку, общество правил и стандартов
              приводит индивидуальность человека к единому знаменателю. Сознание
              принимает заданную извне форму, начинает двигаться по
              общепринятому вектору. Эта инерция создает мироустройство, где
              каждый мыслит согласно заданному формату «2х2=4» и постепенно
              становится тем, во что верит.
            </p>
          </div>
          <div className="p-8 grid grid-cols-2 gap-11">
            <div>
              <p className="text-sm font-light">
                Роман-антиутопия Джорджа Оруэлла «1984» исследует первоисточник
                массового сознания, где алогизм «2х2=5» является символом
                правды. Если все коллективно поверят в него, подтвердит ли это
                его достоверность? Герой романа приходит к неопровержимому
                заключению, что «2х2=5» есть истина ровно в той же степени, как
                и другие возможные результаты, предложенные любым отдельным
                индивидом.
              </p>
            </div>
            <div>
              <p className="text-sm font-light">
                «Дваждыдвапять» — это формула свободы воли. Исследуя символы
                забетонированного мира, мы тихо и громко напоминаем о
                возможности выбора и индивидуальности. Этот заряд создает
                траекторию, ведущую сквозь монументальные конструкции
                восприятия.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-full h-fit snap-start relative">
        <div className="flex items-center justify-center relative">
          <img src="/pucker.png" className="w-[90%] object-contain" alt="" />
          <p className="absolute z-20 left-8 top-44 w-[446px] uppercase">
            «дваждыдвапять» обращается к японским и нордическим направлениям в
            моде, сочетая их с генеративным искусством и эстетикой виртуальной
            реальности. Алогизм в названии бренда — это провокация, которая
            отражает внутренний бунт.
          </p>
        </div>
        <Footer hideColumns={true} />
      </section>
    </main>
  );
}

export default About;
