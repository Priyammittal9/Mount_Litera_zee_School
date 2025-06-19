import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { postForm } from "@/http/api";

// Types and Schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  studyingClass: z.enum(
    ["Preschool", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
    { errorMap: () => ({ message: "Kindly select the Class" }) }
  ),
});

// type FormProps = z.infer<typeof schema>;

interface FormProps {
    name: string;
    email: string;
    phone: string;

    studyingClass: "Preschool" | "Kindergarten" | "Grade 1" | "Grade 2" | "Grade 3" | "Grade 4" | "Grade 5";
}

const ContactCTA = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn:  postForm,
    onSuccess: () => {
      toast.success("Message sent ✅");
      reset();
    },
    onError: () => {
      toast.error("Server error ⚠️ Try again or later.");
    },
  });

  const onSubmit = (data: FormProps) => {
    const formData = {
      ...data,
      access_key: import.meta.env.VITE_PUBLIC_ACCESS_KEY,
    };
    mutation.mutate(formData);
  };

  return (
    <section className="py-0 bg-white relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Left Image */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <img
              src="/images/gallery/img14.jpg"
              alt="Child with megaphone"
              className="w-[25rem] h-auto object-contain mt-0 rounded-lg"
            />
          </div>

          {/* Right Form */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <div className="w-full max-w-xl bg-gradient-to-br from-[#ffe259] via-[#ffa751] to-[#ff6a00] rounded-[5%/10%] px-10 py-14 shadow-2xl flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#43268c] mb-10 text-center">
                Ask About Kids Acts
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
                {/* Name */}
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Your Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full bg-transparent  border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none"
                    placeholder="Enter your name"
                  />
                  <span className="text-sm text-red-600">{errors.name?.message}</span>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none"
                    placeholder="Enter your email"
                  />
                  <span className="text-sm text-red-600">{errors.email?.message}</span>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] placeholder-[#43268c]/60 focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none"
                    placeholder="Enter your phone"
                  />
                  <span className="text-sm text-red-600">{errors.phone?.message}</span>
                </div>

                {/* Studying Class */}
                <div>
                  <label className="block text-base text-[#43268c] mb-2">Studying Class</label>
                  <select
                    {...register("studyingClass")}
                    className="w-full bg-transparent border-0 border-b border-dotted border-[#43268c] text-[#43268c] focus:ring-0 focus:border-[#2d1a6c] py-2 outline-none"
                  >
                    <option value="">Select class</option>
                    <option value="Preschool">Preschool</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                  </select>
                  <span className="text-sm text-red-600">{errors.studyingClass?.message}</span>
                </div>

                {/* Submit */}
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="bg-[#43268c] text-white px-10 py-3 rounded-xl font-semibold shadow-md hover:bg-[#2d1a6c] transition-colors text-base w-full capitalize"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactCTA;
