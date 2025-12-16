---
title: "HL만도 R&D Center 통합 서버 환경 구축 및 운영"
layout: project
categories: [project]
tags: [infrastructure, servers, windows, linux, optimization]
stack: "Windows Server, Ubuntu, Rack 서버, Jenkins, 파일서버/권한, 모니터링"
period: "2025 · Infrastructure"
repo: "#"
demo: "#"
cover: /assets/img/rnd-server-cover.png
highlights:
  - "Windows·Linux 혼합 환경의 통합 개발 서버 구축·운영"
  - "Rack 서버 재구축 프로젝트 주도(리소스 재배치·성능 최적화)"
  - "조향/현가/제동 Build·Test 용도 통합 및 구분 운영"
---

R&D Center의 **통합 개발 서버 환경**을 설계·구축하고 운영했습니다.

## 범위
- **혼합 OS**: Windows/Ubuntu 공존, 빌드·테스트 워크로드 분리
- **용도 구분**: 조향/현가/제동 **Build** 용도와 **Test** 용도 분리·통합 전략 수립
- **권한/공유**: 팀/프로젝트 단위 접근 제어, 공용 아티팩트 저장소

## Rack 서버 재구축
- 노후 장비 교체 및 **리소스 재배치**
- 디스크/네트워크/메모리 병목 진단 → **성능 최적화**
- 전원/냉각/케이블링 표준화로 **유지보수성 향상**

## 운영
- Jenkins 노드, 스케줄러, 백업/보존 정책
- 장애 대응 룬북/로그 기반 분석 체계
