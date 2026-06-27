"use client";
import React, { useState, useEffect } from 'react';

export default function EthicsGate() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 앱이 처음 로드될 때 게이트를 엶
    const hasAgreed = localStorage.getItem('eduhub_agreed');
    if (!hasAgreed) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAgree = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    localStorage.setItem('eduhub_agreed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
      <div className="bg-white/10 dark:bg-black/90 w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[16px] p-[24px] border border-white/20 shadow-lg">
        <h2 className="text-[#38bdf8] text-[22px] font-bold mb-[24px] border-b border-white/20 pb-2">AI 윤리 핵심가이드</h2>
        
        <div className="flex flex-col gap-6 mb-8 text-slate-100">
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🤔 1. 왜 쓰는지 먼저 생각해요!</h3>
            <p className="text-[1.05rem] opacity-90">AI는 내 생각을 대신하는 게 아니라 돕는 도구예요. 진짜 필요한지 먼저 고민해봐요.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🙋‍♀️ 2. 내 생각을 먼저 말해요!</h3>
            <p className="text-[1.05rem] opacity-90">무작정 묻기 전에, 내 생각과 아이디어를 먼저 정리해보면 훨씬 큰 도움이 돼요.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🕵️‍♂️ 3. AI가 틀릴 수도 있어요!</h3>
            <p className="text-[1.05rem] opacity-90">AI가 하는 말이 항상 정답은 아니에요. 중요한 건 꼭 다시 확인하는 습관을 가져요.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🚀 4. 상상력을 더 크게 키워요!</h3>
            <p className="text-[1.05rem] opacity-90">AI의 대답을 그대로 쓰지 말고, 내 경험과 색깔을 더해서 나만의 멋진 결과를 만들어봐요.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🤫 5. 내 비밀은 지켜요!</h3>
            <p className="text-[1.05rem] opacity-90">이름, 주소, 전화번호 같은 내 정보는 주지 마세요. 힘든 고민은 선생님이나 친구와 나눠요.</p>
          </div>
          
          <div className="bg-white/5 p-4 rounded-[8px] border-l-4 border-blue-500">
            <h3 className="text-yellow-400 font-extrabold text-[1.4rem] mb-2">🤝 6. 도움받은 건 솔직하게!</h3>
            <p className="text-[1.05rem] opacity-90">AI를 썼다면 숨기지 말고 이야기해요. 정직할 때 나의 진짜 노력이 훨씬 더 빛난답니다.</p>
          </div>
        </div>
        
        <button 
          onClick={handleAgree}
          className="w-full bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-[1.2rem] py-4 rounded-[12px] transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
        >
          나는 윤리 핵심가이드를 빠짐없이 읽고 이를 실천하겠습니다.
        </button>
      </div>
    </div>
  );
}
