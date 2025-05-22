
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const CategoryCard = ({ title, description, imageUrl, link }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-serif mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-block bg-garden-accent text-white px-4 py-2 rounded-sm text-sm hover:bg-garden-accent/90 transition-colors"
        >
          ИЗУЧИТЬ
        </Link>
      </div>
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-garden-green mb-4">
            ИССЛЕДУЙТЕ КАТЕГОРИИ
          </h2>
          <p className="max-w-2xl mx-auto text-[#555555]">
            Погрузитесь в различные аспекты садовой эстетики, от выращивания растений до создания уютного пространства.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="ДИЗАЙН САДА"
            description="Создайте свой уголок рая с идеями ландшафтного дизайна."
            imageUrl="https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&w=1974"
            link="/design"
          />
          
          <CategoryCard 
            title="ВЫРАЩИВАНИЕ"
            description="Советы по выращиванию здоровых и красивых растений."
            imageUrl="https://images.unsplash.com/photo-1599588865171-d297bbe8f9c4?q=80&w=2070"
            link="/growing"
          />
          
          <CategoryCard 
            title="РЕЦЕПТЫ ИЗ САДА"
            description="Блюда и напитки из свежих продуктов вашего сада."
            imageUrl="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1935"
            link="/recipes"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
