import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Code,
  Server,
  Zap,
  Globe,
  Smartphone,
  Building,
  Plug,
  Cloud,
  Cog,
  Shield,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Comprehensive IT Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From custom software development to complete digital transformation, we provide end-to-end technology
              solutions that drive business growth and innovation.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Software Development */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                <Code className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl font-bold">Custom Software Development</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in creating bespoke software solutions that perfectly align with your business objectives.
                Our development process combines agile methodologies with cutting-edge technologies to deliver scalable,
                maintainable, and user-friendly applications.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What We Offer:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Web Applications</h4>
                      <p className="text-sm text-muted-foreground">
                        Full-stack development using React, Vue.js, Angular, Node.js
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Smartphone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Mobile Applications</h4>
                      <p className="text-sm text-muted-foreground">Native iOS/Android and cross-platform solutions</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Enterprise Software</h4>
                      <p className="text-sm text-muted-foreground">
                        Large-scale applications with complex business logic
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Plug className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">API Development</h4>
                      <p className="text-sm text-muted-foreground">RESTful APIs, GraphQL, microservices architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Our Development Process:</h3>
                <div className="space-y-6">
                  {[
                    {
                      num: "01",
                      title: "Discovery & Planning",
                      desc: "Requirements analysis, technical feasibility, and project roadmap",
                    },
                    {
                      num: "02",
                      title: "Design & Architecture",
                      desc: "UI/UX design, system architecture, and database design",
                    },
                    {
                      num: "03",
                      title: "Development & Testing",
                      desc: "Agile development, continuous testing, and quality assurance",
                    },
                    {
                      num: "04",
                      title: "Deployment & Support",
                      desc: "Production deployment, monitoring, and ongoing maintenance",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">{step.num}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Solutions */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-card border-accent/20 order-2 lg:order-1">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Technologies We Use:</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                <Server className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl font-bold">Infrastructure Solutions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Build robust, scalable, and secure infrastructure that grows with your business. We design and implement
                cloud-native architectures that ensure high availability, optimal performance, and cost-effectiveness.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Infrastructure Services:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Cloud className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Cloud Migration</h4>
                      <p className="text-sm text-muted-foreground">Seamless migration to AWS, Azure, Google Cloud</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Cog className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">DevOps & CI/CD</h4>
                      <p className="text-sm text-muted-foreground">
                        Automated deployment pipelines and containerization
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Security & Compliance</h4>
                      <p className="text-sm text-muted-foreground">
                        Enterprise-grade security and compliance frameworks
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Monitoring & Analytics</h4>
                      <p className="text-sm text-muted-foreground">Real-time monitoring and performance optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl font-bold">Digital Transformation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your business operations with cutting-edge digital solutions. We help organizations modernize
                their processes, improve efficiency, and stay competitive in the rapidly evolving digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cog,
                  title: "Process Automation",
                  desc: "RPA, workflow automation, and intelligent process optimization",
                },
                {
                  icon: TrendingUp,
                  title: "Data Analytics",
                  desc: "Business intelligence, data warehousing, and predictive analytics",
                },
                {
                  icon: Code,
                  title: "Legacy Modernization",
                  desc: "Modernizing legacy systems with cloud-native architectures",
                },
                {
                  icon: Zap,
                  title: "Digital Strategy",
                  desc: "Strategic consulting, technology roadmaps, and change management",
                },
              ].map((item) => (
                <Card key={item.title} className="group hover:border-accent/50 transition-all">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Benefits of Digital Transformation:</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Increased operational efficiency by 40-60%",
                    "Reduced manual errors and processing time",
                    "Enhanced customer experience and satisfaction",
                    "Better data-driven decision making",
                    "Improved scalability and flexibility",
                    "Cost reduction and ROI improvement",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
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
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
