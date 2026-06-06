"use client"
import React from 'react';
import { Bot, Volume2, Headphones, Clock, MessageCircle, Phone, ChevronRight, Sparkles, Shield, Users, Mic, Languages, Cloud, Cpu } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      id: 'ai-agent',
      icon: Bot,
      title: 'AI Voice Agent',
      subtitle: 'Intelligent Virtual Assistant',
      description: 'Automate customer support, sales, and operations with advanced AI agents that understand context and respond naturally in multiple languages.',
      features: [
        { icon: Headphones, text: '24/7 Automated Support' },
        { icon: Languages, text: '10+ Indian Languages' },
        { icon: MessageCircle, text: 'WhatsApp & Telegram Integration' },
        { icon: Phone, text: 'Voice Call Support' },
        { icon: Clock, text: 'Real-time Responses' },
        { icon: Shield, text: 'Enterprise Security' }
      ],
      gradient: 'from-blue-100 to-indigo-200',
      lightBg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badge: 'Most Popular',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'tts',
      icon: Volume2,
      title: 'Text-to-Speech',
      subtitle: 'Natural Voice Synthesis',
      description: 'Transform text into natural, human-like speech with support for 30+ Indian languages. Perfect for IVR, audiobooks, and voice assistants.',
      features: [
        { icon: Languages, text: '30+ Indian Languages' },
        { icon: Mic, text: '200+ Natural Voices' },
        { icon: Sparkles, text: 'Studio Quality Audio' },
        { icon: Cloud, text: 'Real-time Streaming' },
        { icon: Cpu, text: 'Emotion Control' },
        { icon: Users, text: 'Voice Cloning Available' }
      ],
      gradient: 'from-purple-100 to-pink-200',
      lightBg: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badge: 'Most Popular',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  ];

  const handleEnquiry = (service: string) => {
    // Open WhatsApp chat or contact form
    const phoneNumber = "9867298150"; 
    const message = `Hi, I'm interested in your ${service} service. Can you please share more details?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">India&apos;s Most Affordable AI Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Enterprise AI at{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unbeatable Prices
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get world-class AI Agent and Text-to-Speech solutions tailored for Indian businesses
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl -z-10`}></div>
              
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${service.badgeColor}`}>
                  {service.badge}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-500 mb-4">{service.subtitle}</p>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <feature.icon className={`w-4 h-4 ${service.iconColor}`} />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Enquiry Button */}
                <button
                  onClick={() => handleEnquiry(service.title)}
                  className={`w-full cursor-pointer bg-gradient-to-r ${service.gradient} text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group/btn`}
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Best Price & Details
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Trust Badge */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    No Setup Fee
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    20+ Clients
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    24/7 Support
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default OurServices;