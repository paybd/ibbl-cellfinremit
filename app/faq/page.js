'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "সেলফিন রেমিট কি?",
      answer: "সেলফিন রেমিট একটি ডিজিটাল রেমিট্যান্স প্ল্যাটফর্ম যা প্রবাসী বাংলাদেশিদের জন্য দ্রুত, নিরাপদ এবং সহজ উপায়ে টাকা পাঠানোর সুবিধা প্রদান করে।"
    },
    {
      question: "কিভাবে টাকা পাঠাবেন?",
      answer: "অ্যাপটি ডাউনলোড করুন, রেজিস্ট্রেশন করুন, আপনার পরিচয় যাচাই করুন, এবং তারপর সহজেই টাকা পাঠাতে পারবেন। আপনি বিভিন্ন পেমেন্ট মেথড ব্যবহার করে টাকা পাঠাতে পারবেন।"
    },
    {
      question: "কত সময়ের মধ্যে টাকা পৌঁছাবে?",
      answer: "আমাদের অটো সিস্টেমের মাধ্যমে সাধারণত কয়েক সেকেন্ডের মধ্যেই টাকা প্রাপকের অ্যাকাউন্টে পৌঁছে যায়।"
    },
    {
      question: "সার্ভিস চার্জ কত?",
      answer: "আমরা প্রতিযোগিতামূলক রেট প্রদান করি। সার্ভিস চার্জ লেনদেনের পরিমাণের উপর নির্ভর করে। বিস্তারিত জানতে অ্যাপে লগইন করুন।"
    },
    {
      question: "কোন কোন দেশ থেকে টাকা পাঠানো যায়?",
      answer: "বর্তমানে মালয়েশিয়া, সিঙ্গাপুর, দুবাই, কাতার, সৌদি আরব, ওমান, বাহরাইন, কুয়েত সহ বিভিন্ন দেশ থেকে টাকা পাঠানো যায়।"
    },
    {
      question: "কোন কোন ব্যাংকে টাকা পাঠানো যায়?",
      answer: "বাংলাদেশের সকল প্রধান ব্যাংক, মোবাইল ব্যাংকিং (বিকাশ, নগদ, রকেট) এবং এজেন্ট ব্যাংকিং এর মাধ্যমে টাকা পাঠানো যায়।"
    },
    {
      question: "২৪/৭ কাস্টমার সাপোর্ট কিভাবে পাবো?",
      answer: "আপনি আমাদের ২৪/৭ কাস্টমার সাপোর্ট পেতে অ্যাপের মাধ্যমে লাইভ চ্যাট করতে পারেন, ইমেইল করতে পারেন অথবা হটলাইন নাম্বারে কল করতে পারেন।"
    },
    {
      question: "লেনদেন কি নিরাপদ?",
      answer: "হ্যাঁ, আমরা উন্নত প্রযুক্তি ব্যবহার করে সকল লেনদেন নিরাপদ রাখি। প্রতিটি লেনদেন এনক্রিপ্টেড এবং নিয়মিত মনিটর করা হয়।"
    },
    {
      question: "প্রবলেম হলে কি করবো?",
      answer: "কোন সমস্যা হলে আপনি তাৎক্ষণিকভাবে আমাদের ২৪/৭ কাস্টমার সাপোর্টের সাথে যোগাযোগ করতে পারেন। আমাদের দক্ষ টিম দ্রুত সমাধান করে দেবে।"
    },
    {
      question: "রেমিট্যান্স লাইসেন্স আছে কি?",
      answer: "হ্যাঁ, আমরা বাংলাদেশ ব্যাংক থেকে অনুমোদিত রেমিট্যান্স লাইসেন্সধারী প্রতিষ্ঠান।"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#088040] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">সাধারণ জিজ্ঞাসা</h1>
          <p className="mt-4 text-lg text-center">আপনার সকল প্রশ্নের উত্তর এখানে</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#f0fdf4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">আরও প্রশ্ন আছে?</h2>
          <p className="text-gray-600 mb-8">
            আমাদের সাথে যোগাযোগ করুন, আমরা সাহায্য করতে সর্বদা প্রস্তুত
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#088040] text-white rounded-lg hover:bg-[#066832] transition"
          >
            যোগাযোগ করুন
          </a>
        </div>
      </div>
    </div>
  );
} 