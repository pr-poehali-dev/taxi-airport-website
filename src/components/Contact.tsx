import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-montserrat">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Работаем круглосуточно. Ответим на все вопросы и поможем с
              заказом.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <div className="font-semibold">+7 (495) 123-45-67</div>
                  <div className="text-gray-400">Круглосуточно</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Mail" size={20} />
                </div>
                <div>
                  <div className="font-semibold">info@airport-taxi.ru</div>
                  <div className="text-gray-400">Ответим в течение часа</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Icon name="MapPin" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Москва и область</div>
                  <div className="text-gray-400">Зона покрытия</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Быстрая связь</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Button className="bg-green-600 hover:bg-green-700">
                <Icon name="MessageCircle" className="mr-2" />
                WhatsApp
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <Icon name="Send" className="mr-2" />
                Telegram
              </Button>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-600 text-white hover:bg-gray-700"
            >
              <Icon name="Download" className="mr-2" />
              Скачать приложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
