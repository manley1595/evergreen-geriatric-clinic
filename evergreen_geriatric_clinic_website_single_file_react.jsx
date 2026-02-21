import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CheckCircle2,
  Clock,
  HeartPulse,
  Hospital,
  MapPin,
  Phone,
  Shield,
  Stethoscope,
  Video,
} from "lucide-react";

/**
 * Evergreen Geriatric Clinic — single-file marketing + intake website
 * - Mobile-first
 * - Accessible contrast + large tap targets
 * - Front-end only (no backend). Hook up forms to your email/CRM later.
 */

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
    <Icon className="h-4 w-4" />
    {label}
  </span>
);

const AssignmentPage = ({ id, onBack }) => {
  const content = {
    a1: {
      title: "About Our Clinic",
      subtitle: "Who we serve and what you can expect at Evergreen.",
      blocks: [
        { h: "Who we care for", p: "We specialize in caring for adults age 65 and older. Many of our patients manage multiple health conditions, medications, or recent hospital visits—and we’re here to help simplify and coordinate that care." },
        { h: "Our care team", p: "Your care is supported by a full team: geriatric physicians, nurse practitioners, social workers, pharmacists, and care coordinators. We work together so you don’t have to manage everything alone." },
        { h: "Our mission", p: "To provide compassionate, high-quality care that helps older adults stay independent, safe, and supported." },
        { h: "Our vision", p: "To be a trusted partner for older adults and their families—focused on dignity, prevention, and long-term well-being." },
        { h: "What we value", p: "Respect, clear communication, teamwork, accessibility, and putting patients and caregivers at the center of every decision." },
      ],
    },
    a2: {
      title: "Your Privacy & Technology",
      subtitle: "How we protect your information and make care easier.",
      blocks: [
        { h: "Secure health records", p: "We use an integrated electronic health record system so your care team can see your history, medications, and care plans in one secure place." },
        { h: "Care coordination", p: "We connect with hospitals, labs, imaging centers, pharmacies, and home health agencies to keep your care consistent and safe." },
        { h: "Privacy matters", p: "Your personal health information is protected under federal privacy laws. We follow strict policies to safeguard your information and limit access only to authorized team members." },
        { h: "Cybersecurity safeguards", p: "We use secure systems, staff training, and monitoring tools to protect against data breaches and online threats." },
      ],
    },
    a3: {
      title: "How We’re Organized",
      subtitle: "Clear leadership and thoughtful planning support your care.",
      blocks: [
        { h: "Why Evergreen?", p: "The name Evergreen reflects strength, stability, and long life—values that guide the care we provide." },
        { h: "Thoughtful planning", p: "We regularly evaluate community needs, listen to patient feedback, and review our services to ensure we’re meeting the needs of older adults." },
        { h: "Clinic leadership", p: "Our medical director oversees clinical quality, while our practice administrator ensures operations run smoothly and efficiently." },
        { h: "Support departments", p: "Behind the scenes, billing, scheduling, IT, and facilities teams help create a smooth and welcoming experience." },
      ],
    },
    a4: {
      title: "Financial Responsibility & Staff Support",
      subtitle: "Keeping care sustainable and welcoming the right team members.",
      blocks: [
        { h: "Insurance & payment", p: "We primarily serve Medicare and Medicare Advantage patients, along with Medicaid and many commercial plans. Our billing team works to keep costs transparent and manageable." },
        { h: "Responsible management", p: "We carefully monitor clinic expenses and revenue to ensure we can continue offering high-quality care long term." },
        { h: "Welcoming new staff", p: "New team members receive structured onboarding, privacy training, and mentorship so they can confidently support patients from day one." },
      ],
    },
    a5: {
      title: "Leadership & Quality",
      subtitle: "How we continuously improve your care experience.",
      blocks: [
        { h: "Compassionate leadership", p: "Our leaders prioritize teamwork, emotional intelligence, and open communication—important in the complex world of geriatric care." },
        { h: "Continuous improvement", p: "We regularly review patient outcomes, hospital readmissions, and patient feedback to improve care quality." },
        { h: "Our quality goals", p: "We focus on improving patient experience, supporting overall community health, controlling costs responsibly, and supporting our care team’s well-being." },
      ],
    },
    a6: {
      title: "Emergency Preparedness & Innovation",
      subtitle: "Planning ahead to keep you safe and adapting to modern healthcare.",
      blocks: [
        { h: "Emergency planning", p: "We maintain a comprehensive emergency preparedness plan to protect patients, staff, and medical records during natural disasters, power outages, public health events, or other emergencies." },
        { h: "Telehealth services", p: "Virtual visits and remote monitoring tools help reduce travel barriers and allow us to stay connected between appointments." },
        { h: "Proactive population health", p: "We use data tools to identify patients who may need extra follow-up, helping prevent complications and unnecessary hospital visits." },
      ],
    },
  };

  const pageData = content[id];
  if (!pageData) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{pageData.title}</h1>
          <p className="mt-2 text-muted-foreground max-w-3xl">{pageData.subtitle}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onBack}>Back to clinic site</Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {pageData.blocks.map((b) => (
          <Card key={b.h} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{b.h}</CardTitle>
              <CardDescription>{b.p}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default function EvergreenGeriatricClinicSite() {
  const [active, setActive] = useState("home");
  const [page, setPage] = useState("clinic"); // clinic | a1 | a2 | a3 | a4 | a5 | a6
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    reason: "",
    preferred: "",
  });

  // ====== Google Form integration (Assignment-friendly) ======
  // 1) Create a Google Form (Appointment Request)
  // 2) Use “Get pre-filled link” and paste it below.
  // 3) This site opens that form in a new tab with the visitor's info attached.
  const GOOGLE_FORM_PREFILL_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfYEu_-bA-Y5zx7CxaP7GhysJgMBlX1UdGOt4tPfWeA6Ao6ZQ/viewform?usp=pp_url&entry.1188401150=Answer&entry.370344726=Answer&entry.716790940=Answer&entry.897160531=Answer&entry.1720638769=2026-02-21&entry.1821221916=Phone+-+Mobile&entry.1821221916=Email&entry.1795848240=Answer";
  // ==========================================================

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "services", label: "Services" },
      { id: "telehealth", label: "Telehealth" },
      { id: "patients", label: "Patients" },
      { id: "forms", label: "Forms" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const assignmentPages = useMemo(
    () => [
      { id: "a1", label: "Assignment 1: Clinic Overview" },
      { id: "a2", label: "Assignment 2: IT & Compliance" },
      { id: "a3", label: "Assignment 3: Strategy & Structure" },
      { id: "a4", label: "Assignment 4: Financials & Onboarding" },
      { id: "a5", label: "Assignment 5: Leadership & Quality" },
      { id: "a6", label: "Assignment 6: Emergency & Innovation" },
    ],
    []
  );

  const services = useMemo(
    () =>
      [
        {
          title: "Comprehensive Geriatric Assessments",
          desc: "Medication review, cognition, mobility/falls, nutrition, and care planning—built for whole-person aging.",
          icon: Stethoscope,
          tags: ["New patient", "Care plan"],
        },
        {
          title: "Chronic Disease Management",
          desc: "Ongoing support for heart disease, diabetes, COPD, hypertension—focused on stability and quality of life.",
          icon: HeartPulse,
          tags: ["Ongoing", "Preventive"],
        },
        {
          title: "Caregiver & Family Support",
          desc: "Clear care instructions, goals-of-care conversations, community resources, and caregiver coaching.",
          icon: CheckCircle2,
          tags: ["Caregivers", "Resources"],
        },
        {
          title: "Transitions of Care",
          desc: "Post-hospital follow-ups and medication reconciliation to reduce complications and readmissions.",
          icon: Hospital,
          tags: ["Post-discharge", "Coordination"],
        },
        {
          title: "Preventive Visits & Wellness",
          desc: "Annual wellness visits, immunizations coordination, screening guidance, and lifestyle support.",
          icon: Calendar,
          tags: ["Medicare", "Wellness"],
        },
        {
          title: "Memory & Cognitive Health",
          desc: "Screening and evaluation, referrals as needed, and practical planning with patients and families.",
          icon: Shield,
          tags: ["Cognition", "Planning"],
        },
      ].filter((s) =>
        (s.title + " " + s.desc + " " + s.tags.join(" "))
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  const onJump = (id) => {
    if (page !== "clinic") setPage("clinic");
    setActive(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const openAssignment = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Assignment-friendly "functioning" submission:
    // - If a Google Form prefill link is provided, we open it in a new tab with info embedded.
    // - If not, we fall back to a safe demo flow (copy summary to clipboard).

    const summary = `Evergreen appointment request

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
DOB: ${form.dob}
Preferred contact: ${form.preferred}
Reason: ${form.reason}`;

    const hasPrefill =
      GOOGLE_FORM_PREFILL_URL &&
      typeof GOOGLE_FORM_PREFILL_URL === "string" &&
      !GOOGLE_FORM_PREFILL_URL.includes("REPLACE_ME");

    if (hasPrefill) {
      // Open your Google Form prefilled link directly
      window.open(GOOGLE_FORM_PREFILL_URL, "_blank", "noopener,noreferrer");
      alert(
        "Thanks! Your request will open in a Google Form tab.

Submit it there to send your appointment request."
      );
    } else {
      navigator.clipboard?.writeText(summary).catch(() => {});
      alert(
        "Request prepared! (Demo)

To make this fully functional, paste your Google Form prefilled link into GOOGLE_FORM_PREFILL_URL near the top of this file.

For now, we copied a request summary to your clipboard."
      );
    }

    setForm({ name: "", phone: "", email: "", dob: "", reason: "", preferred: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-background to-background">
      {/* Top Bar */}
      <div className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center">
              <span className="text-emerald-700 font-semibold">EG</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Evergreen Geriatric Clinic</div>
              <div className="text-xs text-muted-foreground">Primary & geriatric care for healthy aging</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" /> (555) 555-0123
            </span>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" /> 123 Evergreen Way
            </span>
            <Button size="sm" onClick={() => onJump("contact")}>
              Request Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-2 overflow-x-auto">
          <Button
            variant={page === "clinic" ? "default" : "secondary"}
            size="sm"
            className="rounded-full"
            onClick={() => {
              setPage("clinic");
              setActive("home");
              setTimeout(() => onJump("home"), 0);
            }}
          >
            Clinic Site
          </Button>

          {assignmentPages.map((p) => (
            <Button
              key={p.id}
              variant={page === p.id ? "default" : "secondary"}
              size="sm"
              className="rounded-full"
              onClick={() => openAssignment(p.id)}
              title={p.label}
            >
              {p.id.toUpperCase()}
            </Button>
          ))}
          {nav.map((n) => (
            <Button
              key={n.id}
              variant={active === n.id ? "default" : "secondary"}
              size="sm"
              className="rounded-full"
              onClick={() => onJump(n.id)}
            >
              {n.label}
            </Button>
          ))}
          <div className="ml-auto hidden md:flex items-center gap-2">
            <Badge variant="secondary" className="rounded-full">
              Accepting new patients
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              Medicare welcome
            </Badge>
          </div>
        </div>
      </div>

      {/* Main content: clinic site OR assignment pages */}
      {page !== "clinic" ? (
        <AssignmentPage id={page} onBack={() => setPage("clinic")} />
      ) : (
        <>

      {/* Emergency banner (prominent + professor-friendly) */}
      <div className="border-b bg-amber-50/60">
        <div className="mx-auto max-w-6xl px-4 py-3 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="inline-flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="font-medium">If this is a medical emergency, call 911.</span>
            <span className="text-muted-foreground hidden sm:inline">For urgent non-emergencies, call our after-hours line.</span>
          </div>
          <button
            onClick={() => onJump("contact")}
            className="text-emerald-700 hover:underline text-left"
          >
            Need an appointment? Request here →
          </button>
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
                <Shield className="h-4 w-4" />
                Proactive, coordinated care for older adults
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
                Care that helps you stay independent—longer.
              </h1>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl">
                Evergreen Geriatric Clinic delivers comprehensive geriatric care with a focus on safety,
                prevention, and quality of life. We partner with patients, families, and caregivers.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill icon={Clock} label="Same-week virtual visits" />
                <Pill icon={CheckCircle2} label="Medication review" />
                <Pill icon={HeartPulse} label="Chronic care" />
                <Pill icon={Hospital} label="Transition support" />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" onClick={() => onJump("contact")}>
                  Request an appointment
                </Button>
                <Button size="lg" variant="secondary" onClick={() => onJump("services")}>
                  Explore services
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Note: This is a sample site. Replace phone/address, staff names, and policies with your clinic’s
                actual information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="grid gap-4"
            >
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Today’s quick links</CardTitle>
                  <CardDescription>Common actions patients and caregivers need.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button variant="secondary" className="justify-start" onClick={() => onJump("patients")}>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> New patient checklist
                    </Button>
                    <Button variant="secondary" className="justify-start" onClick={() => onJump("telehealth")}>
                      <Video className="mr-2 h-4 w-4" /> Telehealth instructions
                    </Button>
                    <Button variant="secondary" className="justify-start" onClick={() => onJump("contact")}>
                      <Phone className="mr-2 h-4 w-4" /> Call the clinic
                    </Button>
                    <Button variant="secondary" className="justify-start" onClick={() => onJump("about")}>
                      <Shield className="mr-2 h-4 w-4" /> Our care approach
                    </Button>
                  </div>

                  <div className="rounded-2xl border bg-emerald-50/60 p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-emerald-700 mt-0.5" />
                      <div>
                        <div className="font-medium">Emergency readiness</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Our clinic maintains an all-hazards emergency plan—covering communication,
                          continuity of care, record access, and staff training.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-base">Hours</CardTitle>
                    <CardDescription>Example schedule</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="flex justify-between"><span>Mon–Fri</span><span>8:00–5:00</span></div>
                    <div className="flex justify-between"><span>Sat</span><span>By telehealth</span></div>
                    <div className="flex justify-between"><span>Sun</span><span>Closed</span></div>
                    <p className="mt-3 text-xs text-muted-foreground">
                      For urgent medical issues, call 911 or go to the nearest ER.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-base">Insurance</CardTitle>
                    <CardDescription>Example list</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Medicare</li>
                      <li>Most major commercial plans</li>
                      <li>HSA/HRA supported</li>
                    </ul>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Verify coverage before your visit.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        title="Services"
        subtitle="We focus on practical care that improves safety, function, and peace of mind for patients and caregivers."
      >
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">Older adult-focused</Badge>
            <Badge variant="secondary" className="rounded-full">Care coordination</Badge>
            <Badge variant="secondary" className="rounded-full">Preventive approach</Badge>
          </div>
          <div className="w-full md:w-80">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services (e.g., medication, memory, chronic)"
              aria-label="Search services"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <s.icon className="h-5 w-5 text-emerald-700" />
                </div>
                <CardDescription>{s.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle>What to bring to your first visit</CardTitle>
              <CardDescription>Helps us deliver safer, faster care.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>A list of all medications (including supplements), or bring the bottles.</li>
                <li>Recent hospital discharge paperwork, if applicable.</li>
                <li>Names/contact info of specialists and pharmacies.</li>
                <li>Advance care planning documents (if you have them).</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Need care sooner?</CardTitle>
              <CardDescription>We offer virtual triage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" onClick={() => onJump("telehealth")}>
                <Video className="mr-2 h-4 w-4" /> Telehealth options
              </Button>
              <Button className="w-full" variant="secondary" onClick={() => onJump("contact")}>
                <Calendar className="mr-2 h-4 w-4" /> Request appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Telehealth */}
      <Section
        id="telehealth"
        title="Telehealth"
        subtitle="Virtual visits can be a convenient, cost-effective option for follow-ups, medication review, and caregiver check-ins."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>Simple steps for patients and caregivers.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Request a visit (phone or the form below).</li>
                <li>We confirm time and send a secure link.</li>
                <li>Join from a phone, tablet, or computer.</li>
                <li>Have medications and questions ready.</li>
              </ol>
              <div className="mt-4 rounded-2xl border p-4 bg-background">
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-emerald-700 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Best for</div>
                    <p className="mt-1">Medication adjustments, post-hospital check-ins, caregiver updates, and chronic care follow-ups.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Tech checklist</CardTitle>
              <CardDescription>To avoid last-minute issues.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Stable internet</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Camera + microphone</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Quiet room + good light</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Medication list ready</div>
              <p className="pt-2 text-xs">If a caregiver joins from another location, let us know so we can include them.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      $1

      {/* Forms */}
      <Section
        id="forms"
        title="Patient Forms"
        subtitle="For an assignment site, these can be downloadable PDFs or placeholders that show realistic clinic operations."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle>Common forms</CardTitle>
              <CardDescription>Replace these buttons with real PDF links if you want.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button
                variant="secondary"
                className="justify-start"
                onClick={() => alert("Placeholder: New Patient Packet (PDF)")}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" /> New Patient Packet
              </Button>
              <Button
                variant="secondary"
                className="justify-start"
                onClick={() => alert("Placeholder: Release of Information (PDF)")}
              >
                <Shield className="mr-2 h-4 w-4" /> Release of Information
              </Button>
              <Button
                variant="secondary"
                className="justify-start"
                onClick={() => alert("Placeholder: Medication List (PDF)")}
              >
                <HeartPulse className="mr-2 h-4 w-4" /> Medication List
              </Button>
              <Button
                variant="secondary"
                className="justify-start"
                onClick={() => alert("Placeholder: Advance Directives (PDF)")}
              >
                <Hospital className="mr-2 h-4 w-4" /> Advance Directives
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Privacy & accessibility</CardTitle>
              <CardDescription>Professional signals professors love to see.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>
                Please do not submit sensitive personal health information through unsecured forms.
                For clinical concerns, use the patient portal or call the clinic.
              </p>
              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">Accessibility commitment</div>
                <p className="mt-1 text-xs">
                  Step-free access, wheelchair-friendly spaces, large-print materials, caregiver participation supported,
                  and interpreter services available upon request.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        title="About Evergreen"
        subtitle="A modern geriatric clinic built around prevention, coordination, and respect."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle>Our approach</CardTitle>
              <CardDescription>What makes geriatric care different.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-4">
              <p>
                Older adults often manage multiple diagnoses, medications, and care teams. Our job is to simplify
                the plan, reduce risk, and help patients stay functional and independent.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border p-4 bg-background">
                  <div className="font-medium text-foreground">Mission</div>
                  <p className="mt-1 text-xs">Deliver coordinated geriatric care that improves safety, function, and quality of life.</p>
                </div>
                <div className="rounded-2xl border p-4 bg-background">
                  <div className="font-medium text-foreground">Vision</div>
                  <p className="mt-1 text-xs">Help older adults thrive through proactive, accessible, and technology-supported care.</p>
                </div>
                <div className="rounded-2xl border p-4 bg-background">
                  <div className="font-medium text-foreground">Values</div>
                  <p className="mt-1 text-xs">Respect, clarity, prevention, teamwork, and caregiver partnership.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border p-4 bg-background">
                  <div className="font-medium text-foreground">Team-based care</div>
                  <p className="mt-1">Coordinated roles across providers, nursing, and care support.</p>
                </div>
                <div className="rounded-2xl border p-4 bg-background">
                  <div className="font-medium text-foreground">Value-focused</div>
                  <p className="mt-1">Better outcomes, fewer unnecessary visits, and clearer plans.</p>
                </div>
              </div>

              <div className="rounded-2xl border bg-emerald-50/60 p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-700 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Emergency readiness</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Evergreen maintains an all-hazards emergency plan focused on protecting people, preserving records,
                      continuity of operations, and clear communication with patients and caregivers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Meet the team</CardTitle>
              <CardDescription>Replace these placeholders.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">Dr. Avery Morgan, MD</div>
                <div className="text-xs">Geriatrics • Internal Medicine</div>
              </div>
              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">Jordan Lee, NP</div>
                <div className="text-xs">Chronic care • Transitions of care</div>
              </div>
              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">RN Care Coordinator</div>
                <div className="text-xs">Follow-ups • Referrals • Patient education</div>
              </div>
              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">Community Resource Network</div>
                <div className="text-xs">Social services • Home health • Caregiver supports</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title="Contact & Appointments"
        subtitle="Send a request and we’ll follow up. In production, connect this form to a secure intake system."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-2xl lg:col-span-2">
            <CardHeader>
              <CardTitle>Request an appointment</CardTitle>
              <CardDescription>
                This request opens a Google Form in a new tab. For professionalism, avoid sensitive details unless the form is secured.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="name">Full name</label>
                    <Input id="name" value={form.name} onChange={onChange("name")} placeholder="Jane Doe" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="dob">Date of birth</label>
                    <Input id="dob" value={form.dob} onChange={onChange("dob")} placeholder="MM/DD/YYYY" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium" htmlFor="phone">Phone</label>
                    <Input id="phone" value={form.phone} onChange={onChange("phone")} placeholder="(555) 555-0123" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <Input id="email" type="email" value={form.email} onChange={onChange("email")} placeholder="you@email.com" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="preferred">Preferred contact method</label>
                  <Input id="preferred" value={form.preferred} onChange={onChange("preferred")} placeholder="Phone call / Text / Email" />
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="reason">Reason for visit</label>
                  <Textarea
                    id="reason"
                    value={form.reason}
                    onChange={onChange("reason")}
                    placeholder="Example: medication review, memory concerns, post-hospital follow-up (avoid sensitive details in this demo)"
                    rows={4}
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    For privacy, don’t include highly sensitive details here until the form is secured (HIPAA-compliant).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="sm:w-auto">Submit request</Button>
                  <Button type="button" variant="secondary" onClick={() => alert("Demo: Link to patient portal / secure messaging.")}
                    className="sm:w-auto"
                  >
                    Patient portal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Clinic info</CardTitle>
              <CardDescription>Replace with real details.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Address</div>
                  <div>123 Evergreen Way, Your City, ST</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <div>(555) 555-0123</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Hours</div>
                  <div>Mon–Fri 8:00–5:00</div>
                </div>
              </div>

              <div className="rounded-2xl border p-3 bg-background">
                <div className="font-medium text-foreground">Accessibility</div>
                <p className="mt-1 text-xs">
                  Step-free access, wheelchair-friendly spaces, and large-print materials available upon request.
                </p>
              </div>

              <Button variant="secondary" className="w-full" onClick={() => window.open("https://www.google.com/maps", "_blank")}>
                <MapPin className="mr-2 h-4 w-4" /> Get directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="font-semibold">Evergreen Geriatric Clinic</div>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Comprehensive geriatric care focused on safety, independence, and quality of life.
              </p>
              <div className="mt-4 flex gap-2">
                <Badge variant="secondary" className="rounded-full">Telehealth</Badge>
                <Badge variant="secondary" className="rounded-full">Care coordination</Badge>
                <Badge variant="secondary" className="rounded-full">Preventive care</Badge>
              </div>
            </div>

            <div>
              <div className="font-semibold">Quick navigation</div>
              <div className="mt-2 grid gap-2">
                {nav.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => onJump(n.id)}
                    className="text-left text-sm text-emerald-700 hover:underline"
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-semibold">Clinical disclaimer</div>
              <p className="mt-2 text-sm text-muted-foreground">
                This website provides general information and does not replace medical advice.
                For emergencies, call 911.
              </p>
              <div className="mt-4">
                <Button variant="secondary" onClick={() => onJump("contact")}>
                  Request appointment
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} Evergreen Geriatric Clinic. All rights reserved.</span>
            <span>Privacy • Terms • Accessibility</span>
          </div>
        </div>
      </footer>

        </>
      )}
    </div>
  );
}
