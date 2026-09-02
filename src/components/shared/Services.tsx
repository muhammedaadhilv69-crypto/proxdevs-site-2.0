import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
            {services.slice(0, 6).map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                />
            ))}
        </div>
    )
}