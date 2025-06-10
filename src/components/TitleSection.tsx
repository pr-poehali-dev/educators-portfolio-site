import React from "react";

const TitleSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center max-w-4xl px-8">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-slate-800 mb-6">
            Портфолио Преподавателя
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="space-y-6 text-slate-600">
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Добро пожаловать в мой образовательный мир
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Здесь собраны мои методические материалы, исследования и достижения
            в области образования. Каждый элемент портфолио отражает стремление
            к качественному обучению и развитию студентов.
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-8 text-sm text-slate-500">
          <div className="text-center">
            <div className="font-semibold text-blue-600">📚</div>
            <div>Методики</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-600">🎓</div>
            <div>Достижения</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-blue-600">📄</div>
            <div>Материалы</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
