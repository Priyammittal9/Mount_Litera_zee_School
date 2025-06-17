import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LatestNews = () => {
  const newsItems = [
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img2.jpg"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img3.jpg"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img4.jpg"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img2.jpg"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img3.jpg"
    },
    {
      title: "Make learning fun for your kids",
      date: "June 10, 2017",
      excerpt: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
      image: "/images/gallery/img4.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Latest News</h2>
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
                    <div className="flex-1 flex flex-col items-start">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-blue-600 mb-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">{item.date}</span>
                      </div>
                      <p className="text-gray-600 mb-3 leading-relaxed text-xs sm:text-sm">{item.excerpt}</p>
                      <a href="#" className="text-black font-semibold underline underline-offset-2 hover:text-purple-700 transition-colors text-xs sm:text-sm">
                        Read More
                      </a>
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
