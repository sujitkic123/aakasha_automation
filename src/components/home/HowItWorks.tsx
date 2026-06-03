import { ChevronRight } from "lucide-react";


const HowItWorks = () => {
  const steps = [
    { step: "01", title: "Discovery Call", desc: "We understand your business, pain points, and automation goals in a free consultation session." },
    { step: "02", title: "Solution Design", desc: "Our team designs a tailored AI strategy and presents a clear roadmap with timelines and deliverables." },
    { step: "03", title: "Build & Integrate", desc: "We develop and deploy your solution, fully integrated with your existing tools and platforms." },
    { step: "04", title: "Launch & Optimise", desc: "We go live, monitor performance, and continuously refine for maximum impact." },
  ];

  return (
    <section id="howitworks" className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            From Idea to Automation in 4 Simple Steps
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-bold text-indigo-100 mb-4">{step.step}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-indigo-300">
                  <ChevronRight className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks