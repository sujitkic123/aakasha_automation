import { 
    Calendar,
  Compass, 
  Heart, 
  Mail, 
  Rocket, 
  Shield, 
  Sparkles, 
  Target, 
  Users, 
  Zap 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


const AboutUs = () => {


  const values = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation First",
      description: "We constantly push boundaries, exploring emerging technologies to deliver cutting-edge solutions.",
      color: "indigo"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results and ROI.",
      color: "rose"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "Open communication, honest pricing, and unwavering commitment to quality.",
      color: "emerald"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Agile Excellence",
      description: "Rapid iterations, continuous improvement, and adaptive methodologies.",
      color: "amber"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Spirit",
      description: "We work as an extension of your team, not just a vendor.",
      color: "blue"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Every line of code, every strategy is focused on your business goals.",
      color: "purple"
    },
  ];

 


  const testimonials = [
    {
      quote: "Aakasha Automations transformed our customer service. Their AI voice agents saved us 200+ hours monthly.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "The team's expertise in workflow automation helped us scale 3x in just 6 months. Highly recommended!",
      author: "Michael Chen",
      role: "COO, GrowthLabs",
      rating: 5
    },
    {
      quote: "Best decision we made was partnering with Aakasha. Their AI solutions gave us a massive competitive edge.",
      author: "David Williams",
      role: "CTO, InnovateCorp",
      rating: 5
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
              <Sparkles className="h-3.5 w-3.5 inline mr-1" />
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Building the Future of
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Business Automation</span>
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              We&apos;re on a mission to empower businesses with cutting-edge AI, automation, and digital solutions that drive real growth.
            </p>
            
          </div>
        </div>
      </section>

      

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex p-3 rounded-xl bg-indigo-100 text-indigo-600 mb-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To democratize artificial intelligence and automation, making enterprise-grade technology accessible to businesses of all sizes. We strive to eliminate operational bottlenecks and unlock unprecedented growth through intelligent, scalable solutions.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                <div className="inline-flex p-3 rounded-xl bg-purple-100 text-purple-600 mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To become the world&apos;s most trusted partner in business automation, creating a future where every organization can harness the full potential of AI to innovate, scale, and thrive in the digital economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-indigo-100 text-indigo-700 rounded-full mb-4">
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-slate-600">
              Our values shape every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const colorMap: Record<string, string> = {
                indigo: "bg-indigo-50 text-indigo-600",
                rose: "bg-rose-50 text-rose-600",
                emerald: "bg-emerald-50 text-emerald-600",
                amber: "bg-amber-50 text-amber-600",
                blue: "bg-blue-50 text-blue-600",
                purple: "bg-purple-50 text-purple-600",
              };
              
              return (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl ${colorMap[value.color]} mb-4 group-hover:scale-110 transition-transform`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      

     

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="bg-indigo-100 text-indigo-700 rounded-full mb-4">
              Client Love
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600">
              Don&apos;t just take our word for it — hear from businesses we&apos;ve helped transform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with our automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" >
           
            <Button size="lg" className="bg-white  cursor-pointer text-indigo-600 hover:bg-indigo-50">
              Schedule a Consultation <Calendar className="ml-2 h-4 w-4" />
            </Button>
             </Link>

            <Link href="/contact-us" >
            
            <Button size="lg" variant="outline" className="bg-white cursor-pointer text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600">
              Contact Sales <Mail className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;