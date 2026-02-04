import React from 'react';
import { DIFFERENCE_FEATURES } from '../constants';

const Difference: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">KEY FEATURES</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Premium products, certified installers, and showroom-quality results on every vehicle.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENCE_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="bg-gray-800 p-4 rounded-full mb-6 border border-gray-700">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;