---
title: "EB Known Issue Dashboard · 소프트웨어 이슈 현황"
layout: project
categories: [project]
tags: [dashboard, devops, search]
stack: "Node.js(Express), React, MariaDB, Elasticsearch(nori)"
period: "2025 · Full-stack / DevOps"
repo: "https://github.com/won-seokey/eb-known-issue"  # 실제 주소로 교체
demo: "#"
cover: /assets/img/eb-known-issue-cover.png
highlights:
  - "모듈별 Known Issue/Improvement 현황 실시간 조회"
  - "Elasticsearch 기반 키워드/문장 검색 및 유사 이슈 추천"
  - "PDF 업로드 → 내용 추출 → DB/ES 동시 저장 파이프라인"
---

EB(Embedded/Enterprise) 영역의 **Known Issue**를 체계적으로 관리/조회하는 대시보드입니다.

## 주요 기능
- 모듈/버전/상태(Planned/Open/Closed)별 필터
- 상세 페이지에 해결방법/워크어라운드와 연동 이슈 표시
- 업로드/수정 시 자동 인덱싱, 태그 생성 규칙 적용

## 아키텍처 개요
- React 클라이언트 + Express API
- MariaDB(정형 메타) + Elasticsearch(비정형 본문) 이중 저장
- PM2 무중단 운영, 로그 기반 장애 대응
