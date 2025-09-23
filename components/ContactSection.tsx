'use client';

import { useEffect, useRef } from 'react';

export default function ContactSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY || 'YOUR_KAKAO_MAP_KEY'}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapRef.current) return;

        const container = mapRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(35.1538, 126.9170), // 광주 용산동 좌표 (대략적)
          level: 3
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(35.1538, 126.9170);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        // 인포윈도우 추가
        const iwContent = '<div style="padding:5px;">DG골프레슨스튜디오</div>';
        const infowindow = new window.kakao.maps.InfoWindow({
          content: iwContent
        });
        infowindow.open(map, marker);
      });
    };

    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: '주소',
      content: '광주광역시 동구 용산3길 4, 301호',
      subContent: '(용산동, 용산지구 조은프라자3)',
      action: () => window.open('https://naver.me/G58YScdR', '_blank')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: '연락처',
      content: '010-4441-1051',
      subContent: '상담 가능 시간: 09:00 - 21:00',
      action: () => window.location.href = 'tel:010-4441-1051'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '영업시간',
      content: '평일: 06:00 - 22:00',
      subContent: '주말: 06:00 - 21:00',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            오시는 <span className="text-emerald-500">길</span>
          </h2>
          <p className="text-gray-400 text-lg">DG골프레슨스튜디오로 오시는 길을 안내해드립니다</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-zinc-700 rounded-2xl overflow-hidden">
            <div ref={mapRef} className="w-full h-[400px] bg-zinc-600">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>지도 로딩중...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                onClick={info.action}
                className={`bg-zinc-700 rounded-2xl p-6 flex items-start space-x-4 ${
                  info.action ? 'cursor-pointer hover:bg-zinc-600 transition-colors duration-300' : ''
                }`}
              >
                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-500">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  <p className="text-white text-lg">{info.content}</p>
                  {info.subContent && (
                    <p className="text-gray-400 text-sm mt-1">{info.subContent}</p>
                  )}
                </div>
                {info.action && (
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => window.open('https://naver.me/G58YScdR', '_blank')}
                className="bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>네이버 플레이스</span>
              </button>
              <button
                onClick={() => window.location.href = 'tel:010-4441-1051'}
                className="bg-emerald-500 text-white py-4 rounded-xl hover:bg-emerald-600 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>전화 문의</span>
              </button>
            </div>
          </div>
        </div>

        {/* Transportation Guide */}
        <div className="mt-12 bg-zinc-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">교통편 안내</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">대중교통</h4>
              <p className="text-gray-400 text-sm">버스 이용시 용산동 정류장 하차</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">자가용</h4>
              <p className="text-gray-400 text-sm">건물 내 주차장 이용 가능</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.9 8.3c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3z"/>
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">도보</h4>
              <p className="text-gray-400 text-sm">용산지구 중심가 위치</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}