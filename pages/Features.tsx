import React from 'react';
import { FEATURE_DASHBOARD, FEATURE_REPORT } from '../images/assets';
import { IconCheck } from '../components/Icons';
import Button from '../components/ui/Button';

const Features: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MiniTax Solution</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            사장님은 사업에만 집중하세요.<br />
            복잡한 숫자는 미니택스가 알아서 챙깁니다.
          </p>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-secondary font-bold mb-2">AUTO BOOKKEEPING</div>
              <h2 className="text-3xl font-bold mb-6">클릭 한 번으로 완성되는<br />자동 장부 작성</h2>
              <p className="text-subtext text-lg mb-8 leading-relaxed">
                홈택스, 은행, 카드사 데이터를 자동으로 수집하여 복식부기 장부를 완성합니다. 
                차변? 대변? 몰라도 됩니다. 미니택스 엔진이 계정과목을 자동으로 분류합니다.
              </p>
              <ul className="space-y-4 mb-8">
                {['국세청 홈택스 자동 연동', '전 은행/카드사 내역 실시간 수집', 'AI 기반 계정과목 자동 추천'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-1 rounded-full">
                      <IconCheck className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img src={FEATURE_DASHBOARD} alt="Dashboard" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img src={FEATURE_REPORT} alt="Report" className="w-full h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-primary font-bold mb-2">TAX SIMULATION</div>
              <h2 className="text-3xl font-bold mb-6">납부할 세금을<br />미리 확인하세요</h2>
              <p className="text-subtext text-lg mb-8 leading-relaxed">
                "이번 부가세 얼마 나올까?" 걱정하지 마세요.
                매일 업데이트되는 예상 세액 리포트로 자금 계획을 미리 세울 수 있습니다.
              </p>
              <ul className="space-y-4 mb-8">
                {['실시간 부가가치세 예상액 조회', '종합소득세 구간별 시뮬레이션', '절세 팁 자동 알림'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <IconCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">합리적인 요금제</h2>
            <p className="text-subtext">약정 없이 언제든 해지 가능합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <div className="text-3xl font-bold font-number mb-6">Free</div>
              <p className="text-subtext text-sm mb-8">이제 막 사업을 시작한<br/>초기 창업가를 위해</p>
              <Button variant="outline" className="w-full mb-8">시작하기</Button>
              <ul className="space-y-3 text-sm text-subtext">
                <li>• 월 매출 300만원 이하</li>
                <li>• 수기 장부 작성</li>
                <li>• 세무 일정 알림</li>
              </ul>
            </div>

            {/* Pro */}
            <div className="border-2 border-primary rounded-2xl p-8 relative shadow-xl scale-105 bg-white">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                BEST CHOICE
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold font-number">30,000</span>
                <span className="text-subtext">원/월</span>
              </div>
              <p className="text-subtext text-sm mb-8">자동화로 시간을 아끼고 싶은<br/> 기업가</p>
              <Button variant="primary" className="w-full mb-8">무료 체험하기</Button>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex gap-2"><IconCheck className="w-5 h-5 text-secondary"/> <span>금융 데이터 자동 수집</span></li>
                <li className="flex gap-2"><IconCheck className="w-5 h-5 text-secondary"/> <span>예상 세액 시뮬레이션</span></li>
                <li className="flex gap-2"><IconCheck className="w-5 h-5 text-secondary"/> <span>카카오톡 1:1 상담</span></li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold font-number">50,000</span>
                <span className="text-subtext">원/월</span>
              </div>
              <p className="text-subtext text-sm mb-8">전문가의 꼼꼼한 검토가<br/>필요한 법인 사업자</p>
              <Button variant="outline" className="w-full mb-8">문의하기</Button>
              <ul className="space-y-3 text-sm text-subtext">
                <li>• 법인세 신고 대행</li>
                <li>• 전담 세무사 배정</li>
                <li>• 분기별 결산 리포트</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;