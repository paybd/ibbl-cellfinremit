'use server';

export async function submitContactForm(formData) {
  try {
    // Here you would typically send this data to your email service or database
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    // For now, we'll just log the data
    console.log('Contact form submission:', data);

    return { success: true, message: 'মেসেজটি সফলভাবে পাঠানো হয়েছে!' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: 'দুঃখিত, একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।' };
  }
} 