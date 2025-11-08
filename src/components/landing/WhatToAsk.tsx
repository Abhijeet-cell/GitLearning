import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhatToAsk = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
            <MessageCircleIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI-Powered Conversations
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real dental cases.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT SIDE - Chat Cards */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
              Common questions our AI answers:
            </h3>

            {[
              {
                question: "My tooth hurts when I bite down",
                answer:
                  "Get immediate advice on pain management, possible causes, and when to see a dentist urgently.",
                tags: ["Instant Response", "Pain Relief"],
              },
              {
                question: "How much does teeth whitening cost?",
                answer:
                  "Compare treatment options, pricing ranges, and find the best whitening solution for your budget.",
                tags: ["Cost Analysis", "Treatment Options"],
              },
              {
                question: "When should I replace my filling?",
                answer:
                  "Learn about filling lifespan, warning signs of wear, and replacement timing guidance.",
                tags: ["Preventive Care", "Maintenance"],
              },
            ].map((chat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquareIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="bg-primary/5 rounded-2xl p-3 sm:p-4 border border-primary/10">
                      <p className="font-semibold text-primary text-sm sm:text-base">
                        “{chat.question}”
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {chat.answer}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {chat.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Illustration */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 w-full max-w-md sm:max-w-lg">
              <Image
                src="/confused.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToAsk;
