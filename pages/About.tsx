import React from 'react';
import { ABOUT_WORKING, PROFILE_AVATAR } from '../images/assets';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Bio Header */}
      <section className="bg-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
            <img src={PROFILE_AVATAR} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Coder & Accountant</h1>
          <p className="text-xl text-subtext mb-8">
            "회계사가 왜 코딩을 배웠냐고요?<br />
            반복되는 엑셀 작업에서 벗어나고 싶었거든요."
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['KICPA 공인회계사', 'Full Stack Developer', 'ex-삼일회계법인'].map((tag, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-text">
            <h2 className="text-2xl font-bold mb-6 text-primary">비효율적인 세무 시장을 혁신하고 싶었습니다.</h2>
            <p className="mb-6 leading-relaxed">
              수많은 기업가분들을 상담하면서 느낀 점이 있습니다. 
              대부분의 사장님들이 '세금'을 너무 어렵고 두려운 존재로 느낀다는 것입니다.
              세무사에게 맡기자니 비용이 부담스럽고, 직접 하자니 용어가 너무 어렵습니다.
            </p>
            <p className="mb-6 leading-relaxed">
              사실 소규모 사업장의 세무 로직은 정형화되어 있습니다. 
              '이걸 코드로 자동화할 수 있지 않을까?'라는 단순한 호기심에서 미니택스는 시작되었습니다.
            </p>
            
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img src={ABOUT_WORKING} alt="Working" className="w-full h-auto" />
            </div>

            <h2 className="text-2xl font-bold mb-6 text-primary">기술과 전문성의 만남</h2>
            <p className="mb-6 leading-relaxed">
              미니택스는 단순한 가계부 앱이 아닙니다. 현직 회계사의 전문 지식(Domain Knowledge)과 
              개발자의 기술력(Tech)이 결합된 결과물입니다.
            </p>
            <p className="leading-relaxed">
              우리의 미션은 명확합니다. <br/>
              <strong className="text-secondary">"사장님은 사업에만 집중하세요. 숫자는 미니택스가 챙깁니다."</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-bg border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-subtext mb-8">Tech Stack & Tools</h3>
          <div className="flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech) => (
              <span key={tech} className="text-2xl font-bold">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;