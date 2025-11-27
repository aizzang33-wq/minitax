import React, { useState } from 'react';
import { ToolCategory, ToolItem } from '../types';
import { TOOL_DEV_THUMB, TOOL_MKT_THUMB, TOOL_TAX_THUMB } from '../images/assets';
import Button from '../components/ui/Button';

const SAMPLE_TOOLS: ToolItem[] = [
  {
    id: 1,
    title: "VS Code Finance Extensions",
    description: "금융 데이터를 다루는 개발자를 위한 필수 익스텐션 모음입니다. CSV 하이라이팅부터 통화 변환까지.",
    category: ToolCategory.DEV,
    imageUrl: TOOL_DEV_THUMB,
    comment: "엑셀보다 VS Code가 편한 당신에게 강력 추천합니다.",
    link: "#"
  },
  {
    id: 2,
    title: "Marketing ROI Calc",
    description: "복잡한 광고 성과를 한눈에 계산하세요. ROAS, CAC, LTV 자동 계산 시트.",
    category: ToolCategory.MKT,
    imageUrl: TOOL_MKT_THUMB,
    comment: "마케팅 예산 편성할 때마다 제가 직접 쓰는 시트입니다.",
    link: "#"
  },
  {
    id: 3,
    title: "Simple VAT Calculator",
    description: "공급가액만 입력하면 부가세와 합계금액을 즉시 계산해주는 심플한 웹 계산기.",
    category: ToolCategory.TAX,
    imageUrl: TOOL_TAX_THUMB,
    comment: "급하게 계산서 발행할 때 이것만큼 편한 게 없어요.",
    link: "#"
  },
  {
    id: 4,
    title: "Notion Invoice Template",
    description: "깔끔하고 전문적인 느낌의 노션 인보이스 템플릿. PDF 내보내기 최적화.",
    category: ToolCategory.PROD,
    imageUrl: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=600&auto=format&fit=crop",
    comment: "클라이언트에게 보내는 청구서, 이제 노션으로 관리하세요.",
    link: "#"
  },
  {
    id: 5,
    title: "React Tax Components",
    description: "세무/회계 관련 UI를 구축할 때 유용한 리액트 컴포넌트 라이브러리.",
    category: ToolCategory.DEV,
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    comment: "미니택스 개발에 사용된 일부 컴포넌트를 공개합니다.",
    link: "#"
  },
  {
    id: 6,
    title: "Freelancer Contract Kit",
    description: "프리랜서를 위한 표준 계약서 양식 모음. 용역, 유지보수, 비밀유지서약서 포함.",
    category: ToolCategory.PROD,
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
    comment: "법적 분쟁을 예방하는 가장 확실한 방법입니다.",
    link: "#"
  }
];

const ToolKit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = SAMPLE_TOOLS.filter(tool => {
    const matchesCategory = activeCategory === 'ALL' || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Pro's Toolbox</h1>
        <p className="text-subtext max-w-2xl mx-auto">
          회계사로서, 그리고 개발자로서 업무 효율을 높여준 도구들을 모았습니다.<br />
          여러분의 비즈니스에도 날개를 달아보세요.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {['ALL', ...Object.values(ToolCategory)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as ToolCategory | 'ALL')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-subtext hover:bg-gray-100'
              }`}
            >
              {cat === 'ALL' ? '전체' : cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="도구 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool) => (
          <div key={tool.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img src={tool.imageUrl} alt={tool.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-primary shadow-sm">
                {tool.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-colors">{tool.title}</h3>
              <p className="text-subtext text-sm mb-4 flex-grow">{tool.description}</p>
              
              <div className="bg-bg p-4 rounded-lg mb-6">
                <p className="text-xs text-primary font-medium mb-1">👨‍💻 회계사의 코멘트:</p>
                <p className="text-sm text-text italic">"{tool.comment}"</p>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                도구 보러가기
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-20 text-subtext">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
};

export default ToolKit;
