# `@repo/prettier-config`

프로젝트 전반에서 사용되는 공통 Prettier 설정

<br/>

## Prettier 주요 설정

- 들여쓰기: 2칸
- 문자열: 쌍따옴표 사용
- 세미콜론: 사용
- 최대 줄 길이: 100
- 후행 쉼표: ES5 호환
- 화살표 함수 괄호: 항상 사용

<br/>

## 사용방법

### 의존성 추가

```json
// ⛳️ package.json
{
  "prettier": "@repo/prettier-config",

  // ...

  "dependencies": {
    "@repo/prettier-config": "workspace:*"
  }
}
```

### ESLint 통합

`.eslintrc.js` 파일에 다음과 같이 설정:

```js
module.exports = {
  extends: ["@repo/eslint-config/react"],
  settings: {
    "prettier/prettier": require("@repo/prettier-config"),
  },
};
```

### VSCode 설정 (권장)

`.vscode/settings.json` 파일에 추가:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

<br/>

## 주의사항

- ESLint와 함께 사용할 경우, Prettier 설정이 ESLint 규칙보다 우선됩니다
- VSCode에서 사용시 Prettier 확장 프로그램 설치가 필요합니다
