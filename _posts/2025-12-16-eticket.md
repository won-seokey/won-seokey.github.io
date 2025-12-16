---
title: "eTicket · 사내 이슈/요청 관리"
layout: project
categories: [project]
tags: [devops, search, dashboard]
stack: "Express/Node.js, React, MariaDB, Elasticsearch 8.x(nori), Python(PyMuPDF), Socket.io"
period: "2025 · Full-stack / DevOps"
repo: "https://github.com/won-seokey/eticket"      # 있으면 입력
demo: "#"                                          # 없으면 삭제 가능
cover: /assets/img/eticket-cover.png               # 선택: 이미지 경로
highlights:
  - "PDF 업로드 → PyMuPDF로 콘텐츠/티켓 자동 추출 → ES 인덱싱"
  - "nori 분석·조합 쿼리로 한국어 검색 정밀도 향상"
  - "PM2 무중단·NSSM 재부팅 자동복구"
---

사내망 제약 환경에서의 **eTicket** 구축 기록입니다.

## 개요
- Node.js(Express) + React + MariaDB + Elasticsearch 8.x(nori)
- PDF 업로드 → 텍스트 추출 → 인덱싱 → 실시간 유사글 추천
- PM2 무중단, Windows 서비스(NSSM) 자가복구

## 아키텍처
(다이어그램 이미지가 있다면 `/assets/img`에 저장 후 `![arch](/assets/img/eticket-arch.png)`)

## 내가 한 역할
- 요구사항 정리, 데이터 모델 설계, 백엔드/프론트 구현, 배포/운영 자동화
