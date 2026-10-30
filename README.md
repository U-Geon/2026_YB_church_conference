# 2026_YB_church_conference
2026년 영복교회 청년 컨퍼런스 모바일 팜플렛

ROAR : 세상 앞에서 포효하라 · 2026.11.14 (SAT) 인천영복교회

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- Next.js (App Router) + Tailwind CSS, PWA (`app/manifest.ts`, `public/sw.js`)
- 행사 문구·일정·링크는 `lib/content.ts`에서 수정
- 배포: Vercel (GitHub 연동)
