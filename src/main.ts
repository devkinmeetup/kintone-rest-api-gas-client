// 以下の内容は動作確認時に使用したものです。開発の際は削除してください。

function hello(): string {
  return 'Hello from Rollup + TypeScript!';
}

(globalThis as any).hello = hello;
