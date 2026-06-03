import { Code, Rocket, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const WhyChooseUs = () => {
const advantages = [
    { icon: <Rocket className="h-5 w-5" />, title: "Startup-First Approach", desc: "Solutions designed for lean teams and fast-moving businesses" },
    { icon: <Zap className="h-5 w-5" />, title: "Rapid Deployment", desc: "From consultation to go-live in record time" },
    { icon: <Code className="h-5 w-5" />, title: "Fully Custom-Built", desc: "No one-size-fits-all packages; every solution is tailored" },
    { icon: <Users className="h-5 w-5" />, title: "End-to-End Support", desc: "We stay with you from strategy to execution and beyond" },
    { icon: <TrendingUp className="h-5 w-5" />, title: "Cost-Effective Pricing", desc: "Enterprise-grade AI at startup-friendly budgets" },
    { icon: <Shield className="h-5 w-5" />, title: "Secure & Scalable", desc: "Built on robust, future-ready infrastructure" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            The Aakasha Advantage
          </h2>
          <p className="text-lg text-slate-600">
            Why forward-thinking startups choose us as their automation partner
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {adv.title}
                </h3>
                <p className="text-slate-600">{adv.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



export default WhyChooseUs