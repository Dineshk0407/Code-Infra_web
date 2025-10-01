import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Rocket, Shield, Heart, Handshake, Clock, Headset, TrendingUp, CheckCircle2 } from "lucide-react"

export default function PromisePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Our Promise</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The core values and commitments that drive everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Promise Statement */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto bg-accent/5 border-accent/20">
            <CardContent className="p-8 md:p-12 space-y-4">
              <h2 className="text-3xl font-bold">Our Commitment to Excellence</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Code Infra Technologies, we don't just deliver solutions – we deliver promises. Every project we
                undertake is backed by our unwavering commitment to innovation, quality, and client success. We believe
                that technology should empower, not complicate, and our promise is to make that vision a reality for
                every client we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Rocket className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Innovation-Driven</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stay at the forefront of technology, constantly exploring new solutions and methodologies to
                  deliver cutting-edge results for our clients.
                </p>
                <div className="space-y-2">
                  {[
                    "Latest technology stack and frameworks",
                    "Continuous learning and skill development",
                    "Research-driven approach to problem-solving",
                    "Future-proof solutions that scale with your business",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Quality-Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project we undertake is executed with meticulous attention to detail, ensuring the highest
                  standards of quality and reliability.
                </p>
                <div className="space-y-2">
                  {[
                    "Rigorous testing and quality assurance",
                    "Code reviews and best practices",
                    "Performance optimization and security",
                    "Documentation and maintainable code",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Client-Centric</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients' success is our success. We work closely with you to understand your unique needs and
                  deliver solutions that exceed expectations.
                </p>
                <div className="space-y-2">
                  {[
                    "Personalized approach to every project",
                    "Regular communication and updates",
                    "Flexible engagement models",
                    "Long-term partnership mindset",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">What This Means for You</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Handshake,
                  title: "Transparency",
                  desc: "Clear communication, honest timelines, and no hidden costs. You'll always know where your project stands.",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  desc: "We respect your deadlines and work diligently to deliver projects on time, every time.",
                },
                {
                  icon: Headset,
                  title: "Ongoing Support",
                  desc: "Our relationship doesn't end at delivery. We provide 24/7 support to ensure your success.",
                },
                {
                  icon: TrendingUp,
                  title: "Measurable Results",
                  desc: "We focus on delivering solutions that provide tangible business value and measurable outcomes.",
                },
              ].map((item) => (
                <Card key={item.title} className="group hover:border-accent/50 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Experience the Difference?</h2>
            <p className="text-xl text-muted-foreground">
              Let us show you how our promise translates into exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
