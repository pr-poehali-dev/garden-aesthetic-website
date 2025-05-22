
import { Card } from "@/components/ui/card";

interface TipCardProps {
  title: string;
  content: string;
  quote: string;
}

const TipCard = ({ title, content, quote }: TipCardProps) => {
  return (
    <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow border-none">
      <h3 className="text-xl font-serif font-medium text-garden-green mb-4">{title}</h3>
      <p className="mb-4 text-[#555555]">{content}</p>
      <p className="text-garden-green italic text-sm">{quote}</p>
    </Card>
  );
};

const BeginnerTipsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-garden-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-garden-green mb-4">
            СОВЕТЫ ДЛЯ НАЧИНАЮЩИХ
          </h2>
          <p className="max-w-2xl mx-auto text-[#555555]">
            Начать путь в садоводстве может показаться сложным, но на самом деле для этого нужно всего несколько простых шагов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TipCard 
            title="Начните с малого"
            content="Одно растение на подоконнике — это уже начало. Выберите неприхотливое растение, которое будет радовать вас каждый день."
            quote={'\"Путь в тысячу миль начинается с первого шага.\" — Лао-цзы'}
          />
          
          <TipCard 
            title="Выделите 5 минут в день"
            content="Уход за растениями не требует много времени. Даже 5 минут ежедневного внимания могут творить чудеса для ваших зеленых друзей."
            quote={'\"Постоянство — залог успеха в садоводстве.\"'}
          />
          
          <TipCard 
            title="Отпустите страх неудачи"
            content="Даже опытные садоводы теряют растения. Каждая неудача — это урок, который приближает вас к мастерству."
            quote={'\"В саду больше растёт, чем посажено садовником.\"'}
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <p className="text-[#606C38] italic font-['Cormorant'] text-xl">
                {"\"Лучшее время посадить дерево было 20 лет назад. Второе лучшее время — сейчас.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerTipsSection;
