import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const prices = [
    {
      route: "Центр — Шереметьево",
      price: "1 800",
      time: "45-60 мин",
    },
    {
      route: "Центр — Домодедово",
      price: "2 100",
      time: "50-70 мин",
    },
    {
      route: "Центр — Внуково",
      price: "1 600",
      time: "40-55 мин",
    },
    {
      route: "Область — аэропорты",
      price: "от 2 500",
      time: "60-90 мин",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Прозрачные тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Фиксированная стоимость без доплат за пробки, время суток или
            праздничные дни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center"
            >
              <h3 className="font-semibold text-gray-900 mb-3">{item.route}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {item.price} ₽
              </div>
              <div className="text-sm text-gray-500 flex items-center justify-center">
                <Icon name="Clock" size={16} className="mr-1" />
                {item.time}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Скидка 10% при предварительном заказе
          </h3>
          <p className="text-gray-600 mb-6">
            Закажите трансфер заранее и получите скидку. Минимум за 2 часа до
            поездки.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Заказать со скидкой
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
