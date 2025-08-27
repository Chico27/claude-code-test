'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '初心者でも受講できますか？',
    answer: 'はい、基礎的なプログラミング知識があれば受講いただけます。Claude Codeの使い方から丁寧に指導し、段階的にスキルアップできるカリキュラムを用意しています。不明な点があれば個別サポートでお答えします。'
  },
  {
    question: '受講期間はどのくらいですか？',
    answer: 'プランによって異なりますが、ベーシックプランは1ヶ月、スタンダードプランは3ヶ月、プロフェッショナルプランは6ヶ月の期間で学習いただけます。ご自身のペースに合わせて学習を進めることができます。'
  },
  {
    question: 'オンラインでの受講は可能ですか？',
    answer: 'はい、すべてオンラインで受講いただけます。録画講座でいつでも学習でき、定期的なライブセッションで講師や他の受講生と交流することも可能です。世界中どこからでも受講できます。'
  },
  {
    question: '返金保証はありますか？',
    answer: '受講開始から30日以内であれば、理由を問わず全額返金いたします。私たちは講座の品質に自信を持っており、満足いただけない場合は遠慮なくお申し出ください。'
  },
  {
    question: 'Claude Codeのライセンスは含まれますか？',
    answer: '講座期間中のClaude Code利用権は料金に含まれています。受講生専用のアカウントを提供し、学習に最適な環境でClaude Codeをお使いいただけます。'
  },
  {
    question: '修了後のサポートはありますか？',
    answer: 'はい、修了後も1年間のコミュニティアクセスと質問サポートを提供します。また、最新のClaude Code機能やベストプラクティスの情報も定期的にお届けします。'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            よくある
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">質問</span>
          </h2>
          <p className="text-xl text-gray-600">
            受講を検討されている方からよく寄せられる質問にお答えします
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    Q: {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-medium text-blue-600">A: </span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              他にご質問がございますか？
            </h3>
            <p className="text-gray-600 mb-6">
              お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                お問い合わせ
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:border-gray-400 transition-colors">
                無料相談を予約
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};