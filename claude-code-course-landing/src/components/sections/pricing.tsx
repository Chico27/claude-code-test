import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'ベーシック',
    price: '¥29,800',
    description: '個人学習者向け',
    features: [
      '基礎講座（5時間）',
      '教材提供',
      'メールサポート',
      '修了証発行'
    ],
    popular: false,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    name: 'スタンダード',
    price: '¥59,800',
    description: '本格的にスキルアップしたい方向け',
    features: [
      '全講座（15時間）',
      '教材＋演習問題',
      '個別メンタリング（3回）',
      'Slackサポート',
      '実践プロジェクト',
      'コミュニティアクセス'
    ],
    popular: true,
    gradient: 'from-blue-600 to-purple-600'
  },
  {
    name: 'プロフェッショナル',
    price: '¥98,000',
    description: 'プロフェッショナル向け',
    features: [
      '全講座＋応用編',
      '実プロジェクト指導',
      '無制限メンタリング',
      '認定証発行',
      '転職・キャリアサポート',
      '優先サポート'
    ],
    popular: false,
    gradient: 'from-purple-600 to-pink-600'
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            料金
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">プラン</span>
          </h2>
          <p className="text-xl text-gray-600">
            あなたの学習目標に合わせて最適なプランをお選びください
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}
              hover
            >
              {plan.popular && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl font-bold text-white">{plan.name[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'shadow-lg' : ''}`}
                  variant={plan.popular ? 'primary' : 'secondary'}
                >
                  {plan.popular ? '今すぐ申し込む' : 'プランを選択'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            30日間の返金保証付き。すべてのプランでオンライン受講が可能です。
          </p>
          <Button variant="ghost" size="sm">
            詳しい料金比較を見る →
          </Button>
        </div>
      </div>
    </section>
  );
};