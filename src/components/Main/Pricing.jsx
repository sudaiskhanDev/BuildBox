"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 15,
      yearly: 150,
      features: [
        "1 User",
        "10GB Storage",
        "Email Support",
        "Basic Analytics",
        "Community Access",
      ],
      buttonColor: "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
      desc: "For freelancers and beginners.",
    },
    {
      name: "Pro",
      monthly: 39,
      yearly: 390,
      features: [
        "Up to 5 Users",
        "100GB Storage",
        "Priority Support",
        "Advanced Analytics",
        "Full API Access",
      ],
      popular: true,
      buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
      desc: "Perfect for small teams and startups.",
    },
    {
      name: "Enterprise",
      monthly: 79,
      yearly: 790,
      features: [
        "Unlimited Users",
        "1TB Storage",
        "24/7 Dedicated Support",
        "Custom Integrations",
        "AI Insights Dashboard",
      ],
      buttonColor: "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50",
      desc: "For growing organizations and enterprises.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      {/* Heading */}
      <p className="text-indigo-600 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
        Pricing
      </p>
      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
        Choose the plan that fits your goals
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm sm:text-base">
        Simple, transparent pricing — no hidden fees. Switch between monthly or yearly anytime.
      </p>

      {/* Toggle */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10">
        <span className={!isYearly ? "font-semibold text-gray-900" : "text-gray-500"}>
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 transition-all duration-300 after:content-[''] after:absolute after:top-[3px] after:left-[4px] after:bg-white after:h-[18px] after:w-[18px] after:rounded-full after:transition-all peer-checked:after:translate-x-[20px]"></div>
        </label>
        <span className={isYearly ? "font-semibold text-gray-900" : "text-gray-500"}>
          Yearly
        </span>
        {isYearly && (
          <span className="text-xs sm:text-sm text-green-600 font-medium ml-2">
            Save 20%
          </span>
        )}
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-2xl p-6 sm:p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${
              plan.popular
                ? "border-indigo-600 scale-[1.02]"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full">
                ★ Popular
              </div>
            )}

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
              {plan.name}
            </h3>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              ${isYearly ? plan.yearly : plan.monthly}
              <span className="text-sm text-gray-500 font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              billed {isYearly ? "yearly" : "monthly"}
            </p>

            <ul className="text-gray-700 text-sm sm:text-base mb-6 space-y-2 sm:space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center gap-2 sm:gap-3"
                >
                  <span className="text-indigo-600 text-lg">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 ${plan.buttonColor}`}
            >
              Subscribe
            </button>

            <p className="text-xs sm:text-sm text-gray-400 mt-3">{plan.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
