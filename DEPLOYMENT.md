# 🚀 배포 가이드

## GitHub Actions를 통한 자동 배포 설정

### 1. GitHub Pages 설정

1. **Repository Settings로 이동**
   - GitHub 저장소에서 `Settings` 탭 클릭

2. **Pages 설정**
   - 왼쪽 메뉴에서 `Pages` 클릭
   - `Source`를 `GitHub Actions`로 설정
   - `Save` 클릭

### 2. 워크플로우 파일 확인

`.github/workflows/deploy.yml` 파일이 다음 기능을 포함합니다:

- **자동 트리거**: main 브랜치에 push될 때마다 실행
- **수동 실행**: Actions 탭에서 수동으로 실행 가능
- **빌드 과정**: 의존성 설치 → 린트 검사 → 프로덕션 빌드
- **배포**: GitHub Pages에 자동 배포

### 3. 배포 과정

```mermaid
graph LR
    A[코드 Push] --> B[GitHub Actions 실행]
    B --> C[의존성 설치]
    C --> D[린트 검사]
    D --> E[프로덕션 빌드]
    E --> F[GitHub Pages 배포]
    F --> G[사이트 접속 가능]
```

### 4. 배포 확인

배포가 완료되면 다음 URL로 접속 가능합니다:
- `https://[your-username].github.io/excel-ace-port/`

### 5. 문제 해결

#### 빌드 실패 시
1. **Actions 탭에서 로그 확인**
   - Repository의 `Actions` 탭에서 실패한 워크플로우 클릭
   - 상세 로그를 확인하여 오류 원인 파악

2. **로컬에서 빌드 테스트**
   ```bash
   npm run build:prod
   ```

3. **린트 오류 수정**
   ```bash
   npm run lint
   ```

#### 배포가 안 될 때
1. **GitHub Pages 설정 확인**
   - Settings > Pages > Source가 "GitHub Actions"로 설정되어 있는지 확인

2. **권한 확인**
   - Repository가 Public인지 확인
   - Actions 권한이 활성화되어 있는지 확인

### 6. 환경 변수 설정 (필요시)

환경 변수가 필요한 경우 `.env.production` 파일을 생성:

```bash
# .env.production
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Excel Ace Portfolio
```

### 7. 커스텀 도메인 설정

1. **도메인 구매 및 DNS 설정**
   - 원하는 도메인 구매
   - DNS에서 CNAME 레코드 설정: `[your-username].github.io`

2. **GitHub Pages 설정**
   - Settings > Pages > Custom domain에 도메인 입력
   - `Enforce HTTPS` 체크

### 8. 성능 최적화

현재 설정된 최적화 기능:

- **코드 분할**: vendor, ui 라이브러리 별도 청크로 분리
- **압축**: Terser를 사용한 JavaScript 압축
- **Tree Shaking**: 사용하지 않는 코드 제거
- **정적 자산 최적화**: 이미지 및 CSS 최적화

### 9. 모니터링

- **GitHub Actions**: 빌드 상태 모니터링
- **GitHub Pages**: 배포 상태 및 사이트 접근성 확인
- **브라우저 개발자 도구**: 성능 및 오류 모니터링

---

## 📞 지원

배포 관련 문제가 있으시면 다음을 확인해주세요:

1. [GitHub Actions 문서](https://docs.github.com/en/actions)
2. [GitHub Pages 문서](https://docs.github.com/en/pages)
3. [Vite 배포 가이드](https://vitejs.dev/guide/static-deploy.html)
