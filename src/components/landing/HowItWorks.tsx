import React from "react";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const HowItWorks = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Simple Process
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Three steps to
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
          Our streamlined process makes dental care accessible, convenient, and
          stress-free for everyone.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid gap-10 sm:gap-12 lg:gap-8 lg:grid-cols-3">
          {[
            {
              id: 1,
              title: "Ask Questions",
              desc: "Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.",
              img: "/audio.png",
              pills: ["24/7 Available", "Instant Response"],
            },
            {
              id: 2,
              title: "Get Expert Advice",
              desc: "Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.",
              img: "/brain.png",
              pills: ["AI-Powered", "Personalized"],
            },
            {
              id: 3,
              title: "Book & Get Care",
              desc: "Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.",
              img: "/calendar.png",
              pills: ["Verified Doctors", "Follow-up Care"],
            },
          ].map((step) => (
            <div
              key={step.id}
              className="relative group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-6 sm:left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={40}
                  height={40}
                  className="w-10 sm:w-14 object-contain"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed mb-6">
                {step.desc}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {step.pills.map((pill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-14 sm:mt-16">
        <SignUpButton mode="modal">
          <Button size="lg" className="mx-auto flex items-center">
            <ArrowRightIcon className="mr-2 size-5" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
};

export default HowItWorks;
