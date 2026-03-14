import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileQuestion,
  Flame,
  MapPinned,
  MessageSquareMore,
  Scale,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

const learningBlocks = [
  {
    title: "Values of the Republic",
    subtitle: "Liberte, egalite, fraternite, laicite",
    accuracy: "92%",
    sessions: 14,
    lastReview: "2 days ago",
    accent: "bg-[#0f4c81]",
  },
  {
    title: "French political system and institutions",
    subtitle: "President, Parliament, Senate, local administration",
    accuracy: "84%",
    sessions: 9,
    lastReview: "Yesterday",
    accent: "bg-[#d1495b]",
  },
  {
    title: "Rights and duties of citizens",
    subtitle: "Voting, taxes, civic participation, equality",
    accuracy: "89%",
    sessions: 11,
    lastReview: "4 days ago",
    accent: "bg-[#2f6f4f]",
  },
  {
    title: "History of France",
    subtitle: "Major events, symbols, republics, timelines",
    accuracy: "76%",
    sessions: 8,
    lastReview: "Today",
    accent: "bg-[#8a5a44]",
  },
  {
    title: "Geography and culture",
    subtitle: "Regions, overseas territories, arts, landmarks",
    accuracy: "81%",
    sessions: 7,
    lastReview: "3 days ago",
    accent: "bg-[#b7791f]",
  },
  {
    title: "Life in France",
    subtitle: "Education, work, healthcare, daily society",
    accuracy: "87%",
    sessions: 12,
    lastReview: "Today",
    accent: "bg-[#5b5f97]",
  },
];

const examModes = [
  {
    title: "Practice by section",
    description: "Let users drill a single block until they feel fluent and ready.",
    bullets: ["Custom question counts", "Explanations after each answer", "History stored per block"],
    icon: Target,
  },
  {
    title: "Mixed exam mode",
    description: "Blend all categories to mimic the real naturalisation preparation experience.",
    bullets: ["Balanced category rotation", "Timed exam option", "Post-exam weak-area report"],
    icon: Sparkles,
  },
  {
    title: "Passed-candidate contribution flow",
    description: "Invite recent successful candidates to improve the bank with lived experience.",
    bullets: ["Submit feedback", "Add unseen real exam questions", "Queue for moderator review"],
    icon: Trophy,
  },
];

const roadmap = [
  {
    phase: "Web MVP",
    detail: "Email login, learner profile, question bank, section practice, mixed exams, review dashboard.",
  },
  {
    phase: "Community layer",
    detail: "Feedback forms, question submission pipeline, moderation panel, trust scoring for contributors.",
  },
  {
    phase: "Mobile app",
    detail: "Reuse the same backend and sync streaks, offline practice, push reminders, and onboarding in French and English.",
  },
];

