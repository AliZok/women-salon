"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
// Remove this line:
// import { ScissorsIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
// import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid"
// Replace with Iconsax imports:
import { Scissor, Clock, Location, Call, Sms, Star1 } from "iconsax-react"

const translations = {
  en: {
    luxeSalon: "Luxe Salon",
    home: "Home",
    services: "Services",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    bookNow: "Book Now",
    heroTitle1: "Transform Your",
    heroTitle2: "Beauty",
    heroDesc: "Experience luxury hair styling and treatments at our premium salon. Where elegance meets expertise.",
    bookAppointment: "Book Appointment",
    viewServices: "View Services",
    premium: "Premium",
    premiumServices: "Premium Services",
    premiumDesc: "Indulge in our comprehensive range of luxury hair and beauty services",
    aboutLuxe: "About Luxe Salon",
    aboutDesc1: "With over 15 years of experience in luxury hair styling, Luxe Salon has become the premier destination for discerning clients who demand excellence. Our team of master stylists combines artistic vision with technical expertise to create stunning transformations.",
    aboutDesc2: "We use only the finest products and cutting-edge techniques to ensure every client leaves feeling confident and beautiful. Our commitment to excellence and personalized service has made us the trusted choice for celebrities, professionals, and style enthusiasts alike.",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    expertStylists: "Expert Stylists",
    ourWork: "Our Work",
    ourWorkDesc: "Discover the artistry and craftsmanship in every transformation",
    clientReviews: "Client Reviews",
    getInTouch: "Get In Touch",
    getInTouchDesc: "Ready to transform your look? Book your appointment today",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    bookAppointmentForm: "Book Appointment",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone Number",
    date: "Date",
    serviceDetails: "Service Details / Special Requests",
    ourLocation: "Our Location",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    contactInfoShort: "Contact Info",
    address: "Valiasr Street, Tehran",
    phoneNumber: "(555) 123-4567",
    emailAddress: "info@luxesalon.com",
    copyright: "All rights reserved.",
    luxuryHair: "Luxury Hair Styling & Beauty Services",
    by: "by",
    aliZokaei: "ALI ZOKAEI",
    viewDetails: "View Details",
    monFri: "Mon-Fri: 9:00 AM - 8:00 PM",
    satSun: "Sat-Sun: 10:00 AM - 6:00 PM",
  },
  fa: {
    luxeSalon: "لوکس سالن",
    home: "خانه",
    services: "خدمات",
    about: "درباره ما",
    gallery: "گالری",
    contact: "تماس",
    bookNow: "رزرو کنید",
    heroTitle1: "تغییر دهید",
    heroTitle2: "زیبایی خود را",
    heroDesc: "تجربه آرایش و درمان‌های لوکس مو در سالن ممتاز ما. جایی که ظرافت با تخصص تلاقی می‌کند.",
    bookAppointment: "رزرو نوبت",
    viewServices: "مشاهده خدمات",
    premium: "ویژه",
    premiumServices: "خدمات ویژه",
    premiumDesc: "از مجموعه‌ای کامل از خدمات لوکس مو و زیبایی لذت ببرید",
    aboutLuxe: "درباره لوکس سالن",
    aboutDesc1: "با بیش از ۱۵ سال تجربه در آرایش لوکس مو، لوکس سالن به مقصد برتر برای مشتریان خاص‌پسند تبدیل شده است. تیم ما با ترکیب دید هنری و تخصص فنی، تغییرات شگفت‌انگیزی خلق می‌کند.",
    aboutDesc2: "ما فقط از بهترین محصولات و تکنیک‌های روز استفاده می‌کنیم تا هر مشتری با اعتماد به نفس و زیبایی سالن را ترک کند. تعهد ما به برتری و خدمات شخصی، ما را به انتخاب مورد اعتماد افراد مشهور، حرفه‌ای و علاقه‌مندان به سبک تبدیل کرده است.",
    yearsExperience: "سال تجربه",
    happyClients: "مشتری خوشحال",
    expertStylists: "آرایشگر متخصص",
    ourWork: "نمونه کارها",
    ourWorkDesc: "هنر و مهارت را در هر تغییر مشاهده کنید",
    clientReviews: "نظرات مشتریان",
    getInTouch: "ارتباط با ما",
    getInTouchDesc: "آماده تغییر ظاهر خود هستید؟ همین امروز وقت رزرو کنید",
    contactInfo: "اطلاعات تماس",
    followUs: "ما را دنبال کنید",
    bookAppointmentForm: "رزرو نوبت",
    firstName: "نام",
    lastName: "نام خانوادگی",
    email: "ایمیل",
    phone: "شماره تماس",
    date: "تاریخ",
    serviceDetails: "جزئیات خدمات / درخواست ویژه",
    ourLocation: "موقعیت ما",
    quickLinks: "دسترسی سریع",
    aboutUs: "درباره ما",
    contactInfoShort: "اطلاعات تماس",
    address: "خیابان ولیعصر، تهران",
    phoneNumber: "۰۲۱-۵۵۵۱۲۳۴۵۶۷",
    emailAddress: "info@luxesalon.com",
    copyright: "کلیه حقوق محفوظ است.",
    luxuryHair: "خدمات آرایش و زیبایی لوکس مو",
    by: "توسط",
    aliZokaei: "علی ذکایی",
    viewDetails: "مشاهده جزئیات",
    monFri: "دوشنبه تا جمعه: ۹ صبح تا ۸ شب",
    satSun: "شنبه و یکشنبه: ۱۰ صبح تا ۶ عصر",
  },
}

