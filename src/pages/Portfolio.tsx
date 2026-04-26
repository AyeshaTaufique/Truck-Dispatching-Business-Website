import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function Portfolio() {
  const caseStudies = [
    {
      company: "Midwest Express Logistics",
      type: "Owner-Operator (Dry Van)",
      challenge: "Struggling with empty miles and spending 15+ hours a week searching for loads and handling paperwork.",
      solution: "Implemented our Professional Dispatch plan with AI route optimization and full back-office support.",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, stat: "+22%", label: "Gross Revenue" },
        { icon: <Clock className="w-5 h-5" />, stat: "15 hrs", label: "Saved per week" },
        { icon: <DollarSign className="w-5 h-5" />, stat: "$3.15", label: "Avg Rate/Mile" }
      ]
    },
    {
      company: "Sunbelt Freight LLC",
      type: "Small Fleet (3 Reefers)",
      challenge: "Inconsistent lane pricing and high driver turnover due to poor communication and delayed support.",
      solution: "Enterprise Fleet plan with dedicated dispatch team and 24/7 driver support channel.",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, stat: "+18%", label: "Fleet Utilization" },
        { icon: <Clock className="w-5 h-5" />, stat: "0%", label: "Driver Turnover" },
        { icon: <DollarSign className="w-5 h-5" />, stat: "$3.85", label: "Avg Rate/Mile" }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="pt-24 pb-16 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Proven results on the road.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              See how we've helped independent drivers and small fleets increase their profitability and streamline their operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-zinc-100">
                  <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{study.type}</div>
                  <h2 className="text-2xl font-bold text-zinc-900 mb-6">{study.company}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-zinc-900 mb-2">The Challenge</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-2">Our Solution</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                </div>
                
                <div className="p-8 md:w-1/2 bg-zinc-50 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold text-zinc-900 mb-6 text-center">Measurable Impact</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.results.map((result, rIndex) => (
                      <div key={rIndex} className="bg-white p-4 rounded-2xl border border-zinc-100 text-center shadow-sm">
                        <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-zinc-900 mb-1">{result.stat}</div>
                        <div className="text-xs text-zinc-500 font-medium">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
