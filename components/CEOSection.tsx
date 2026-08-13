
import React from 'react';
import { Phone } from 'lucide-react';

const CEOSection: React.FC = () => {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Photo 3:2 */}
          <div className="w-full md:w-48 flex-shrink-0 aspect-[3/2] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="/vasyl-danc-ceo.webp"
              alt="Vasyl Danč" 
              className="w-full h-full object-cover grayscale-[0.1]"
            />
          </div>

          {/* Content */}
          <div className="flex-grow text-center md:text-left">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">Vasyl Danč</h3>
              <p className="text-brand text-[10px] font-bold uppercase tracking-widest">CEO & Founder</p>
            </div>
            
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-4 italic">
              "Auto detailingu se věnuji přes 22 let. Moje práce je moje vášeň."
            </p>

            <a 
              href="tel:+420775542333" 
              className="inline-flex items-center gap-2 text-black hover:text-brand transition-colors font-medium text-base"
            >
              <Phone size={16} className="text-brand" />
              <span>+420 775 542 333</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOSection;
