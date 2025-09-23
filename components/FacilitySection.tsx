'use client';

import { useState } from 'react';

const facilities = [
  {
    id: 1,
    title: '레슨타석',
    description: 'QED EYE XO 스윙분석기',
    features: ['고성능 카메라', '무빙타석매트(SBS골프 GSPI)', '실시간 스윙 분석'],
    image: 'https://images.unsplash.com/photo-1633328991335-8b50638d52e6?q=80&w=2070'
  },
  {
    id: 2,
    title: '연습타석',
    description: 'QED PRO 스윙분석기 사용',
    features: ['공방 특별주문 천연가죽 타석의자', '개인별 맞춤 연습 공간'],
    image: 'https://images.unsplash.com/photo-1622533025621-8524e4bd3c67?q=80&w=2070'
  },
  {
    id: 3,
    title: '야외퍼팅장',
    description: '실제 필드와 가까운 야외 퍼팅 연습 공간',
    features: ['스윙머신', '다양한 경사도 연습', '실전 감각 향상'],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070'
  },
  {
    id: 4,
    title: '야외대형스크린',
    description: '골프채널 시청',
    features: ['대회 중계 시청', '레슨 영상 분석', '휴식 중 관람'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070'
  },
  {
    id: 5,
    title: '휴식공간',
    description: '편안한 휴식과 네트워킹',
    features: ['카페테리아', '라운지', '회원 간 교류 공간'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070'
  }
];

export default function FacilitySection() {
  const [selectedFacility, setSelectedFacility] = useState(0);

  return (
    <section id="facility" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            시설소개 <span className="text-emerald-500">& 장비</span>
          </h2>
          <p className="text-gray-400 text-lg">최첨단 장비와 쾌적한 환경에서 골프를 즐기세요</p>
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
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={facilities[selectedFacility].image}
              alt={facilities[selectedFacility].title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
              className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                selectedFacility === index ? 'ring-2 ring-emerald-500' : ''
              }`}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="p-2 bg-zinc-800 text-center">
                <p className="text-sm text-gray-300">{facility.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}