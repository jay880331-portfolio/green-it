import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function PortfolioDetail() {
  const { id } = useParams();
  // Ensure we match by string ID, fallback to first item if not found
  const project = portfolioData.find(p => String(p.id) === String(id)) || portfolioData[0];

  // Find next project for the footer link
  const currentIndex = portfolioData.findIndex(p => String(p.id) === String(project.id));
  const nextProject = portfolioData[(currentIndex + 1) % portfolioData.length];

  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/portfolio" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <Link to="/inquiry" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Start a Project
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-xs font-bold tracking-widest uppercase mb-8">
          {project.tag}
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
          {project.subtitle}
        </p>
      </section>

      {/* Hero Image */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="aspect-[21/9] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
          <img 
            src={project.heroImage} 
            alt={`${project.title} Hero`} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Project Info Grid */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Client</p>
            <p className="font-semibold text-gray-900 text-lg">{project.client}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Role</p>
            <p className="font-semibold text-gray-900 text-lg">{project.role}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Timeline</p>
            <p className="font-semibold text-gray-900 text-lg">{project.duration} ({project.year})</p>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Platforms</p>
            <p className="font-semibold text-gray-900 text-lg">{project.platform}</p>
          </div>
        </div>
      </section>

      {/* The Story (Challenge & Solution) */}
      <section className="max-w-6xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 lg:sticky lg:top-32">
              The Story
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">01</span>
                도전 과제 (The Challenge)
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">02</span>
                해결 방안 (Our Approach)
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
            
            {/* Tech Stack Pills */}
            <div className="pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Tech Stack Used</h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-5 py-2.5 rounded-full bg-gray-50 text-gray-900 text-sm font-bold border border-gray-200 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Box */}
      <section className="bg-gray-50 py-32 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 기능 (Key Features)</h2>
            <p className="text-lg text-gray-500">프로젝트의 성공을 이끈 주요 기능들입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-8 md:p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200">
            <img src={project.gallery[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200">
            <img src={project.gallery[1]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200">
          <img src={project.gallery[2]} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Impact / Results */}
      <section className="bg-gray-900 text-white py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">비즈니스 임팩트<br/>(The Impact)</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                GREEN-IT의 기술력은 단순한 앱 개발을 넘어 고객사의 비즈니스 지표를 폭발적으로 성장시킵니다.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {project.results.map((result, idx) => (
                  <div key={idx} className="p-8 rounded-[2rem] bg-gray-800 border border-gray-700">
                    <div className="text-4xl md:text-5xl font-black mb-4 text-blue-400">{result.value}</div>
                    <div className="text-lg font-bold text-white mb-2">{result.label}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{result.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project & CTA */}
      <section className="max-w-6xl mx-auto px-4 py-32 text-center">
        <p className="text-gray-500 font-bold tracking-widest uppercase mb-8">Next Project</p>
        <Link to={`/portfolio/${nextProject.id}`} className="group inline-block mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-center gap-4">
            {nextProject.title}
            <ArrowRight className="w-10 h-10 md:w-14 md:h-14 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h2>
        </Link>
        
        <div className="p-12 md:p-20 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">당신의 아이디어도 현실이 될 수 있습니다.</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              GREEN-IT와 함께 비즈니스의 다음 단계를 준비하세요.
            </p>
            <Link 
              to="/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-50 transition-colors shadow-xl"
            >
              프로젝트 문의하기 <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>
    </div>
  );
}
