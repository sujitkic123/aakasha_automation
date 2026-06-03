import { Badge } from "@/components/ui/badge";
import Image from "next/image";


const WhoWeAre = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            

                    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />

                    <Image
                        src="/images/teamai2.jpg"
                        alt="Our Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <Badge className="bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5">
              About Aakasha Automations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Democratizing AI for Every Entrepreneur
            </h2>
            <p className="text-lg text-slate-600">
              At Aakasha Automations, we believe that artificial intelligence is
              not just a tool — it is the foundation of tomorrow&apos;s businesses.
              Founded with a mission to make advanced AI accessible to every
              entrepreneur, we bring enterprise-grade automation solutions to
              startups at every stage of growth.
            </p>
            <p className="text-slate-600">
              Based in Ayodhya, India, we are a dedicated team of AI engineers
              and automation specialists committed to transforming the way
              businesses operate. Whether you are just starting out or scaling
              rapidly, we design intelligent systems tailored precisely to your
              needs.
            </p>
            <div className="pt-4">
              <p className="text-xl font-medium text-indigo-600 italic">
                &quot;Your growth is our automation.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre