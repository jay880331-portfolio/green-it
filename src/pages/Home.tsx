import { Link } from "react-router-dom";
import { Trophy, Rocket, ShieldCheck, Layers, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Home() {
  const featuredWorks = portfolioData.slice(0, 2);

  return (
    <div className="flex flex-col items-center w-full px-4 py-12 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          아이디어를 현실로<br />
          만드는 기술
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          혁신적인 IT 솔루션과 검증된 기술력으로<br />
          고객의 비즈니스 성장을 가속화합니다.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          현재 신규 프로젝트 접수 중
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/inquiry"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            무료 상담 신청
          </Link>
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            포트폴리오 보기
          </Link>
        </div>
      </section>


      {/* Core Competencies */}
      <section className="w-full max-w-5xl mx-auto space-y-8 text-left">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">핵심 경쟁력</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">확실한 경쟁력</h3>
            <p className="text-gray-500 leading-relaxed">
              타협하지 않는 경쟁력과 노하우로, 비즈니스 목표를 확실하게 달성합니다.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">압도적인 개발 속도</h3>
            <p className="text-gray-500 leading-relaxed">
              압도적인 개발 속도로 민첩하게 시장에 대응하며, 최신 기술을 사용하여 성능을 극대화합니다.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">타협하지 않는 품질</h3>
            <p className="text-gray-500 leading-relaxed">
              안정적인 아키텍처와 꼼꼼한 테스트로 타협하지 않는 품질을 보장합니다.
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">최신 기술 스택</h3>
            <p className="text-gray-500 leading-relaxed">
              최신 기술 스택을 도입하여 확장 가능하고 유지보수가 용이한 시스템을 구축합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="w-full max-w-5xl mx-auto space-y-8 text-left">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Selected Works</h2>
            <p className="text-gray-500">최근 진행한 주요 프로젝트입니다.</p>
          </div>
          <Link to="/portfolio" className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
            전체보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredWorks.map((work) => (
            <Link key={work.id} to={`/portfolio/${work.id}`} className="group block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">{work.title}</h3>
              <p className="text-gray-500">{work.subtitle}</p>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex justify-center mt-6">
          <Link to="/portfolio" className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl font-medium text-gray-700">
            전체보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
