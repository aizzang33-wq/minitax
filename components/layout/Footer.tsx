import React from 'react';
import { Page } from '../../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="font-bold text-2xl text-primary tracking-tighter mb-4">
              MiniTax
            </div>
            <p className="text-subtext text-sm leading-relaxed">
              복잡한 세무는 코드로,<br />
              사업은 사장님의 열정으로.<br />
              기업가를 위한 최적의 솔루션.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-text mb-4">Service</h4>
            <ul className="space-y-2 text-sm text-subtext">
              <li><button onClick={() => onNavigate('features')} className="hover:text-primary">기능 소개</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-primary">요금제</button></li>
              <li><button onClick={() => onNavigate('toolkit')} className="hover:text-primary">Pro's Toolbox</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-subtext">
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary">소개 (About)</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary">채용 정보</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-primary">제휴 문의</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-subtext">
              <li>박용택 본부장</li>
              <li>ace9164@naver.com</li>
              <li>02-6272-3608</li>
              <li>서울시 서초구 사임당로 174 강남미래타워 9F</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-subtext">
          <p>© 2024 MiniTax. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;