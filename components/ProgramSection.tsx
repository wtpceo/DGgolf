'use client';

import { useState } from 'react';

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState('program');

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
      open: '06:00',
      close: '22:00',
      lesson: '07:00 - 21:00'
    },
    weekend: {
      open: '06:00',
      close: '21:00',
      lesson: '08:00 - 20:00'
    }
  };

  const pricing = [
    { type: '월 회원권', price: '문의', description: '무제한 연습 + 레슨' },
    { type: '10회 레슨권', price: '문의', description: '3개월 내 사용' },
    { type: '20회 레슨권', price: '문의', description: '6개월 내 사용' },
    { type: '1:1 프리미엄', price: '문의', description: '맞춤형 집중 레슨' }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
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
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">평일</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">영업시간</p>
                      <p className="text-xl text-white">{schedule.weekday.open} - {schedule.weekday.close}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">레슨시간</p>
                      <p className="text-xl text-emerald-500">{schedule.weekday.lesson}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">주말/공휴일</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-1">영업시간</p>
                      <p className="text-xl text-white">{schedule.weekend.open} - {schedule.weekend.close}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">레슨시간</p>
                      <p className="text-xl text-emerald-500">{schedule.weekend.lesson}</p>
                    </div>
                  </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
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