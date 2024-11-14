# @repo/eslint-config

- 모노레포 환경에서 모든 프로젝트에 공통 ESLint 설정을 제공하기 위한 구성.
- Airbnb 스타일 가이드, Prettier 통합, React 및 TypeScript 지원을 포함한 종합적인 ESLint 설정을 제공.

## 설치 방법

_`package.json`, devDependencies 추가_

```json
{
  //...
  "devDependencies": {
    //...
    "@repo/eslint-config": "*",
  }
}
```

### React 프로젝트라면?

_프로젝트 루트에 `eslintrc.config.js` 생성 후 아래와 같이 작성._

```js
import reactConfig from "@repo/eslint-config/react.mjs";

export default [...reactConfig];
```