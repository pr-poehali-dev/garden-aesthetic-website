
import { Button } from "@/components/ui/button";

const BeginnerTipsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#FEFAE0]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] w-16 bg-[#606C38]"></div>
          <span className="mx-4 text-sm text-[#606C38] uppercase tracking-widest">Для начинающих</span>
          <div className="h-[1px] w-16 bg-[#606C38]"></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl text-[#606C38] mb-8 text-center font-['Cormorant']">
          СОВЕТЫ ДЛЯ НОВИЧКОВ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="font-['Cormorant'] text-2xl text-[#606C38] mb-4">Начните с малого</h3>
            <p className="text-[#555555] mb-4">Не пытайтесь сразу создать идеальный сад. Начните с нескольких растений, которые несложно выращивать.</p>
            <Button className="bg-[#606C38] hover:bg-[#4c5a26] text-white rounded-sm">
              ПОДРОБНЕЕ
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="font-['Cormorant'] text-2xl text-[#606C38] mb-4">Познайте свою почву</h3>
            <p className="text-[#555555] mb-4">Качество почвы — основа успешного садоводства. Научитесь определять тип почвы и как её улучшить.</p>
            <Button className="bg-[#606C38] hover:bg-[#4c5a26] text-white rounded-sm">
              ПОДРОБНЕЕ
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-sm shadow-sm">
            <h3 className="font-['Cormorant'] text-2xl text-[#606C38] mb-4">Сезонное планирование</h3>
            <p className="text-[#555555] mb-4">Создайте календарь посадок и ухода за садом. Правильное планирование — залог красивого сада круглый год.</p>
            <Button className="bg-[#606C38] hover:bg-[#4c5a26] text-white rounded-sm">
              ПОДРОБНЕЕ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerTipsSection;
