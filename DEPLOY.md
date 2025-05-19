# デプロイガイド

このドキュメントでは、Supabase 認証を使用した Vite React TypeScript アプリケーションのデプロイ方法について説明します。

## ビルド手順

1. プロジェクトのルートディレクトリで以下のコマンドを実行して、依存関係をインストールします（まだ実行していない場合）：

```bash
npm install
```

2. アプリケーションをビルドします：

```bash
npm run build
```

ビルドが成功すると、`dist`ディレクトリが作成され、デプロイ可能なファイルが生成されます。

## デプロイオプション

### 1. Vercel（推奨）

1. [Vercel](https://vercel.com/)にアカウントを作成し、ログインします。
2. GitHub リポジトリと連携するか、プロジェクトをアップロードします。
3. 環境変数を設定します：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. デプロイを開始します。

### 2. Netlify

1. [Netlify](https://www.netlify.com/)にアカウントを作成し、ログインします。
2. GitHub リポジトリと連携するか、`dist`フォルダをドラッグ＆ドロップでアップロードします。
3. 環境変数を設定します：
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. ビルド設定（GitHub と連携する場合）：
   - ビルドコマンド: `npm run build`
   - 公開ディレクトリ: `dist`

### 3. GitHub Pages

1. `vite.config.ts`ファイルを編集して、ベースパスを設定します：

```typescript
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  base: "/リポジトリ名/", // GitHubリポジトリ名を入力
});
```

2. `package.json`に以下のスクリプトを追加します：

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. `gh-pages`パッケージをインストールします：

```bash
npm install --save-dev gh-pages
```

4. ビルドしてデプロイします：

```bash
npm run build
npm run deploy
```

### 4. Firebase Hosting

1. Firebase アカウントを作成し、プロジェクトを設定します。
2. Firebase CLI をインストールします：

```bash
npm install -g firebase-tools
```

3. Firebase にログインします：

```bash
firebase login
```

4. プロジェクトを初期化します：

```bash
firebase init
```

5. Hosting を選択し、公開ディレクトリとして`dist`を指定します。
6. 環境変数を設定します（Firebase Console > プロジェクト設定 > 環境変数）。
7. デプロイします：

```bash
npm run build
firebase deploy
```

## 環境変数の設定

どのホスティングサービスを選択しても、以下の環境変数を設定する必要があります：

- `VITE_SUPABASE_URL`: Supabase プロジェクトの URL
- `VITE_SUPABASE_ANON_KEY`: Supabase プロジェクトの匿名キー

## 注意事項

1. 本番環境では、Supabase の設定（認証リダイレクト URL など）を更新する必要がある場合があります。
2. 環境変数は各ホスティングプラットフォームの管理画面で設定してください。
3. `.env`ファイルは Git リポジトリにコミットしないでください（セキュリティリスク）。
4. SPA ルーティングを使用している場合は、404 ページのリダイレクト設定が必要な場合があります。

## ローカルでのプレビュー

デプロイ前にビルドをローカルでプレビューするには：

```bash
npm run build
npm run preview
```

これにより、ローカルサーバーが起動し、ビルドされたアプリケーションをプレビューできます。
