
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="md:order-2 flex flex-col justify-center">
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-12 bg-[#606C38]"></div>
            <span className="mx-4 text-sm text-[#606C38] uppercase tracking-widest">Добро пожаловать</span>
            <div className="h-[1px] w-12 bg-[#606C38]"></div>
          </div>
          <h2 className="font-['Cormorant'] text-3xl md:text-4xl text-[#606C38] mb-6 text-center">
            ЗДРАВСТВУЙТЕ, Я МАРИНА!
          </h2>
          <p className="mb-4 text-[#555555]">
            Садовод, флорист, дизайнер ландшафтов и любитель всего прекрасного. Я хочу поделиться с вами своими знаниями, пока мы вместе исследуем устойчивое садоводство, красивые растения, идеи для сада и истории из нашего загородного дома.
          </p>
          <p className="mb-6 text-[#555555]">
            Мой путь начался более 10 лет назад с маленького огорода на даче, который превратился в настоящий райский уголок, где каждый сезон приносит новые открытия и радости.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#DDA15E] hover:bg-[#c9925a] text-white rounded-sm px-8 py-2">
              МОЯ ИСТОРИЯ
            </Button>
          </div>
        </div>
        <div className="md:order-1 flex items-center justify-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974" 
              alt="Марина в саду" 
              className="rounded-md w-full max-w-md object-cover shadow-lg" 
              style={{ height: "500px" }}
            />
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-[#606C38] rounded-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
