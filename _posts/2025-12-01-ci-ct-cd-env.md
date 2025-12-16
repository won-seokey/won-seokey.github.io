---
title: "CI/CT/CD 기반 SW 개발환경 구축 및 운영"
layout: project
categories: [project]
tags: [devops, cicd, automation]
stack: "Jenkins, Python, PowerShell, Git(사내), PM2/NSSM"
period: "2025 · DevOps"
repo: "#"
demo: "#"
cover: /assets/img/cicd-cover.png
highlights:
  - "Jenkins 기반 CI/CT/CD 파이프라인 설계·운영으로 자동 빌드/테스트 환경 제공"
  - "Python/PowerShell 스크립트로 빌드·테스트 자동화"
  - "요청 대응·이슈 분석을 통한 지속 개선 및 기술 지원"
---

제조 도메인 제약(내부망, 보안 정책, 이기종 OS)을 고려한 **CI/CT/CD 파이프라인**을 구축·운영했습니다.

## 개요
- **CI/CT/CD**: 소스 커밋 → 빌드 → 정적/단위/통합 테스트 → 산출물 보관 → 배포(사내)
- **멀티 OS**: Windows/Ubuntu 에이전트 공존, 사내 Git 서버 연동
- **런타임**: PM2 무중단, NSSM을 통한 Windows 서비스화

## 파이프라인 설계
- 분기/태그 전략에 따라 **스테이지/매트릭스 빌드**
- 아티팩트 보관 및 릴리즈 노트 자동 생성(스크립트 기반)
- 실패 시 로그 첨부 알림(메일/Teams)

## 자동화 스크립트
- **Python**: 테스트 드라이버/리포트 생성, PDF 파이프라인 연계
- **PowerShell**: 빌드 전후 훅, 환경변수/권한/의존성 점검

## 운영·개선
- 사용자 요청에 대한 **신속 대응**, 반복 이슈는 룬북/가이드화
- 빌드 실패 유형 분석 → 캐시/병렬/리트라이 최적화
