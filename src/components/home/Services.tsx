import { BrainCircuit, CheckCircle2, ChevronRight, Globe, Headphones, LineChart, MessageSquare, ServerCog, Smartphone, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


const Services = () => {
  const services = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "AI Voice Agents",
      description: "24/7 intelligent voice agents that handle calls, qualify leads, and book appointments.",
      benefits: ["24/7 availability", "Human-like conversations", "CRM integration"],
      color: "indigo",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Chatbots",
      description: "Smart chatbots trained on your data for support, leads, and sales across all platforms.",
      benefits: ["Multi-platform", "Brand voice", "Instant response"],
      color: "purple",
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that think, decide, and execute complex workflows.",
      benefits: ["Autonomous execution", "Real-time decisions", "Scalable"],
      color: "emerald",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "End-to-end automated workflows connecting 500+ tools to eliminate bottlenecks.",
      benefits: ["500+ integrations", "Custom workflows", "Measurable ROI"],
      color: "blue",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "AI & ML Services",
      description: "Custom models, predictive analytics, and data pipelines for competitive advantage.",
      benefits: ["Custom models", "Data strategy", "BI dashboards"],
      color: "orange",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "High-performance, responsive websites that convert visitors into customers.",
      benefits: ["Responsive design", "SEO-friendly", "Fast loading"],
      color: "cyan",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native & cross-platform apps delivering seamless experiences on iOS & Android.",
      benefits: ["iOS & Android", "Cross-platform", "UI/UX design"],
      color: "pink",
    },
    {
      icon: <ServerCog className="h-8 w-8" />,
      title: "DevOps & Cloud Services",
      description: "CI/CD pipelines, cloud deployment, and infrastructure automation for reliability.",
      benefits: ["CI/CD automation", "Cloud deployment", "K8s orchestration"],
      color: "red",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge className="bg-indigo-100 text-indigo-700 rounded-full mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What We Build For You
          </h2>
          <p className="text-lg text-slate-600">
            We offer a comprehensive suite of AI, web, mobile, and cloud services
            designed specifically for modern startups and entrepreneurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-2xl hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex p-3 rounded-xl bg-${service.color}-50 text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link href="/our-services">
                <Button
                  variant="link"
                  className="p-0 cursor-pointer text-indigo-600 group/btn hover:text-indigo-700"
                  >
                  Learn More <ChevronRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                  </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;