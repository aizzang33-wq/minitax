import React from 'react';
import { Page } from '../types';
import Button from '../components/ui/Button';
import { HERO_BG, TOOL_DEV_THUMB, TOOL_MKT_THUMB, TOOL_TAX_THUMB } from '../images/assets';
import { IconCode, IconChart, IconArrowRight } from '../components/Icons';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-semibold tracking-wide">
            v2.0 업데이트: AI 자동 장부 기능 추가
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            복잡한 세무는 <span className="text-secondary">코드</span>로 풀었습니다.<br/>
            <span className="text-3xl md:text-5xl font-medium mt-2 block opacity-90">기업가를 위한 최적의 세무 솔루션</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            현직 회계사가 직접 개발한 자동화 툴과 엄선된 비즈니스 도구들을 만나보세요.<br className="hidden md:block"/>
            엑셀보다 쉽고, 세무사보다 빠릅니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('features')}>
              미니택스 무료로 시작하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => onNavigate('toolkit')}>
              유용한 툴 모음 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Why MiniTax (Problem & Solution) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">왜 미니택스인가요?</h2>
            <p className="text-subtext">개발자 회계사가 직접 겪은 불편함을 해결하기 위해 만들었습니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconCode className="w-8 h-8 text-secondary" />,
                title: "개발자 친화적 UI",
                desc: "복잡한 세무 용어 대신 직관적인 대시보드와 자동화된 로직으로 세무를 처리합니다."
              },
              {
                icon: <IconChart className="w-8 h-8 text-secondary" />,
                title: "실시간 세액 시뮬레이션",
                desc: "장부 작성과 동시에 예상 부가세와 종소세를 실시간으로 계산해드립니다."
              },
              {
                icon: <div className="font-bold text-2xl text-secondary">￦</div>,
                title: "합리적인 요금",
                desc: "기장료 부담 없이, 필요한 기능만 골라 합리적인 가격에 이용하세요."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-bg border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-subtext leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Tools Preview */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Pro's Toolbox</h2>
              <p className="text-subtext">"제가 쓰려고 모았습니다." 실무에 즉시 도움 되는 툴 큐레이션</p>
            </div>
            <button 
              onClick={() => onNavigate('toolkit')}
              className="hidden md:flex items-center text-primary font-semibold hover:gap-2 transition-all"
            >
              전체 보기 <IconArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "VS Code for Finance", cat: "Development", img: TOOL_DEV_THUMB },
              { title: "ROI Calculator", cat: "Marketing", img: TOOL_MKT_THUMB },
              { title: "VAT Auto-Calc", cat: "Tax / Accounting", img: TOOL_TAX_THUMB },
            ].map((tool, idx) => (
              <div key={idx} onClick={() => onNavigate('toolkit')} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={tool.img} alt={tool.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{tool.cat}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                  <p className="text-sm text-subtext">더 똑똑하게 일하는 방법을 확인해보세요.</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" onClick={() => onNavigate('toolkit')}>툴 모음 전체 보기</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">이제 세무 걱정은 미니택스에 맡기세요</h2>
          <p className="text-lg text-gray-300 mb-10">
            이미 1,500명 이상의 기업가가 미니택스로 세무 자동화를 경험하고 있습니다.<br/>
            지금 가입하고 첫 달 무료 혜택을 받아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => onNavigate('contact')}>
              상담 요청하기
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => onNavigate('features')}>
              기능 자세히 보기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;