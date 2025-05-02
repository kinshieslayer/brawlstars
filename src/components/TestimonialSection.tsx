import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Manhaten.",
    avatar: "/lovable-uploads/brawlpfp1.webp", 
    quote: "The gem packs were great value! Unlocked all my favorite skins in one go.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Kurina.",
    avatar: "/lovable-uploads/brawlpfp2.webp",
    quote: "Fast delivery and great customer service. Will definitely buy again!",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus T.",
    avatar: "/lovable-uploads/brawlpfp3.webp",
    quote: "Finally got legendary brawlers thanks to these gems. Totally worth it!",
    rating: 4
  }
];

const TestimonialSection = () => {
  return (
    <section id="proofs" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-lilita mb-4">Last <span className="text-brawl-blue">Benefiters</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied players who have powered up their game with our premium gems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-brawl-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-brawl-dark/80 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-brawl-purple/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex">
                    {Array(5).fill(0).map((_, index) => (
                      <Star 
                        key={index} 
                        size={14} 
                        className={index < testimonial.rating ? "text-brawl-yellow fill-brawl-yellow" : "text-gray-600"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
