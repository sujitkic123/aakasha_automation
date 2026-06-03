"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react";
import { motion, Variant, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
const Hero = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    "How can I automate my workflow?",
    "What services do you offer?",
    "Book a demo?",
    "Scale my business?",
  ];

  // Generate deterministic particle positions using useMemo
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 20; i++) {
      // Use deterministic values based on index to avoid Math.random during render
      const size = (i * 7) % 15 + 5;
      const left = (i * 13) % 100;
      const top = (i * 17) % 100;
      const duration = (i * 3) % 8 + 3;
      const delay = (i * 2) % 6;
      const xMovement = (i * 11) % 20 - 10;
      
      positions.push({
        id: i,
        size,
        left,
        top,
        duration,
        delay,
        xMovement,
      });
    }
    return positions;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // Animation variants
  const containerVariants :Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const badgeVariants:Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  const imageVariants:Variants = {
    hidden: { opacity: 0, x: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay: 0.5,
      },
    },
  };

  const floatingAnimation:Variant = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const pulseAnimation :Variant= {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  const typingVariants:Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-10 md:py-12">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated Floating Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-indigo-200/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xMovement, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div variants={badgeVariants}>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 rounded-full px-4 py-1.5 text-sm font-medium border-none group cursor-pointer">
                <Sparkles className="h-3 w-3 inline mr-1 group-hover:rotate-12 transition-transform" />
                AI-Powered Automation for Startups
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
            >
              Automate Smarter.{" "}
              <motion.span
                className="text-indigo-600 inline-block"
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0px 0px 0px rgba(79,70,229,0)",
                    "0px 0px 10px rgba(79,70,229,0.3)",
                    "0px 0px 0px rgba(79,70,229,0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Scale Faster.
              </motion.span>
              <br />
              Grow Beyond Limits.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0"
            >
              Aakasha Automations empowers startups and entrepreneurs with
              cutting-edge AI solutions — from intelligent voice agents to
              full-scale workflow automation — so you can focus on what truly
              matters: building your vision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                
              >
                <Link href="/our-services " >
                
                <Button size="lg" className= "cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 group">
                  Explore Our Services
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                 <Link href="/contact-us">
                 
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer rounded-full border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                >
                  Book a Free Consultation
                </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 justify-center lg:justify-start pt-4"
            >
              {[
                { label: "Happy Clients", value: "50+", icon: "😊" },
                { label: "Projects Delivered", value: "100+", icon: "🚀" },
                { label: "24/7 Support", value: "Always", icon: "💡" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-bold text-slate-800">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Chat Interface */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:flex justify-end hidden"
          >
            <div className="relative w-full max-w-md">
              {/* Animated Gradient Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Main Card */}
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-100"
                animate={floatingAnimation}
              >
                {/* Header */}
                <motion.div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center"
                    animate={pulseAnimation}
                  >
                    <Bot className="h-5 w-5 text-indigo-600" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-slate-800">AI Assistant</p>
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-green-500"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <p className="text-xs text-slate-500">Ready to help</p>
                    </div>
                  </div>
                  <motion.div
                    className="ml-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="h-4 w-4 text-indigo-400" />
                  </motion.div>
                </motion.div>

                {/* Typing Message */}
                <div className="space-y-3">
                  <motion.div
                    key={messageIndex}
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="p-3 rounded-xl bg-indigo-50 text-indigo-700 ml-6"
                  >
                    <p className="text-sm">{messages[messageIndex]}</p>
                  </motion.div>

                  {/* Animated Typing Indicator */}
                  <motion.div
                    className="p-3 rounded-xl bg-slate-100 text-slate-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex gap-1">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-slate-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-slate-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="h-2 w-2 rounded-full bg-slate-400"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-3 -right-3 h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;