const FrenchExam = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(15,76,129,0.18),transparent_55%)]" />
        <div className="absolute right-[-6rem] top-[8rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(209,73,91,0.2),transparent_65%)] blur-3xl" />
        <div className="absolute left-[-5rem] top-[24rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(47,111,79,0.16),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative">
        <header className="border-b border-border/60 bg-background/80 backdrop-blur">
          <div className="container flex items-center justify-between py-5">
            <div>
              <p className="font-display text-xl font-semibold">Citoyen</p>
              <p className="text-sm text-muted-foreground">France naturalisation exam trainer</p>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <Badge variant="secondary" className="rounded-full px-4 py-1">
                Web first, mobile ready
              </Badge>
              <Button className="rounded-full px-6">Prototype the product</Button>
            </div>
          </div>
        </header>

        <section className="container grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="space-y-8">
            <Badge className="rounded-full bg-[#0f4c81] px-4 py-1 text-white hover:bg-[#0f4c81]">
              Civic learning for future French citizens
            </Badge>

            <div className="space-y-5">
              <h1 className="max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
                Train for the French naturalisation exam with structure, memory, and real candidate insight.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                This concept turns exam preparation into a guided study product: users create an account, practice by
                section or in mixed mode, and keep detailed progress history for every knowledge block.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-full bg-[#0f4c81] px-7 hover:bg-[#0c3f6b]">
                Start with the web app
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-[#0f4c81]/20 px-7">
                Plan the mobile version
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="product-panel border-white/60 bg-white/85">
                <CardContent className="p-5">
                  <p className="text-3xl font-semibold">6</p>
                  <p className="mt-2 text-sm text-muted-foreground">Tracked knowledge blocks with separate history</p>
                </CardContent>
              </Card>
              <Card className="product-panel border-white/60 bg-white/85">
                <CardContent className="p-5">
                  <p className="text-3xl font-semibold">2</p>
                  <p className="mt-2 text-sm text-muted-foreground">Exam modes: section practice and mixed simulation</p>
                </CardContent>
              </Card>
              <Card className="product-panel border-white/60 bg-white/85">
                <CardContent className="p-5">
                  <p className="text-3xl font-semibold">1</p>
                  <p className="mt-2 text-sm text-muted-foreground">Community loop for feedback and new real exam questions</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="product-panel overflow-hidden border-white/60 bg-[#fdfaf4]/90">
            <CardHeader className="border-b border-border/60 bg-white/60">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <CardDescription>Learner dashboard preview</CardDescription>
                  <CardTitle className="mt-2 font-display text-3xl">My preparation space</CardTitle>
                </div>
                <div className="rounded-full bg-[#0f4c81] px-3 py-1 text-xs font-semibold text-white">Live concept</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#0f4c81] p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/70">Current streak</p>
                  <p className="mt-3 text-4xl font-semibold">18 days</p>
                  <p className="mt-2 text-sm text-white/80">Practice stays synced across web and future mobile app.</p>
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Next session</p>
                  <p className="mt-3 text-2xl font-semibold">Mixed mock exam</p>
                  <p className="mt-2 text-sm text-muted-foreground">25 questions · 20 minutes · personalized from weak areas</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-border/70 bg-white p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#0f4c81]">Recent contribution request</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Ask people who passed the exam to share feedback and unseen questions.
                    </p>
                  </div>
                  <MessageSquareMore className="h-6 w-6 text-[#d1495b]" />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7efe6] p-4">
                    <p className="font-medium">Feedback form</p>
                    <p className="mt-1 text-sm text-muted-foreground">What felt accurate, difficult, or missing?</p>
                  </div>
                  <div className="rounded-2xl bg-[#eef4f8] p-4">
                    <p className="font-medium">Question submission</p>
                    <p className="mt-1 text-sm text-muted-foreground">Capture new real-life questions for moderation.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container pb-8">
          <Card className="product-panel overflow-hidden border-white/60 bg-white/80">
            <CardContent className="grid gap-6 p-6 md:grid-cols-3 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#edf4ff] p-3 text-[#0f4c81]">
                  <BookOpenCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Account-based learning</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Sign up, save attempts, resume later, and build confidence over time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#fff1f1] p-3 text-[#d1495b]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">History by block</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Every answer is stored inside the right topic so progress is easy to understand.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-[#eef7ef] p-3 text-[#2f6f4f]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Community-fed question bank</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Passed candidates help keep the training content close to reality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container py-12 md:py-20">
          <div className="max-w-2xl space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Training blocks
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl">Organized exactly around the subjects learners need to master.</h2>
            <p className="text-lg leading-8 text-muted-foreground">
              These six blocks become both the information architecture and the learner’s progress dashboard.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningBlocks.map((block) => (
              <Card key={block.title} className="product-panel flex h-full border-white/60 bg-white/80">
                <div className="flex h-full flex-1 flex-col">
                  <CardHeader className="pb-4">
                    <div className={`mb-4 h-2 w-20 rounded-full ${block.accent}`} />
                    <CardTitle className="font-display text-2xl">{block.title}</CardTitle>
                    <CardDescription className="min-h-[84px] text-base leading-7">{block.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto grid grid-cols-3 gap-3 text-sm">
                    <div className="flex min-h-[112px] flex-col justify-between rounded-2xl bg-muted/60 p-4">
                      <p className="text-muted-foreground">Accuracy</p>
                      <p className="mt-3 text-lg font-semibold leading-tight">{block.accuracy}</p>
                    </div>
                    <div className="flex min-h-[112px] flex-col justify-between rounded-2xl bg-muted/60 p-4">
                      <p className="text-muted-foreground">Sessions</p>
                      <p className="mt-3 text-lg font-semibold leading-tight">{block.sessions}</p>
                    </div>
                    <div className="flex min-h-[112px] flex-col justify-between rounded-2xl bg-muted/60 p-4">
                      <p className="text-muted-foreground">Reviewed</p>
                      <p className="mt-3 text-lg font-semibold leading-tight">{block.lastReview}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="container py-12 md:py-20">
          <div className="max-w-2xl space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Core product flows
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl">A single system for practice, exam simulation, and community improvement.</h2>
          </div>

          <Tabs defaultValue="history" className="mt-10">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-[1.5rem] bg-white/70 p-2">
              <TabsTrigger value="history" className="rounded-xl px-5 py-3 data-[state=active]:bg-[#0f4c81] data-[state=active]:text-white">
                Account and history
              </TabsTrigger>
              <TabsTrigger value="modes" className="rounded-xl px-5 py-3 data-[state=active]:bg-[#0f4c81] data-[state=active]:text-white">
                Exam modes
              </TabsTrigger>
              <TabsTrigger value="community" className="rounded-xl px-5 py-3 data-[state=active]:bg-[#0f4c81] data-[state=active]:text-white">
                Candidate submissions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <Card className="product-panel mt-4 border-white/60 bg-white/85">
                <CardContent className="grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
                  <div className="rounded-[2rem] bg-[#10233c] p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.26em] text-white/65">Signed-in learner</p>
                    <p className="mt-4 font-display text-3xl">Amina B.</p>
                    <div className="mt-6 space-y-4">
                      <div className="rounded-2xl bg-white/8 p-4">
                        <p className="text-sm text-white/70">Questions answered</p>
                        <p className="mt-1 text-3xl font-semibold">486</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 p-4">
                        <p className="text-sm text-white/70">Weakest block</p>
                        <p className="mt-1 text-xl font-semibold">History of France</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 p-4">
                        <p className="text-sm text-white/70">Best streak</p>
                        <p className="mt-1 text-xl font-semibold">18 consecutive study days</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {learningBlocks.map((block) => (
                      <div key={block.title} className="rounded-[1.75rem] border border-border/70 bg-[#fcfbf8] p-5 shadow-[0_18px_40px_rgba(16,35,60,0.05)]">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="text-lg font-semibold">{block.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{block.subtitle}</p>
                          </div>
                          <Badge variant="outline" className="rounded-full px-3 py-1">
                            Last review: {block.lastReview}
                          </Badge>
                        </div>
                        <div className="mt-4">
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Mastery</span>
                            <span className="font-semibold">{block.accuracy}</span>
                          </div>
                          <div className="h-3 rounded-full bg-[#e7e0d7]">
                            <div className={`h-3 rounded-full ${block.accent}`} style={{ width: block.accuracy }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modes">
              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                {examModes.map((mode) => {
                  const Icon = mode.icon;
                  return (
                    <Card key={mode.title} className="product-panel border-white/60 bg-white/85">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf4ff] text-[#0f4c81]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-2 font-display text-3xl">{mode.title}</CardTitle>
                        <CardDescription className="text-base leading-7">{mode.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {mode.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-[#f8f4ee] p-3">
                            <CheckCircle2 className="h-5 w-5 text-[#2f6f4f]" />
                            <span className="text-sm">{bullet}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="community">
              <Card className="product-panel mt-4 border-white/60 bg-white/85">
                <CardContent className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
                  <div className="rounded-[2rem] bg-[#fff6ed] p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white p-3 text-[#d1495b]">
                        <MessageSquareMore className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">1. Feedback after success</p>
                        <p className="text-sm text-muted-foreground">Collect what felt accurate, confusing, or still missing.</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                      <p>Prompt examples: Which topics matched the real exam? Which parts should be improved?</p>
                      <p>Store this feedback in a moderation queue so quality stays high.</p>
                    </div>
                  </div>

                  <div className="rounded-[2rem] bg-[#eef4ff] p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white p-3 text-[#0f4c81]">
                        <FileQuestion className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">2. New real-life question submission</p>
                        <p className="text-sm text-muted-foreground">
                          Let verified candidates submit questions not yet found on the platform.
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                      <p>Each submission should include the block, wording, answer options, and confidence level.</p>
                      <p>Moderators can approve, edit, reject, or merge duplicates before publication.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="container py-12 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="product-panel border-white/60 bg-[#10233c] text-white">
              <CardHeader>
                <CardDescription className="text-white/70">Why mobile makes sense next</CardDescription>
                <CardTitle className="font-display text-4xl text-white">The mobile app can extend the exact same learning loop.</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/85">
                <div className="flex items-start gap-3">
                  <Smartphone className="mt-1 h-5 w-5 text-[#f3d9b1]" />
                  <p>Use the same account and synced history so web and mobile feel like one product.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Flame className="mt-1 h-5 w-5 text-[#f3d9b1]" />
                  <p>Add reminders, streak recovery, and short commute-friendly practice sessions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 text-[#f3d9b1]" />
                  <p>Offline mode is especially useful for learners studying on transport or between appointments.</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              {roadmap.map((item, index) => (
                <Card key={item.phase} className="product-panel border-white/60 bg-white/85">
                  <CardContent className="flex gap-5 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f4c81] font-display text-2xl text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-display text-2xl">{item.phase}</p>
                      <p className="mt-2 leading-7 text-muted-foreground">{item.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container pb-20 pt-8">
          <Card className="product-panel overflow-hidden border-white/60 bg-[linear-gradient(135deg,rgba(15,76,129,0.96),rgba(31,57,102,0.94))] text-white">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <Badge className="rounded-full bg-white/12 px-4 py-1 text-white">Ready to build</Badge>
                <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
                  This gives you a strong first product direction for the web experience and a clean bridge to mobile.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                  The next implementation step is wiring a real backend for authentication, question storage, attempt history,
                  and moderation of community submissions.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="rounded-full bg-white px-7 text-[#0f4c81] hover:bg-white/90">
                  Build the MVP structure
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white/10">
                  Define database schema
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="border-t border-border/60 bg-background/80">
          <div className="container flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>Concept for a France naturalisation exam trainer with structured learning and community feedback.</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4" />
                <span>Republic values</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Candidate contributions</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default FrenchExam;
