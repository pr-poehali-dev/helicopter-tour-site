import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const tours = [
  {
    id: 'mountain',
    title: 'Долина-гейзеров',
    description: 'Частный тур над величественными горными вершинами с персональным пилотом',
    duration: '2 часа',
    price: 'от 150 000 ₽',
    features: ['Частный вертолёт', 'Шампанское на борту', 'Фотосессия'],
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    fullDescription: 'Испытайте незабываемые ощущения полёта над заснеженными вершинами и живописными долинами. Наш эксклюзивный тур включает частный вертолёт с панорамными окнами, профессионального пилота-гида и изысканное шампанское. Маршрут проложен через самые красивые горные пейзажи, где вы сможете насладиться величественными видами и сделать потрясающие фотографии.',
    included: [
      'Трансфер от вашего отеля до вертолётной площадки',
      'Приветственный напиток',
      'Профессиональный пилот с опытом более 5000 часов',
      'Бутылка премиального шампанского на борту',
      'Профессиональная фотосессия в полёте',
      'Сертификат о полёте в подарочной упаковке',
      'Страхование пассажиров'
    ],
    route: [
      'Взлёт с частной вертолётной площадки',
      'Полёт над горными хребтами (45 минут)',
      'Посадка на панорамной площадке для фото',
      'Обзорный полёт над ледниками (30 минут)',
      'Возвращение на базу'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80'
    ]
  },
  {
    id: 'coast',
    title: 'Прибрежная элегантность',
    description: 'Эксклюзивный полёт вдоль побережья с посадкой на частном пляже',
    duration: '3 часа',
    price: 'от 220 000 ₽',
    features: ['VIP-обслуживание', 'Обед в ресторане', 'Трансфер'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    fullDescription: 'Откройте для себя красоту побережья с высоты птичьего полёта. Этот премиальный тур сочетает захватывающий полёт над лазурными водами с изысканным обедом в эксклюзивном прибрежном ресторане. Вы насладитесь панорамными видами, почувствуете морской бриз и получите незабываемые впечатления от посадки на частном пляже.',
    included: [
      'VIP-трансфер на автомобиле премиум-класса',
      'Welcome-зона с прохладительными напитками',
      'Полёт на современном вертолёте Airbus H130',
      'Посадка на частном пляже',
      'Обед из 5 блюд в ресторане с мишленовской звездой',
      'Персональный сомелье и дегустация вин',
      'Аудиогид на борту на русском и английском языках',
      'Фото и видео съёмка полёта'
    ],
    route: [
      'Вылет с VIP-терминала',
      'Обзорный полёт над городской набережной',
      'Маршрут вдоль побережья (60 минут)',
      'Посадка на частном пляже',
      'Обед в прибрежном ресторане (90 минут)',
      'Возвращение через живописные бухты'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80'
    ]
  },
  {
    id: 'night',
    title: 'Ночной город',
    description: 'Романтический полёт над городом в вечерних огнях',
    duration: '1.5 часа',
    price: 'от 120 000 ₽',
    features: ['Панорамные окна', 'Музыкальное сопровождение', 'Напитки'],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    fullDescription: 'Романтический полёт над сверкающим ночным городом — идеальный способ сделать предложение руки и сердца или отпраздновать особенный момент. Насладитесь волшебной атмосферой вечернего неба, тысячами огней внизу и интимной обстановкой на борту. Музыкальное сопровождение создаст неповторимую атмосферу романтики.',
    included: [
      'Романтическое оформление салона вертолёта',
      'Букет свежих цветов',
      'Бутылка игристого вина',
      'Шоколадные конфеты премиум-класса',
      'Персональный плейлист по вашему выбору',
      'Возможность организации предложения руки и сердца',
      'Профессиональная фотосессия',
      'Памятная табличка с вашими именами'
    ],
    route: [
      'Вылет на закате',
      'Полёт над историческим центром города',
      'Обзор главных достопримечательностей в огнях',
      'Маршрут вдоль реки с иллюминацией',
      'Кульминационный момент над центральной площадью',
      'Плавное возвращение на базу'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80'
    ]
  }
];

const TourDetail = () => {
  const { tourId } = useParams();
  const navigate = useNavigate();
  
  const tour = tours.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Тур не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Plane" className="text-accent" size={32} />
              <span className="text-2xl font-bold text-white">SkyLux</span>
            </button>
            <Button onClick={() => navigate('/')} variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="container mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">{tour.title}</h1>
              <div className="flex flex-wrap gap-6 text-white/90 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="DollarSign" size={20} />
                  <span>{tour.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Описание тура</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{tour.fullDescription}</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Что входит в тур</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tour.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Маршрут полёта</h2>
                  <div className="space-y-4">
                    {tour.route.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Галерея</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {tour.gallery.map((image, idx) => (
                      <div key={idx} className="relative h-48 rounded-lg overflow-hidden group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-28 animate-scale-in">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Стоимость</p>
                    <p className="text-4xl font-bold text-accent mb-4">{tour.price}</p>
                    <p className="text-sm text-muted-foreground">за группу до 3 человек</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-lg">Основные особенности:</h3>
                    {tour.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Star" size={18} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg mb-3"
                    onClick={() => navigate('/?section=booking')}
                  >
                    Забронировать тур
                    <Icon name="Calendar" size={20} className="ml-2" />
                  </Button>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => navigate('/?section=contacts')}
                  >
                    <Icon name="Phone" size={18} className="mr-2" />
                    Связаться с нами
                  </Button>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <Icon name="Shield" size={18} className="text-accent" />
                      <span>Полная страховка пассажиров</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <Icon name="Award" size={18} className="text-accent" />
                      <span>Сертифицированные пилоты</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Icon name="Clock" size={18} className="text-accent" />
                      <span>Бесплатная отмена за 48 часов</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-primary/95 text-white py-8 border-t border-accent/20 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-accent" size={28} />
              <span className="text-xl font-bold">SkyLux</span>
            </div>
            <p className="text-sm text-gray-300">
              © 2024 SkyLux. Все права защищены. Премиум вертолётные туры.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TourDetail;