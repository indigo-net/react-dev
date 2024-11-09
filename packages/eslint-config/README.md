# `@turbo/eslint-config`

React와 TypeScript 프로젝트를 위한 내부 ESLint 설정 모음.

<br/>

## ESLint 설정
- Airbnb 스타일 가이드 규칙
- React 및 React Hooks 규칙
- TypeScript 지원
- Prettier 통합

<br/>

## 사용방법

### 의존성 추가

```json
// ⛳️ package.json

{
  "dependencies": {
    // ...
    "@repo/eslint-config": "workspace:*"
    // ...
  }
}
```

### 설정파일 작성

1. `.eslintrc.js` 파일 생성
2. 아래 예시와 같이 작성
```js
// ⛳️ .eslintrc.js  

module.exports = {
  root: true,
  extends: ["@repo/eslint-config"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
```

### TypeScript 설정

> 프로젝트 루트에 `tsconfig.json` 파일이 있는지 확인!

```json
// ⛳️ tsconfig.json
{ 
  "extends": "@repo/typescript-config/react.json" 
}
```

<br/>

## 주의사항
- TypeScript 프로젝트에서만 사용
- 프로젝트 루트에 `tsconfig.json` 파일이 있어야 함.
- Prettier와 함께 사용할 경우, Prettier 설정이 ESLint 규칙보다 우선