import React from "react";

const TitleSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center max-w-4xl px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-800 mb-8">
            Educator's Portfolio
          </h1>
        </div>

        <div className="mb-1.5">
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
