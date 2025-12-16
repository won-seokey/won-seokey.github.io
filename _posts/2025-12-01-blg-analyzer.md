---
title: "Windows 성능 로그(.blg) 대량 분석 자동화"
layout: project
categories: [project]
tags: [automation, devops, python]
stack: "Python, relog, pandas, 멀티프로세싱, tqdm"
period: "2025 · Automation"
repo: "https://github.com/won-seokey/blg-analyzer"  # 실제 주소로 교체
demo: "#"
cover: /assets/img/blg-analyzer-cover.png
highlights:
  - ".blg → CSV 자동 변환(relog) 파이프라인"
  - "CPU/메모리/디스크/페이지파일 통계 산출 및 Excel 리포트"
  - "5대 서버, 수개월 데이터 병렬 처리 + 진행률 표시(tqdm)"
---

Windows 성능 로그(.blg)를 **일괄 변환·집계**해 리포트를 생성하는 자동화 툴체인입니다.

## 주요 기능
- 변환 실패/결측치 처리, 이상치 감지(간단 규칙)
- 일/주/월 집계 테이블 + 차트 포함 Excel 산출
- 경로 패턴(`{HOSTNAME_YYYYMMDD-ID}`) 스캔 및 배치 실행

## 아키텍처 개요
- `relog`로 CSV 변환 → `pandas` 집계 → `xlsxwriter` 시각화
- 멀티프로세싱으로 워커 풀 운영, 로그/재시도 기록
