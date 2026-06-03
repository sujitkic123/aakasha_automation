// app/terms-of-service/page.tsx
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Clock, CreditCard, Shield, AlertCircle, Mail, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Aakasha Automations terms of service - Read our terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using our website and services, you agree to be bound by these Terms of Service",
        "If you do not agree with any part of these terms, you may not use our services",
        "We reserve the right to modify these terms at any time without prior notice",
        "Continued use of our services after changes constitutes acceptance of the new terms",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Services Description",
      content: [
        "AI Voice Agents and Chatbot deployment and maintenance",
        "Workflow automation system design and implementation",
        "Agentic AI system development",
        "AI/ML model development and training",
        "Website and mobile application development",
        "DevOps and cloud infrastructure services",
        "Consultation and support services",
      ],
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payments & Fees",
      content: [
        "Service fees are outlined in individual service agreements and proposals",
        "Payment terms are specified in each project contract",
        "Late payments may incur additional fees as specified in agreements",
        "All fees are non-refundable unless otherwise stated in writing",
        "We reserve the right to change pricing with 30 days notice",
        "Taxes and other charges are the responsibility of the client",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Intellectual Property",
      content: [
        "All code, designs, and deliverables created specifically for you are your property upon full payment",
        "We retain ownership of our proprietary tools, frameworks, and methodologies",
        "You grant us permission to use your project in our portfolio and marketing materials",
        "Unauthorized copying or distribution of our work is prohibited",
        "Trademarks and logos are property of their respective owners",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Project Timelines & Delivery",
      content: [
        "Project timelines are estimates and subject to change based on requirements",
        "Delays caused by client (late feedback, approvals, assets) may extend delivery dates",
        "We will communicate any significant delays promptly",
        "Force majeure events may affect delivery timelines",
        "Regular progress updates will be provided throughout the project",
      ],
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Limitation of Liability",
      content: [
        "We are not liable for indirect, incidental, or consequential damages",
        "Our maximum liability is limited to the fees paid for the specific service",
        "We do not guarantee uninterrupted or error-free service",
        "You are responsible for backing up your data",
        "We are not responsible for third-party service disruptions",
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
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our services or website.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Agreement Overview</h2>
            <p className="text-slate-600 mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between 
              you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Aakasha Automations (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
              governing your use of our website, services, and products.
            </p>
            <p className="text-slate-600">
              By accessing our website or engaging our services, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms. If you are entering into this agreement 
              on behalf of a company or legal entity, you represent that you have authority to bind 
              such entity to these Terms.
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

        {/* Termination Section */}
        <Card className="mt-6 border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Termination</h2>
            </div>
            <p className="text-slate-600 mb-4">
              Either party may terminate a service agreement under the following conditions:
            </p>
            <ul className="space-y-2 ml-4 mb-6">
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>By Client:</strong> With 30 days written notice. Fees for completed work remain payable</span>
              </li>
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>By Us:</strong> For material breach, non-payment, or violation of these Terms</span>
              </li>
              <li className="text-slate-600 flex items-start gap-2">
                <span className="text-indigo-500 mt-1.5">•</span>
                <span><strong>Effect of Termination:</strong> Client pays for all work completed up to termination date</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Governing Law Section */}
        <Card className="mt-6 border-slate-200 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Scale className="h-6 w-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Governing Law</h2>
            </div>
            <p className="text-slate-600">
              These Terms shall be governed by and construed in accordance with the laws of India, 
              without regard to its conflict of law provisions. Any disputes arising under these Terms 
              shall be subject to the exclusive jurisdiction of the courts located in Ayodhya, 
              Uttar Pradesh, India.
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-6 bg-indigo-50 border-indigo-100">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Questions & Contact</h2>
            <p className="text-slate-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
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
            </div>
          </CardContent>
        </Card>
      </main>

      
    </div>
  );
}