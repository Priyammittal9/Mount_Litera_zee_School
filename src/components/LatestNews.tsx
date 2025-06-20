import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LatestNews = () => {
  const newsItems = [
    {
      title: "DR.S R SUMIT UPADHYAY",
      position: "Chairman",
      experience: "20+ Years",
      email: "srupadhyaymamorial@gmail.com",
      phone: "+91 90098 25703",
      image: "/images/gallery/img3.jpg",
      
    },
    {
      title: "ADV PREETI UPADHYAY",
      position: "Chairman",
      experience: "15+ Years",
      email: "preetiupadhyay2008@gmail.com",
      phone: "+91 97533 57555",
      image: "/images/gallery/img2.jpg",
      
    },
    {
      title: "SHILPI OJHA VISHWAKARMA",
      position: "Director",
      experience: "12+ Years",
      email: "ShilpiVishwakarma12345@gmail.com",
      phone: "+91 83196 03391",
      image: "/images/gallery/img1.jpg",
      
    },
  ];

  return (
    <section id='news' className="py-16 bg-[#f6f6f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Meet Our Dedicated Faculty
</h2>
<p className='text-lg text-gray-600 max-w-3xl mx-auto opacity-70 pb-12 pt-6'>Our experienced and qualified teachers are committed to providing the best education and guidance to every student.</p>
        </div>
        <div className="relative">
          <Carousel className="w-full">
            <CarouselPrevious className="!absolute !left-0 !top-1/2 -translate-y-1/2 !z-10 !bg-pink-300 !w-10 !h-10 md:!w-12 md:!h-12 !rounded-full !flex !items-center !justify-center !shadow-lg hover:!bg-pink-400 transition-colors">
              <ArrowLeft size={24} className="text-white" />
            </CarouselPrevious>
            <CarouselNext className="!absolute !right-0 !top-1/2 -translate-y-1/2 !z-10 !bg-gray-300 !w-10 !h-10 md:!w-12 md:!h-12 !rounded-full !flex !items-center !justify-center !shadow-lg hover:!bg-gray-400 transition-colors">
              <ArrowRight size={24} className="text-white" />
            </CarouselNext>
            <CarouselContent className="-ml-4 ">
              {newsItems.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="
                    pl-4
                    w-full
                    sm:w-3/4
                    md:basis-full
                    lg:basis-1/2
                    flex
                    justify-center
                    gap-20
                  "
                >
                  <div className="
                    flex flex-col
                    md:flex-row
                    items-center
                    md:items-start
                    gap-6
                    md:gap-10
                    bg-transparent
                    w-full
                    max-w-xl
                  ">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-48 h-48
                          sm:w-56 sm:h-56
                          object-cover
                          rounded-[40px_10px_40px_10px/40px_10px_40px_10px]
                          shadow-lg
                        "
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 pt-2">{item.title} <br />
                        <span className='font-semibold'>Position</span> {item.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-blue-600 mb-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">experience :- {item.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-1 text-xs sm:text-sm">
                        <Mail className="w-4 h-4 text-pink-600" />
                        <span>{item.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mb-3 text-xs sm:text-sm">
                        <Phone className="w-4 h-4 text-pink-600" />
                        <span>{item.phone}</span>
                      </div>
                      
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
