"use client";
import { useState } from "react";
import { 
  BrainCircuit, CheckCircle2, ChevronRight, Globe, Headphones, 
  LineChart, MessageSquare, ServerCog, Smartphone, Workflow,
  Sparkles, Zap, TrendingUp, Users 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Define types
type ServiceColor = 'indigo' | 'purple' | 'emerald' | 'blue' | 'orange' | 'cyan' | 'pink' | 'red';
type ServiceCategory = 'ai' | 'development' | 'infrastructure';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  roi: string;
  category: ServiceCategory;
  color: ServiceColor;
  popular?: boolean;
}

interface ServiceModalProps {
  service: Service | null;
  onClose: (service: null) => void;
}

// Color mapping helpers
const getColorClasses = (color: ServiceColor): string => {
  const colorMap: Record<ServiceColor, string> = {
    indigo: "bg-indigo-50 text-indigo-600",
    purple: "bg-purple-50 text-purple-600",
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    cyan: "bg-cyan-50 text-cyan-600",
    pink: "bg-pink-50 text-pink-600",
    red: "bg-red-50 text-red-600",
  };
  return colorMap[color];
};

const getBgGradient = (color: ServiceColor): string => {
  const gradientMap: Record<ServiceColor, string> = {
    indigo: "from-indigo-50 to-purple-50",
    purple: "from-purple-50 to-pink-50",
    emerald: "from-emerald-50 to-teal-50",
    blue: "from-blue-50 to-cyan-50",
    orange: "from-orange-50 to-amber-50",
    cyan: "from-cyan-50 to-blue-50",
    pink: "from-pink-50 to-rose-50",
    red: "from-red-50 to-orange-50",
  };
  return gradientMap[color];
};

const getGradientClass = (color: ServiceColor): string => {
  const gradientMap: Record<ServiceColor, string> = {
    indigo: "from-indigo-100 to-indigo-200",
    purple: "from-purple-100 to-purple-200",
    emerald: "from-emerald-100 to-emerald-200",
    blue: "from-blue-100 to-blue-200",
    orange: "from-orange-100 to-orange-200",
    cyan: "from-cyan-100 to-cyan-200",
    pink: "from-pink-100 to-pink-200",
    red: "from-red-100 to-red-200",
  };
  return gradientMap[color];
};

