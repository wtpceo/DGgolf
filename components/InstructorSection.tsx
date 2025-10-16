'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function InstructorSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation();
  const { elementRef: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();

  return (
    <section id="instructor" className="relative py-20 px-4 bg-zinc-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: `url('/imgage/u4741571414_golfer_teeing_off_at_dawn_on_a_beautiful_golf_cou_f9d30d1b-a453-40f5-88a1-1440173ac8c8_1.png')`,
          }}
        />
        <div className="absolute inset-0 bg-zinc-800/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            강사진 <span className="text-emerald-500">소개</span>
          </h2>
          <p className="text-gray-400 text-lg">20년 경력의 전문 골프 코치와 함께하세요</p>
        </div>

        <div
          ref={cardRef}
          className={`bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-200 ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Profile Image Placeholder */}
            <div className="relative h-[500px] bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto bg-zinc-700 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <p className="text-gray-400">프로필 사진</p>
              </div>
            </div>

            {/* Profile Information */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                박진영
              </h3>
              <p className="text-xl text-emerald-500 font-semibold mb-6">골프 코치</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                  <p className="text-gray-300 leading-relaxed">
                    호주에서 골프 유학과 골프코치를 했으며 20년 전부터 광주에서 골프지도를 하고 있음
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                  <p className="text-gray-300 leading-relaxed">
                    현재까지 약 3000명의 골퍼를 지도하였기 때문에 탄탄한 레슨 노하우 보유
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                  <p className="text-gray-300 leading-relaxed">
                    체형과 파워에 맞는 명확한 스윙 원리와 해법을 제공하는 프라이빗 맞춤레슨 전문
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2" />
                  <p className="text-gray-300 leading-relaxed">
                    최신 스윙분석 장비(QED EYE XO, QED PRO)를 활용한 체계적 지도
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-zinc-900">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">20년</p>
                  <p className="text-sm text-gray-400 mt-1">지도 경력</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">3000+</p>
                  <p className="text-sm text-gray-400 mt-1">수강생</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-500">호주</p>
                  <p className="text-sm text-gray-400 mt-1">유학 경험</p>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-500 rounded-full text-sm">입문 전문</span>
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-500 rounded-full text-sm">교정 전문</span>
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-500 rounded-full text-sm">멘탈 클리닉</span>
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-500 rounded-full text-sm">맞춤 레슨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div
          ref={philosophyRef}
          className={`mt-12 space-y-6 transition-all duration-1000 delay-400 ${
            philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl p-8 border border-emerald-500/20">
            <h4 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
              <span className="text-emerald-500">🏌️</span>
              레슨 철학
            </h4>
            <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto mb-4">
              개인의 성별, 나이, 근력, 정신력, 목표에 따라 맞춤형 레슨을 제공합니다.
              20년간 축적된 노하우와 체계적인 커리큘럼으로 여러분의 골프 실력 향상을 책임지겠습니다.
            </p>
            <p className="text-emerald-500 text-center font-semibold text-lg">
              "흘린 땀은 배신하지 않습니다. 체계적인 레슨으로 플레이다운을 실현하세요."
            </p>
          </div>

          <div className="bg-zinc-700 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-6 text-center">DG골프를 선택해야 하는 이유</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="text-emerald-500 text-2xl">✓</div>
                <div>
                  <h5 className="text-white font-semibold mb-1">프라이빗 맞춤레슨 전문</h5>
                  <p className="text-gray-400 text-sm">체형과 파워에 맞는 명확한 스윙 원리 제공</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-emerald-500 text-2xl">✓</div>
                <div>
                  <h5 className="text-white font-semibold mb-1">최신 스윙분석 장비</h5>
                  <p className="text-gray-400 text-sm">QED EYE XO, QED PRO 시스템 완비</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-emerald-500 text-2xl">✓</div>
                <div>
                  <h5 className="text-white font-semibold mb-1">우월한 실내 인테리어</h5>
                  <p className="text-gray-400 text-sm">야외테라스, 퍼팅장, 휴게공간 완비</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-emerald-500 text-2xl">✓</div>
                <div>
                  <h5 className="text-white font-semibold mb-1">20년 경력의 전문 코치</h5>
                  <p className="text-gray-400 text-sm">3000명 이상의 골퍼 지도 경험</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}