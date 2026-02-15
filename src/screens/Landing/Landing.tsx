import { useState } from "react";
import { StarIcon, MessageSquare, Shield, Radio, Cpu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";


import { TermsModal } from "../../components/TermsModal";

const tradingFeatures = [
  {
    title: "Multi-Agent AI Engine",
    description:
      "11 specialized AI agents including Technical Analysis, Sentiment, Risk, and Market Regime agents collaborate for comprehensive insights.",
    gradient: true,
    icon: Cpu,
    image: "/multi-ai-agent.png",
  },
  {
    title: "AI Trading Coach & Strategist Chat",
    description: "Chat with Fyntrix like you would with a senior trader: break down a setup, stress‑test a plan, or ask for a cleaner risk‑reward alternative.",
    gradient: false,
    icon: MessageSquare,
    image: "/ai-stratergist.png",
  },
  {
    title: "Risk Management Focus",
    description: "Decision-support system that provides recommendations without executing trades, keeping final control with you.",
    gradient: false,
    icon: Shield,
    image: "/risk-management.png",
  },
  {
    title: "Real-Time Signal Feed",
    description: "Live, actionable picks with entry price, stop‑loss, target, conviction level, and mode ready to execute.",
    gradient: false,
    icon: Radio,
    image: "/market-coverage.png",
  },
];

// const tradeStats = [
//   { value: "2036", label: "Closed Trade" },
//   { value: "Instant", label: "Buy/Sell", color: "text-[#12ba00]" },
//   { value: "99/- mon", label: "Low Cost Plan" },
// ];

const trustFeatures = [
  {
    title: "Bank level encryption",
    description:
      "Your data is protected with the same security standard used by major finnancial institutions.",
    gradient:
      "bg-[linear-gradient(89deg,rgba(255,255,255,1)_0%,rgba(11,192,181,1)_100%)]",
  },
  {
    title: "Full transparency",
    description:
      "Your data is protected with the same security standard used by major finnancial institutions.",
    gradient:
      "bg-[linear-gradient(89deg,rgba(255,255,255,1)_0%,rgba(255,165,0,1)_100%)]",
    accent: true,
  },
];

const faqItems = [
  {
    question: "What is Fyntrix AI?",
    answer:
      "Fyntrix is your AI Trading Coach, Research Buddy, and Strategist Chat. It delivers real‑time, AI‑driven trading signals backed by a transparent ledger so you always know what to do, why you're doing it, and how it has performed.",
  },
  {
    question: "Does Fyntrix execute trades automatically?",
    answer:
      "No. Fyntrix is a decision-support system that provides AI-driven trading recommendations. All trading decisions and executions remain entirely with you.",
  },
  {
    question: "How many AI agents analyze the market?",
    answer:
      "Our platform uses 11 specialized AI agents including Technical Analysis, Sentiment, Risk, Global Market, Policy & Macro, Options, Microstructure, Pattern Recognition, Market Regime, Trade Strategy, and Auto-Monitoring agents.",
  },
  {
    question: "Which markets and indices are covered?",
    answer:
      "We currently support NIFTY 50 and BANK NIFTY with planned expansion to NIFTY 100 and NIFTY 500 in the future.",
  },
  {
    question: "What trading modes are supported?",
    answer:
      "We support Scalping, Intraday, Swing, Options, and Futures trading with configurable risk profiles (Conservative, Moderate, Aggressive).",
  },
];

const socialIcons = [
  { src: "/youtube.png", alt: "Social 1", href: "https://www.youtube.com/@Fyntrix-ai" },
  { src: "/instagram.jpg", alt: "Social 2", href: "https://www.instagram.com/fyntrix.ai/" },
  { src: "/image-369.png", alt: "Social 3", href: "https://www.linkedin.com/company/fyntrix-ai/" },
];

export const Landing = (): JSX.Element => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="bg-white w-full mx-auto relative overflow-x-hidden">
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b border-gray-200 z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div></div>
          <Button asChild className="px-4 py-2 bg-gradient-to-r from-[#0394fe] to-[#0bc0b5] rounded-full">
            <a href="https://web.fyntrix.ai/login" target="_blank">
              <span className="font-medium text-white text-sm">Get Started</span>
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[800px] flex flex-col items-center justify-start pt-20 md:pt-12 px-4 overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Hero background"
          src="/image-7.png" />

        {/* Get Started Button - Top Right */}
        <div className="hidden md:block absolute top-6 right-8 z-20">
          <Button asChild className="px-8 py-6 bg-gradient-to-r from-[#0394fe] to-[#0bc0b5] rounded-full hover:shadow-lg transition-all duration-300 border-0">
            <a href="https://web.fyntrix.ai/login" target="_blank">
              <span className="font-heading font-semibold text-white text-lg">
                Get Started
              </span>
            </a>
          </Button>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full">
          <img
            className="w-[200px] md:w-[302px] h-auto object-cover mb-4 md:mb-6"
            alt="Fyntrix logo"
            src="/frame-36-1.png" />

          <h1 className="max-w-[90%] md:max-w-[1039px] [text-shadow:0px_1px_4px_#00000040] font-heading font-semibold text-4xl md:text-5xl lg:text-[64px] text-center tracking-tight leading-tight md:leading-[67.1px] mb-6 md:mb-8">
            <span className="text-black">
              AI-First{" "}
            </span>
            <br />
            <span className="text-[#0394fe]">Trading Platform</span>
          </h1>

          <p className="max-w-[95%] md:max-w-[871px] font-body font-normal text-gray-800 text-base md:text-xl lg:text-xl text-center tracking-normal leading-relaxed md:leading-[33.8px] mb-8 md:mb-12">
            Fyntrix is your AI Trading Coach, Research Buddy, and Strategist Chat. It delivers real‑time, AI‑driven trading signals backed by a transparent ledger so you always know what to do, why you’re doing it, and how it has performed.
          </p>

          <div className="w-full max-w-[90%] md:max-w-[900px] h-[250px] md:h-[506px] mb-8 md:mb-12 rounded-[20px] md:rounded-[30px] overflow-hidden shadow-[0px_0px_30px_rgba(0,0,0,0.8)]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NslzkW-Uu6Y?si=k85Je-sI_43nqj3O"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>




          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center mb-0 md:mb-3 w-full">
            <div className="flex flex-row gap-4 md:gap-6 items-center justify-center">
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[180px] md:w-[239px] h-auto cursor-pointer hover:scale-105 transition-transform"
                  alt="App Store"
                  src="/image-2.png" />
              </a>
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[180px] md:w-[239px] h-auto cursor-pointer hover:scale-105 transition-transform"
                  alt="Google Play"
                  src="/image-2-1.png" />
              </a>
            </div>
            <img
              className="hidden lg:block w-[200px] h-[151px] object-cover"
              alt="QR Code"
              src="/image-330.png" />
          </div>

          <div className="sm:w-full sm:grid sm:grid-cols-3 sm:gap-10">
            <div></div>
            <div></div>
            <Badge className="w-[158px] h-[50px] bg-white rounded-[50px] shadow-[0px_0px_4px_#00000040] flex items-center justify-center gap-2">
              <StarIcon className="w-[22px] h-6 fill-yellow-400 text-yellow-400" />
              <span className="font-normal text-black text-xl">4.6 Rating</span>
            </Badge>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[59px] mt-12 md:mt-24">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-[64px] tracking-tight leading-tight md:leading-[67.1px] mb-4">
            <span className="text-black">See </span>
            <span className="text-[#0394fe]">Fyntrix </span>
            <span className="text-black">in Action</span>
          </h2>
          <p className="font-body font-normal text-[#656565] text-base md:text-xl lg:text-2xl max-w-[871px] mx-auto leading-relaxed">
            Watch how our AI-powered platform transforms trading decisions with real-time insights and intelligent analysis
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[739px] rounded-[30px] md:rounded-[50px] overflow-hidden bg-[linear-gradient(135deg,rgba(222,241,255,1)_0%,rgba(234,255,254,1)_100%)] shadow-[0px_0px_30px_rgba(0,0,0,1)]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/GeQpQCrA3mc?si=DsJhlkGurLRS7Cpa"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Trading Intelligence Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[59px] mt-16 md:mt-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0394fe]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0bc0b5]/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-[60px] tracking-tight leading-tight mb-6">
              <span className="text-black">Advanced</span>
              <br />
              <span className="text-[#0394fe]">Trading </span>
              <span className="text-black">Intelligence</span>
            </h2>

            <p className="font-body font-normal text-[#686868] text-lg md:text-xl leading-relaxed mb-8 md:mb-12">
              Our multi-agent AI system provides comprehensive trading insights while keeping you in complete control of your trading decisions
            </p>

            <div className="space-y-4">
              {tradingFeatures.map((feature, index) => (
                <div key={index} onClick={() => setActiveFeature(index)} className="cursor-pointer">
                  {index === activeFeature ? (
                    <div className="group relative p-[2px] rounded-[30px] md:rounded-[25px] bg-gradient-to-r from-[#0394fe] to-[#0bc0b5] hover:shadow-2xl  ">
                      <div className="bg-white rounded-[28px] md:rounded-[23px] p-3 md:p-4 h-full">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center flex-shrink-0">
                            {feature.icon && <feature.icon className="w-6 h-6 text-white" />}
                          </div>
                          <div className="flex-1">
                            <h3 className="bg-[linear-gradient(90deg,rgba(3,148,254,1)_0%,rgba(11,192,181,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-heading font-semibold text-xl md:text-xl tracking-normal leading-tight mb-2">
                              {feature.title}
                            </h3>
                            <p className="font-body font-normal text-[#303030] text-base md:text-base tracking-normal leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="group px-6 md:px-4 py-5 md:py-3 rounded-[30px] md:rounded-[50px] bg-white border-2 border-[#e3e3e3] hover:border-[#0394fe] hover:shadow-lg   ">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0394fe]/10 to-[#0bc0b5]/10 flex items-center justify-center flex-shrink-0 group-hover:from-[#0394fe] group-hover:to-[#0bc0b5]  ">
                          {feature.icon && (
                            <feature.icon className="w-5 h-5 text-[#0394fe] group-hover:text-white transition-colors duration-300" />
                          )}
                        </div>
                        <h3 className="font-heading font-semibold text-black text-lg md:text-lg tracking-normal leading-tight group-hover:text-[#0394fe] transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0394fe]/20 to-[#0bc0b5]/20 rounded-[50px] blur-2xl"></div>
            <img
              className="relative w-full max-w-[400px] md:max-w-[602px] max-h-[602px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              alt={tradingFeatures[activeFeature].title}
              src={tradingFeatures[activeFeature].image} />
          </div>
        </div>
      </section>

      {/* Trade Ideas Section */}
      <section className="relative bg-black max-sm:pt-10 overflow-hidden mt-16 md:mt-32">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Background"
          src="/image-1.png" />

        <div className="relative max-w-[1440px] mx-auto px-4 md:px-[59px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                className="w-full max-w-[300px] md:max-w-[437px] h-auto object-contain"
                alt="Phone mockup"
                src="/image-362.png" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className=" font-normal text-4xl md:text-6xl lg:text-[80px] tracking-normal leading-tight mb-6 md:mb-8">
                <span className="text-white">Trade </span>
                <span className="text-[#0394fe]">Ideas</span>
                <span className="text-white"> by SEBI reg RA</span>
              </h2>

              <p className=" font-light text-white text-xl md:text-3xl lg:text-4xl tracking-normal leading-relaxed mb-8 md:mb-12">
                For Stock | Futures | Options | Commodities
              </p>

              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                {tradeStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <div
                      className={` font-semibold ${stat.color || "text-white"} text-2xl md:text-4xl tracking-normal leading-tight`}
                    >
                      {stat.value}
                    </div>
                    <div className=" font-normal text-[#909090] text-lg md:text-2xl tracking-normal leading-relaxed mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}

              <div className="w-full max-w-[747px] bg-white rounded-[50px] shadow-[0px_0px_29.3px_#ffffffb8] flex justify-between sm:flex-wrap items-center p-4 gap-4">
                <div className="flex items-center justify-center">
                  <img
                    className="w-[38px] h-[26px] object-cover"
                    alt="Flag"
                    src="/image-39-1.png" />
                  <Input
                    placeholder="Enter Mobile No."
                    className="flex-1 border-0 bg-transparent  font-normal text-[#717171] text-base md:text-xl focus-visible:ring-0 focus-visible:ring-offset-0" />
                </div>
                <a href="https://web.fyntrix.ai/login" target="_blank">
                  <Button className="w-[140px] h-[45px] sm:w-[178px] sm:h-[52px] bg-[#0394fe] rounded-3xl hover:bg-[#0280d9]">
                    <span className=" font-medium text-white text-base md:text-lg">
                      Get Started
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 md:px-[59px] mt-16 md:mt-32 relative">
        <img
          className="hidden md:block absolute top-0 left-0 w-[199px] h-[619px]"
          alt="Decorative"
          src="/image-357.png" />

        <h2 className="relative z-10 bg-[linear-gradient(90deg,rgba(11,192,181,1)_0%,rgba(5,90,85,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent]  font-normal text-3xl md:text-5xl lg:text-[64px] text-center tracking-normal leading-tight mb-8 md:mb-16">
          Built on Trust and Transparency
        </h2>

        <img
          className="hidden md:block absolute top-0 right-0 w-[670px] h-[219px]"
          alt="Decorative"
          src="/image-357-1.png" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[47px] relative z-10">
          {trustFeatures.map((feature, index) => (
            <Card
              key={index}
              className={`rounded-[30px] md:rounded-[50px] border border-solid border-[#e3e3e3] ${feature.gradient} relative overflow-hidden`}
            >
              <CardContent className="p-6 md:p-12 h-full flex flex-col justify-center">
                <h3 className=" font-medium text-black text-2xl md:text-[32px] text-center tracking-normal leading-tight mb-4">
                  {feature.title}
                </h3>
                <p className=" font-medium text-[#686868] text-lg md:text-2xl tracking-normal leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advisory Section */}
      {/* <section className="relative bg-black mt-16 md:mt-32 py-12 md:py-24 overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-50"
                      alt="Background"
                      src="/image-359.png"
                    />
            
                    <div className="relative max-w-[1440px] mx-auto px-4 md:px-[59px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                          <h2 className=" font-normal text-4xl md:text-6xl lg:text-[80px] tracking-normal leading-tight mb-8 md:mb-12">
                            <span className="text-white">
                              Advisory to Execution All on{" "}
                            </span>
                            <span className="text-[#0394fe]">Fyntrix</span>
                          </h2>
            
                          <div className="w-full max-w-[747px] bg-white rounded-[50px] shadow-[0px_0px_29.3px_#ffffffb8] flex flex-col sm:flex-row items-center p-4 md:p-6 gap-4">
                            <img
                              className="w-[38px] h-[26px] object-cover"
                              alt="Flag"
                              src="/image-39-1.png"
                            />
                            <Input
                              placeholder="Enter Mobile No."
                              className="flex-1 border-0 bg-transparent  font-normal text-[#717171] text-base md:text-xl focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                            <Button className="w-full sm:w-[188px] h-[52px] bg-[#0394fe] rounded-[25px] hover:bg-[#0280d9]">
                              <span className=" font-medium text-white text-base md:text-lg">
                                Open Free Demat
                              </span>
                            </Button>
                          </div>
                        </div>
            
                        <div className="flex items-center justify-center gap-4">
                          <img
                            className="w-full max-w-[300px] md:max-w-[541px] h-auto object-contain"
                            alt="Phone mockup"
                            src="/image-362.png"
                          />
                          <img
                            className="hidden md:block w-full max-w-[210px] h-auto object-contain"
                            alt="Phone mockup"
                            src="/image-363.png"
                          />
                        </div>
                      </div>
                    </div>
                  </section> */}

      {/* Testimonials Section */}
      {/* <section className="max-w-[1440px] mx-auto px-4 md:px-[59px] mt-16 md:mt-32">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-heading font-normal text-4xl md:text-5xl lg:text-[64px] tracking-normal leading-tight mb-4">
          <span className="text-black">What Our </span>
          <span className="text-[#0394fe]">Traders</span>
          <span className="text-black"> Say</span>
        </h2>
        <p className="font-body font-normal text-[#686868] text-lg md:text-xl max-w-2xl mx-auto">
          Join thousands of traders who trust Fyntrix for their trading
          decisions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card className="rounded-[30px] border border-solid border-[#e3e3e3] bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "Fyntrix's AI-powered insights have completely transformed my
              trading strategy. The multi-agent analysis gives me confidence
              in every decision."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  RK
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Rajesh Kumar
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Day Trader
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[30px] border border-solid border-[#e3e3e3] bg-gradient-to-br from-[#0394fe]/5 to-[#0bc0b5]/5 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "The real-time signals and transparent ledger make it easy to
              understand why each trade is recommended. Best trading tool I've
              used!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  PS
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Priya Sharma
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Swing Trader
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[30px] border border-solid border-[#e3e3e3] bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "As a beginner, the AI Trading Coach has been invaluable. It's
              like having a professional mentor guiding every trade."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  AM
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Amit Mehta
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Options Trader
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hidden md:block rounded-[30px] border border-solid border-[#e3e3e3] bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(4)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "The risk management features are outstanding. I can trade with
              different profiles and the AI adapts to my strategy perfectly."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  SK
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Suresh Kapoor
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Futures Trader
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hidden md:block rounded-[30px] border border-solid border-[#e3e3e3] bg-gradient-to-br from-[#0394fe]/5 to-[#0bc0b5]/5 hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "11 AI agents working together provide insights I could never
              get manually. My win rate has improved significantly!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  NP
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Neha Patel
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Intraday Trader
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hidden md:block rounded-[30px] border border-solid border-[#e3e3e3] bg-white hover:shadow-xl transition-shadow duration-300">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="font-body font-normal text-[#303030] text-base md:text-lg leading-relaxed mb-6">
              "The transparency and detailed analysis behind each signal
              builds trust. I know exactly why I'm making each trade."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0394fe] to-[#0bc0b5] flex items-center justify-center">
                <span className="font-heading font-semibold text-white text-lg">
                  VG
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-black text-lg">
                  Vikram Gupta
                </h4>
                <p className="font-body font-normal text-[#686868] text-sm">
                  Scalper
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* FAQ Section */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-[59px] mt-16 md:mt-60">
        <h2 className=" font-normal text-4xl md:text-5xl lg:text-[64px] tracking-normal leading-tight mb-8 md:mb-16">
          <span className="text-black">FAQ</span>
          <span className="text-[#0394fe]">s</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-0"
            >
              <AccordionTrigger
                hideChevron
                className="font-heading font-semibold text-black text-xl md:text-3xl lg:text-[40px] tracking-normal leading-tight hover:no-underline flex-1 justify-start text-left py-4 md:py-6 gap-4 md:gap-[43px] [&[data-state=open]>img]:rotate-90"
              >
                <img
                  className="w-[10px] md:w-[15px] h-auto transition-transform duration-200"
                  alt="Arrow"
                  src="/arrow-3.svg" />
                {item.question}
              </AccordionTrigger>
              <img
                className="w-full h-1 object-cover"
                alt="Line"
                src="/line-1.svg" />
              <AccordionContent>
                <div className="py-6 px-4 md:px-12 font-body font-normal text-[#686868] text-base md:text-xl leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-4 md:px-[59px] mt-16 md:mt-32 py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start mb-12">
          {/* Left Column - Logo and App Downloads */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img
              className="w-[94px] h-auto mb-4"
              alt="Fyntrix logo"
              src="/frame-36-1-1.png" />
            <div className="flex flex-col gap-4">
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[150px] md:w-[193px] h-auto cursor-pointer hover:scale-105 transition-transform"
                  alt="App Store"
                  src="/image-4.png" />
              </a>
              <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-[150px] md:w-[193px] h-auto cursor-pointer hover:scale-105 transition-transform"
                  alt="Google Play"
                  src="/image-2-2.png" />
              </a>
            </div>
          </div>

          {/* Middle Column - Navigation Links */}
          <nav className="flex flex-col items-center md:items-start gap-6">
            <h3 className="font-heading font-semibold text-black text-2xl mb-2">
              Quick Links
            </h3>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="font-body font-medium text-[#4a4949] text-lg hover:text-[#0394fe] transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              Legal
            </button>
            <a
              href="https://web.fyntrix.ai/login"
              target="_blank"
              className="font-body font-medium text-[#4a4949] text-lg hover:text-[#0394fe] transition-colors"
            >
              Start Using Fyntrix
            </a>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="font-body font-medium text-[#4a4949] text-lg hover:text-[#0394fe] transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </nav>

          {/* Right Column - Social and Copyright */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <h3 className="font-heading font-semibold text-black text-2xl mb-2">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  className="w-[50px] h-[50px] rounded-full border-2 border-solid border-black overflow-hidden hover:border-[#0394fe] hover:scale-110 transition-all duration-300"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={icon.alt}
                    src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Brand Name and Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center mb-6">
            <div className="font-heading font-bold text-black text-4xl md:text-6xl lg:text-8xl tracking-wider">
              Fyntrix
            </div>
          </div>
          <p className="font-body font-normal text-[#4a4949] text-sm md:text-base text-center">
            © 2025 Fyntrix India. All rights reserved.
          </p>
        </div>
      </footer>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};
