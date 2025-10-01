import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Users,
  Award,
  Clock,
  Lightbulb,
  Handshake,
  Rocket,
  Target,
  Eye,
  CheckCircle2,
  Code,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Cog,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              {/* <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-2xl">&lt;/&gt;</span>
              </div> */}
              <div className="text-left">
                {/* <h1 className="text-3xl font-bold leading-none">Code Infra</h1> */}
                {/* <span className="text-lg text-muted-foreground">Technologies</span> */}
                <Image
                                  src="/Logo.png" // make sure Logo.png is inside /public
                                  alt="Code Infra Technologies Logo"
                                  width={200}
                                  height={60}
                                  className="object-contain"
                                  priority
                                />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Engineering Digital Foundations for Tomorrow
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a forward-thinking IT services company dedicated to creating innovative solutions that transform
              businesses and drive digital excellence.
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Users className="h-8 w-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold">11-50</div>
                  <div className="text-sm text-muted-foreground">Expert Team</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Award className="h-8 w-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Clock className="h-8 w-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                <Rocket className="h-4 w-4 text-accent" />
                <span className="text-sm text-accent font-medium">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a vision to bridge the gap between technology and business success, Code Infra Technologies
                has grown into a trusted partner for organizations seeking digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group hover:border-accent/50 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation-Driven</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We leverage cutting-edge technologies to create solutions that give our clients a competitive
                    advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-accent/50 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Handshake className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Partnership Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work closely with our clients as strategic partners, understanding their unique challenges and
                    goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:border-accent/50 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Future-Ready Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our solutions are designed to scale and adapt to evolving business needs and technological advances.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and
                  innovation. We strive to be the trusted partner that organizations rely on for their digital
                  transformation journey.
                </p>
                <div className="space-y-3">
                  {["Drive Digital Innovation", "Deliver Quality Solutions", "Enable Business Growth"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading provider of innovative IT solutions that shape the future of business operations and
                  enable organizations to achieve their full potential in the digital age.
                </p>
                <div className="space-y-3">
                  {["Industry Leadership", "Global Impact", "Technological Excellence"].map((goal) => (
                    <div key={goal} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{goal}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Expertise</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive technical capabilities across modern technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Software Development",
                  desc: "Full-stack development with modern frameworks and technologies",
                },
                { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and migration services" },
                {
                  icon: Smartphone,
                  title: "Mobile Development",
                  desc: "Native and cross-platform mobile applications",
                },
                {
                  icon: Database,
                  title: "Data Management",
                  desc: "Database design, optimization, and analytics solutions",
                },
                { icon: Shield, title: "Cybersecurity", desc: "Comprehensive security solutions and best practices" },
                { icon: Cog, title: "DevOps", desc: "Continuous integration and deployment automation" },
              ].map((item) => (
                <Card key={item.title} className="group hover:border-accent/50 transition-all">
                  <CardContent className="p-6 space-y-3 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Why Choose Code Infra Technologies?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Proven Track Record",
                  desc: "Over 100 successful projects delivered across various industries",
                },
                {
                  num: "02",
                  title: "Expert Team",
                  desc: "Skilled professionals with deep expertise in modern technologies",
                },
                {
                  num: "03",
                  title: "Client-Focused Approach",
                  desc: "We prioritize your business goals and deliver tailored solutions",
                },
                {
                  num: "04",
                  title: "Continuous Support",
                  desc: "24/7 support and maintenance to ensure optimal performance",
                },
              ].map((reason) => (
                <Card key={reason.num} className="group hover:border-accent/50 transition-all">
                  <CardContent className="p-6 space-y-3">
                    <div className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                      {reason.num}
                    </div>
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
