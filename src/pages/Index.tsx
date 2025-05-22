import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  useEffect(() => {
    // Устанавливаем заголовок страницы
    document.title = "Садовая Эстетика | Стиль, Рецепты и Истории из Сада";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FEFAE0] text-[#333333]">
      {/* Шапка сайта */}
      <header className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center py-4 px-8 md:px-12 lg:px-16">
        <div className="flex items-center">
          <h1 className="text-lg md:text-xl font-medium text-white">
            Садовая Эстетика
          </h1>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className="text-white hover:opacity-75 transition-opacity duration-200"
          >
            ГЛАВНАЯ
          </Link>
          <Link
            to="/blog"
            className="text-white hover:opacity-75 transition-opacity duration-200"
          >
            БЛОГ
          </Link>
          <Link
            to="/contact"
            className="text-white hover:opacity-75 transition-opacity duration-200"
          >
            КОНТАКТЫ
          </Link>
          <Link
            to="/about"
            className="text-white hover:opacity-75 transition-opacity duration-200"
          >
            О НАС
          </Link>
        </nav>
      </header>

      {/* Главный раздел с полноэкранным фоном */}
      <section
        className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-1 max-w-4xl mx-auto">
          <h2 className="font-['Cormorant'] text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4">
            СТИЛЬ, РЕЦЕПТЫ И ИСТОРИИ
          </h2>
          <p className="font-['Cormorant'] text-2xl md:text-3xl text-white italic mb-8">
            из нашего сада
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Блог о садоводстве и жизни в гармонии с природой, где мы делимся
            нашим опытом создания уютного пространства в собственном саду
          </p>
          <Button
            className="bg-[#606C38] hover:bg-[#4c5a26] text-white rounded-sm px-8 py-2"
            asChild
          >
            <Link to="/explore">ИЗУЧИТЬ</Link>
          </Button>
        </div>
      </section>

      {/* О нас секция */}
      <section className="py-16 px-4 md:px-8 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="md:order-2 flex flex-col justify-center">
            <div className="flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-[#606C38]"></div>
              <span className="mx-4 text-sm text-[#606C38] uppercase tracking-widest">
                Добро пожаловать
              </span>
              <div className="h-[1px] w-12 bg-[#606C38]"></div>
            </div>
            <h2 className="font-['Cormorant'] text-3xl md:text-4xl text-[#606C38] mb-6 text-center">
              ЗДРАВСТВУЙТЕ, Я МАРИНА!
            </h2>
            <p className="mb-4 text-[#555555]">
              Садовод, флорист, дизайнер ландшафтов и любитель всего
              прекрасного. Я хочу поделиться с вами своими знаниями, пока мы
              вместе исследуем устойчивое садоводство, красивые растения, идеи
              для сада и истории из нашего загородного дома.
            </p>
            <p className="mb-6 text-[#555555]">
              Мой путь начался более 10 лет назад с маленького огорода на даче,
              который превратился в настоящий райский уголок, где каждый сезон
              приносит новые открытия и радости.
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

      {/* Цитата */}
      <section className="py-20 px-4 bg-[#FEFAE0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Cormorant'] text-2xl md:text-3xl lg:text-4xl italic text-[#606C38] leading-relaxed">
            "Я верю в простую жизнь, в возвращение к нашим корням и помощь
            другим сделать то же самое через красоту садоводства."
          </p>
        </div>
      </section>

      {/* Изображение природы */}
      <section className="relative h-96 md:h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070"
          alt="Природа"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Блок для начинающих */}
      <section className="py-16 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Cormorant'] text-3xl md:text-4xl text-[#606C38] mb-3">
              НАЧНИТЕ СВОЙ ПУТЬ В МИР РАСТЕНИЙ
            </h2>
            <p className="text-[#555555] max-w-2xl mx-auto">
              Для тех, кто мечтает о своем саде, но постоянно откладывает первый
              шаг
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Карточка совета 1 */}
            <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-[#DDA15E] hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-['Cormorant'] text-xl text-[#606C38] mb-4">
                Начните с малого
              </h3>
              <p className="text-[#555555] mb-4">
                Одно растение на подоконнике — это уже начало. Выберите
                неприхотливое растение, которое будет радовать вас каждый день.
              </p>
              <p className="italic text-[#DDA15E]">
                "Путь в тысячу миль начинается с первого шага." — Лао-цзы
              </p>
            </div>

            {/* Карточка совета 2 */}
            <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-[#DDA15E] hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-['Cormorant'] text-xl text-[#606C38] mb-4">
                Выделите 5 минут в день
              </h3>
              <p className="text-[#555555] mb-4">
                Уход за растениями не требует много времени. Даже 5 минут
                ежедневного внимания могут творить чудеса для ваших зеленых
                друзей.
              </p>
              <p className="italic text-[#DDA15E]">
                "Постоянство — залог успеха в садоводстве."
              </p>
            </div>

            {/* Карточка совета 3 */}
            <div className="bg-white p-6 rounded-md shadow-md border-l-4 border-[#DDA15E] hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-['Cormorant'] text-xl text-[#606C38] mb-4">
                Отпустите страх неудачи
              </h3>
              <p className="text-[#555555] mb-4">
                Даже опытные садоводы теряют растения. Каждая неудача — это
                урок, который приближает вас к мастерству.
              </p>
              <p className="italic text-[#DDA15E]">
                "В саду больше растёт, чем посажено садовником."
              </p>
            </div>
          </div>

          {/* Вдохновляющий блок */}
          <div className="mt-12 p-8 bg-[#606C38] text-white rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="font-['Cormorant'] text-2xl mb-4">
                Готовы начать уже сегодня?
              </h3>
              <p className="mb-6 max-w-3xl">
                Садоводство — это не только забота о растениях, но и забота о
                себе. Каждый момент, проведенный с растениями, помогает снизить
                стресс, очистить мысли и найти радость в простых вещах.
              </p>
              <Button className="bg-[#DDA15E] hover:bg-[#c9925a] text-white rounded-sm px-8 py-2">
                ПОЛУЧИТЬ СТАРТОВЫЙ НАБОР СОВЕТОВ
              </Button>
            </div>
          </div>

          {/* Секция "Не откладывайте" */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070"
                alt="Руки в земле с растением"
                className="rounded-md shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-['Cormorant'] text-2xl text-[#606C38] mb-4">
                Почему мы откладываем?
              </h3>
              <ul className="space-y-4 text-[#555555]">
                <li className="flex items-start">
                  <span className="text-[#DDA15E] mr-2">✦</span>
                  <p>
                    <strong>Страх неизвестного</strong> — Садоводство кажется
                    сложным, но начать можно с простых растений, которые
                    практически невозможно погубить.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DDA15E] mr-2">✦</span>
                  <p>
                    <strong>Перфекционизм</strong> — Не нужно сразу создавать
                    идеальный сад. Природа несовершенна, и в этом её красота.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[#DDA15E] mr-2">✦</span>
                  <p>
                    <strong>Нехватка времени</strong> — Многие растения требуют
                    минимального ухода. Начните с тех, что подходят вашему ритму
                    жизни.
                  </p>
                </li>
              </ul>
              <Separator className="my-6 bg-[#DDA15E] opacity-50" />
              <p className="text-[#606C38] italic font-['Cormorant'] text-xl">
                "Лучшее время посадить дерево было 20 лет назад. Второе лучшее
                время — сейчас."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-12 px-4 bg-[#FEFAE0]">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-8 bg-[#DDA15E]" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl md:text-2xl font-['Cormorant'] text-[#606C38]">
            <Link
              to="/design"
              className="hover:text-[#DDA15E] transition-colors duration-200"
            >
              ДИЗАЙН
            </Link>
            <span className="text-[#DDA15E]">/</span>
            <Link
              to="/style"
              className="hover:text-[#DDA15E] transition-colors duration-200"
            >
              СТИЛЬ
            </Link>
            <span className="text-[#DDA15E]">/</span>
            <Link
              to="/gardening"
              className="hover:text-[#DDA15E] transition-colors duration-200"
            >
              САДОВОДСТВО
            </Link>
            <span className="text-[#DDA15E]">/</span>
            <Link
              to="/recipes"
              className="hover:text-[#DDA15E] transition-colors duration-200"
            >
              РЕЦЕПТЫ
            </Link>
          </div>
          <Separator className="mt-8 bg-[#DDA15E]" />
        </div>
      </section>

      {/* Подвал */}
      <footer className="py-8 px-4 bg-[#606C38] text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">© 2025 Садовая Эстетика. Все права защищены.</p>
          <p className="text-sm opacity-75">
            Создано с любовью к природе и садоводству
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
