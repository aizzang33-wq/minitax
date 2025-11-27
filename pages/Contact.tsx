import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { CONTACT_MAP } from '../images/assets';
import { FaqItem } from '../types';

const FAQS: FaqItem[] = [
  {
    question: "세무 지식이 전혀 없어도 사용할 수 있나요?",
    answer: "네, 가능합니다. 미니택스는 회계 용어를 몰라도 '얼마 벌었고, 얼마 썼는지'만 확인하면 장부가 완성되도록 설계되었습니다."
  },
  {
    question: "무료 체험 기간이 끝나면 데이터가 사라지나요?",
    answer: "아니요. 데이터는 안전하게 보관되며, 언제든지 요금제를 구독하여 이어서 작업할 수 있습니다. 엑셀 다운로드 기능도 제공합니다."
  },
  {
    question: "법인 사업자도 이용 가능한가요?",
    answer: "현재 자동화 기능은 개인사업자에 최적화되어 있습니다. 법인 사업자는 Premium 요금제를 통해 전담 세무사 매칭 서비스를 이용하실 수 있습니다."
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'support',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 담당자가 24시간 이내에 답변드립니다.');
    setFormData({ name: '', email: '', type: 'support', message: '' });
  };

  return (
    <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-4">문의 및 지원</h1>
          <p className="text-subtext mb-8">
            기술적인 문제부터 세무 상담까지,<br />
            무엇이든 물어보세요.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <label className="block text-sm font-medium text-text mb-2">이름</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">이메일</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">문의 유형</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="support">기술 지원 / 버그 신고</option>
                <option value="tax">세무 상담 요청</option>
                <option value="partnership">제휴 문의</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-2">내용</label>
              <textarea 
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <Button type="submit" className="w-full" size="lg">문의 보내기</Button>
          </form>
        </div>

        {/* Info & FAQ */}
        <div>
          {/* Map Image */}
          <div className="rounded-xl overflow-hidden mb-8 h-64 bg-gray-100">
            <img src={CONTACT_MAP} alt="Office Location" className="w-full h-full object-cover" />
          </div>

          <div className="mb-12">
             <h3 className="font-bold text-lg mb-4 text-primary">Contact Info</h3>
             <ul className="space-y-3 text-subtext">
               <li><span className="font-semibold text-text w-20 inline-block">담당자</span> 박용택 본부장</li>
               <li><span className="font-semibold text-text w-20 inline-block">Email</span> ace9164@naver.com</li>
               <li><span className="font-semibold text-text w-20 inline-block">Tel</span> 02-6272-3608</li>
               <li><span className="font-semibold text-text w-20 inline-block">Address</span> 서울시 서초구 사임당로 174 강남미래타워 9F</li>
             </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-primary mb-2 flex gap-2">
                  <span className="text-secondary">Q.</span> {faq.question}
                </h3>
                <p className="text-subtext text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <h3 className="font-bold mb-2">커뮤니티 참여하기</h3>
            <p className="text-sm text-subtext mb-4">
              슬랙 커뮤니티에서 다른 기업가들과 정보를 공유하세요.
            </p>
            <a href="#" className="text-primary font-bold text-sm hover:underline">
              슬랙 채널 바로가기 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;