import Image from "next/image";
import Link from "next/link";

const Footer = () => {
 return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                            <Image
                              src="/images/logo.jpeg"
                              alt="Aakasha Automations Logo"
                              width={40}
                              height={40}
                              className="h-10 w-10 object-contain"
                              priority
                          />
                          </div>
              <span className="font-bold text-xl text-white">AakashaAutomations</span>
            </div>
            <p className="text-sm">Intelligent Systems for Ambitious Builders.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "How It Works", "Contact"].map((link) => (
                <li key={link}><Link href="#" className="hover:text-indigo-400 transition">{link}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["AI Voice Agents", "AI Chatbots", "Agentic AI", "Workflow Automation", "AI & ML Services"].map((service) => (
                <li key={service}><Link href="#" className="hover:text-indigo-400 transition">{service}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-indigo-400 transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>©️ 2026 Aakasha Automations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer