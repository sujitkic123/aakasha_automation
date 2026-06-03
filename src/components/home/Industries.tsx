
import { Badge } from "@/components/ui/badge";

const Industries = () => {
  const industries = [
    "🛒 E-Commerce & Retail", "🏥 Healthcare & Wellness", "🏦 Finance & Fintech",
    "🎓 EdTech & Online Learning", "🏨 Hospitality & Travel", "📦 Logistics & Supply Chain",
    "🏗️ Real Estate", "📣 Marketing & Agencies",
  ];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for Ambitious Businesses Across Industries
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, idx) => (
            <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm bg-slate-100 text-slate-700 hover:bg-slate-200">
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries