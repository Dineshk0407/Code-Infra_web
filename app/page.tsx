import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Server, Zap, Users, Clock, Award, CheckCircle2 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-background opacity-30" />

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent font-mono">
                Engineering Digital Foundations
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 animation-delay-200">
              Engineering <span className="text-gradient-accent">Digital</span> Foundations
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 animation-delay-400">
              We engineer reliable digital foundations that enable businesses to innovate, scale, and lead in their industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 animation-delay-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">11-50</div>
                <div className="text-sm text-muted-foreground">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 animation-delay-600">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Custom Software Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  End-to-end software solutions tailored to your specific business requirements. From web applications
                  to mobile apps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Full-stack web development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Mobile app development (iOS/Android)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>API development and integration</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm text-accent hover:underline group/link"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Infrastructure Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Robust, scalable infrastructure that grows with your business. Cloud-native architectures for high
                  availability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cloud migration and optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>DevOps and CI/CD implementation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Security and compliance solutions</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm text-accent hover:underline group/link"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Digital Transformation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your business processes with cutting-edge digital solutions. Modernize operations and
                  improve efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Process automation and optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Legacy system modernization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Data analytics and business intelligence</span>
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm text-accent hover:underline group/link"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Code Infra Technologies?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our services can help you achieve your business goals. Get a free consultation and
              project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
