import { Button } from "@/components/ui/button";
import BookingForm from "@/components/BookingForm";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 font-montserrat">
              Надёжное такси в аэропорт Красноярска
            </h1>
            <p className="text-xl mb-8 text-sky-100">
              Комфортные трансферы до аэропорта Емельяново по фиксированной
              цене. Встретим в аэропорту и доставим точно в срок.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Заказать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                Узнать цену
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
