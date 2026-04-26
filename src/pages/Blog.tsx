import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: "How to Maximize Your Rate Per Mile in a Soft Market",
      category: "Strategy",
      date: "Oct 12, 2023",
      excerpt: "Learn the negotiation tactics and lane selection strategies that top-earning owner-operators use when spot rates drop.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8c3cd373e0?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Understanding Hours of Service (HOS) Exemptions",
      category: "Compliance",
      date: "Oct 05, 2023",
      excerpt: "A comprehensive guide to the latest FMCSA regulations and how to legally utilize exemptions to keep your freight moving.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Hidden Costs of Deadhead Miles",
      category: "Operations",
      date: "Sep 28, 2023",
      excerpt: "Why accepting a lower-paying load to get to a hot market is often more profitable than bouncing empty.",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Factoring vs. Quick Pay: Which is Right for You?",
      category: "Finance",
      date: "Sep 15, 2023",
      excerpt: "Breaking down the pros, cons, and hidden fees of different freight payment methods for independent carriers.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Winter Weather Prep for Owner-Operators",
      category: "Safety",
      date: "Sep 02, 2023",
      excerpt: "Essential equipment checks and routing strategies to stay safe and avoid costly delays during the winter months.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "How to Build Strong Relationships with Brokers",
      category: "Business",
      date: "Aug 21, 2023",
      excerpt: "Communication tips that will get you on the 'first-call' list for premium, unposted freight.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <section className="pt-24 pb-16 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
              Insights for the modern fleet.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Logistics tips, industry updates, and dispatch best practices to help you run a more profitable trucking business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 w-full relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-zinc-900 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors mt-auto">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
