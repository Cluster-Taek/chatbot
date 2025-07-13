### 스케줄 관리 챗봇 개발 체크리스트

---

#### ✅ **1. 프로젝트 환경 설정**
- [ ] Node.js 및 npm(또는 yarn) 설치 확인
- [ ] 프로젝트 폴더 생성 및 `npm init`으로 `package.json` 생성
- [ ] TypeScript, Express 및 관련 타입 라이브러리 설치
  ```bash
  npm install express
  npm install --save-dev typescript @types/node @types/express ts-node-dev
  ```
- [ ] TypeScript 설정 파일 `tsconfig.json` 생성 및 설정
  ```bash
  npx tsc --init
  ```
  - `tsconfig.json`에서 `outDir`, `rootDir` 등 주요 옵션 설정
- [ ] `package.json`에 개발 및 실행 스크립트 추가
  ```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
  ```

#### ✅ **2. 기본 서버 구조 설계**
- [ ] 소스 코드 관리를 위한 `src` 디렉토리 생성
- [ ] 역할에 따른 폴더 구조 설계 (확장성 고려)
  - `src/`
    - `index.ts`: 서버 진입점 (Express 앱 초기화 및 실행)
    - `routes/`: API 라우팅 정의
    - `controllers/`: 요청 처리 및 응답 반환 로직
    - `services/`: 비즈니스 로직 (데이터 처리 등)
    - `data/`: 임시 데이터베이스 (JSON 파일 등)
- [ ] `src/index.ts` 파일에 기본적인 Express 서버 설정 코드 작성

#### ✅ **3. 데이터베이스 및 데이터 모델링**
- [ ] 초기 개발 단계에서는 `JSON` 파일을 데이터베이스로 활용
  - `src/data/schedules.json` 파일 생성
- [ ] 인터뷰 스케줄 데이터 구조(Interface) 정의
  ```typescript
  // 예: src/models/schedule.ts
  interface InterviewSchedule {
    id: number;
    userName: string;
    interviewDate: string; // ISO 8601 형식 추천
    details: string;
  }
  ```
- [ ] `schedules.json`에 테스트용 더미 데이터 추가

#### ✅ **4. API 엔드포인트 구현**
- [ ] 스케줄 조회를 위한 라우터 설정 (`src/routes/scheduleRoutes.ts`)
- [ ] `GET /api/schedules/:userName` 엔드포인트 컨트롤러 구현 (`src/controllers/scheduleController.ts`)
  - 요청 URL에서 `:userName` 파라미터를 가져옵니다.
- [ ] 사용자 이름으로 스케줄을 검색하는 서비스 로직 구현 (`src/services/scheduleService.ts`)
  - `schedules.json` 파일을 읽어와 해당 사용자의 데이터를 필터링합니다.
- [ ] 검색된 스케줄 정보를 JSON 형태로 클라이언트에 응답합니다.
  - 사용자를 찾지 못한 경우, 404 Not Found와 적절한 메시지를 반환하여 사용자 경험을 해치지 않도록 처리합니다.

#### ✅ **5. 기능 고도화 및 배포 (추후)**
- [ ] **(고도화)** 실제 운영을 위해 `PostgreSQL`, `MongoDB` 같은 데이터베이스와 `TypeORM` 또는 `Prisma` 같은 ORM 도입 고려
- [ ] **(고도화)** 로깅 및 에러 모니터링 시스템(Sentry 등) 연동
- [ ] **(배포)** Docker를 이용한 컨테이너화 및 클라우드 플랫폼(AWS, Azure 등)에 배포

--- 