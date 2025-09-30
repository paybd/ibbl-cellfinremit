import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#088040] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">আমাদের সম্পর্কে</h1>
          <p className="mt-4 text-lg text-center">বাংলাদেশের প্রথম ডিজিটাল রেমিট্যান্স প্ল্যাটফর্ম</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/assets/mockup.png"
                alt="সেলফিন রেমিট অ্যাপ"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">আমাদের লক্ষ্য</h2>
              <p className="text-gray-600">
                সেলফিন রেমিট একটি অত্যাধুনিক ডিজিটাল রেমিট্যান্স প্ল্যাটফর্ম যা প্রবাসী বাংলাদেশিদের জন্য দ্রুত, নিরাপদ এবং সহজ উপায়ে টাকা পাঠানোর সুবিধা প্রদান করে।
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">দ্রুত সেবা</h3>
                    <p className="text-gray-600">সেকেন্ডের মধ্যে টাকা পাঠানোর নিশ্চয়তা</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">নিরাপদ লেনদেন</h3>
                    <p className="text-gray-600">উন্নত প্রযুক্তি ব্যবহার করে সর্বোচ্চ নিরাপত্তা নিশ্চিত করা</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f0fdf4] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">সর্বোত্তম রেট</h3>
                    <p className="text-gray-600">প্রতিযোগিতামূলক এক্সচেঞ্জ রেট প্রদান</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">আমাদের বৈশিষ্ট্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "২৪/৭ সাপোর্ট",
                description: "সপ্তাহের সাত দিন, দিনের ২৪ ঘণ্টা আমাদের সহায়তা পাবেন",
                icon: "🎯"
              },
              {
                title: "অটো সিস্টেম",
                description: "স্বয়ংক্রিয় সিস্টেমের মাধ্যমে তাৎক্ষণিক লেনদেন",
                icon: "⚡"
              },
              {
                title: "সহজ ব্যবহার",
                description: "সহজ এবং ব্যবহারবান্ধব ইন্টারফেস",
                icon: "✨"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">আমাদের দর্শন</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            আমরা বিশ্বাস করি প্রতিটি প্রবাসী বাংলাদেশির জন্য দ্রুত, নিরাপদ এবং সাশ্রয়ী মূল্যে টাকা পাঠানোর সুবিধা পাওয়া উচিত। আমাদের লক্ষ্য হল ডিজিটাল প্রযুক্তির মাধ্যমে এই সেবাকে সহজলভ্য করা।
          </p>
        </div>
      </section>
    </div>
  );
} 