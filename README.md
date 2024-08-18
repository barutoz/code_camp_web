# Web プロジェクト

このプロジェクトは、Next.js、TypeScript、Chakra UI、およびStorybookを使用して構築されたWebアプリケーションです。

## 始め方

これらの手順に従って、開発環境でプロジェクトを起動し実行してください。

### 前提条件

- Node.js (バージョン14.0.0以上)
- npm または yarn
- NVM (Node Version Manager)

### NVMのインストールと使用

1. NVMをインストールします：

   - macOSとLinux：
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
     ```
   - Windows：[nvm-windows](https://github.com/coreybutler/nvm-windows)をダウンロードしてインストールします。

2. ターミナルを再起動するか、以下のコマンドを実行してNVMを有効にします：
   source ~/.bashrc # または ~/.zshrc

3. このプロジェクトで使用するNode.jsのバージョンをインストールします：
   nvm install 20

4. インストールしたバージョンを使用するように設定します：
   nvm use 20

### プロジェクトのセットアップ

1. リポジトリをクローンします。
2. プロジェクトディレクトリに移動します。
3. 依存関係をインストールします：
   npm install
   Copyまたは
   yarn install
   Copy

## 利用可能なスクリプト

パッケージマネージャーとして`npm`または`yarn`を使用して、以下のスクリプトを実行できます：

- `dev`: 開発サーバーを起動します（`http://localhost:3000`）
- `build`: プロダクション用にアプリケーションをビルドします
- `start`: プロダクションモードでアプリケーションを起動します
- `lint`: ESLintを使用してコードをリントします
- `typecheck`: TypeScriptの型チェックを実行します
- `format`: Prettierを使用してソースコードをフォーマットします

### 開発サーバーの起動

npm run dev
Copyまたは
yarn dev
Copy

## Storybookの使用

このプロジェクトでは、UIコンポーネントの開発と文書化にStorybookを使用しています。

### Storybookの起動

npm run storybook
Copyまたは
yarn storybook
Copy
ブラウザで [http://localhost:6006](http://localhost:6006) を開いてStorybookを確認できます。

### Storybookのビルド

静的なStorybookをビルドするには：
npm run build-storybook
Copyまたは
yarn build-storybook
Copy

## 主な依存関係

- Next.js: ^14.2.5
- React: ^18
- Chakra UI: ^2.8.2
- SWR: ^2.2.5
- React Hook Form: ^7.52.2
- Recoil: ^0.7.7
- Axios: ^1.7.4
- Zod: ^3.23.8

## 開発依存関係

- TypeScript: ^5
- ESLint: ^8
- Prettier: 3.3.3
- Storybook: ^8.2.9

## コードフォーマット

コードのフォーマットを行うには：
npm run format
Copyまたは
yarn format
Copy

## 型チェック

TypeScriptの型チェックを実行するには：
npm run typecheck
Copyまたは
yarn typecheck
Copy

## コントリビューション

プロジェクトへの貢献に興味がある場合は、Issueを開くかプルリクエストを送ってください。

## ライセンス

このプロジェクトはプライベートであり、特定のライセンスの下では公開されていません。
この更新版のREADMEには、NVMのインストール方法と使用方法に関する詳細な手順が含まれています。これにより、開発者がプロジェクトに適切なNode.jsバージョンを簡単に設定できるようになります。プロジェクトの具体的な要件に応じて、Node.jsのバージョンや他の詳細をさらに調整してください。
