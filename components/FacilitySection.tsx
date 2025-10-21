'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const facilities = [
  {
    id: 1,
    title: '레슨타석',
    description: 'QED EYE XO 스윙분석기 - 최첨단 레슨 시스템',
    features: ['고성능 카메라로 정밀 분석', '무빙타석매트(SBS골프 GSPI)', '실시간 스윙 피드백', '1:1 프라이빗 맞춤레슨'],
    image: '/imgage/KakaoTalk_Photo_2025-10-17-16-20-43 001.jpeg',
    thumbnail: '/imgage/facility-lesson-thumb.png'
  },
  {
    id: 2,
    title: '연습타석',
    description: 'QED PRO 스윙분석기 - 체계적 자가 연습',
    features: ['공방 특별주문 천연가죽 타석의자', '개인별 맞춤 연습 공간', '최신 스윙분석 장비', '쾌적한 연습 환경'],
    image: '/imgage/facility-practice-bay.jpeg',
    thumbnail: '/imgage/facility-practice-thumb.png'
  },
  {
    id: 3,
    title: '야외퍼팅장',
    description: '실제 필드와 동일한 야외 퍼팅 연습 공간',
    features: ['스윙머신 완비', '다양한 경사도 연습', '실전 감각 향상', '자연 속 라운드 대비'],
    image: '/imgage/facility-putting-green.jpeg',
    thumbnail: '/imgage/facility-putting-thumb.png'
  },
  {
    id: 4,
    title: '야외테라스 & 스크린',
    description: '야외대형스크린 골프채널 시청',
    features: ['대회 중계 실시간 시청', '레슨 영상 분석', '휴식 중 관람', '야외 테라스 공간'],
    image: '/imgage/facility-terrace-screen.jpeg',
    thumbnail: '/imgage/facility-terrace-thumb.png'
  },
  {
    id: 5,
    title: '프리미엄 휴게공간',
    description: '우월한 실내 인테리어와 편안한 휴식 공간',
    features: ['쾌적한 라운지', '회원 간 네트워킹', '고급스러운 인테리어', '차별화된 휴식 경험'],
    image: '/imgage/facility-lounge.png',
    thumbnail: '/imgage/facility-lounge-thumb.png'
  }
];

export default function FacilitySection() {
  const [selectedFacility, setSelectedFacility] = useState(0);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section id="facility" className="relative py-20 px-4 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm"
          style={{
            backgroundImage: `url('/imgage/u4741571414_golfer_teeing_off_at_dawn_on_a_beautiful_golf_cou_f9d30d1b-a453-40f5-88a1-1440173ac8c8_0.png')`,
          }}
        />
        <div className="absolute inset-0 bg-zinc-900/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            시설소개 <span className="text-emerald-500">& 장비</span>
          </h2>
          <p className="text-gray-400 text-lg mb-4">최첨단 스윙분석 장비와 우월한 실내 인테리어</p>
          <p className="text-emerald-500 font-semibold">야외테라스 · 야외퍼팅장 · 휴게공간 · 스크린 상영관 완비</p>
        </div>

        {/* Facility Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {facilities.map((facility, index) => (
            <button
              key={facility.id}
              onClick={() => setSelectedFacility(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFacility === index
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {facility.title}
            </button>
          ))}
        </div>

        {/* Facility Card */}
        <div
          ref={cardRef}
          className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-1000 delay-200 ${
            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={facilities[selectedFacility].image}
              alt={facilities[selectedFacility].title}
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              {facilities[selectedFacility].title}
            </h3>
            <p className="text-xl text-emerald-500 font-semibold">
              {facilities[selectedFacility].description}
            </p>

            <div className="space-y-3">
              {facilities[selectedFacility].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/30">
              시설 견학 문의
            </button>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(index)}
              className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 ${
                selectedFacility === index
                  ? 'ring-2 ring-emerald-500 shadow-xl shadow-emerald-500/30 scale-105'
                  : 'hover:scale-105'
              }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={facility.thumbnail}
                  alt={facility.title}
                  width={200}
                  height={96}
                  className="w-full h-24 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              <div className="p-2 bg-zinc-800 text-center group-hover:bg-zinc-700 transition-colors duration-300">
                <p className="text-sm text-gray-300 group-hover:text-emerald-500 font-medium transition-colors duration-300">{facility.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}