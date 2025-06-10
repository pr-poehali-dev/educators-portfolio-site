import React from "react";

const TitleSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop"
          alt="Students learning"
          className=""
        />
        <img
          src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
          alt="Language books"
          className=""
        />
        <img
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
          alt="Students studying"
          className=""
        />
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
          alt="Group learning"
          className=""
        />
        <img
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
          alt="Books and learning"
          className="absolute top-1/3 right-1/4 w-28 h-36 object-cover rounded-lg blur-sm"
        />
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
          alt="Library books"
          className="absolute bottom-1/3 left-1/3 w-32 h-24 object-cover rounded-lg blur-sm"
        />
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
          alt="Study materials"
          className=""
        />
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
          alt="Educational environment"
          className="absolute bottom-10 left-1/4 w-30 h-24 object-cover rounded-lg blur-sm"
        />
        <img
          src="https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?w=400&h=300&fit=crop"
          alt="Learning space"
          className="absolute top-40 left-1/2 w-26 h-32 object-cover rounded-lg blur-sm transform -translate-x-1/2"
        />
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
          alt="Academic materials"
          className="absolute bottom-1/4 right-1/3 w-28 h-20 object-cover rounded-lg blur-sm"
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

        <div className="w-32 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-slate-800 mb-8">
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
