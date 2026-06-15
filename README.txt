NEADY FILM Portfolio Demo - Next.js
===================================

이 버전은 기존 단순 HTML/CSS/JS 포트폴리오 데모를 Next.js App Router와 Tailwind CSS 기반으로 옮긴 프로젝트입니다.

파일 구성
---------
app/layout.jsx        메타데이터와 전역 레이아웃
app/page.jsx          메인 단일 페이지, 모바일 메뉴와 작품 필터 상태
app/globals.css       Tailwind 지시문과 최소 전역 효과
app/icon.svg          파비콘
public/assets/        기존 SVG 임시 히어로 이미지와 프로젝트 썸네일
tailwind.config.js    Tailwind 색상/경로 설정
package.json          개발, 빌드, 테스트 스크립트
tests/                마이그레이션 스모크 테스트

로컬 실행
---------
1. 의존성을 설치합니다.
   npm install

2. 개발 서버를 실행합니다.
   npm run dev

3. 브라우저에서 엽니다.
   http://localhost:3000

검증
----
npm test
npm audit --audit-level=moderate
npm run build

Vercel 배포
-----------
Vercel에서 이 저장소를 연결하면 Next.js 프로젝트로 자동 인식됩니다.

Build Command:
npm run build

Install Command:
npm install

Output Directory:
설정하지 않습니다. Next.js 기본값을 사용합니다.

실제 자료 교체 시 필요한 것
---------------------------
각 프로젝트별:
- 프로젝트 제목
- 연도
- 카테고리
- 영상 링크
- 짧은 설명
- 역할
- 클라이언트/아티스트명
- 썸네일 이미지, 권장 16:9

사이트 공통:
- 메인 히어로 이미지 또는 쇼릴 스틸
- 실제 이메일
- 인스타그램 링크
- 유튜브 링크
- 공개 가능한 클라이언트/협업 리스트
