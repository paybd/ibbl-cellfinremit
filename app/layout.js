import './globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './components/MobileMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'সেলফিন রেমিট - দ্রুত ও নিরাপদ রেমিট্যান্স এক্সচেঞ্জ সার্ভিস',
  description: 'সেলফিন রেমিট এর মাধ্যমে প্রবাস থেকে দেশে টাকা পাঠান। তাৎক্ষণিক হস্তান্তর এবং নিরাপদ লেনদেনের জন্য।',
  keywords: 'টাকা পাঠান, রেমিটেন্স, দেশে টাকা পাঠান, দ্রুত টাকা পাঠান',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#088040" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ fontFamily: 'var(--font-unibangla)' }}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/assets/logo.png"
                  alt="সেলফিন রেমিট লোগো"
                  width={100}
                  height={100}
                  className="w-32 h-16"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">হোম</Link>
              <Link href="/faq" className="text-gray-600 hover:text-gray-900">জিজ্ঞাসা</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">আমাদের সম্পর্কে</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">যোগাযোগ</Link>
              <Link href="/download" className="text-gray-600 hover:text-gray-900">ডাউনলোড</Link>
            </div>
            <MobileMenu />
          </nav>
        </header>
        {children}
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/assets/logo.png"
                    alt="সেলফিন রেমিট লোগো"
                    width={100}
                    height={100}
                    className="w-32 h-16"
                  />
                </div>
                <p className="text-gray-600">দ্রুত এবং নিরাপদ রেমিট্যান্স এক্সচেঞ্জ সার্ভিস।</p>
              </div>
              <div>
                <h4 className="font-medium mb-4">মেনু</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-600 hover:text-gray-900">হোম</Link></li>
                  <li><Link href="/faq" className="text-gray-600 hover:text-gray-900">জিজ্ঞাসা</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-gray-900">আমাদের সম্পর্কে</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">যোগাযোগ</h4>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">যোগাযোগ করুন</Link></li>
                  <li><Link href="/download" className="text-gray-600 hover:text-gray-900">ডাউনলোড</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">আইনি</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">গোপনীয়তা নীতি</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">সেবার শর্তাবলী</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center">© {new Date().getFullYear()} সেলফিন রেমিট। সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
