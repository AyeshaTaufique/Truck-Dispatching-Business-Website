import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: "Basic Dispatch",
      price: "5%",
      period: "of gross revenue",
      description: "Perfect for owner-operators who want to handle their own paperwork but need help finding the best loads.",
      features: [
        "Load booking & negotiation",
        "Route optimization",
        "Credit checks on brokers",
        "Dedicated dispatcher",
        "Standard business hours support"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "7%",
      period: "of gross revenue",
      description: "Our most popular plan. Full-service dispatch and back-office support so you can focus entirely on driving.",
      features: [
        "Everything in Basic",
        "24/7 Dispatch support",
        "Invoicing & Factoring submission",
        "Rate confirmation handling",
        "Detention & Lumper negotiation",
        "Weekly performance reports"
      ],
      cta: "Choose Professional",
      highlighted: true
    },
    {
      name: "Enterprise Fleet",
      price: "Custom",
      period: "flat rate available",
      description: "Designed for carriers with 3+ trucks needing comprehensive fleet management and dedicated support teams.",
      features: [
        "Everything in Professional",
        "Dedicated dispatch team",
        "Custom reporting dashboard",
        "Driver recruitment assistance",
        "Safety & DOT compliance support",
        "Volume discounts"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafafa] min-h-screen">
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Simple, transparent pricing.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              No hidden fees. No long-term contracts. We only make money when you make money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 border flex flex-col ${
                  plan.highlighted 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-xl relative transform md:-translate-y-4' 
                    : 'bg-white border-zinc-200 text-zinc-900 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-zinc-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm h-10 ${plan.highlighted ? 'text-blue-100' : 'text-zinc-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  </div>
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-zinc-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-blue-300' : 'text-emerald-500'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-blue-50' : 'text-zinc-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === 'Enterprise Fleet' ? '/contact' : '/register'}
                  className={`w-full py-3 px-4 rounded-xl font-medium text-center transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-zinc-50'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
