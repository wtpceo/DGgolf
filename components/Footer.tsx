export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              DG<span className="text-emerald-500">골프레슨스튜디오</span>
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              프리미엄 맞춤레슨 · 프라이빗 개인레슨<br />
              성별, 나이, 근력, 정신력, 목표에 따른<br />
              체계적이고 맞춤화된 지도
            </p>
            <p className="text-emerald-500 font-semibold text-sm">
              꿈의 골프<br />
              The Dream of Golf<br />
              coach PARK Jinyoung
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#facility" className="text-gray-400 hover:text-emerald-500 transition-colors">시설소개</a>
              </li>
              <li>
                <a href="#instructor" className="text-gray-400 hover:text-emerald-500 transition-colors">강사진 소개</a>
              </li>
              <li>
                <a href="#program" className="text-gray-400 hover:text-emerald-500 transition-colors">레슨 프로그램</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">오시는 길</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>광주광역시 동구 용산3길 4, 301호<br />(용산동, 용산지구 조은프라자3)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>010-4441-1051</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  월/화/목/금 09:00-23:00<br />
                  수 13:30-22:20 | 토 13:30-20:00<br />
                  일요일 휴장
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://blog.naver.com/yega118118/223427996107"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 p-2 rounded-lg hover:bg-green-600 transition-colors"
                aria-label="네이버 블로그"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@dg-hf9or"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-700 p-2 rounded-lg hover:bg-red-600 transition-colors"
                aria-label="유튜브"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-zinc-700 text-center text-gray-500 text-sm">
          <p>© 2024 DG골프레슨스튜디오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}