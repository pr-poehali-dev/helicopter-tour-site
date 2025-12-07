import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => setWelcomeModalOpen(true), 1000);
    }
  }, []);

  const closeWelcomeModal = () => {
    setWelcomeModalOpen(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  const tours = [
    {
      id: 'mountain',
      title: 'Долина-гейзеров',
      description: 'Частный тур над величественными горными вершинами с персональным пилотом',
      duration: '2 часа',
      price: 'от 150 000 ₽',
      features: ['Частный вертолёт', 'Шампанское на борту', 'Фотосессия'],
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80'
    },
    {
      id: 'coast',
      title: 'Прибрежная элегантность',
      description: 'Эксклюзивный полёт вдоль побережья с посадкой на частном пляже',
      duration: '3 часа',
      price: 'от 220 000 ₽',
      features: ['VIP-обслуживание', 'Обед в ресторане', 'Трансфер'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      id: 'night',
      title: 'Ночной город',
      description: 'Романтический полёт над городом в вечерних огнях',
      duration: '1.5 часа',
      price: 'от 120 000 ₽',
      features: ['Панорамные окна', 'Музыкальное сопровождение', 'Напитки'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80',
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&q=80',
    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {welcomeModalOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <Card className="w-80 shadow-2xl border-2 border-accent/30">
            <button
              onClick={closeWelcomeModal}
              className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent/90 transition-colors shadow-lg z-10"
              aria-label="Close"
            >
              <Icon name="X" size={18} />
            </button>
            <CardContent className="p-0">
              <div className="relative w-full aspect-video bg-black rounded-t-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1&mute=1"
                  title="SkyLux Welcome Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold mb-2">
                  Премиальные вертолётные туры
                </p>
                <Button 
                  onClick={closeWelcomeModal}
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-white w-full"
                >
                  Смотреть туры
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-accent" size={32} />
              <span className="text-2xl font-bold text-white"></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'tours', 'gallery', 'about', 'booking', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-white'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'tours' && 'Туры'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'about' && 'О компании'}
                  {section === 'booking' && 'Бронирование'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-accent hover:bg-accent/90 text-white">
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/98 backdrop-blur-md md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {['home', 'tours', 'gallery', 'about', 'booking', 'contacts'].map((section, idx) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMobileMenuOpen(false);
                }}
                className={`text-2xl font-medium transition-colors hover:text-accent animate-fade-in ${
                  activeSection === section ? 'text-accent' : 'text-white'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {section === 'home' && 'Главная'}
                {section === 'tours' && 'Туры'}
                {section === 'gallery' && 'Галерея'}
                {section === 'about' && 'О компании'}
                {section === 'booking' && 'Бронирование'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
            <Button 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 mt-8"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      )}

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Вертолётные туры<br />премиум-класса
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto font-light">
            Откройте мир с высоты птичьего полёта.<br />Эксклюзивные маршруты и персональное обслуживание.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8"
              onClick={() => scrollToSection('tours')}
            >
              Наши туры
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
              onClick={() => scrollToSection('booking')}
            >
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Наши туры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Тщательно разработанные маршруты для незабываемых впечатлений
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                    <Icon name="Clock" size={18} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {tour.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate(`/tour/${tour.id}`)}
                    >
                      Подробнее
                    </Button>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90" 
                      onClick={() => scrollToSection('booking')}
                    >
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">
              Моменты, которые захватывают дух
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx} 
                className="relative h-64 overflow-hidden rounded-lg group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Icon name="Maximize2" className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                SkyLux — ведущий оператор премиальных вертолётных туров с более чем 10-летним опытом. 
                Мы специализируемся на создании незабываемых впечатлений для взыскательных клиентов, 
                ценящих комфорт, безопасность и исключительный сервис.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <div className="text-4xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Безопасность превыше всего</h3>
                    <p className="text-sm text-muted-foreground">Регулярное техническое обслуживание и опытные пилоты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Персональный подход</h3>
                    <p className="text-sm text-muted-foreground">Индивидуальные маршруты под ваши пожелания</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Star" className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">VIP-сервис</h3>
                    <p className="text-sm text-muted-foreground">Премиум обслуживание на каждом этапе вашего путешествия</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80" 
                alt="О компании"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Бронирование</h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и наш менеджер свяжется с вами в ближайшее время
            </p>
          </div>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Иван Петров" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tour">Выберите тур</Label>
                  <Select>
                    <SelectTrigger id="tour">
                      <SelectValue placeholder="Выберите тур" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mountain">Панорама гор</SelectItem>
                      <SelectItem value="coast">Прибрежная элегантность</SelectItem>
                      <SelectItem value="night">Ночной город</SelectItem>
                      <SelectItem value="custom">Индивидуальный маршрут</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Предпочитаемая дата</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Select>
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Выберите количество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 гость</SelectItem>
                      <SelectItem value="2">2 гостя</SelectItem>
                      <SelectItem value="3">3 гостя</SelectItem>
                      <SelectItem value="4">4 гостя</SelectItem>
                      <SelectItem value="5">5+ гостей</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительные пожелания</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших пожеланиях к туру..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-6">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
              <p className="text-gray-300">Ежедневно, 9:00 — 21:00</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@skylux.ru</p>
              <p className="text-gray-300">booking@skylux.ru</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">Москва, Ленинградский проспект, 37</p>
              <p className="text-gray-300">Бизнес-центр "Аэропорт"</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 border-t border-accent/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-accent" size={28} />
              <span className="text-xl font-bold">SkyLux</span>
            </div>
            <p className="text-sm text-gray-300">
              © 2024 SkyLux. Все права защищены. Премиум вертолётные туры.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;