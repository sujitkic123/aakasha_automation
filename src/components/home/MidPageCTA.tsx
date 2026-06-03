
import { Button } from "@/components/ui/button";
import Link from "next/link";


const MidPageCTA = () => {
 return (
    <section className="py-20 bg-indigo-600">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Automate Your Business?
        </h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
          Join the growing number of startups and entrepreneurs who are scaling
          faster with the power of AI. Let&apos;s build something extraordinary together.
        </p>
         <Link href="/contact-us">
        <Button size="lg" className="bg-white cursor-pointer text-indigo-600 hover:bg-slate-100 rounded-full px-8">
          Book Your Free Consultation →
        </Button>
         </Link>
      </div>
    </section>
  );
}

export default MidPageCTA