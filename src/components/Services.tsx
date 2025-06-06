import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Plane",
      title: "Трансфер в аэропорт",
      description: "Доставим в любой аэропорт Московского региона точно в срок",
    },
    {
      icon: "PlaneLanding",
      title: "Встреча в аэропорту",
      description: "Встретим с табличкой в зале прилёта и поможем с багажом",
    },
    {
      icon: "Clock",
      title: "Работаем 24/7",
      description: "Принимаем заказы круглосуточно, в любой день недели",
    },
    {
      icon: "Shield",
      title: "Фиксированная цена",
      description: "Стоимость не зависит от пробок и времени в пути",
    },
    {
      icon: "Car",
      title: "Комфортные авто",
      description: "Современные автомобили бизнес и комфорт класса",
    },
    {
      icon: "Phone",
      title: "Онлайн поддержка",
      description: "Отслеживайте заказ и связывайтесь с водителем в приложении",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для комфортных поездок в аэропорт и обратно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Icon name={service.icon} size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
