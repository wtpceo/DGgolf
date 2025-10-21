'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <p className="text-emerald-500 text-xl md:text-2xl font-semibold mb-2">프리미엄 맞춤레슨 · 프라이빗 개인레슨</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              <span className="text-emerald-500">DG골프</span> 레슨스튜디오
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-xl md:text-2xl text-gray-200">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">골프맛집</span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">레슨맛집</span>
            <span className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">광주동구</span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            성별 · 나이 · 근력 · 정신력 · 목표에 따른
            <br />
            <span className="text-2xl font-semibold text-emerald-500">체계적이고 맞춤화된 지도</span>
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-12 leading-relaxed">
            굿샷, 나이스온, 나이스버디! 정말 짜릿한 멘트입니다.
            <br />
            DG골프 회원이 되신다면 <span className="text-emerald-400 font-semibold">트렌디하고 멋진 스윙</span>으로 굿샷을 맛보실 수 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#program"
              className="btn-primary"
            >
              레슨 프로그램 보기
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              상담 예약하기
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}