import Image from 'next/image';

export default function Download() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#088040] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">ডাউনলোড করুন</h1>
          <p className="mt-4 text-lg text-center">সেলফিন রেমিট অ্যাপ ডাউনলোড করুন</p>
        </div>
      </div>

      {/* Download Section */}
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
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">অ্যাপ ডাউনলোড করুন</h2>
                <p className="text-gray-600">
                  সেলফিন রেমিট অ্যাপ ডাউনলোড করে এখনই রিসেলার ব্যবসা শুরু করুন। দ্রুত, নিরাপদ এবং সহজ উপায়ে দেশে টাকা পাঠান।
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="/assets/cellfin_remit_v4.apk"
                  download
                  className="flex items-center justify-center gap-3 bg-[#088040] text-white p-4 rounded-lg hover:bg-[#066832] transition w-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-lg font-semibold">অ্যাপ ডাউনলোড করুন</span>
                </a>
                <p className="text-sm text-gray-500 text-center">
                  ভার্সন 1.0.0 • 76MB • Android 5.0+
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 