// ServiceModal Component with proper typing
const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;
  
  return (
    <Dialog open={!!service} onOpenChange={() => onClose(null)}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className={`inline-flex p-3 rounded-xl ${getColorClasses(service.color)} mb-4`}>
            {service.icon}
          </div>
          <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <p className="text-slate-600">{service.description}</p>
          
          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`bg-gradient-to-r ${getBgGradient(service.color)} p-4 rounded-xl`}>
            <div className="grid grid-cols-2 gap-4">
              
              <div>
                <p className="text-xs text-slate-500 mb-1">Expected ROI</p>
                <p className="font-semibold text-green-600">{service.roi}</p>
              </div>
            </div>
          </div>
          
          {/* <div className="flex gap-3">
            <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex-1">
              View Case Study
            </Button>
          </div> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main Services Component
const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories: Record<string, string> = {
    all: "All Services",
    ai: "AI Solutions",
    development: "Development",
    infrastructure: "Infrastructure"
  };

  const services: Service[] = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "AI Voice Agents",
      description: "24/7 intelligent voice agents that handle calls, qualify leads, and book appointments.",
      benefits: ["24/7 availability", "Human-like conversations", "CRM integration"],
      features: [
        "Natural language processing for human-like conversations",
        "Automatic lead qualification and scoring",
        "Seamless calendar integration for appointment booking",
        "Multi-language support for global reach",
        "Real-time call analytics and transcription"
      ],
     
      roi: "Reduce call handling costs by 70%",
      category: "ai",
      color: "indigo",
      popular: true
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Chatbots",
      description: "Smart chatbots trained on your data for support, leads, and sales across all platforms.",
      benefits: ["Multi-platform", "Brand voice", "Instant response"],
      features: [
        "Custom training on your business data",
        "Integration with WhatsApp, Messenger, Slack, and web",
        "Sentiment analysis and escalation workflows",
        "Lead capture and qualification automation",
        "Analytics dashboard for performance tracking"
      ],
      
      roi: "Resolve 85% of queries automatically",
      category: "ai",
      color: "purple"
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that think, decide, and execute complex workflows.",
      benefits: ["Autonomous execution", "Real-time decisions", "Scalable"],
      features: [
        "Multi-agent collaboration for complex tasks",
        "Self-improving decision-making algorithms",
        "Integration with your existing tools and APIs",
        "Real-time monitoring and intervention controls",
        "Customizable agent personas and behaviors"
      ],
      
      roi: "Automate 90% of repetitive decisions",
      category: "ai",
      color: "emerald"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "End-to-end automated workflows connecting 500+ tools to eliminate bottlenecks.",
      benefits: ["500+ integrations", "Custom workflows", "Measurable ROI"],
      features: [
        "Visual workflow builder with drag-and-drop",
        "Pre-built templates for common business processes",
        "Real-time error handling and retry logic",
        "Data transformation and validation rules",
        "Comprehensive audit logs and reporting"
      ],
     
      roi: "Save 40+ hours per week on manual tasks",
      category: "infrastructure",
      color: "blue"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "AI & ML Services",
      description: "Custom models, predictive analytics, and data pipelines for competitive advantage.",
      benefits: ["Custom models", "Data strategy", "BI dashboards"],
      features: [
        "Custom model development (classification, regression, NLP)",
        "Predictive analytics for sales and customer behavior",
        "Automated data cleaning and preprocessing",
        "Model deployment and monitoring infrastructure",
        "Interactive BI dashboards with real-time insights"
      ],
      
      roi: "Increase prediction accuracy by 95%",
      category: "ai",
      color: "orange"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "High-performance, responsive websites that convert visitors into customers.",
      benefits: ["Responsive design", "SEO-friendly", "Fast loading"],
      features: [
        "Custom design with modern frameworks (React, Next.js)",
        "SEO optimization for top search rankings",
        "Performance optimization for Core Web Vitals",
        "Backend development with Node.js, NestJS, Express & FastAPI",
        "Analytics and conversion tracking setup"
      ],

      roi: "Average 40% increase in conversions",
      category: "development",
      color: "cyan"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native & cross-platform apps delivering seamless experiences on iOS & Android.",
      benefits: ["iOS & Android", "Cross-platform", "UI/UX design"],
      features: [
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform with React Native or Flutter",
        "Offline-first architecture for poor connectivity",
        "Push notifications and real-time updates",
        "App store optimization and deployment"
      ],
     
      roi: "Reach 2x more users with cross-platform",
      category: "development",
      color: "pink"
    },
    {
      icon: <ServerCog className="h-8 w-8" />,
      title: "DevOps & Cloud Services",
      description: "CI/CD pipelines, cloud deployment, and infrastructure automation for reliability.",
      benefits: ["CI/CD automation", "Cloud deployment", "K8s orchestration"],
      features: [
        "Automated CI/CD pipelines (GitHub Actions, GitLab CI)",
        "Infrastructure as Code (Terraform, Pulumi)",
        "Kubernetes orchestration and management",
        "24/7 monitoring and alerting (Prometheus, Grafana)",
        "Cost optimization and security compliance"
      ],
      
      roi: "Deploy 10x faster with zero downtime",
      category: "infrastructure",
      color: "red"
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // Helper function for icon background
  const getIconBackgroundClass = (color: ServiceColor): string => {
    const bgMap: Record<ServiceColor, string> = {
      indigo: "bg-indigo-50 text-indigo-600",
      purple: "bg-purple-50 text-purple-600",
      emerald: "bg-emerald-50 text-emerald-600",
      blue: "bg-blue-50 text-blue-600",
      orange: "bg-orange-50 text-orange-600",
      cyan: "bg-cyan-50 text-cyan-600",
      pink: "bg-pink-50 text-pink-600",
      red: "bg-red-50 text-red-600",
    };
    return bgMap[color];
  };

  return (
    <>
      <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
              <Zap className="h-3.5 w-3.5 inline mr-1" />
              What We Build For You
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer a complete suite of AI, web, mobile, and cloud services designed 
              specifically for modern startups and entrepreneurs looking to scale.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-slate-100 rounded-full">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === key
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  {/* Icon with animated gradient background */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(service.color)} rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className={`relative inline-flex p-3 rounded-xl ${getIconBackgroundClass(service.color)} group-hover:scale-110 transition-all duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Benefits List */}
                  <div className="space-y-2 mb-4">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full mt-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 group/btn"
                  >
                    Explore Service 
                    <ChevronRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
                
                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%)" }} />
              </Card>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Not sure which service fits your needs?</p>
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Users className="mr-2 h-4 w-4" />
              Schedule a Free Consultation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Service Details Modal */}
      <ServiceModal service={selectedService} onClose={setSelectedService} />
    </>
  );
};

export default Services;