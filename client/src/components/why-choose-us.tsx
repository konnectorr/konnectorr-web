import React from "react";
import { features } from "@/lib/data";
import { Search, Tags, Users, MapPin, Star, DollarSign } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <Search className="text-primary text-2xl" />;
      case "tags":
        return <Tags className="text-primary text-2xl" />;
      case "user-friends":
        return <Users className="text-primary text-2xl" />;
      case "map-marker-alt":
        return <MapPin className="text-primary text-2xl" />;
      case "star":
        return <Star className="text-primary text-2xl" />;
      case "dollar-sign":
        return <DollarSign className="text-primary text-2xl" />;
      default:
        return <div></div>;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Why Choose WiFiCableDeals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            We make finding the right TV and internet service simple, saving you time and money.
          </p>
          <p className="text-gray-600 mb-4">
            Call <a href="tel:8887886930" className="text-primary font-semibold hover:underline">888-788-6930</a> for personalized recommendations from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center p-6 bg-light rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
