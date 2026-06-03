// app/privacy-policy/page.tsx
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Database, Lock, Cookie, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Aakasha Automations privacy policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, company name)",
        "Technical data (IP address, browser type, device information, usage data)",
        "Communication data (Messages, inquiries, support requests)",
        "Payment information (For processing transactions securely)",
        "Business information (Project requirements, company details)",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To respond to your inquiries and support requests",
        "To process your transactions and send related information",
        "To improve our website, services, and user experience",
        "To send technical notices, updates, and administrative messages",
        "To comply with legal obligations",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard encryption (SSL/TLS) for data transmission",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication protocols",
        "Secure data storage with restricted access",
        "Regular backups and disaster recovery procedures",
        "Employee training on data protection practices",
      ],
    },
    {
      icon: <Cookie className="h-6 w-6" />,
      title: "Cookies & Tracking Technologies",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Preference cookies to remember your settings",
        "You can control cookie preferences through browser settings",
        "Third-party services may use their own cookies",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access your personal data we hold",
        "Request correction of inaccurate data",
        "Request deletion of your data (subject to legal obligations)",
        "Object to processing of your data",
        "Request data portability",
        "Withdraw consent at any time",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <Badge className="bg-indigo-100 text-indigo-700 rounded-full mb-4">
            Effective Date: June 1, 2026
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-4">
              At Aakasha Automations (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-slate-600">
              By using our website and services, you consent to the data practices described in this policy. 
              If you do not agree with any part of this policy, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <Card key={idx} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2 ml-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-start gap-2">
                      <span className="text-indigo-500 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data Sharing Section */}
        <Card className="mt-6 border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Information Sharing</h2>
            </div>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information in the following circumstances:
            </p>
            <ul className="space-y-2 ml-4 mb-6">
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website and delivering services</span>
              </li>
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
              </li>
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-6 bg-indigo-50 border-indigo-100">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, 
              please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <a href="mailto:aakashaautomations@gmail.com" className="text-indigo-600 hover:underline">
                  aakashaautomations@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <a href="tel:+919670697720" className="text-indigo-600 hover:underline">
                  +91 96706 97720
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <span className="text-slate-600">
                  Opposite Udaya Public School, Behind Panchmukhi Hanuman Mandir,
                  Beniganj, Ayodhya – 224001, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      
    </div>
  );
}