import { Sparkles, CircleDot, Layers, ShoppingBag } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Balloon Garlands",
    description: "Organic, flowing designs perfect for backdrops, entryways, and statement walls.",
  },
  {
    icon: CircleDot,
    title: "Balloon Arches",
    description: "Classic or modern—designed to frame your space and elevate your event.",
  },
  {
    icon: Layers,
    title: "Full Installations",
    description: "Custom, large-scale designs for weddings, corporate events, and celebrations.",
  },
  {
    icon: ShoppingBag,
    title: "Grab & Go Options",
    description: "Pre-designed garlands for easy pickup and DIY setup.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in custom balloon installations that bring your vision to life—beautiful, stress-free, and completely tailored to your event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
