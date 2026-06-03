import { Clock, Mail, MapPin, Phone } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Whether you have a specific project in mind or simply want to explore
            how AI can transform your business — we are here to help.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-indigo-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Address</h3>
                  <p className="text-slate-600">
                    Opposite Udaya Public School, Behind Panchmukhi Hanuman Mandir,
                    Beniganj, Ayodhya – 224001, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-indigo-500" />
                <div>
                  <h3 className="font-semibold text-slate-800">Email</h3>
                  <a href="mailto:aakashaautomations@gmail.com" className="text-indigo-600">aakashaautomations@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-indigo-500" />
                <div>
                  <h3 className="font-semibold text-slate-800">Phone</h3>
                  <a href="tel:+919670697720" className="text-indigo-600">+91 96706 97720</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-indigo-500" />
                <div>
                  <h3 className="font-semibold text-slate-800">Business Hours</h3>
                  <p className="text-slate-600">Monday – Saturday | 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-6">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
                <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
                <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 outline-none transition" />
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full p-3 rounded-lg border border-slate-200 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 outline-none transition"></textarea>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact