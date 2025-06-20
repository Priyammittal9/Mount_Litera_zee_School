const ImageTextSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
            //   src="/certificate.webp" 
            src="/zee-learn-certificate.png"
              alt="Mount Litera Zee School - certificate " 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Welcome to Mount Litera Zee School, Tikamgarh
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mount Litera Zee School Tikamgarh is founded and managed by 
                Dr. S R SUMIT UPADHYAY with Zee Learn 
                Ltd as the alliance partner.
              </p>
              
              <p>
                Zee Learn Ltd is a well-established name in the field of school 
                education has more than 130 schools across the continent "Our 
                endeavour is to develop our students in to awakened global 
                citizens who demonstrate skills and values in all the spheres of 
                their lives."
              </p>
              
              <p>
                MLZS Tikamgarh is determined to provide the best of education in true 
                sense to all its students, exploring the potential and nurturing each 
                life it comes across.
              </p>
            </div>
            
            <div className="pt-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-blue-800 transition-colors">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                School Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;