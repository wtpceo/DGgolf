'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState('program');
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const programs = [
    {
      title: '입문 프로그램',
      duration: '3개월 과정',
      features: ['그립 & 자세 교정', '기본 스윙 동작', '숏게임 기초', '규칙 및 에티켓'],
      level: '초급',
      color: 'from-green-600 to-green-700'
    },
    {
      title: '중급 프로그램',
      duration: '3개월 과정',
      features: ['스윙 교정', '거리 늘리기', '코스 매니지먼트', '멘탈 트레이닝'],
      level: '중급',
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: '상급 프로그램',
      duration: '맞춤형',
      features: ['싱글 진입', '대회 준비', '고급 기술 습득', '전문 멘탈 코칭'],
      level: '상급',
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: '맞춤형 레슨',
      duration: '개인별 설정',
      features: ['1:1 집중 레슨', '개인별 커리큘럼', '유연한 스케줄', '빠른 실력 향상'],
      level: '전체',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const schedule = {
    weekday: {
      days: '월, 화, 목, 금',
      hours: '오전 09:00 - 저녁 11:00'
    },
    wednesday: {
      days: '수요일',
      hours: '오후 1:30 - 저녁 10:20'
    },
    saturday: {
      days: '토요일',
      hours: '오후 1:30 - 저녁 8:00'
    },
    sunday: {
      days: '일요일',
      hours: '휴장'
    }
  };

  const pricing = [
    { type: 'Occasionally 맞춤형', price: '문의', description: '주1회 30분 레슨 + 주2회 65분 연습' },
    { type: 'Normal 일반형', price: '문의', description: '주2회 30분 레슨 + 주4회 65분 연습' },
    { type: 'Frequently "1"', price: '문의', description: '주3회 30분 레슨 + 주3회 65분 연습' },
    { type: 'Frequently "2"', price: '문의', description: '주4회 30분 레슨 + 주2회 65분 연습' }
  ];

  return (
    <section id="program" className="relative py-20 px-4 bg-zinc-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: `url('/imgage/u4741571414_golfer_teeing_off_at_dawn_on_a_beautiful_golf_cou_f9d30d1b-a453-40f5-88a1-1440173ac8c8_2.png')`,
          }}
        />
        <div className="absolute inset-0 bg-zinc-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            레슨 프로그램 <span className="text-emerald-500">& 요금</span>
          </h2>
          <p className="text-gray-400 text-lg">체계적인 커리큘럼과 합리적인 가격</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-800 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab('program')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'program'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              프로그램
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'schedule'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              영업시간
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'pricing'
                  ? 'bg-emerald-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              요금안내
            </button>
          </div>
        </div>

        {/* Program Content */}
        {activeTab === 'program' && (
          <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-zinc-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 group ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-6">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{program.level}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-1">{program.title}</h3>
                  <p className="text-sm text-emerald-500 mb-4">{program.duration}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-emerald-500 transition-colors duration-300 group-hover:shadow-lg">
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Content */}
        {activeTab === 'schedule' && (
          <div ref={contentRef} className={`max-w-4xl mx-auto transition-all duration-700 ${
            contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-zinc-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-500 mb-2">{schedule.weekday.days}</h3>
                  <p className="text-xl text-white">{schedule.weekday.hours}</p>
                </div>
                <div className="bg-zinc-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-500 mb-2">{schedule.wednesday.days}</h3>
                  <p className="text-xl text-white">{schedule.wednesday.hours}</p>
                </div>
                <div className="bg-zinc-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-500 mb-2">{schedule.saturday.days}</h3>
                  <p className="text-xl text-white">{schedule.saturday.hours}</p>
                </div>
                <div className="bg-zinc-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-red-500 mb-2">{schedule.sunday.days}</h3>
                  <p className="text-xl text-gray-400">{schedule.sunday.hours}</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-zinc-700 rounded-lg">
                <p className="text-center text-gray-300">
                  ※ 레슨 예약은 전화 또는 방문 상담을 통해 가능합니다
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Content */}
        {activeTab === 'pricing' && (
          <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-500 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{item.type}</h3>
                <p className="text-3xl font-bold text-emerald-500 mb-4">{item.price}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                <button
                  onClick={() => window.location.href = 'tel:010-4441-1051'}
                  className="w-full mt-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                >
                  문의하기
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Notice */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl p-6 border border-emerald-500/30">
          <p className="text-center text-white">
            <span className="font-semibold">📢 공지사항</span><br />
            정확한 레슨 프로그램 및 요금은 직접 문의 부탁드립니다.<br />
            상담을 통해 개인별 맞춤 커리큘럼을 제안해드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}