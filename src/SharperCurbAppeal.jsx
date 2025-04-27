import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselItem } from "@/components/ui/carousel";

const services = [
  { name: "Base Mural (House Numbers + Background Color)", price: 50 },
  { name: "Add 1 Custom Logo", price: 20 },
  { name: "Add 2 Custom Logos", price: 35 },
  { name: "Add Slogan, Family Name, or Custom Text", price: 10 },
  { name: "Add Custom Background Design (Skyline, Pattern, etc.)", price: 15 },
];

const images = [
  "/images/curb1.jpg",
  "/images/curb2.jpg",
  "/images/curb3.jpg",
];

export default function SharperCurbAppeal() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-center mb-6">
        <img src="/images/your-logo-here.png" alt="Your Logo Placeholder" className="h-20" />
      </div>
      <Carousel className="mb-8">
        {images.map((src, idx) => (
          <CarouselItem key={idx}>
            <img src={src} alt={`Curb Example ${idx + 1}`} className="rounded-lg w-full object-cover h-64" />
          </CarouselItem>
        ))}
      </Carousel>

      <p className="text-lg mb-6 text-center">Serving the Jackson-Metro Area. Make your curb pop with custom address designs that show team pride, personal style, and increase visibility.</p>

      <h2 className="text-2xl font-semibold mb-4">Choose Your Service:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <Card key={idx} className="p-4 flex justify-between items-center">
            <CardContent>
              <p className="text-xl font-medium">{service.name}</p>
              <p className="text-lg text-gray-600">${service.price}</p>
            </CardContent>
            <Button onClick={() => addToCart(service)}>Add</Button>
          </Card>
        ))}
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-semibold mb-2">Curb Details:</h2>
        <div className="mb-4">
          <Label htmlFor="addressNumber">House Numbers</Label>
          <Input id="addressNumber" value={addressNumber} onChange={(e) => setAddressNumber(e.target.value)} placeholder="e.g. 210" />
        </div>
        <div className="mb-4">
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input id="backgroundColor" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} placeholder="e.g. Black, Baby Blue" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Order:</h2>
      <ul className="mb-4">
        {cart.map((item, index) => (
          <li key={index} className="text-lg">- {item.name} (${item.price})</li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-8">Total: ${total}</div>

      <h2 className="text-2xl font-semibold mb-4">Book Your Installation Appointment:</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="calendar">Select a Date</Label>
          <Calendar selected={selectedDate} onSelect={setSelectedDate} />
        </div>
        <Button className="mt-4">Submit Appointment Request</Button>
      </div>
    </div>
  );
}