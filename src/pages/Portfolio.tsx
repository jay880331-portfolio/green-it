import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "../utils";
import { portfolioData } from "../data/portfolio";

const categories = ["전체", "웹", "앱", "인공지능", "플랫폼"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("전체");

  const filteredItems = activeTab === "전체" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <div className="w-full px-4 py-8 md:py-12 bg-[#f8f9fa] min-h-screen" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">GREEN-IT 포트폴리오 갤러리</h1>
          <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                activeTab === category
                  ? "bg-blue-50 text-blue-600 border border-blue-200 shadow-sm"
                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}`}
              className="group block break-inside-avoid"
            >
              <div className={cn(
                "relative rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-white flex flex-col justify-end",
                item.height
              )}>
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90"></div>
                </div>

                {/* Content */}
                <div className="relative p-6 z-10">
                  <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold tracking-wider text-green-600 mb-3 shadow-sm border border-white/50">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    View Case Study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
