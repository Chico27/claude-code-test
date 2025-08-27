import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, Zap, Wrench, Target, Users, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI支援開発',
    description: 'Claude AIが開発をサポートし、コードの品質向上と開発速度の向上を実現',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: '効率化',
    description: '繰り返し作業の自動化と、インテリジェントなコード提案で開発効率が大幅アップ',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Wrench,
    title: '実践的',
    description: '実際のプロジェクトで使える実践的なスキルと知識を習得',
    color: 'from-purple-500 to-pink-500'
  }
];

const courseFeatures = [
  {
    icon: Target,
    title: '基礎から応用まで',
    description: 'Claude Codeの基本操作から高度な活用法まで段階的に学習'
  },
  {
    icon: Users,
    title: 'ハンズオン学習',
    description: '実際にコードを書きながら体験的に学習'
  },
  {
    icon: Lightbulb,
    title: '個別サポート',
    description: '質問や疑問に個別でお答えします'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <>
      {/* Claude Code Introduction */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Claude Code
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">とは？</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              次世代AI開発ツールが提供する革新的な機能で、開発体験を根本から変える
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="group overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              講座の
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">特徴</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-gray-900">実践的なカリキュラム</h3>
                <div className="space-y-6">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/50">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold mb-6 text-gray-900">学習内容例</h4>
                <ul className="space-y-4">
                  {[
                    'Claude Codeの基本操作',
                    'AI支援でのコード生成',
                    'デバッグとリファクタリング',
                    'テスト自動化',
                    'プロジェクト管理',
                    'チーム開発での活用'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};