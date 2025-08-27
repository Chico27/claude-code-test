import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, Phone, MapPin } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          今すぐClaude Codeを
          <br />
          学び始めよう
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          AI開発の未来に向けて、今日から一歩を踏み出しませんか？
          <br />
          あなたの開発スキルを次のレベルへ押し上げます。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl group"
          >
            無料相談を申し込む
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 group"
          >
            <Download className="mr-2 w-5 h-5" />
            資料をダウンロード
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">30日間</div>
            <div className="text-blue-200 text-sm">返金保証</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-blue-200 text-sm">サポート対応</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-blue-200 text-sm">満足した受講生</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  const footerLinks = {
    '講座について': [
      'カリキュラム',
      '料金プラン',
      '講師紹介',
      '受講者の声'
    ],
    'サポート': [
      'よくある質問',
      'お問い合わせ',
      '技術サポート',
      'コミュニティ'
    ],
    'リソース': [
      'ブログ',
      'ニュースレター',
      'イベント',
      'パートナー'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Claude Code講座
              </h3>
              <p className="text-gray-400 leading-relaxed">
                AI開発スキルを習得する実践的な講座。
                Claude Codeをマスターして、開発効率を劇的に向上させましょう。
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@claude-code-course.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>東京都渋谷区（オンライン対応）</span>
              </div>
            </div>
          </div>
          
          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Claude Code講座. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">特定商取引法</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};