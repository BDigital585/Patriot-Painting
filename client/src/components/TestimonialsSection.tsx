import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const StarRating = () => {
  return (
    <div className="mb-6 flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, name, title, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      <div className="absolute top-6 right-8 text-primary/20">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <StarRating />
      <p className="text-gray-600 mb-8">{quote}</p>
      <div className="flex items-center">
        <img 
          className="w-12 h-12 rounded-full object-cover mr-4" 
          src={imageSrc} 
          alt={name} 
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-gray-500 text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Working with this team transformed our business. The web development and analytics solutions they provided gave us the edge we needed in a competitive market. Highly recommended!",
    name: "Michael Johnson",
    title: "CEO, TechInnovate",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The cybersecurity services provided exceptional protection for our sensitive data. Their team was responsive, knowledgeable, and made complex security concepts accessible.",
    name: "Sarah Williams",
    title: "COO, FinSecure",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Their content strategy services revolutionized our approach to digital marketing. We've seen a 150% increase in engagement and our conversion rates have doubled. Outstanding service!",
    name: "David Chen",
    title: "Marketing Director, GrowthFocus",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
