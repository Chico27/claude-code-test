export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="text-blue-600">Claude Code</span>で
            <br />
            AI開発のプロになろう
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Anthropic社のAI開発ツール「Claude Code」を使いこなし、
            効率的なAI開発スキルを身につける実践的な講座です
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              今すぐ申し込む
            </button>
            <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-slate-400 transition-colors">
              詳細を見る
            </button>
          </div>
        </div>
      </section>

      {/* Claude Code Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Claude Codeとは？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI支援開発</h3>
              <p className="text-slate-600">
                Claude AIが開発をサポートし、コードの品質向上と開発速度の向上を実現
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">効率化</h3>
              <p className="text-slate-600">
                繰り返し作業の自動化と、インテリジェントなコード提案で開発効率が大幅アップ
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">実践的</h3>
              <p className="text-slate-600">
                実際のプロジェクトで使える実践的なスキルと知識を習得
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            講座の特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">実践的なカリキュラム</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold">基礎から応用まで</h4>
                    <p className="text-slate-600">Claude Codeの基本操作から高度な活用法まで段階的に学習</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold">ハンズオン学習</h4>
                    <p className="text-slate-600">実際にコードを書きながら体験的に学習</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold">個別サポート</h4>
                    <p className="text-slate-600">質問や疑問に個別でお答えします</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold">最新情報</h4>
                    <p className="text-slate-600">常に最新のClaude Code機能とベストプラクティスを提供</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">学習内容例</h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Claude Codeの基本操作</li>
                <li>• AI支援でのコード生成</li>
                <li>• デバッグとリファクタリング</li>
                <li>• テスト自動化</li>
                <li>• プロジェクト管理</li>
                <li>• チーム開発での活用</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            こんな方におすすめ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">開発者の方</h3>
              <p className="text-slate-600">
                AI支援で開発効率を向上させたい、最新の開発手法を学びたい方
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">エンジニア志望者</h3>
              <p className="text-slate-600">
                これからエンジニアを目指す方、スキルアップを図りたい方
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">技術リーダー</h3>
              <p className="text-slate-600">
                チームの生産性向上や新しい技術導入を検討している方
              </p>
            </div>
            <div className="p-6 border border-slate-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">学習意欲の高い方</h3>
              <p className="text-slate-600">
                新しい技術に挑戦し、継続的にスキルアップしたい方
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            料金プラン
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">ベーシック</h3>
              <div className="text-3xl font-bold mb-4">¥29,800</div>
              <ul className="space-y-3 mb-6">
                <li>• 基礎講座（5時間）</li>
                <li>• 教材提供</li>
                <li>• メールサポート</li>
              </ul>
              <button className="w-full border-2 border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:border-slate-400 transition-colors">
                選択する
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                人気
              </div>
              <h3 className="text-2xl font-semibold mb-4">スタンダード</h3>
              <div className="text-3xl font-bold mb-4">¥59,800</div>
              <ul className="space-y-3 mb-6">
                <li>• 全講座（15時間）</li>
                <li>• 教材＋演習問題</li>
                <li>• 個別メンタリング（3回）</li>
                <li>• Slackサポート</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                選択する
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-2xl font-semibold mb-4">プロフェッショナル</h3>
              <div className="text-3xl font-bold mb-4">¥98,000</div>
              <ul className="space-y-3 mb-6">
                <li>• 全講座＋応用編</li>
                <li>• 実プロジェクト指導</li>
                <li>• 無制限メンタリング</li>
                <li>• 認定証発行</li>
              </ul>
              <button className="w-full border-2 border-slate-300 text-slate-700 py-3 rounded-lg font-medium hover:border-slate-400 transition-colors">
                選択する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            講師紹介
          </h2>
          <div className="bg-slate-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">田中 太郎</h3>
                <p className="text-blue-600 mb-4">AI開発エキスパート / 技術コンサルタント</p>
                <p className="text-slate-600 mb-4">
                  10年以上のソフトウェア開発経験を持ち、AI技術の導入支援やチーム開発の指導を専門としています。
                  Claude Codeのベータ版からの利用者で、実践的な活用法に精通しています。
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AI開発</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">チーム指導</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">技術コンサル</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            よくある質問
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Q: 初心者でも受講できますか？</h3>
              <p className="text-slate-600">A: はい、基礎的なプログラミング知識があれば受講いただけます。丁寧にサポートいたします。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Q: 受講期間はどのくらいですか？</h3>
              <p className="text-slate-600">A: プランによって異なりますが、3ヶ月～6ヶ月の期間で学習いただけます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Q: オンラインでの受講は可能ですか？</h3>
              <p className="text-slate-600">A: はい、すべてオンラインで受講いただけます。録画講座とライブセッションの両方をご提供します。</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Q: 返金保証はありますか？</h3>
              <p className="text-slate-600">A: 受講開始から7日以内であれば、理由を問わず全額返金いたします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">今すぐClaude Codeを学び始めよう</h2>
          <p className="text-xl mb-8 opacity-90">
            AI開発の未来に向けて、今日から一歩を踏み出しませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
              無料相談を申し込む
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              資料をダウンロード
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Claude Code講座</h3>
              <p className="text-slate-400">AI開発スキルを習得する実践的な講座</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">講座について</h4>
              <ul className="space-y-2 text-slate-400">
                <li>カリキュラム</li>
                <li>料金プラン</li>
                <li>講師紹介</li>
                <li>受講者の声</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-slate-400">
                <li>よくある質問</li>
                <li>お問い合わせ</li>
                <li>技術サポート</li>
                <li>コミュニティ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <p className="text-slate-400 mb-2">Email: info@claude-code-course.com</p>
              <p className="text-slate-400">Tel: 03-1234-5678</p>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Claude Code講座. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
