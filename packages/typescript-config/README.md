# @repo/typescript-config

- 모노레포 환경에서 모든 프로젝트에 공통 TypeScript 설정을 제공하기 위한 구성.
- React 전용 설정 등을 관리


## 설치 방법

_`package.json`, devDependencies 추가_

```json
{
  //...
  "devDependencies": {
    //...
    "@repo/typescript-config": "*",
  }
}
```

### React 프로젝트라면?

_프로젝트 루트에 `tsconfig.json` 생성 후 아래와 같이 작성._

```json
{
  "extends": "@repo/typescript-config/react-ts.json",
  "compilerOptions": {
    "baseUrl": "./src" // 프로젝트별 추가 옵션
  },
  "include": ["src"]
}
```

