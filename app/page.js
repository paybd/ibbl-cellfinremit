import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="animated-bg"></div>
        <div className="floating-circle floating-circle-1"></div>
        <div className="floating-circle floating-circle-2"></div>
        <div className="floating-circle floating-circle-3"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                টাকা পাঠান <span className="gradient-text">বাংলাদেশে</span> সেকেন্ডে
              </h1>
              <p className="text-lg text-gray-600">
                দ্রুত, নিরাপদ এবং সাশ্রয়ী আন্তর্জাতিক রেমিট্যান্স সেবা। কয়েকটি ক্লিকেই বিশ্বের যেকোনো প্রান্ত থেকে বাংলাদেশে আপনার প্রিয়জনদের কাছে টাকা পাঠান।
              </p>
              <div className="flex gap-4">
                <Link href="/download" className="px-6 py-3 bg-[#088040] text-white rounded-lg hover:bg-[#066832] transition">
                ডাউনলোড করুন
                </Link>
                {/* <Link href="/download" className="px-6 py-3 bg-white text-[#088040] border border-[#088040] rounded-lg hover:bg-gray-50 transition">
                  ডাউনলোড করুন
                </Link> */}
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] z-10 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/mockup.png"
                  alt="সেলফিন রেমিট অ্যাপ"
                  fill
                  className="object-contain hero-illustration"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">কেন আমাদের বেছে নেবেন</h2>
            <p className="text-gray-600">রেমিট্যান্স প্রেরণে সেরা অ্যাপ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "বেশি এক্সচেঞ্জ রেট",
                description: "প্রতিযোগিতামূলক এবং স্বচ্ছ রেট, কোনো গোপন ফি নেই",
                icon: "💰"
              },
              {
                title: "অটো সার্ভার",
                description: "ঘন্টার পর ঘন্টা নয়, সেকেন্ডেই টাকা পৌঁছে যায়",
                icon: "⚡"
              },
              {
                title: "নিরাপদ ও নির্ভরযোগ্য",
                description: "সেলফিন রেমিট আপনার লেনদেন কে নিরাপদ ও রাখতে সর্বদা সচেষ্ট",
                icon: "🔒"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-card p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">কিভাবে রিসেলার হবেন</h2>
            <p className="text-gray-600">তিনটি সহজ ধাপে রিসেলার হোন</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "১",
                title: "অ্যাকাউন্ট খুলুন",
                description: "মাত্র কয়েক মিনিটে আপনার ফোন নাম্বার দিয়ে সাইন আপ করুন"
              },
              {
                step: "২",
                title: "তথ্য ভেরিফাই করুন",
                description: "আপনার দেওয়া তথ্য ও ছবি ভেরিফাই করুন"
              },
              {
                step: "৩",
                title: "রেমিট্যান্স এক্সচেঞ্জ করুন",
                description: "পেমেন্ট পদ্ধতি বেছে নিয়ে ডিপোজিট করুন"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#088040] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#088040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">শুরু করতে প্রস্তুত?</h2>
          <p className="text-xl mb-8">হাজারো সন্তুষ্ট রিসেলারের সাথে যোগ দিন</p>
          <Link href="/download" className="px-8 py-4 bg-white text-[#088040] rounded-lg hover:bg-gray-100 transition font-semibold">
            ডাউনলোড করুন
          </Link>
        </div>
      </section>
    </main>
  );
}
