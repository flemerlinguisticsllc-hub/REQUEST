import { Link } from "react-router-dom";
import { ArrowRight, Send, ClipboardCheck, MailCheck, Video, MapPin, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


const steps = [
  { icon: Send, title: "Submit details", body: "Tell us about your assignment — date, setting, and access needs." },
  { icon: ClipboardCheck, title: "Agency reviews", body: "Our scheduling team checks interpreter availability and qualifications." },
  { icon: MailCheck, title: "Confirmation sent", body: "You receive confirmation with interpreter details and next steps." },
];

const features = [
  { icon: HandHeart, label: "ASL & CDI interpreting" },
  { icon: Video, label: "Virtual assignments" },
  { icon: MapPin, label: "On-site coverage" },
];

const Index = () => {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-gradient-soft">
          <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground">
                Request an ASL Interpreter
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Share a few details about your assignment and our team will confirm availability of a qualified
                American Sign Language interpreter — on-site or virtual, scheduled or urgent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="text-base">
                  <Link to="/request">
                    Start a Request <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <a href="#how-it-works">How it works</a>
                </Button>
              </div>
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {features.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Icon className="h-5 w-5 text-secondary mt-0.5" aria-hidden="true" />
                    <dt className="text-sm text-foreground">{label}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="flex h-72 w-72 xl:h-96 xl:w-96 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-soft">
                <HandHeart className="h-40 w-40 xl:h-52 xl:w-52" strokeWidth={1.25} aria-hidden="true" />
              </div>
            </div>
          </div>

        </section>

        {/* What happens next */}
        <section id="how-it-works" className="container py-16 lg:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">What happens next?</h2>
            <p className="mt-3 text-muted-foreground">
              A simple, three-step process designed around the access needs of Deaf and Hard of Hearing communities.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Accessibility note */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-12 lg:py-16 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Built around accessibility</h2>
              <p className="mt-3 text-primary-foreground/80 max-w-2xl">
                We provide ASL interpreting, CDI/Deaf interpreters, ProTactile and tactile interpreting,
                and spoken-English voicing. Virtual and on-site assignments supported.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/request">Start a Request <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;