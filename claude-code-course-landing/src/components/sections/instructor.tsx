import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from 'lucide-react';

const achievements = [
  'AI開発エキスパート認定',
  '技術コンサルタント（10年+）',
  'Claude Code ベータ版利用者',
  '講座満足度98.5%'
];

const skills = [
  { name: 'AI開発', level: 'エキスパート', color: 'from-blue-500 to-blue-600' },
  { name: 'チーム指導', level: 'プロフェッショナル', color: 'from-green-500 to-green-600' },
  { name: '技術コンサル', level: 'エキスパート', color: 'from-purple-500 to-purple-600' },
  { name: 'Claude Code', level: 'マスター', color: 'from-orange-500 to-orange-600' }
];

export const InstructorSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            講師
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">紹介</span>
          </h2>
          <p className="text-xl text-gray-600">
            業界のエキスパートが直接指導します
          </p>
        </div>
        
        <Card className="overflow-hidden max-w-4xl mx-auto">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Profile Image Section */}
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl mb-4 mx-auto">
                    👨‍💻
                  </div>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">田中 太郎</h3>
                    <p className="text-blue-100">Lead AI Engineer</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    AI開発エキスパート / 技術コンサルタント
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    10年以上のソフトウェア開発経験を持ち、AI技術の導入支援やチーム開発の指導を専門としています。
                    Claude Codeのベータ版からの利用者として、実践的な活用法に精通し、
                    多くの開発者のスキルアップをサポートしてきました。
                  </p>
                </div>
                
                {/* Skills */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">専門スキル</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className={`text-xs px-2 py-1 bg-gradient-to-r ${skill.color} text-white rounded-full`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${skill.color} h-2 rounded-full w-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">実績・認定</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <Badge className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-4">講師からのメッセージ</h4>
            <p className="text-gray-600 italic">
              "Claude Codeは単なるツールではなく、開発者の創造性を解放する革新的なパートナーです。
              この講座では、AI時代の開発者として必要なスキルと思考法を、実践を通じて身につけていただきます。
              皆さんと一緒に、AI開発の新しい世界を探求できることを楽しみにしています。"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};