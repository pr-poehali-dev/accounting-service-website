import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPrivacy) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setAgreedToPrivacy(false);
  };

  const services = [
    {
      icon: 'Calculator',
      title: 'Ведение бухгалтерии',
      description: 'Полное бухгалтерское сопровождение вашего бизнеса'
    },
    {
      icon: 'FileText',
      title: 'Налоговая отчетность',
      description: 'Подготовка и сдача всех видов отчетности в срок'
    },
    {
      icon: 'Briefcase',
      title: 'Кадровый учет',
      description: 'Ведение кадрового делопроизводства и расчет зарплаты'
    },
    {
      icon: 'TrendingUp',
      title: 'Консультации',
      description: 'Экспертная поддержка по налоговым и финансовым вопросам'
    },
    {
      icon: 'Building2',
      title: 'Регистрация бизнеса',
      description: 'Помощь в регистрации ООО и ИП, выбор системы налогообложения'
    },
    {
      icon: 'Shield',
      title: 'Налоговая оптимизация',
      description: 'Законные способы снижения налоговой нагрузки'
    }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: '15 000',
      features: [
        'Ведение бухучета',
        'Сдача отчетности',
        'Консультации по email',
        'До 10 операций в месяц'
      ]
    },
    {
      title: 'Стандарт',
      price: '30 000',
      features: [
        'Все из Базового',
        'Кадровый учет',
        'Расчет зарплаты',
        'До 50 операций в месяц',
        'Консультации по телефону'
      ],
      popular: true
    },
    {
      title: 'Премиум',
      price: '50 000',
      features: [
        'Все из Стандарта',
        'Персональный бухгалтер',
        'Неограниченные операции',
        'Налоговая оптимизация',
        'Приоритетная поддержка 24/7'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Какие документы нужны для начала работы?',
      answer: 'Для начала сотрудничества потребуются: свидетельство о регистрации, ИНН, выписка из ЕГРЮЛ/ЕГРИП, банковские реквизиты и информация о системе налогообложения.'
    },
    {
      question: 'Как быстро вы сдаете отчетность?',
      answer: 'Мы готовим и сдаем отчетность заблаговременно, минимум за 3 дня до крайнего срока. Вы всегда будете в курсе статуса подготовки документов.'
    },
    {
      question: 'Что входит в стоимость услуг?',
      answer: 'В стоимость входит полное бухгалтерское обслуживание согласно выбранному тарифу: ведение учета, подготовка отчетности, консультации и другие услуги в рамках пакета.'
    },
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете изменить тариф в любой момент. При увеличении объема операций мы предложим оптимальный план обслуживания.'
    },
    {
      question: 'Как проходит онлайн-консультация?',
      answer: 'Консультации проводятся в удобном для вас формате: видеозвонок, телефон или переписка. Все документы можно отправить электронно.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Calculator" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">БухПро</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#consultation">Консультация</a>
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Профессиональные бухгалтерские услуги для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Надежный партнер в финансовом учете. Более 10 лет опыта, индивидуальный подход и гарантия качества
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#consultation">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
      </section>

      <section className="py-16 border-y bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают БухПро?</h2>
              <p className="text-lg text-muted-foreground">Работайте с надежным партнером и получайте реальные преимущества</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="TrendingDown" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Экономия до 40%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Стоимость наших услуг ниже, чем содержание штатного бухгалтера. Никаких скрытых платежей.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Clock" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Первый результат за 24 часа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Быстрый старт работы. Проведем аудит и подготовим план действий уже на следующий день.</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="ShieldCheck" className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Юридическая гарантия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Договор с полной ответственностью. Компенсируем финансовые потери при ошибках с нашей стороны.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексное решение всех задач бухгалтерского и налогового учета
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный план обслуживания для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽/мес</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'} asChild>
                    <a href="#consultation">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="consultation" className="py-20">
        <div className="container max-w-2xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Запись на консультацию</CardTitle>
              <CardDescription>
                Оставьте заявку и получите бесплатную консультацию нашего специалиста
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email <span className="text-muted-foreground text-xs">(необязательно)</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем бизнесе и интересующих вопросах"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="privacy" 
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight">
                    Я согласен на обработку персональных данных и принимаю{' '}
                    <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
                      <DialogTrigger asChild>
                        <button type="button" className="text-primary hover:underline">
                          политику конфиденциальности
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Согласие на обработку персональных данных</DialogTitle>
                          <DialogDescription>
                            БухПро (ИП Шурыгина К.И.)
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[400px] pr-4">
                          <div className="space-y-4 text-sm">
                            <p>
                              Настоящим, в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 года, 
                              Вы подтверждаете свое согласие на обработку компанией БухПро (ИП Шурыгина К.И.) Ваших персональных данных:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>сбор,</li>
                              <li>систематизацию,</li>
                              <li>накопление,</li>
                              <li>хранение,</li>
                              <li>уточнение (обновление, изменение),</li>
                              <li>использование,</li>
                              <li>передачу исключительно в целях оказания бухгалтерских и информационно-консультационных услуг,</li>
                              <li>блокирование,</li>
                              <li>обезличивание,</li>
                              <li>уничтожение.</li>
                            </ul>
                            <p className="font-semibold">
                              БухПро гарантирует конфиденциальность получаемой информации.
                            </p>
                            <p className="font-semibold mt-4">
                              Обработка персональных данных осуществляется в следующих целях:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                              <li>связь с пользователем сайта для разъяснения интересующей его информации,</li>
                              <li>консультация пользователя сайта по вопросам бухгалтерского учета и/или налогообложения,</li>
                              <li>эффективного исполнения заказов, договоров и иных обязательств, принятых компанией БухПро в качестве обязательных к исполнению.</li>
                            </ul>
                            <p className="mt-4">
                              Настоящее согласие распространяется на следующие Ваши персональные данные: имя и контактный телефон.
                            </p>
                            <p className="mt-4">
                              Срок действия согласия является неограниченным. Вы можете в любой момент отозвать настоящее согласие, 
                              направив письменное уведомление на наш электронный адрес:{' '}
                              <a href="mailto:ruslansultanov1995@mail.ru" className="text-primary hover:underline">
                                ruslansultanov1995@mail.ru
                              </a>{' '}
                              с пометкой «Отзыв согласия на обработку персональных данных».
                            </p>
                            <p className="mt-4">
                              Настоящее согласие действует в течение всего периода хранения персональных данных, 
                              если иное не предусмотрено законодательством Российской Федерации.
                            </p>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </label>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (908) 558-16-60</p>
                  <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:ruslansultanov1995@mail.ru" className="text-primary hover:underline">
                    ruslansultanov1995@mail.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Саратов, ул. Рабочая, д. 27</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Send" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Telegram</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://t.me/NalogZen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @NalogZen
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Полезные советы о налогах</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 ИП Шурыгина К.И. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;