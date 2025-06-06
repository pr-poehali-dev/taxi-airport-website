import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const BookingForm = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-white mb-4">Быстрый заказ</h3>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="from" className="text-white">
            Откуда
          </Label>
          <Input
            id="from"
            placeholder="Адрес подачи"
            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
          />
        </div>
        <div>
          <Label htmlFor="to" className="text-white">
            Куда
          </Label>
          <Select>
            <SelectTrigger className="bg-white/20 border-white/30 text-white">
              <SelectValue placeholder="Выберите аэропорт" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svo">Шереметьево (SVO)</SelectItem>
              <SelectItem value="dme">Домодедово (DME)</SelectItem>
              <SelectItem value="vko">Внуково (VKO)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date" className="text-white">
            Дата
          </Label>
          <Input
            id="date"
            type="date"
            className="bg-white/20 border-white/30 text-white"
          />
        </div>
        <div>
          <Label htmlFor="time" className="text-white">
            Время
          </Label>
          <Input
            id="time"
            type="time"
            className="bg-white/20 border-white/30 text-white"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="passengers" className="text-white">
          Пассажиры
        </Label>
        <Select>
          <SelectTrigger className="bg-white/20 border-white/30 text-white">
            <SelectValue placeholder="Количество пассажиров" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 пассажир</SelectItem>
            <SelectItem value="2">2 пассажира</SelectItem>
            <SelectItem value="3">3 пассажира</SelectItem>
            <SelectItem value="4">4+ пассажиров</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
        <Icon name="Car" className="mr-2" />
        Рассчитать стоимость
      </Button>
    </div>
  );
};

export default BookingForm;
