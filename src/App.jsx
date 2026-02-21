import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Clock, HeartPulse, Hospital, MapPin, Phone, Shield, Stethoscope, Video } from "lucide-react";

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p> : null}
      </div>
      {children}
    </div>
  </section>
);

const Pill = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm">
    <Icon className="h-4 w-4" />
    {label}
  </span>
);

const AssignmentPage = ({ id, onBack, formUrl }) => {
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
      title: "Insurance & Support",
      subtitle: "Keeping care sustainable and welcoming the right team members.",
      blocks: [
        { h: "Insurance & payment", p: "We primarily serve Medicare and Medicare Advantage patients, along with Medicaid and many commercial plans. Our billing team works to keep costs transparent and manageable." },
        { h: "Responsible management", p: "We carefully monitor clinic resources to ensure we can continue offering high-quality care long term." },
        { h: "Welcoming new staff", p: "New team members receive structured onboarding, privacy training, and mentorship so they can confidently support patients from day one." },
      ],
    },
    a5: {
      title: "Leadership & Quality",
      subtitle: "How we continuously improve your care experience.",
      blocks: [
        { h: "Compassionate leadership", p: "Our leaders prioritize teamwork, emotional intelligence, and open communication—important in the complex world of geriatric care." },
        { h: "Continuous improvement", p: "We regularly review outcomes, hospital follow-ups, and patient feedback to improve care quality." },
        { h: "Our quality goals", p: "We focus on patient experience, community health, responsible costs, and supporting our care team’s well-being." },
      ],
    },
    a6: {
      title: "Preparedness & Innovation",
      subtitle: "Planning ahead to keep you safe and adapting to modern healthcare.",
      blocks: [
        { h: "Emergency planning", p: "We maintain a comprehensive preparedness plan to protect patients, staff, and medical records during natural disasters, power outages, public health events, or other emergencies." },
        { h: "Telehealth services", p: "Virtual visits and remote monitoring tools help reduce travel barriers and allow us to stay connected between appointments." },
        { h: "Proactive follow-up", p: "We use care coordination and data tools to identify patients who may need extra support—helping prevent complications and unnecessary hospital visits." },
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
          <Button onClick={() => window.open(formUrl, "_blank", "noopener,noreferrer")}>Request Appointment</Button>
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

export default function App() {
  const [active, setActive] = useState("home");
  const [page, setPage] = useState("clinic"); // clinic | a1..a6
  const [query, setQuery] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", dob: "", reason: "", preferred: "" });

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfYEu_-bA-Y5zx7CxaP7GhysJgMBlX1UdGOt4tPfWeA6Ao6ZQ/viewform?usp=pp_url&entry.1188401150=Answer&entry.370344726=Answer&entry.716790940=Answer&entry.897160531=Answer&entry.1720638769=2026-02-21&entry.1821221916=Phone+-+Mobile&entry.1821221916=Email&entry.1795848240=Answer";

  const nav = useMemo(() => [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "telehealth", label: "Telehealth" },
    { id: "patients", label: "Patients" },
    { id: "forms", label: "Forms" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ], []);

  const assignmentPages = useMemo(() => [
    { id: "a1", label: "About Our Clinic" },
    { id: "a2", label: "Privacy & Technology" },
    { id: "a3", label: "How We’re Organized" },
    { id: "a4", label: "Insurance & Support" },
    { id: "a5", label: "Leadership & Quality" },
    { id: "a6", label: "Preparedness & Innovation" },
  ], []);

  const services = useMemo(() => ([
    { title: "Comprehensive Geriatric Assessments", desc: "Medication review, cognition, mobility/falls, nutrition, and care planning—built for whole-person aging.", icon: Stethoscope, tags: ["New patient", "Care plan"] },
    { title: "Chronic Disease Management", desc: "Ongoing support for heart disease, diabetes, COPD, hypertension—focused on stability and quality of life.", icon: HeartPulse, tags: ["Ongoing", "Preventive"] },
    { title: "Caregiver & Family Support", desc: "Clear care instructions, goals-of-care conversations, community resources, and caregiver coaching.", icon: CheckCircle2, tags: ["Caregivers", "Resources"] },
    { title: "Transitions of Care", desc: "Post-hospital follow-ups and medication reconciliation to reduce complications and readmissions.", icon: Hospital, tags: ["Post-discharge", "Coordination"] },
    { title: "Preventive Visits & Wellness", desc: "Annual wellness visits, immunizations coordination, screening guidance, and lifestyle support.", icon: Calendar, tags: ["Medicare", "Wellness"] },
    { title: "Memory & Cognitive Health", desc: "Screening and evaluation, referrals as needed, and practical planning with patients and families.", icon: Shield, tags: ["Cognition", "Planning"] },
  ].filter((s) => (s.title + " " + s.desc + " " + s.tags.join(" ")).toLowerCase().includes(query.toLowerCase()))), [query]);

  const onJump = (id) => {
    if (page !== "clinic") setPage("clinic");
    setActive(id);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const openAssignment = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    alert("Thanks! Your request will open in a Google Form tab. Submit it there to send your appointment request.");
    setForm({ name: "", phone: "", email: "", dob: "", reason: "", preferred: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-white">
      <div className="border-b bg-white/80 backdrop-blur">
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
            <span className="inline-flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> (555) 555-0123</span>
            <span className="inline-flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> 123 Evergreen Way</span>
            <Button size="sm" onClick={() => onJump("contact")}>Request Appointment</Button>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-2 overflow-x-auto">
          <Button
            variant={page === "clinic" ? "default" : "secondary"}
            size="sm"
            className="rounded-full"
            onClick={() => { setPage("clinic"); setActive("home"); setTimeout(() => onJump("home"), 0); }}
          >
            Clinic Site
          </Button>

          {assignmentPages.map((p) => (
            <Button key={p.id} variant={page === p.id ? "default" : "secondary"} size="sm" className="rounded-full" onClick={() => openAssignment(p.id)} title={p.label}>
              {p.id.toUpperCase()}
            </Button>
          ))}

          {nav.map((n) => (
            <Button key={n.id} variant={active === n.id && page === "clinic" ? "default" : "secondary"} size="sm" className="rounded-full" onClick={() => onJump(n.id)}>
              {n.label}
            </Button>
          ))}

          <div className="ml-auto hidden md:flex items-center gap-2">
            <Badge className="rounded-full">Accepting new patients</Badge>
            <Badge className="rounded-full">Medicare welcome</Badge>
          </div>
        </div>
      </div>

      {page !== "clinic" ? (
        <AssignmentPage id={page} onBack={() => setPage("clinic")} formUrl={GOOGLE_FORM_URL} />
      ) : (
        <>
          <div className="border-b bg-amber-50/60">
            <div className="mx-auto max-w-6xl px-4 py-3 text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="font-medium">If this is a medical emergency, call 911.</span>
                <span className="text-muted-foreground hidden sm:inline">For urgent non-emergencies, call our after-hours line.</span>
              </div>
              <button onClick={() => onJump("contact")} className="text-emerald-700 hover:underline text-left">Need an appointment? Request here →</button>
            </div>
          </div>

          <section id="home" className="scroll-mt-24">
            <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm">
                    <Shield className="h-4 w-4" /> Proactive, coordinated care for older adults
                  </div>
                  <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">Care that helps you stay independent—longer.</h1>
                  <p className="mt-4 text-muted-foreground text-lg max-w-xl">Evergreen delivers comprehensive geriatric care with a focus on safety, prevention, and quality of life. We partner with patients, families, and caregivers.</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Pill icon={Clock} label="Same-week virtual visits" />
                    <Pill icon={CheckCircle2} label="Medication review" />
                    <Pill icon={HeartPulse} label="Chronic care" />
                    <Pill icon={Hospital} label="Transition support" />
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Button size="lg" onClick={() => onJump("contact")}>Request an appointment</Button>
                    <Button size="lg" variant="secondary" onClick={() => onJump("services")}>Explore services</Button>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">This is a sample site for an academic assignment. Contact details are placeholders.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }} className="grid gap-4">
                  <Card className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>Today’s quick links</CardTitle>
                      <CardDescription>Common actions patients and caregivers need.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-3">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Button variant="secondary" className="justify-start" onClick={() => onJump("patients")}><CheckCircle2 className="mr-2 h-4 w-4" /> New patient checklist</Button>
                        <Button variant="secondary" className="justify-start" onClick={() => onJump("telehealth")}><Video className="mr-2 h-4 w-4" /> Telehealth instructions</Button>
                        <Button variant="secondary" className="justify-start" onClick={() => onJump("contact")}><Phone className="mr-2 h-4 w-4" /> Call the clinic</Button>
                        <Button variant="secondary" className="justify-start" onClick={() => openAssignment("a1")}><Shield className="mr-2 h-4 w-4" /> About our clinic</Button>
                      </div>
                      <div className="rounded-2xl border bg-emerald-50/60 p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-emerald-700 mt-0.5" />
                          <div>
                            <div className="font-medium">Emergency readiness</div>
                            <p className="text-sm text-muted-foreground mt-1">We maintain an all-hazards emergency plan covering communication, continuity of care, record access, and staff training.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          <Section id="services" title="Services" subtitle="Practical care that improves safety, function, and peace of mind for patients and caregivers.">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full">Older adult-focused</Badge>
                <Badge className="rounded-full">Care coordination</Badge>
                <Badge className="rounded-full">Preventive approach</Badge>
              </div>
              <div className="w-full md:w-80">
                <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services (e.g., medication, memory, chronic)" />
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
                      {s.tags.map((t) => <Badge key={t} className="rounded-full">{t}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="telehealth" title="Telehealth" subtitle="Virtual visits can be a convenient option for follow-ups, medication review, and caregiver check-ins.">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="rounded-2xl md:col-span-2">
                <CardHeader><CardTitle>How it works</CardTitle><CardDescription>Simple steps for patients and caregivers.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Request a visit (phone or the form below).</li>
                    <li>We confirm time and send a secure link.</li>
                    <li>Join from a phone, tablet, or computer.</li>
                    <li>Have medications and questions ready.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Tech checklist</CardTitle><CardDescription>To avoid last-minute issues.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Stable internet</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Camera + microphone</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Quiet room + good light</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Medication list ready</div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="patients" title="Patient Resources" subtitle="Clear expectations and simple tools help patients feel confident and supported.">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="rounded-2xl lg:col-span-2">
                <CardHeader><CardTitle>New patient checklist</CardTitle><CardDescription>What we’ll do together in the first 1–2 visits.</CardDescription></CardHeader>
                <CardContent className="grid gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5" /><div><div className="font-medium text-black">Review your goals</div><p className="mt-1">What matters most: independence, safety, symptom control, and daily function.</p></div></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5" /><div><div className="font-medium text-black">Medication safety check</div><p className="mt-1">We look for interactions and opportunities to simplify.</p></div></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5" /><div><div className="font-medium text-black">Risk screening</div><p className="mt-1">Falls risk, cognition, nutrition, mood, sleep, and caregiver strain.</p></div></div>
                  <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-700 mt-0.5" /><div><div className="font-medium text-black">Care coordination</div><p className="mt-1">We help align specialists and community resources.</p></div></div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Office policies</CardTitle><CardDescription>Patient-friendly basics.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <div><div className="font-medium text-black">After-hours</div><p className="mt-1">For emergencies call 911. For urgent non-emergencies, follow after-hours voicemail prompts.</p></div>
                  <div className="rounded-2xl border p-3 bg-white"><div className="font-medium text-black">Accessibility</div><p className="mt-1 text-xs">Step-free access, wheelchair-friendly spaces, large-print materials, caregiver participation supported. Interpreter services available upon request.</p></div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="forms" title="Patient Forms" subtitle="Downloadable forms help visits run smoothly. (Placeholders for an assignment site.)">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="rounded-2xl md:col-span-2">
                <CardHeader><CardTitle>Common forms</CardTitle><CardDescription>Replace these buttons with real PDFs if you want.</CardDescription></CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  <Button variant="secondary" className="justify-start" onClick={() => alert("Placeholder: New Patient Packet (PDF)")}><CheckCircle2 className="mr-2 h-4 w-4" /> New Patient Packet</Button>
                  <Button variant="secondary" className="justify-start" onClick={() => alert("Placeholder: Release of Information (PDF)")}><Shield className="mr-2 h-4 w-4" /> Release of Information</Button>
                  <Button variant="secondary" className="justify-start" onClick={() => alert("Placeholder: Medication List (PDF)")}><HeartPulse className="mr-2 h-4 w-4" /> Medication List</Button>
                  <Button variant="secondary" className="justify-start" onClick={() => alert("Placeholder: Advance Directives (PDF)")}><Hospital className="mr-2 h-4 w-4" /> Advance Directives</Button>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Privacy note</CardTitle><CardDescription>For professionalism.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground">Please don’t submit highly sensitive medical details through unsecured forms. For emergencies, call 911.</CardContent>
              </Card>
            </div>
          </Section>

          <Section id="about" title="About Evergreen" subtitle="A geriatric clinic built around prevention, coordination, and respect.">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="rounded-2xl md:col-span-2">
                <CardHeader><CardTitle>Our approach</CardTitle><CardDescription>What makes geriatric care different.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>Older adults often manage multiple diagnoses, medications, and care teams. Our job is to simplify the plan, reduce risk, and help you stay functional and independent.</p>
                  <p>We prioritize what matters most to the patient, involve caregivers when appropriate, and use preventive strategies to avoid avoidable crises.</p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Explore our patient pages</CardTitle><CardDescription>These reflect course assignment sections.</CardDescription></CardHeader>
                <CardContent className="grid gap-2">
                  {assignmentPages.map((p) => (
                    <Button key={p.id} variant="secondary" className="justify-start" onClick={() => openAssignment(p.id)}>
                      {p.id.toUpperCase()} — {p.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="contact" title="Contact & Appointments" subtitle="Request an appointment and we’ll follow up. (This opens a Google Form.)">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="rounded-2xl lg:col-span-2">
                <CardHeader><CardTitle>Request an appointment</CardTitle><CardDescription>This opens a Google Form in a new tab.</CardDescription></CardHeader>
                <CardContent>
                  <form onSubmit={onSubmit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium" htmlFor="name">Full name</label>
                        <Input id="name" value={form.name} onChange={onChange("name")} placeholder="Jane Doe" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium" htmlFor="dob">Date of birth</label>
                        <Input id="dob" value={form.dob} onChange={onChange("dob")} placeholder="YYYY-MM-DD" />
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
                      <Textarea id="reason" value={form.reason} onChange={onChange("reason")} rows={4} placeholder="Example: medication review, memory concerns, post-hospital follow-up" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="sm:w-auto">Open Google Form</Button>
                      <Button type="button" variant="secondary" onClick={() => window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer")} className="sm:w-auto">
                        Open form directly
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader><CardTitle>Clinic info</CardTitle><CardDescription>Replace with real details if needed.</CardDescription></CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /><div><div className="font-medium text-black">Address</div><div>123 Evergreen Way, Your City, ST</div></div></div>
                  <div className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /><div><div className="font-medium text-black">Phone</div><div>(555) 555-0123</div></div></div>
                  <div className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5" /><div><div className="font-medium text-black">Hours</div><div>Mon–Fri 8:00–5:00</div></div></div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <div className="font-semibold">Evergreen Geriatric Clinic</div>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm">Comprehensive geriatric care focused on safety, independence, and quality of life.</p>
                  <div className="mt-4 flex gap-2">
                    <Badge className="rounded-full">Telehealth</Badge>
                    <Badge className="rounded-full">Care coordination</Badge>
                    <Badge className="rounded-full">Preventive care</Badge>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Quick navigation</div>
                  <div className="mt-2 grid gap-2">
                    {nav.map((n) => (
                      <button key={n.id} onClick={() => onJump(n.id)} className="text-left text-sm text-emerald-700 hover:underline">{n.label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Clinical disclaimer</div>
                  <p className="mt-2 text-sm text-muted-foreground">This website provides general information and does not replace medical advice. For emergencies, call 911.</p>
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
