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
                Mount Litera Zee School Tikamgarh is founded and managed by Dr.
                S R SUMIT UPADHYAY with Zee Learn Ltd as the alliance partner.
              </p>

              <p>
                Mount Litera Zee School is a premier chain of K-12 schools in
                India, dedicated to delivering high-quality education and
                fostering holistic development. It is a part of Zee Learn
                Limited, one of India's most innovative educational
                organisations.
              </p>
              <p>
                Mount Litera Zee School provides personalised learning and an
                NCF 2023 aligned curriculum that fosters holistic development
                and 21st century career-oriented skills. The school emphasises
                experiential learning and ensures global readiness through its
                advanced infrastructure. It follows best practices such as
                STREAM integration, competency-based assessments, inclusive
                education, technology-enabled learning, and life-skills
                development, creating a strong foundation for future leaders.
              </p>

              <p>
                MLZS Tikamgarh is determined to provide the best of education in
                true sense to all its students, exploring the potential and
                nurturing each life it comes across.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full flex items-center gap-3 hover:bg-blue-800 transition-colors">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
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
