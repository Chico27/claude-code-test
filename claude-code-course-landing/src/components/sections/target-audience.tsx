import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, TrendingUp, Lightbulb } from 'lucide-react';

const audiences = [
  {
    icon: Code,
    title: '開発者の方',
    description: 'AI支援で開発効率を向上させたい、最新の開発手法を学びたい方',
    color: 'from-blue-500 to-cyan-500',
    benefits: ['生産性10倍向上', 'コード品質向上', '最新技術習得']
  },
  {
    icon: TrendingUp,
    title: 'エンジニア志望者',
    description: 'これからエンジニアを目指す方、スキルアップを図りたい方',
    color: 'from-green-500 to-emerald-500',
    benefits: ['基礎から応用まで', 'キャリアサポート', '実践的スキル']
  },
  {
    icon: Users,
    title: '技術リーダー',
    description: 'チームの生産性向上や新しい技術導入を検討している方',
    color: 'from-purple-500 to-violet-500',
    benefits: ['チーム効率化', '技術導入支援', 'リーダーシップ']
  },
  {
    icon: Lightbulb,
    title: '学習意欲の高い方',
    description: '新しい技術に挑戦し、継続的にスキルアップしたい方',
    color: 'from-orange-500 to-red-500',
    benefits: ['継続学習サポート', '最新情報提供', 'コミュニティ']
  }
];

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            こんな方に
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">おすすめ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あらゆるレベルの開発者が、Claude Codeの力でスキルアップを実現しています
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} hover className="group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${audience.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{audience.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              あなたも Claude Code で新しい可能性を発見しませんか？
            </h3>
            <p className="text-gray-600 mb-6">
              無料相談で、あなたの目標に最適な学習プランをご提案いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                無料相談を申し込む
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-medium hover:border-gray-400 transition-colors">
                カリキュラムを見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};