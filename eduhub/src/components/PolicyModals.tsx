"use client";
import React, { useState } from 'react';

export default function PolicyModals() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const openModal = (type: 'terms' | 'privacy') => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <footer className="w-full py-8 text-center bg-slate-900/40 backdrop-blur-md border-t border-white/15 dark:bg-black dark:border-white/20 mt-12 text-slate-100">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <button onClick={() => openModal('terms')} className="text-blue-400 hover:text-indigo-400 underline font-medium">이용약관</button>
            <span aria-hidden="true" className="opacity-50">|</span>
            <button onClick={() => openModal('privacy')} className="text-blue-400 hover:text-indigo-400 underline font-medium">개인정보처리방침</button>
          </div>
          <p className="text-[0.9rem] opacity-80 mb-2">정보관리책임자: 함주희 (agatha03@dosun.hs.kr)</p>
          <p className="text-sm opacity-60">&copy; 2026 특수교육 선생님을 위한 바이브 코딩 안내. 모두를 위한 디자인(UDL) 적용.</p>
        </div>
      </footer>

      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
          <div className="bg-white/10 dark:bg-black/90 w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[16px] p-[24px] border border-white/20 shadow-lg text-slate-100">
            <h2 className="text-[#38bdf8] text-[22px] font-bold mb-[24px]">🤝 이용약관 (우리의 약속)</h2>
            <div className="text-left mb-8 space-y-4">
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제1조 (목적)</h3>
              <p className="opacity-90">이 약관은 여러분이 '바이브 코딩 안내 페이지'의 정보를 활용하고 AI 윤리 가이드를 실천하는 데 필요한 기본적인 규칙을 정하는 것을 목적으로 해요.</p>
              
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제2조 (제공하는 서비스)</h3>
              <p className="opacity-90">우리는 특수교육 환경에서 누구나 쉽게 코딩을 접할 수 있도록 돕는 가이드와, AI를 올바르게 사용하기 위한 윤리 지침을 제공합니다.</p>
              
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제3조 (여러분의 역할과 책임)</h3>
              <ul className="opacity-90 space-y-2 list-none">
                <li>1. <strong>윤리 가이드 실천:</strong> 웹사이트 첫 화면에서 약속한 'AI 윤리 핵심가이드 6가지'를 공부할 때 꼭 지켜주세요!</li>
                <li>2. <strong>저작권 존중:</strong> AI를 이용해 만든 결과물을 무조건 내 것이라고 우기지 않고, 출처를 투명하게 밝혀주세요.</li>
                <li>3. <strong>나쁜 목적 사용 금지:</strong> 남을 괴롭히거나 거짓말을 퍼뜨리는 나쁜 일에 AI를 사용하면 절대 안 돼요.</li>
              </ul>
              
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제4조 (우리의 책임 한계)</h3>
              <p className="opacity-90">생성형 AI는 가끔 그럴싸한 거짓말(환각 현상)을 할 수 있어요. 따라서 AI가 알려준 정보가 틀렸다고 해서 이 웹사이트가 책임질 수는 없답니다. <strong>중요한 정보는 꼭! 스스로 한 번 더 확인하는 비판적 검증 습관</strong>을 가져주세요.</p>
            </div>
            <button onClick={closeModal} className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-[8px] transition-colors">닫기</button>
          </div>
        </div>
      )}

      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4">
          <div className="bg-white/10 dark:bg-black/90 w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-[16px] p-[24px] border border-white/20 shadow-lg text-slate-100">
            <h2 className="text-[#38bdf8] text-[22px] font-bold mb-[24px]">🔒 개인정보처리방침 (여러분의 정보 보호)</h2>
            <div className="text-left mb-8 space-y-4">
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제1조 (수집하는 개인정보 - "아무것도 안 모아요!")</h3>
              <p className="opacity-90">'바이브 코딩 안내 페이지'는 회원가입이나 로그인이 전혀 필요 없는 단순한 안내용 웹사이트예요. 따라서 여러분의 <strong>이름, 전화번호, 주소 같은 개인정보를 절대 수집하거나 저장하지 않습니다.</strong> 안심하고 사용하세요!</p>
              
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제2조 (개인정보를 달라고 하지 않아요)</h3>
              <p className="opacity-90">우리는 어떤 이유로도 여러분에게 비밀번호나 개인정보를 묻지 않습니다. 혹시 누군가 이 사이트의 이름을 빌려 개인정보를 요구한다면 절대 알려주지 마세요.</p>
              
              <h3 className="text-yellow-400 font-semibold text-[1.2rem] mt-6">제3조 (AI를 사용할 때의 주의사항)</h3>
              <p className="opacity-90">이 웹사이트 자체는 정보를 수집하지 않지만, 여러분이 <strong>다른 생성형 AI(챗GPT, 제미나이 등)를 사용할 때는 스스로 개인정보를 조심</strong>해야 해요. AI와 대화할 때 내 이름이나 학교, 비밀번호 같은 정보는 절대 입력하지 않기로 한 약속, 기억하죠?</p>
            </div>
            <button onClick={closeModal} className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-[8px] transition-colors">닫기</button>
          </div>
        </div>
      )}
    </>
  );
}
