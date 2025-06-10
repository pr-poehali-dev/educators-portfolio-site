import React from "react";

const TitleSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
          alt="Students learning"
          className="absolute top-10 left-10 w-32 h-24 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
          alt="Language books"
          className="absolute top-20 right-20 w-28 h-20 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
          alt="Students studying"
          className="absolute bottom-32 left-16 w-36 h-28 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
          alt="Group learning"
          className="absolute bottom-20 right-12 w-30 h-22 object-cover rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop"
          alt="Language study"
          className="absolute top-1/2 left-8 w-24 h-32 object-cover rounded-lg transform -translate-y-1/2"
        />
      </div>

      <div className="text-center max-w-4xl px-8 relative z-10">
        <div className="mb-12">
          <h1 className="text-sm md:text-base font-montserrat text-slate-600 mb-1">
            National Research University Higher School Of Economics
          </h1>
          <h2 className="text-sm md:text-base font-montserrat text-slate-600 mb-1">
            St. Petersburg School of Arts and Humanities
          </h2>
          <h3 className="text-sm md:text-base font-montserrat text-slate-600 mb-1">
            Department of Foreign Languages
          </h3>
          <p className="text-sm md:text-base font-montserrat text-slate-600">
            Minor: Language Culture and Intercultural Communication
          </p>
        </div>

        <div className="w-32 h-1 bg-blue-500 mx-auto mb-8"></div>

        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-montserrat font-bold text-slate-800 mb-8">
            Educator's Portfolio
          </h1>
        </div>

        <div className="space-y-4 text-slate-700 mb-12">
          <p className="text-2xl md:text-3xl font-montserrat font-semibold">
            Petrova Veronika
          </p>
          <p className="text-lg md:text-xl">Group 3</p>
        </div>

        <div className="space-y-2 text-slate-600 mb-12">
          <p className="text-base md:text-lg font-semibold">Supervisor:</p>
          <p className="text-lg md:text-xl font-montserrat">
            Vladimir Pavlov, PhD
          </p>
          <p className="text-base md:text-lg">Associate Professor</p>
        </div>

        <div className="text-slate-600">
          <p className="text-lg md:text-xl font-montserrat font-semibold">
            Saint-Petersburg, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
