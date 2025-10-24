import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStackSectionLogic";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Brain, HeartPulse, Rocket, Smartphone } from "lucide-react";

const ScrollStackSection = () => {
    return (
        <>

            <ScrollStack className="bg-black text-white px-6 sm:px-10 md:px-20 relative">

                {/* Section Heading */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 justify-center lg:justify-center">
                    <div className="w-10 sm:w-12 h-[2px] bg-[#34C759]" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f7f7f7]">
                        Discover Wellnex Systems
                    </h2>
                </div>

                <motion.p
                    className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed lg:mx-0 mb-6 text-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    To create a digital wellness ecosystem where technology empowers
                    balance, community, and consciousness — blending innovation with
                    human empathy. We believe in harnessing AI to deliver personalized
                    wellness journeys, fostering global communities of support, and
                    designing intuitive tools that prioritize mental health, emotional
                    wellbeing, and sustainable habits.
                </motion.p>

                {/* Card 1 — About Wellnex */}
                <ScrollStackItem>
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        className="rounded-2xl p-8 bg-white/3 backdrop-blur-md border border-white/10 hover:shadow-green-500/30 transition-all duration-500"
                    >
                        <Brain className="w-12 h-12 text-[#34C759] mb-4" />
                        <h2 className="text-3xl font-bold mb-4 text-center">About Wellnex</h2>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto text-center">
                            Wellnex Systems is redefining wellness for the next generation — a unified
                            ecosystem connecting fitness, mental health, and diagnostics. We’re merging
                            technology with human-centered care to make wellness intelligent, inclusive,
                            and accessible anytime, anywhere.
                        </p>
                    </Tilt>
                </ScrollStackItem>

                {/* Card 2 — Our Flagship Apps */}
                <ScrollStackItem>
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        className="rounded-2xl p-8 bg-white/3 backdrop-blur-md border border-white/10 hover:shadow-green-500/30 transition-all duration-500"
                    >
                        <Smartphone className="w-12 h-12 text-[#34C759] mb-4" />

                        <h2 className="text-3xl font-bold mb-4 text-center">Our Flagship Apps</h2>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto text-center">
                            <strong>SoulWhispers:</strong> A mindfulness and emotional wellness companion
                            that helps you track moods, meditate, and reconnect with your inner calm. <br /><br />
                            <strong>GymKey:</strong> Your digital key to fitness — seamless access to
                            partner gyms, workout tracking, and smart membership management in one app.
                        </p>
                    </Tilt>
                </ScrollStackItem>

                {/* Card 3 — Why Choose Wellnex */}
                <ScrollStackItem>
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        className="rounded-2xl p-8 bg-white/3 backdrop-blur-md border border-white/10 hover:shadow-green-500/30 transition-all duration-500"
                    >
                        <HeartPulse className="w-12 h-12 text-[#34C759] mb-4" />

                        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Wellnex?</h2>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto text-center">
                            Wellnex brings together physical, mental, and emotional health in one ecosystem.
                            With AI-driven personalization, real-time analytics, and secure cloud integration,
                            we empower individuals, trainers, and wellness providers to shape the future of health.
                        </p>
                    </Tilt>
                </ScrollStackItem>

                {/* Card 4 — Coming Next */}
                <ScrollStackItem>
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        className="rounded-2xl p-8 bg-white/3 backdrop-blur-md border border-white/10 hover:shadow-green-500/30 transition-all duration-500"
                    >
                        <Rocket className="w-12 h-12 text-[#34C759] mb-4" />

                        <h2 className="text-3xl font-bold mb-4 text-center">What’s Coming Next</h2>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto text-center">
                            We’re building the unified <strong>Wellnex Platform</strong> — your complete digital
                            wellness dashboard. Coming soon: wearable integrations, nutrition tracking,
                            and corporate wellness programs designed to create smarter, healthier communities.
                        </p>
                    </Tilt>
                </ScrollStackItem>
            </ScrollStack>
        </>
    );
};

export default ScrollStackSection;
