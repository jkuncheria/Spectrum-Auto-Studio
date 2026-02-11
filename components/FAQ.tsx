import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly at (602) 807-8989. Our team is available to help with all your auto detailing needs.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We offer free, no-obligation estimates for all our services. Our experts will assess your vehicle, discuss your needs, and provide a detailed quote with transparent pricing. Schedule a consultation today to get started.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We proudly serve Phoenix, Anthem, Paradise Valley, Scottsdale, Chandler, Fountain Hills, and surrounding communities. Contact us to confirm if we service your specific area!'
        },
        {
          question: 'Where is your facility located?',
          answer: 'Our facility is located at 704 S Monaco St Pkwy, Phoenix, CO. We have a state-of-the-art shop equipped with the latest tools and technology to deliver exceptional results in a controlled environment.'
        }
      ]
    },
    {
      category: 'Auto Detailing',
      questions: [
        {
          question: 'What detailing services do you offer?',
          answer: 'We offer comprehensive auto detailing services including interior detailing, exterior detailing, paint correction, ceramic coatings, paint protection films (PPF), vinyl wraps, window tinting, and our Factory Finish System. Each service is tailored to meet your vehicle\'s specific needs.'
        },
        {
          question: 'How long does a full detail take?',
          answer: 'A full interior and exterior detail typically takes 3-5 hours depending on the size and condition of your vehicle. More intensive services like paint correction or ceramic coating may require a full day or longer. We\'ll give you an accurate time estimate when you book.'
        },
        {
          question: 'What\'s included in an interior detail?',
          answer: 'Our interior detail includes thorough vacuuming, steam cleaning, leather/vinyl conditioning, dashboard and console cleaning, door panel cleaning, carpet shampooing, glass cleaning, and odor elimination. We pay attention to every detail to restore your interior to like-new condition.'
        },
        {
          question: 'What\'s included in an exterior detail?',
          answer: 'Our exterior detail includes a thorough hand wash, clay bar treatment, paint decontamination, wheel and tire cleaning, trim restoration, glass cleaning, and a protective sealant or wax application. We ensure every inch of your vehicle\'s exterior shines.'
        }
      ]
    },
    {
      category: 'Ceramic Coating & PPF',
      questions: [
        {
          question: 'What is ceramic coating?',
          answer: 'Ceramic coating is a liquid polymer that bonds to your vehicle\'s paint, creating a protective layer that repels water, dirt, and UV rays. It provides long-lasting protection (2-7+ years depending on the package) and makes your car easier to clean while maintaining that showroom shine.'
        },
        {
          question: 'What is Paint Protection Film (PPF)?',
          answer: 'Paint Protection Film is a clear, self-healing urethane film applied to your vehicle\'s paint to protect against rock chips, scratches, bug splatter, and other road debris. It\'s virtually invisible and preserves your paint\'s original appearance while providing superior protection.'
        },
        {
          question: 'How long does ceramic coating last?',
          answer: 'The longevity of ceramic coating depends on the product and package selected. Our coatings range from 1-year entry-level protection to 7+ year professional-grade options. With proper maintenance, you can maximize the lifespan of your coating.'
        },
        {
          question: 'Do I need paint correction before ceramic coating?',
          answer: 'We recommend paint correction before applying ceramic coating to ensure the best results. The coating will lock in whatever condition your paint is in, so removing swirls, scratches, and imperfections first ensures a flawless, mirror-like finish.'
        }
      ]
    },
    {
      category: 'Paint Correction',
      questions: [
        {
          question: 'What is paint correction?',
          answer: 'Paint correction is the process of removing imperfections from your vehicle\'s clear coat through machine polishing. This includes swirl marks, light scratches, water spots, oxidation, and other defects that dull your paint\'s appearance.'
        },
        {
          question: 'What\'s the difference between single-stage and multi-stage correction?',
          answer: 'Single-stage correction uses one polishing step to remove light defects and enhance gloss (50-60% correction). Multi-stage correction uses progressively finer polishes to achieve higher levels of correction – two-stage achieves 70-85%, three-stage achieves 90-95%, and wet sanding can achieve 95%+ correction for show-car finishes.'
        },
        {
          question: 'Will paint correction damage my clear coat?',
          answer: 'When performed by trained professionals like our team, paint correction is safe for your clear coat. We use proper techniques and measure paint thickness to ensure we remove only the minimum amount necessary to eliminate defects while preserving your clear coat\'s integrity.'
        }
      ]
    },
    {
      category: 'Vinyl Wraps & Window Tint',
      questions: [
        {
          question: 'What are the benefits of a vinyl wrap?',
          answer: 'Vinyl wraps offer a cost-effective way to change your vehicle\'s color without permanent paint, protect your original paint from UV damage and minor scratches, and can be removed to reveal the preserved paint underneath. They\'re available in countless colors and finishes including gloss, matte, satin, and specialty textures.'
        },
        {
          question: 'How long does a vinyl wrap last?',
          answer: 'A quality vinyl wrap typically lasts 5-7 years with proper care. Factors like sun exposure, washing habits, and storage conditions can affect longevity. We use premium vinyl brands like 3M and Avery Dennison for the best durability and appearance.'
        },
        {
          question: 'What window tint levels do you offer?',
          answer: 'We offer various tint levels from 5% (limo tint) to 70% (light tint), plus ceramic and carbon film options. Our team will help you choose the right tint level based on your preferences, local regulations, and the specific benefits you\'re looking for like heat rejection or UV protection.'
        },
        {
          question: 'Is window tint legal in Colorado?',
          answer: 'Colorado has specific window tint laws. Front side windows must allow more than 27% light transmission, while back side and rear windows can be any darkness. We\'ll help you choose a tint that meets legal requirements while achieving your desired look and protection.'
        }
      ]
    },
    {
      category: 'Pricing & Booking',
      questions: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is based on the size of your vehicle (sedan, SUV, truck, etc.), the services requested, and the current condition of your vehicle. We provide upfront, transparent pricing with no hidden fees. Contact us for a free estimate specific to your vehicle.'
        },
        {
          question: 'Do I need to make an appointment?',
          answer: 'Yes, we work by appointment to ensure we can dedicate the proper time and attention to your vehicle. Call us at (602) 807-8989 or use our contact form to schedule. We try to accommodate requests as quickly as possible.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, all major credit cards, and digital payments. Payment is due upon completion of services and your satisfaction with the work.'
        },
        {
          question: 'Do you offer warranties on your services?',
          answer: 'Yes! Our ceramic coatings and PPF installations come with manufacturer warranties that vary based on the product and package selected. We\'ll explain all warranty details and provide documentation when your service is completed.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-gray-950 px-4 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-bold tracking-wider text-sm uppercase text-[#F0E130]">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-[#F0E130] mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our auto detailing services, process, and pricing. 
            Can't find what you're looking for? <Link to="/contact" className="font-semibold hover:underline text-[#F0E130]">Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-xl mr-4 bg-gray-800">
                <HelpCircle className="w-6 h-6 text-[#F0E130]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-gray-900 border-2 border-gray-800 rounded-xl overflow-hidden transition-colors hover:border-[#F0E130]"
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                    >
                      <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0 text-[#F0E130]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 md:p-16 text-center border border-gray-800">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Our auto detailing experts are here to help. Contact us today and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2 bg-[#F0E130] hover:bg-yellow-400"
            >
              Contact Us
            </Link>
            <a 
              href="tel:6028078989"
              className="border-2 border-white text-white hover:bg-[#F0E130] hover:border-[#F0E130] font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Call (602) 807-8989
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