export default function HairSalonPage() {
  const [lang, setLang] = useState<'en' | 'fa'>('en')
  const t = translations[lang]
  // Service and gallery data with translations
  const services = [
    {
      title: { en: "Hair Cutting & Styling", fa: "کوتاهی و حالت‌دهی مو" },
      description: { en: "Expert cuts and styling for all hair types", fa: "کوتاهی و حالت‌دهی حرفه‌ای برای انواع مو" },
      price: { en: "From T80", fa: "از ۸۰ تومان" },
      image: "/images/girl-1.jpg",
    },
    {
      title: { en: "Hair Coloring", fa: "رنگ مو" },
      description: { en: "Premium coloring techniques and treatments", fa: "تکنیک‌ها و درمان‌های رنگ مو با کیفیت بالا" },
      price: { en: "From T120", fa: "از ۱۲۰ تومان" },
      image: "/images/girl-2.jpg",
    },
    {
      title: { en: "Hair Treatments", fa: "درمان مو" },
      description: { en: "Nourishing treatments for healthy hair", fa: "درمان‌های مغذی برای سلامت مو" },
      price: { en: "From T60", fa: "از ۶۰ تومان" },
      image: "/images/wave-hairs.jpg",
    },
    {
      title: { en: "Bridal Styling", fa: "آرایش عروس" },
      description: { en: "Special occasion and bridal hair styling", fa: "آرایش مو برای مراسم خاص و عروس" },
      price: { en: "From T150", fa: "از ۱۵۰ تومان" },
      image: "/images/girl-3.avif",
    },
    {
      title: { en: "Extensions", fa: "اکستنشن مو" },
      description: { en: "Premium hair extensions and styling", fa: "اکستنشن و حالت‌دهی حرفه‌ای مو" },
      price: { en: "From T200", fa: "از ۲۰۰ تومان" },
      image: "/images/girl-4.jpg",
    },
    {
      title: { en: "Keratin Treatment", fa: "کراتین تراپی" },
      description: { en: "Smoothing and strengthening treatments", fa: "درمان‌های صاف‌کننده و تقویت‌کننده مو" },
      price: { en: "From T180", fa: "از ۱۸۰ تومان" },
      image: "/images/girl-5.avif",
    },
  ]
  const gallery = [
    { id: 1, title: { en: "Elegant Updo", fa: "شینیون شیک" }, description: { en: "Classic bridal styling", fa: "آرایش کلاسیک عروس" }, image: "/images/girl-1.jpg", category: { en: "Bridal", fa: "عروس" } },
    { id: 2, title: { en: "Modern Bob", fa: "باب مدرن" }, description: { en: "Contemporary short cut", fa: "کوتاهی مدرن و کوتاه" }, image: "/images/girl-2.jpg", category: { en: "Cutting", fa: "کوتاهی" } },
    { id: 3, title: { en: "Balayage Highlights", fa: "هایلایت بالیاژ" }, description: { en: "Natural sun-kissed look", fa: "ظاهری طبیعی و آفتاب‌خورده" }, image: "/images/wave-hairs.jpg", category: { en: "Coloring", fa: "رنگ" } },
    { id: 4, title: { en: "Voluminous Curls", fa: "فر حجیم" }, description: { en: "Dramatic styling", fa: "حالت‌دهی چشمگیر" }, image: "/images/girl-3.avif", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 5, title: { en: "Sleek Straight", fa: "صاف و براق" }, description: { en: "Smooth and shiny", fa: "موهای صاف و درخشان" }, image: "/images/girl-4.jpg", category: { en: "Treatment", fa: "درمان" } },
    { id: 6, title: { en: "Textured Layers", fa: "لایه‌های بافت‌دار" }, description: { en: "Movement and volume", fa: "حجم و حرکت در مو" }, image: "/images/girl-5.avif", category: { en: "Cutting", fa: "کوتاهی" } },
    { id: 7, title: { en: "Romantic Waves", fa: "موج‌های رمانتیک" }, description: { en: "Soft and feminine", fa: "نرم و زنانه" }, image: "/images/girl-6.avif", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 8, title: { en: "Bold Color", fa: "رنگ جسورانه" }, description: { en: "Vibrant transformation", fa: "تغییر رنگ چشمگیر" }, image: "/images/girl-7.jpg", category: { en: "Coloring", fa: "رنگ" } },
    { id: 9, title: { en: "Golden Highlights", fa: "هایلایت طلایی" }, description: { en: "Luxurious golden tones", fa: "تناژ طلایی لوکس" }, image: "/images/girl-8.jpg", category: { en: "Coloring", fa: "رنگ" } },
    { id: 10, title: { en: "Natural Beauty", fa: "زیبایی طبیعی" }, description: { en: "Effortless elegance", fa: "ظرافت بی‌دردسر" }, image: "/images/girl-9.webp", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 11, title: { en: "Pink Perfection", fa: "صورتی بی‌نقص" }, description: { en: "Bold and beautiful", fa: "زیبا و جسورانه" }, image: "/images/girl-12.jpg", category: { en: "Coloring", fa: "رنگ" } },
    { id: 12, title: { en: "Lady Beauty", fa: "بانوی زیبا" }, description: { en: "Timeless sophistication", fa: "ظرافت همیشگی" }, image: "/images/girl-10.jpg", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 13, title: { en: "Dance Beauty", fa: "رقص زیبایی" }, description: { en: "Dynamic movement styling", fa: "حالت‌دهی با حرکت پویا" }, image: "/images/dance-woman.jpg", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 14, title: { en: "Gold Woman", fa: "زن طلایی" }, description: { en: "Luxury golden transformation", fa: "تغییر طلایی لوکس" }, image: "/images/girl14.jpg", category: { en: "Coloring", fa: "رنگ" } },
    { id: 15, title: { en: "Woman Elegance", fa: "ظرافت زنانه" }, description: { en: "Sophisticated beauty", fa: "زیبایی با ظرافت" }, image: "/images/dance-woman.jpg", category: { en: "Styling", fa: "حالت‌دهی" } },
    { id: 16, title: { en: "Girl Eleven", fa: "دختر یازده" }, description: { en: "Modern chic styling", fa: "استایل شیک و مدرن" }, image: "/images/girl-11.jpg", category: { en: "Cutting", fa: "کوتاهی" } },
  ]
  const testimonials = [
    { name: { en: "Sarah Johnson", fa: "سارا جانسون" }, review: { en: "Absolutely incredible experience! The stylists are true artists and the salon atmosphere is so luxurious.", fa: "تجربه‌ای فوق‌العاده! آرایشگران واقعاً هنرمند هستند و فضای سالن بسیار لوکس است." }, rating: 5 },
    { name: { en: "Michael Chen", fa: "مایکل چن" }, review: { en: "Best salon in the city. Professional service, amazing results, and worth every penny.", fa: "بهترین سالن شهر. خدمات حرفه‌ای، نتایج عالی و ارزش هر ریال را دارد." }, rating: 5 },
    { name: { en: "Emma Williams", fa: "اما ویلیامز" }, review: { en: "I've been coming here for years and they never disappoint. Always leave feeling like a million dollars!", fa: "سال‌هاست به این سالن می‌آیم و هرگز ناامید نشدم. همیشه با حس عالی سالن را ترک می‌کنم!" }, rating: 5 },
  ]
  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden${lang === 'fa' ? ' font-farsi' : ''}`}>
      {/* Animated Intro Text */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black intro-container">
        <div className="text-center">
          <div className="animate-intro">
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-2">
              {t.by}
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold text-[#fc006f]">
              {t.aliZokaei}
            </h1>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#fc006f]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-full">
          <div className="flex items-center space-x-2 mb-0">
            <Scissor size="32" color="white" />
            <span className="text-2xl font-bold text-[#fc006f]">{t.luxeSalon}</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#fc006f] transition-colors cursor-pointer"
            >
              {t.home}
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#fc006f] transition-colors cursor-pointer"
            >
              {t.services}
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#fc006f] transition-colors cursor-pointer"
            >
              {t.about}
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#fc006f] transition-colors cursor-pointer"
            >
              {t.gallery}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-[#fc006f] transition-colors cursor-pointer"
            >
              {t.contact}
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer">
              {t.bookNow}
            </Button>
            <button
              onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
              className="ml-2 px-3 py-1 rounded bg-[#292929] text-[#fc006f] border border-[#fc006f]/40 hover:bg-[#fc006f] hover:text-black transition-colors"
            >
              {lang === 'en' ? 'FA' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <Image
          src="/images/woman.jpg"
          alt="Luxury Hair Salon Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">{t.heroTitle1}</span>
            <br />
            <span className="text-[#fc006f]">{t.heroTitle2}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fc006f] text-black hover:bg-[#cc0159] text-lg px-8 py-3 cursor-pointer">
              {t.bookAppointment}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#fc006f] text-[#fc006f] hover:bg-[#fc006f] hover:text-black text-lg px-8 py-3 bg-transparent"
            >
              {t.viewServices}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-[#292929]">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">{t.premium}</span> {t.services}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t.premiumDesc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="bg-[#292929] border-[#fc006f]/20 hover:border-[#fc006f]/40 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title[lang]}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#fc006f] mb-2">{service.title[lang]}</h3>
                    <p className="text-gray-300 mb-4">{service.description[lang]}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#fc006f]">{service.price[lang]}</span>
                      <Button size="sm" className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer">
                        {t.bookNow}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#fc006f]">{t.about}</span> {t.luxeSalon}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {t.aboutDesc1}
              </p>
              <p className="text-lg text-gray-300 mb-8">
                {t.aboutDesc2}
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">15+</div>
                  <div className="text-gray-300">{t.yearsExperience}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">5000+</div>
                  <div className="text-gray-300">{t.happyClients}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">10+</div>
                  <div className="text-gray-300">{t.expertStylists}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="/images/dance-woman.jpg"
                alt="Salon Interior"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#fc006f] text-black p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  {/* Replace <StarSolidIcon className="h-6 w-6" /> with <Star1 size="24" color="#a80049" variant="Bold" /> */}
                  <Star1 size="24" color="#FFD700" variant="Bold" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <div className="text-sm">Google Reviews</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-[#292929] to-black">
        <div className="container mx-auto px-4 max-w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">{t.ourWork}</span>
            </h2>
            <p className="text-xl text-gray-300">{t.ourWorkDesc}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {gallery.map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src={item.image}
                  alt={item.title[lang]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-lg mb-2 text-center">{item.title[lang]}</h3>
                  <p className="text-gray-200 text-sm text-center mb-3">{item.description[lang]}</p>
                  <span className="text-[#fc006f] text-xs font-semibold bg-black/50 px-2 py-1 rounded">
                    {item.category[lang]}
                  </span>
                  <Button size="sm" className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer mt-3">
                    {t.viewDetails}
                  </Button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">{t.clientReviews}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#292929] border-[#fc006f]/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star1 key={i} size="20" color="#FFD700" variant="Bold" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.review[lang]}&rdquo;</p>
                  <div className="font-semibold text-[#fc006f]">{testimonial.name[lang]}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#292929] to-black">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">{t.getInTouch}</span>
            </h2>
            <p className="text-xl text-gray-300">{t.getInTouchDesc}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#fc006f] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  {/* Replace <MapPinIcon className="h-6 w-6 text-[#fc006f]" /> with <Location size="24" color="#a80049" /> */}
                  <Location size="24" color="#a80049" />
                  <a 
                    href="https://maps.google.com/?q=Valiasr+Street,+Tehran,+Iran" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#fc006f] transition-colors cursor-pointer"
                  >
                    {t.address}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <PhoneIcon className="h-6 w-6 text-[#fc006f]" /> with <Call size="24" color="#a80049" /> */}
                  <Call size="24" color="#a80049" />
                  <span className="text-gray-300">{t.phoneNumber}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <EnvelopeIcon className="h-6 w-6 text-[#fc006f]" /> with <Sms size="24" color="#a80049" /> */}
                  <Sms size="24" color="#a80049" />
                  <span className="text-gray-300">{t.emailAddress}</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <ClockIcon className="h-6 w-6 text-[#fc006f]" /> with <Clock size="24" color="#a80049" /> */}
                  <Clock size="24" color="#a80049" />
                  <div className="text-gray-300">
                    <div>{t.monFri}</div>
                    <div>{t.satSun}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#fc006f] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-[#292929] border-[#fc006f]/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#fc006f] mb-6">Book Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder={t.firstName}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    />
                    <Input
                      placeholder={t.lastName}
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder={t.email}
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                  />
                  <Input
                    type="tel"
                    placeholder={t.phone}
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                  />
                  <Textarea
                    placeholder={t.serviceDetails}
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    rows={4}
                  />
                  <Button className="w-full bg-[#fc006f] text-black hover:bg-[#cc0159] text-lg py-3 cursor-pointer">
                    {t.bookAppointmentForm}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#fc006f]/20 py-8">
        <div className="container mx-auto px-4 max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* Replace <ScissorsIcon className="h-6 w-6 text-[#fc006f]" /> with <Scissor size="32" color="#a80049" /> */}
              <Scissor size="32" color="white" />
              <span className="text-xl font-bold text-[#fc006f]">Luxe Salon</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Luxe Salon. {t.copyright}</p>
              <p className="text-sm mt-1">{t.luxuryHair}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
