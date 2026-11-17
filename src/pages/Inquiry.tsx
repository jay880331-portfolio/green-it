import React, { useState } from "react";
import { Clock, Info, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "../utils";

export default function Inquiry() {
  const [projectType, setProjectType] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    budget: '',
    description: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleProjectType = (type: string) => {
    setProjectType(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || !formData.description || !formData.privacy) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          projectType
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          contact: '',
          company: '',
          budget: '',
          description: '',
          privacy: false
        });
        setProjectType([]);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || '알 수 없는 오류가 발생했습니다.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('서버와 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100">
          <Clock className="w-4 h-4" />
          Average response time 200s
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          GREEN-IT 문의 및 상담 신청
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          어떤 프로젝트를 구상 중이신가요?<br />
          24시간 이내에 담당자가 분석 후 연락드립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-8">
          {submitStatus === 'success' && (
            <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-green-800 font-bold text-lg mb-1">문의가 성공적으로 접수되었습니다!</h3>
                <p className="text-green-700">담당자가 내용을 검토한 후, 입력해주신 연락처로 2영업일 이내에 회신드리겠습니다. 감사합니다.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-red-800 font-bold text-lg mb-1">문의 접수 실패</h3>
                <p className="text-red-700">{errorMessage}</p>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-gray-900">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="담당자님 성함"
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-500 bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <label htmlFor="contact" className="block text-sm font-bold text-gray-900">
                연락처 (이메일 또는 전화번호) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="example@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
                required
              />
            </div>

            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-bold text-gray-900">
                회사/단체명
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="회사명 입력"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-900">
                프로젝트 유형 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['웹 (Web)', '앱 (App)', '커머스/쇼핑몰', '유지보수'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleProjectType(type)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                      projectType.includes(type)
                        ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="budget" className="block text-sm font-bold text-gray-900">
                  예산 범위
                </label>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  💡 초저가 맞춤형 구현 가능!
                </span>
              </div>
              <div className="relative">
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all appearance-none"
                >
                  <option value="">예산 범위를 선택해주세요</option>
                  <option value="100만원 미만 (초저가 맞춤형)">100만원 미만 (초저가 맞춤형)</option>
                  <option value="100만원 ~ 300만원">100만원 ~ 300만원</option>
                  <option value="300만원 ~ 500만원">300만원 ~ 500만원</option>
                  <option value="500만원 ~ 1,000만원">500만원 ~ 1,000만원</option>
                  <option value="1,000만원 이상">1,000만원 이상</option>
                  <option value="미정 (상담 후 결정)">미정 (상담 후 결정)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                * 예산이 한정적이신가요? 고객님의 예산에 맞춘 최적의 솔루션을 제안해 드립니다. 부담 없이 상담을 신청해 주세요!
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-bold text-gray-900">
                프로젝트 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="프로젝트 목적, 현재 준비 상황(기획서 유무), 참고 레퍼런스 등을 자유롭게 적어주세요."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all resize-none"
                required
              ></textarea>
            </div>

            {/* Privacy Consent */}
            <div className="flex items-start gap-3 pt-4">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <label htmlFor="privacy" className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  전송 중...
                </>
              ) : (
                "무료 상담 신청하기"
              )}
            </button>
          </form>
        </div>

        {/* Process Guide Column */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 p-6 md:p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="flex items-center gap-2 mb-8 text-blue-600">
              <Info className="w-5 h-5" />
              <h3 className="font-bold text-lg text-gray-900">진행 과정 안내</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {/* Step 1 */}
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white font-bold text-sm z-10 shrink-0 shadow-md">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">문의 접수</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    제출하신 내용을 바탕으로 담당자가 배정됩니다.
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    *담당자가 신속히 내용을 분석하고 2영업일 이내로 회신드리며, 추가 자료를 요청할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white font-bold text-sm z-10 shrink-0 shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">사전 분석 및 연락</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    요구사항을 분석하여 유선 또는 이메일로 추가 인터뷰를 진행합니다.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-white font-bold text-sm z-10 shrink-0 shadow-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">견적 및 제안</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    상담 내용을 바탕으로 구체적인 견적서와 개발 제안서를 전달드립니다.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-white font-bold text-sm z-10 shrink-0 shadow-sm">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">계약 및 제작</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    계약 체결 후 전담팀이 구성되어 본격적인 프로젝트 개발에 착수합니다.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start gap-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold text-sm z-10 shrink-0 shadow-sm">
                  5
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">기타 정보 정책</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    상담 내용을 바탕으로 구체적인 견적서와 개발 제안서를 전달드립니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
