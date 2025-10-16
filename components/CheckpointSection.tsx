'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const checkpoints = [
  {
    number: '01',
    title: '시간과 열정을 충분히 투자하라',
    description: '최고의 레슨이 제공되어도 100% 성공할 수는 없습니다.',
    details: '배움에 임하는 자세도 성공의 중요한 요건입니다. 골프는 꾸준한 연습과 열정이 필요한 스포츠입니다.',
    icon: '⏱️'
  },
  {
    number: '02',
    title: '올바른 비용 투자로 꾸준히 배워라',
    description: '골프 실력 향상의 요건으로는 개인의 기량, 연습량, 레슨량, 멘탈까지 모두 중요합니다.',
    details: '타 운동에서 증명된 조그마한 개인의 기량을 믿고 독학하거나 1~3개월 단기 레슨만 받고 골프를 정복하려는 경우, "오늘 왜 이러지?"라는 고민만 반복하게 됩니다.',
    icon: '💰'
  },
  {
    number: '03',
    title: '어디서 누구에게 배우는지 신중히 선택하라',
    description: '투자를 한다고 모두 좋은 성과를 얻을 수 있는 것은 아닙니다.',
    details: '선택과 투자에 오류가 생기면 최악의 결과를 낳을 수 있습니다. 좋은 레슨을 받기 위해선 직접 방문해 상담하고, 담당 코치의 스타일과 성실도를 본인과 비교해 꼭 점검해야 합니다.',
    icon: '🎯'
  },
  {
    number: '04',
    title: '스윙은 관리이고 레슨은 신뢰다',
    description: '자신의 운동 능력과 시간 여건을 고려해 기초 과정을 충실히 이수하는 것이 입문자에게는 필수입니다.',
    details: '코치의 지도를 성실히 따르고 합리적인 연습을 이어간다면 효율은 극대화됩니다. 코치의 역량은 골퍼의 인생을 좌우할 수 있는 중요한 요소입니다.',
    icon: '🤝'
  }
];

export default function CheckpointSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { elementRef: messageRef, isVisible: messageVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 px-4 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: `url('/imgage/u4741571414_golfer_teeing_off_at_dawn_on_a_beautiful_golf_cou_f9d30d1b-a453-40f5-88a1-1440173ac8c8_0.png')`,
          }}
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            레슨 전 <span className="text-emerald-500">필수 체크포인트</span>
          </h2>
          <p className="text-gray-400 text-lg">성공적인 골프 레슨을 위한 4가지 핵심 원칙</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {checkpoints.map((checkpoint, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-emerald-500/50 transition-all duration-500 ${
                gridVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{checkpoint.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-500 font-bold text-2xl">{checkpoint.number}</span>
                    <h3 className="text-lg font-bold text-white">{checkpoint.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{checkpoint.description}</p>
                </div>
              </div>

              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-40' : 'max-h-0'
                }`}>
                  <p className="text-gray-300 text-sm leading-relaxed pt-3 border-t border-zinc-700">
                    {checkpoint.details}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-3 text-emerald-500 text-sm hover:text-emerald-400">
                  <span>{expandedIndex === index ? '접기 ▲' : '자세히 보기 ▼'}</span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          ref={messageRef}
          className={`mt-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30 text-center transition-all duration-1000 delay-600 ${
            messageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="text-white text-lg leading-relaxed">
            <span className="font-bold text-emerald-500">흘린 땀은 배신하지 않습니다.</span>
            <br />
            그렇지만 잘못된 선택과 투자로 흘린 땀은 좌절만 남습니다.
            <br />
            <br />
            <span className="text-xl font-semibold">
              훌륭한 코치의 지도를 온전한 믿음으로 따라온다면
              <br />
              <span className="text-emerald-500">최고의 시너지 효과</span>가 발휘됩니다.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
