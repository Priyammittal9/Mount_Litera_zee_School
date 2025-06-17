import { useState } from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
      author: "John word",
      image: "images/gallery/img20.jpg"
    },
    {
      quote: "The Rainbow Kids Learning center has been absolutely wonderful for our daughter. The teachers are caring, the programs are engaging, and we've seen tremendous growth in her confidence and learning abilities.",
      author: "Sarah Johnson",
      image: "images/gallery/img21.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-gradient-to-r from-pink-400 to-pink-500 relative ">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 opacity-80 rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-400 opacity-80 rounded-lg transform -rotate-12"></div>
      
      {/* Torn paper effect */}
      <div className="absolute -top-1 left-0 w-full h-8 bg-white" style={{
        clipPath: 'polygon(0 0, 100% 0, 98% 100%, 95% 80%, 92% 100%, 88% 70%, 85% 100%, 80% 60%, 75% 100%, 70% 80%, 65% 100%, 60% 70%, 55% 100%, 50% 60%, 45% 100%, 40% 80%, 35% 100%, 30% 70%, 25% 100%, 20% 80%, 15% 100%, 10% 60%, 5% 100%, 2% 80%, 0 100%)'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={testimonials[current].image} 
              alt="Testimonial visual" 
              className="w-80 h-96 object-cover rounded-2xl shadow-2xl transition-all duration-500"
            />
          </div>
          {/* Right - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-8">
              Parents<br />
              Testimonials
            </h2>
            
            <div className="relative">
              <div className="w-full">
                <div className="relative">
                  {/* Large quotation mark */}
                  <div className="text-9xl font-bold text-white opacity-20 absolute -top-4  leading-none">
                    66
                  </div>
                  
                  <div className="relative z-10 pt-8">
                    <p className="text-white leading-relaxed mb-8 text-lg min-h-[120px]">
                      {testimonials[current].quote}
                    </p>
                    
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{testimonials[current].author}</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows */}
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={handlePrev}
                  className="relative inset-auto translate-x-0 translate-y-0 bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30 text-white w-12 h-12 flex items-center justify-center rounded-full"
                  aria-label="Previous"
                >
                  <ArrowLeft size={28} />
                </button>
                <button
                  onClick={handleNext}
                  className="relative inset-auto translate-x-0 translate-y-0 bg-white bg-opacity-20 hover:bg-opacity-30 border-white border-opacity-30 text-white w-12 h-12 flex items-center justify-center rounded-full"
                  aria-label="Next"
                >
                  <ArrowRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
