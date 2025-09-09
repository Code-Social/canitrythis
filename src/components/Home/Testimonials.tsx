import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    feedback:
      "This platform helped me sharpen my skills with real-world challenges. The feedback from mentors was super valuable!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Sharma",
    role: "UI/UX Designer",
    feedback:
      "I loved working on creative design problems here. The community is very supportive and engaging.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Kumar",
    role: "Data Analyst",
    feedback:
      "Challenging and practical! It’s the perfect platform to gain real-world problem-solving experience.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Learners Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from learners who took challenges, grew their skills, and leveled up!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
