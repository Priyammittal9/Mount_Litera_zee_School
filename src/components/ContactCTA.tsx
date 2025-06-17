import { useState } from 'react';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyingClass: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-0 bg-white relative overflow-hidden pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left - Child with Megaphone */}
          <div className="flex-1 flex items-center justify-center md:justify-start ">
            <img
              src="/images/gallery/img14.jpg"
              alt="Child with megaphone"
              className="w-[25rem] h-auto object-contain mt-0 rounded-lg"
            />
          </div>
          {/* Right - Contact Form in Gradient Oval */}
          <div className="flex-1 flex justify-center items-center relative w-full ">
            <div
              className="w-full max-w-xl bg-gradient-to-br from-[#ffe259] via-[#ffa751] to-[#ff6a00] rounded-[5%/10%] px-10 py-14 shadow-2xl flex flex-col items-center"
              style={{
                minHeight: 480,
                boxShadow: "0 10px 40px 0 rgba(0,0,0,0.10)",
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#43268c] mb-10 text-center">
                Ask About Kids Acts
              </h2>
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none focus:outline-none"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Studying Class</label>
                  <select
                    value={formData.studyingClass}
                    onChange={e => handleInputChange('studyingClass', e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none focus:outline-none"
                  >
                    <option value="" disabled>Select class</option>
                    <option value="preschool">Preschool</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                  </select>
                </div>
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="bg-[#43268c] text-white px-10 py-3 rounded-xl font-semibold shadow-md hover:bg-[#2d1a6c] transition-colors text-base w-full capitalize"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default ContactCTA;
