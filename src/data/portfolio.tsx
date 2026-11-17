import { 
  Zap, Fingerprint, Wallet, BarChart3, 
  Activity, ShieldCheck, Cpu, Globe, 
  ShoppingBag, Video, Smartphone, Server,
  LineChart, Lock, Cloud, Users
} from "lucide-react";

export const portfolioData = [
  {
    id: "assetflow",
    title: "AssetFlow",
    subtitle: "글로벌 자산 관리 플랫폼",
    description: "파편화된 금융 자산을 한 곳에서 관리하고 AI 기반의 맞춤형 포트폴리오를 추천받는 올인원 핀테크 솔루션입니다.",
    category: "앱",
    tag: "FINTECH",
    client: "글로벌 금융 그룹 A사",
    role: "UX/UI Design, App Development, Backend",
    duration: "8 Months",
    year: "2023",
    platform: "iOS / Android / Web",
    techStack: ["Flutter", "Spring Boot", "Next.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1920&auto=format&fit=crop",
    color: "bg-blue-50",
    height: "h-[340px]",
    challenge: "기존의 금융 앱들은 지나치게 많은 정보와 복잡한 메뉴 구조로 인해 사용자 경험(UX)이 크게 저하되어 있었습니다. 특히 밀레니얼 세대를 타겟으로 한 직관적이고 빠른 자산 관리 경험이 필요했으며, 동시에 수백만 명의 트래픽과 기존 레거시 뱅킹 시스템과의 안전한 실시간 연동이 필수적이었습니다.",
    solution: "GREEN-IT는 'Less is More' 철학을 바탕으로 핵심 자산 정보만 직관적으로 보여주는 대시보드를 설계했습니다. 기술적으로는 Flutter를 활용해 네이티브에 준하는 부드러운 60fps 인터랙션을 구현하고, 백엔드에는 마이크로서비스 아키텍처(MSA)를 도입해 트래픽 스파이크에 유연하게 대응하도록 설계했습니다. 금융보안원의 가이드라인을 100% 충족하는 종단간(End-to-End) 암호화를 적용했습니다.",
    features: [
      { title: "Real-time Sync", desc: "오픈뱅킹 API를 활용한 0.5초 이내 실시간 데이터 동기화", icon: Zap, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "Biometric Auth", desc: "FIDO 기반 생체 인증으로 1초 만에 안전한 송금 결제", icon: Fingerprint, color: "text-purple-500", bgColor: "bg-purple-50" },
      { title: "Smart Portfolio", desc: "사용자 투자 성향을 분석하는 머신러닝 기반 포트폴리오", icon: Wallet, color: "text-green-500", bgColor: "bg-green-50" },
      { title: "Data Analytics", desc: "개인화된 소비 패턴 분석 및 월간 금융 리포트 자동 생성", icon: BarChart3, color: "text-orange-500", bgColor: "bg-orange-50" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "MAU Growth", value: "+350%", desc: "런칭 6개월 만에 월간 활성 사용자 수 3.5배 증가" },
      { label: "App Store", value: "4.9", desc: "금융 카테고리 평점 1위 달성" },
      { label: "API Latency", value: "< 200ms", desc: "평균 API 응답 속도 200ms 이하 유지" }
    ]
  },
  {
    id: "stylecast",
    title: "StyleCast",
    subtitle: "라이브 커머스 특화 플랫폼",
    description: "초저지연 스트리밍 기술과 실시간 인터랙션을 결합한 차세대 라이브 커머스 플랫폼입니다.",
    category: "웹",
    tag: "COMMERCE",
    client: "국내 1위 패션 커머스 플랫폼 B사",
    role: "Video Streaming Infra, Frontend, Backend",
    duration: "5 Months",
    year: "2024",
    platform: "Web / iOS / Android",
    techStack: ["React", "Node.js", "WebRTC", "AWS MediaLive"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop",
    color: "bg-pink-50",
    height: "h-[300px]",
    challenge: "기존 라이브 방송 솔루션은 5~10초의 지연시간이 발생해 시청자와 호스트 간의 실시간 소통이 불가능했습니다. 또한, 한정판 상품 드롭(Drop) 시 발생하는 순간적인 10만 명 이상의 동시 접속 트래픽을 견디지 못하고 서버가 다운되는 고질적인 문제가 있었습니다.",
    solution: "WebRTC 기반의 자체 초저지연(Ultra-low latency) 스트리밍 서버를 구축하여 지연시간을 0.5초 미만으로 단축시켰습니다. 트래픽 스파이크에 대비해 AWS EKS 기반의 오토스케일링 아키텍처를 설계하고, 채팅 서버와 커머스 서버를 완벽히 분리하여 한쪽의 부하가 다른 쪽에 영향을 주지 않도록 장애를 격리했습니다.",
    features: [
      { title: "Live Streaming", desc: "지연시간 0.5초 미만의 초저지연 고화질 라이브 방송", icon: Video, color: "text-pink-500", bgColor: "bg-pink-50" },
      { title: "Real-time Chat", desc: "10만 명 동시 접속을 버티는 실시간 채팅 아키텍처", icon: Users, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "One-click Pay", desc: "방송 시청 화면을 벗어나지 않는 끊김 없는 결제 경험", icon: ShoppingBag, color: "text-orange-500", bgColor: "bg-orange-50" },
      { title: "Cloud Scale", desc: "트래픽 스파이크에 대응하는 컨테이너 기반 자동 확장", icon: Cloud, color: "text-sky-500", bgColor: "bg-sky-50" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "Peak Concurrent", value: "120K+", desc: "최대 동시 접속자 12만 명 안정적 처리" },
      { label: "Conversion Rate", value: "28.5%", desc: "기존 VOD 대비 구매 전환율 28.5% 상승" },
      { label: "Latency", value: "0.4s", desc: "평균 방송 지연시간 0.4초 달성" }
    ]
  },
  {
    id: "logismind",
    title: "LogisMind",
    subtitle: "AI 기반 물류 최적화 솔루션",
    description: "머신러닝을 활용하여 배송 경로를 최적화하고 물류 비용을 혁신적으로 절감하는 엔터프라이즈 SaaS입니다.",
    category: "인공지능",
    tag: "AI / B2B",
    client: "국내 대형 물류/택배 C사",
    role: "AI Algorithm, Admin Dashboard, Driver App",
    duration: "10 Months",
    year: "2023",
    platform: "Web (Admin) / App (Driver)",
    techStack: ["Vue.js", "Python", "TensorFlow", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1920&auto=format&fit=crop",
    color: "bg-slate-50",
    height: "h-[360px]",
    challenge: "수만 대의 배송 차량이 매일 수백만 건의 화물을 처리하지만, 배송 기사의 직관에 의존한 비효율적인 경로 설정으로 인해 유류비 낭비와 배송 지연이 발생하고 있었습니다. 기존 레거시 ERP 시스템은 너무 낡아 새로운 기술을 접목하기 어려웠습니다.",
    solution: "수년간의 배송 데이터, 실시간 교통 상황, 날씨, 화물 적재량 등을 종합적으로 분석하는 딥러닝 기반 다이나믹 라우팅 엔진을 자체 개발했습니다. 레거시 시스템과의 연동을 위해 중간에 API Gateway를 구축하고, 배송 기사들이 직관적으로 사용할 수 있는 턴바이턴(Turn-by-turn) 내비게이션 앱을 제공했습니다.",
    features: [
      { title: "ML Routing", desc: "수십 가지 변수를 고려한 머신러닝 기반 배송 경로 최적화", icon: Cpu, color: "text-slate-700", bgColor: "bg-slate-100" },
      { title: "Real-time Track", desc: "전국 배송 차량의 위치 및 상태 실시간 관제 대시보드", icon: Globe, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "Demand Forecast", desc: "계절, 이벤트 등 빅데이터 기반 지역별 물동량 예측", icon: LineChart, color: "text-green-500", bgColor: "bg-green-50" },
      { title: "ERP Integration", desc: "기존 낡은 레거시 시스템과 충돌 없는 완벽한 API 연동", icon: Server, color: "text-indigo-500", bgColor: "bg-indigo-50" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "Cost Reduction", value: "-18%", desc: "전체 물류 및 유류 비용 18% 절감" },
      { label: "On-time Delivery", value: "99.2%", desc: "정시 배송률 99.2% 달성" },
      { label: "Driver Satisfaction", value: "4.7", desc: "배송 기사 앱 사용 만족도 4.7/5.0" }
    ]
  },
  {
    id: "nexawallet",
    title: "NexaWallet",
    subtitle: "엔터프라이즈 크립토 지갑",
    description: "기관 투자자를 위한 다중 서명(Multi-sig) 기반의 최고 보안 등급 디지털 자산 관리 플랫폼입니다.",
    category: "플랫폼",
    tag: "WEB3",
    client: "글로벌 디지털 자산 운용사 D사",
    role: "Blockchain Integration, Security Architecture, App Dev",
    duration: "6 Months",
    year: "2024",
    platform: "Web / iOS / Android",
    techStack: ["React Native", "Go", "Solidity", "AWS KMS"],
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=1920&auto=format&fit=crop",
    color: "bg-zinc-50",
    height: "h-[280px]",
    challenge: "기관 투자자들이 수백억 원 규모의 가상자산을 안전하게 보관하고 운용할 수 있는 엔터프라이즈급 지갑이 부재했습니다. 단일 프라이빗 키 유출로 인한 해킹 위험을 원천 차단해야 했으며, 복잡한 내부 결재 프로세스를 블록체인 상에서 구현해야 했습니다.",
    solution: "MPC(Multi-Party Computation) 기술을 적용하여 프라이빗 키를 여러 조각으로 분할 저장함으로써 단일 실패점(SPOF)을 제거했습니다. 기업의 내부 결재 라인에 맞춘 다중 서명(Multi-sig) 스마트 컨트랙트를 개발하고, 하드웨어 보안 모듈(HSM)과 연동되는 강력한 하이브리드 보안 아키텍처를 완성했습니다.",
    features: [
      { title: "Multi-sig Security", desc: "기업 내부 결재 프로세스를 반영한 다중 서명 시스템", icon: ShieldCheck, color: "text-zinc-800", bgColor: "bg-zinc-100" },
      { title: "Cross-chain", desc: "이더리움, 솔라나 등 다양한 메인넷 자산 통합 관리", icon: Globe, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "Audit Reports", desc: "금융 당국 규제 준수를 위한 자동화된 트랜잭션 감사 리포트", icon: BarChart3, color: "text-teal-500", bgColor: "bg-teal-50" },
      { title: "Cold Storage", desc: "네트워크와 완벽히 분리된 오프라인 콜드월렛 연동 지원", icon: Lock, color: "text-orange-500", bgColor: "bg-orange-50" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "Security Incidents", value: "0", desc: "운영 기간 내 보안 사고 및 해킹 0건" },
      { label: "Assets Under Mgmt", value: "$1.2B+", desc: "관리 중인 총 자산 규모 12억 달러 돌파" },
      { label: "Tx Speed", value: "3x Faster", desc: "기존 기관용 지갑 대비 트랜잭션 서명 속도 3배 향상" }
    ]
  },
  {
    id: "mediconnect",
    title: "MediConnect",
    subtitle: "비대면 원격 진료 서비스",
    description: "환자와 전문의를 언제 어디서나 안전하게 연결해주는 스마트 헬스케어 플랫폼입니다.",
    category: "앱",
    tag: "HEALTHCARE",
    client: "수도권 대형 종합병원 컨소시엄",
    role: "Service Design, Mobile App, WebRTC, Backend",
    duration: "7 Months",
    year: "2023",
    platform: "iOS / Android",
    techStack: ["Swift", "Kotlin", "Node.js", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1920&auto=format&fit=crop",
    color: "bg-teal-50",
    height: "h-[320px]",
    challenge: "의료 소외 계층과 만성질환자를 위한 비대면 진료 플랫폼이 필요했습니다. 고령층 사용자가 쉽게 사용할 수 있는 극도로 단순한 UX가 요구되었으며, 민감한 의료 데이터(PHI)를 다루기 때문에 의료법 및 개인정보보호법(HIPAA 수준)을 철저히 준수해야 했습니다.",
    solution: "사용자 테스트를 반복하여 '큰 글씨 모드'와 '음성 안내' 기능을 탑재한 시니어 친화적 UI를 설계했습니다. 진료 기록과 처방전 데이터는 블록체인 기술을 일부 차용하여 위변조를 방지하고, WebRTC 기반의 화상 진료 세션은 서버에 저장되지 않는 종단간 암호화(E2EE)를 적용하여 보안을 극대화했습니다.",
    features: [
      { title: "Telemedicine", desc: "끊김 없는 고화질 1:1 화상 진료 및 화면 공유 시스템", icon: Video, color: "text-teal-600", bgColor: "bg-teal-50" },
      { title: "EMR Integration", desc: "주요 대형 병원의 전자의무기록(EMR) 시스템 완벽 연동", icon: Server, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "E-Prescription", desc: "전자 처방전 안전 발급 및 지정 약국 자동 전송", icon: Activity, color: "text-rose-500", bgColor: "bg-rose-50" },
      { title: "Wearable Sync", desc: "스마트워치 등 웨어러블 기기의 생체 데이터 실시간 연동", icon: Smartphone, color: "text-slate-600", bgColor: "bg-slate-100" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "Total Consultations", value: "1M+", desc: "누적 비대면 진료 건수 100만 건 돌파" },
      { label: "Patient Satisfaction", value: "4.8/5.0", desc: "환자 앱 사용 만족도 4.8점 (특히 60대 이상에서 호평)" },
      { label: "No-show Rate", value: "-45%", desc: "기존 대면 진료 대비 예약 부도율(No-show) 45% 감소" }
    ]
  },
  {
    id: "homesync",
    title: "HomeSync",
    subtitle: "스마트홈 통합 제어 플랫폼",
    description: "다양한 브랜드의 IoT 기기를 하나의 앱에서 제어하고 자동화하는 스마트 라이프 솔루션입니다.",
    category: "플랫폼",
    tag: "IOT / HOME",
    client: "글로벌 가전 제조사 E사",
    role: "IoT Platform, Mobile App, Cloud Architecture",
    duration: "9 Months",
    year: "2024",
    platform: "iOS / Android / WatchOS",
    techStack: ["React Native", "NestJS", "MQTT", "Redis"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
    color: "bg-orange-50",
    height: "h-[300px]",
    challenge: "사용자들은 각기 다른 브랜드의 스마트 가전을 제어하기 위해 여러 개의 앱을 설치해야 하는 불편함이 있었습니다. 수백 가지의 다양한 IoT 프로토콜을 하나로 통합하고, 수백만 대의 기기에서 발생하는 실시간 상태 데이터를 지연 없이 처리할 수 있는 중앙 집중형 플랫폼이 필요했습니다.",
    solution: "최신 스마트홈 연동 표준인 Matter 프로토콜을 선제적으로 도입하여 기기 호환성 문제를 해결했습니다. MQTT 프로토콜과 Redis를 활용한 고성능 메시지 브로커를 구축하여 수백만 대의 기기 상태를 실시간으로 동기화했습니다. 또한, 사용자의 생활 패턴을 학습하여 최적의 환경을 자동 세팅하는 AI 루틴 엔진을 탑재했습니다.",
    features: [
      { title: "Universal Control", desc: "Matter 표준을 적용한 다기종 IoT 기기 통합 제어", icon: Smartphone, color: "text-orange-500", bgColor: "bg-orange-50" },
      { title: "AI Routines", desc: "사용자의 기상, 수면 패턴을 학습하는 자동화 시나리오", icon: Cpu, color: "text-blue-500", bgColor: "bg-blue-50" },
      { title: "Energy Saving", desc: "가구 전체의 전력 소비량 모니터링 및 누진세 예측 알림", icon: Zap, color: "text-green-500", bgColor: "bg-green-50" },
      { title: "Voice Assistant", desc: "Siri, Google Assistant, Alexa 등 주요 음성 제어 완벽 연동", icon: Cloud, color: "text-sky-500", bgColor: "bg-sky-50" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
    ],
    results: [
      { label: "Energy Saved", value: "25%", desc: "AI 전력 최적화를 통한 가구당 평균 전기요금 25% 절감" },
      { label: "Connected Devices", value: "5M+", desc: "플랫폼에 연동된 활성 IoT 기기 수 500만 대 돌파" },
      { label: "Daily Active Users", value: "1.2M", desc: "일간 활성 사용자(DAU) 120만 명 달성" }
    ]
  }
];
