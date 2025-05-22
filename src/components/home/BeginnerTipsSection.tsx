
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BeginnerTipsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant'] text-3xl md:text-4xl text-[#606C38] mb-3">НАЧНИТЕ СВОЙ ПУТЬ В МИР РАСТЕНИЙ</h2>
          <p className="text-[#555555] max-w-2xl mx-auto">Для тех, кто мечтает о своем саде, но постоянно откладывает первый шаг</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TipCard 
            title="Начните с малого"
            content="Одно растение на подоконнике — это уже начало. Выберите неприхотливое растение, которое будет радовать вас каждый день."
            quote=""Путь в тысячу миль начинается с первого шага." — Лао-цзы"
          />
          
          <TipCard 
            title="Выделите 5 минут в день"
            content="Уход за растениями не требует много времени. Даже 5 минут ежедневного внимания могут творить чудеса для ваших зеленых друзей."
            quote=""Постоянство — залог успеха в садоводстве.""
          />
          
          <TipCard 
            title="Отпустите страх неудачи"
            content="Даже опытные садоводы теряют растения. Каждая неудача — это урок, который приближает вас к мастерству."
            quote=""В саду больше растёт, чем посажено садовником.""
          />
        </div>
        
        <InspirationalBlock />
        
        <ProcrastinationSection />
      </div>
    </section>
  );
};

interface TipCardProps {
  title: string;
  content: string;
  quote: string;
}

const TipCard = ({ title, content, quote }: TipCardProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-[#DDA15E] hover:shadow-lg transition-shadow duration-300">
      <h3 className="font-['Cormorant'] text-xl text-[#606C38] mb-4">{title}</h3>
      <p className="text-[#555555] mb-4">{content}</p>
      <p className="italic text-[#DDA15E]">{quote}</p>
    </div>
  );
};

const InspirationalBlock = () => {
  return (
    <div className="mt-12 p-8 bg-[#606C38] text-white rounded-md relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <h3 className="font-['Cormorant'] text-2xl mb-4">Готовы начать уже сегодня?</h3>
        <p className="mb-6 max-w-3xl">Садоводство — это не только забота о растениях, но и забота о себе. Каждый момент, проведенный с растениями, помогает снизить стресс, очистить мысли и найти радость в простых вещах.</p>
        <Button className="bg-[#DDA15E] hover:bg-[#c9925a] text-white rounded-sm px-8 py-2">
          ПОЛУЧИТЬ СТАРТОВЫЙ НАБОР СОВЕТОВ
        </Button>
      </div>
    </div>
  );
};

const ProcrastinationSection = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070" 
          alt="Руки в земле с растением" 
          className="rounded-md shadow-lg"
        />
      </div>
      <div>
        <h3 className="font-['Cormorant'] text-2xl text-[#606C38] mb-4">Почему мы откладываем?</h3>
        <ul className="space-y-4 text-[#555555]">
          <ProcrastinationReason 
            title="Страх неизвестного"
            content="Садоводство кажется сложным, но начать можно с простых растений, которые практически невозможно погубить."
          />
          <ProcrastinationReason 
            title="Перфекционизм"
            content="Не нужно сразу создавать идеальный сад. Природа несовершенна, и в этом её красота."
          />
          <ProcrastinationReason 
            title="Нехватка времени"
            content="Многие растения требуют минимального ухода. Начните с тех, что подходят вашему ритму жизни."
          />
        </ul>
        <Separator className="my-6 bg-[#DDA15E] opacity-50" />
        <p className="text-[#606C38] italic font-['Cormorant'] text-xl">
          "Лучшее время посадить дерево было 20 лет назад. Второе лучшее время — сейчас."
        </p>
      </div>
    </div>
  );
};

interface ProcrastinationReasonProps {
  title: string;
  content: string;
}

const ProcrastinationReason = ({ title, content }: ProcrastinationReasonProps) => {
  return (
    <li className="flex items-start">
      <span className="text-[#DDA15E] mr-2">✦</span>
      <p><strong>{title}</strong> — {content}</p>
    </li>
  );
};

export default BeginnerTipsSection;
