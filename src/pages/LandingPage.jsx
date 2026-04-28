import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Image as ImageIcon, Video, FileText, Wand2, 
  ArrowRight, Zap, Check, Star, 
  Users, Bot, LayoutDashboard, Download, Share2, Play
} from "lucide-react";

const features = [
  { icon: FileText, title: "AI Text Generator", desc: "Create blogs, ad copy, and social posts that convert instantly.", preview: "The future of AI content generation is here..." },
  { icon: ImageIcon, title: "AI Image Creator", desc: "Turn simple descriptions into stunning 4K photorealistic visuals.", preview: "/placeholder.svg" },
  { icon: Video, title: "AI Video Studio", desc: "Professional video scripts and clips generated from prompts.", preview: "Generating video frames..." },
  { icon: Wand2, title: "Smart Summarizer", desc: "Condense long documents into actionable bullet points.", preview: "• Key point 1\n• Key point 2" },
  { icon: Sparkles, title: "Script Master", desc: "Structured scripts for YouTube, TikTok, and presentations.", preview: "[Intro Music] Welcome to..." },
  { icon: Bot, title: "AI Agent Mode", desc: "Multi-step intelligent agents that execute complex workflows.", preview: "Agent assigned: Researching topic..." },
];

const pricing = [
  { name: "Free", price: "₹0", features: ["1,000 words/mo", "5 AI Images/mo", "Basic Templates", "Community Support"], color: "border-border" },
  { name: "Pro", price: "₹500", features: ["Unlimited Text", "100 AI Images/mo", "HD Video Scripts", "Priority Support", "AI Agent Access"], color: "border-primary shadow-glow", popular: true },
  { name: "Business", price: "₹1,000", features: ["Team Collaboration", "Custom AI Training", "API Access", "Dedicated Manager", "White-labeling"], color: "border-border" },
];

const testimonials = [
  { name: "Sarah Chen", role: "Content Marketer", text: "ContentAI cut my newsletter creation time by 80%. The quality is indistinguishable from human writing.", avatar: "SC" },
  { name: "Marcus Thorne", role: "YouTube Creator", text: "The script generator is a game changer. I just feed it a topic and I have a full research-backed script in seconds.", avatar: "MT" },
  { name: "Elena Rodriguez", role: "Startup Founder", text: "From LinkedIn posts to investor updates, ContentAI handles our entire communications pipeline effortlessly.", avatar: "ER" },
];

const workflow = [
  { step: "01", title: "Input Prompt", desc: "Describe your creative vision in natural language." },
  { step: "02", title: "AI Processing", desc: "Our neural networks process your request across multiple models." },
  { step: "03", title: "Refine & Polish", desc: "Adjust style, tone, and format with intuitive AI tools." },
  { step: "04", title: "Final Output", desc: "Download or share your masterpiece to any platform." },
];

export default function LandingPage() {
  const [demoPrompt, setDemoPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [demoOutput, setDemoOutput] = useState("");

  const handleGenerate = () => {
    if (!demoPrompt) return;
    setIsGenerating(true);
    setDemoOutput("");
    setTimeout(() => {
      setIsGenerating(false);
      setDemoOutput("Based on your prompt for '" + demoPrompt + "', our AI has synthesized a high-converting content strategy, generating 3 custom blog outlines, 5 social media hooks, and a 60-second video script optimized for engagement.");
    }, 2000);
  };

  return (
    <div className="dark min-h-screen bg-[#030303] text-foreground selection:bg-primary/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow transition-transform group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight text-white">Content<span className="text-primary">AI</span></span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {["Features", "Pricing", "Workflow", "Demo"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5" asChild><Link to="/login">Log in</Link></Button>
            <Button variant="hero" size="lg" className="rounded-full px-8" asChild><Link to="/signup">Start Free</Link></Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-44 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />
        <div className="container relative mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-glow"
            >
              <Zap className="h-4 w-4" />
              <span>Trusted by 10,000+ creators and innovators</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-5xl font-display text-6xl font-bold leading-[1.1] md:text-8xl text-white"
            >
              Generate Blogs, Images & <br />
              <span className="text-gradient">Videos in Seconds</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-3xl text-xl text-muted-foreground/80 leading-relaxed"
            >
              The unified AI content engine for professional teams. Create world-class assets across every medium using advanced agents and custom workflows.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-col items-center gap-6 sm:flex-row"
            >
              <Button variant="hero" size="xl" className="h-16 rounded-full px-10 text-lg shadow-glow-lg" asChild>
                <Link to="/signup">Get Started Free <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="h-16 rounded-full px-10 text-lg border-white/10 hover:bg-white/5 active:scale-95 transition-all" asChild>
                <Link to="/login">Try Live Demo</Link>
              </Button>
            </motion.div>

            {/* Dashboard Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-24 w-full max-w-6xl rounded-3xl border border-white/10 bg-[#0A0A0A] p-4 shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-8 items-center gap-2 border-b border-white/5 px-4 bg-[#0A0A0A] z-20 relative">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="flex aspect-[16/9] bg-[#050505] relative cursor-default overflow-hidden">
                {/* Sidebar Mock */}
                <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-4 md:w-48 md:items-start md:px-4 z-10 bg-[#060606]">
                  {[
                    { icon: LayoutDashboard, label: "Overview" },
                    { icon: FileText, label: "Text Generator" },
                    { icon: ImageIcon, label: "Image Creator" },
                    { icon: Video, label: "Video Studio" },
                    { icon: Wand2, label: "Summarizer" },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 w-full p-2.5 rounded-xl transition-all ${idx === 1 ? 'bg-primary/20 text-primary border border-primary/20 shadow-[inset_0_0_10px_rgba(var(--primary),0.15)]' : 'text-white/40 hover:bg-white/5 hover:text-white/80'}`}>
                      <item.icon className="h-4 w-4" />
                      <span className="hidden text-sm font-medium tracking-wide md:block">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Content Mock */}
                <div className="flex-1 p-8 text-left bg-[#0A0A0B] relative overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" 
                  />
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20 backdrop-blur-md shadow-glow">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white/90 font-bold tracking-tight text-lg">Blog Post Generation</h3>
                        <p className="text-white/40 text-xs mt-0.5">AI Agent processing request...</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Sparkles className="h-3 w-3 text-white/50" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {/* Prompt Box */}
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-lg backdrop-blur-md flex flex-col">
                      <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Input Prompt</div>
                      <div className="space-y-3 flex-1">
                        <div className="w-full text-sm text-white/70 leading-relaxed font-medium bg-black/40 p-3 rounded-lg border border-white/5">
                          Write a comprehensive 1500-word guide on modern architectural trends for 2026, focusing on sustainable materials and green energy integration. Make the tone professional yet engaging.
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-3">
                        <div className="h-9 px-5 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                          <span className="text-white/60 text-xs font-bold">Cancel</span>
                        </div>
                        <div className="h-9 px-5 bg-primary rounded-lg flex items-center justify-center shadow-glow">
                          <span className="text-primary-foreground text-xs font-bold uppercase tracking-wide">Generate ✨</span>
                        </div>
                      </div>
                    </div>

                    {/* Output Box */}
                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 shadow-[0_0_30px_rgba(var(--primary),0.15)] relative overflow-hidden group flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary animate-pulse" />
                          <span className="text-primary text-sm font-bold tracking-tight">Drafting Content...</span>
                        </div>
                        <div className="h-1.5 w-20 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: "70%" }}
                            transition={{ duration: 2, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <div className="bg-black/50 p-4 rounded-xl border border-primary/20 space-y-3 relative z-10 flex-1">
                        <div className="h-3 w-3/4 bg-white/30 rounded-full"></div>
                        <div className="h-3 w-full bg-white/20 rounded-full mt-4"></div>
                        <div className="h-3 w-full bg-white/20 rounded-full"></div>
                        <div className="h-3 w-5/6 bg-white/20 rounded-full"></div>
                        <div className="h-3 w-full bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Generated Assets Rack */}
                  <div className="mt-8 relative z-10">
                    <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">Suggested Visuals</h4>
                    <div className="grid grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map(i => (
                         <div key={i} className="aspect-video rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center relative group/asset overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/asset:opacity-100 transition-opacity z-10" />
                           <ImageIcon className="h-6 w-6 text-white/20" />
                         </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badge Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
            {["Fast AI generation", "Secure", "ISO Certified", "Cloud Native", "Enterprise Ready"].map(badge => (
              <span key={badge} className="text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                <Check className="h-4 w-4" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Everything You Need to Scale</h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">Six enterprise-grade AI tools engineered for speed and precision.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl border border-white/5 bg-[#080808] p-10 transition-colors hover:bg-white/[0.02] hover:border-primary/20"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/20 border border-primary/20 shadow-glow">
                  <f.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">{f.desc}</p>
                
                {/* Micro preview mock */}
                <div className="mt-8 rounded-xl bg-black/40 p-4 border border-white/5 text-[10px] font-mono text-white/40 overflow-hidden h-24 relative">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/10" />
                  </div>
                  {f.preview}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Zap className="h-12 w-12 text-primary opacity-20 animate-pulse-slow" />
            </div>
            <div className="relative">
              <h2 className="font-display text-4xl font-bold mb-4">Try ContentAI Live</h2>
              <p className="text-muted-foreground mb-10">Experience the power of our multi-modal generation engine.</p>
              
              <div className="space-y-6">
                <div className="relative">
                  <textarea 
                    value={demoPrompt}
                    onChange={(e) => setDemoPrompt(e.target.value)}
                    placeholder="Enter a content topic or prompt (e.g., 'Modern architecture blog for Gen Z')"
                    className="w-full h-32 rounded-2xl bg-black/40 border border-white/10 p-6 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating || !demoPrompt}
                      variant="hero" 
                      className="rounded-full shadow-glow"
                    >
                      {isGenerating ? "AI Thinking..." : "Generate Preview"}
                    </Button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {(isGenerating || demoOutput) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 min-h-[160px] flex items-center justify-center text-center"
                    >
                      {isGenerating ? (
                        <div className="flex flex-col items-center gap-4">
                          <div className="h-10 w-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                          <p className="text-primary font-medium">Analyzing inputs, researching market trends and generating high-impact assets...</p>
                        </div>
                      ) : (
                        <div className="text-left w-full">
                          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-widest">
                            <Sparkles className="h-3 w-3" /> Output Preview
                          </div>
                          <p className="text-foreground leading-relaxed">{demoOutput}</p>
                          <div className="mt-6 flex gap-4">
                            <Button size="sm" variant="ghost" className="text-xs">Download Result</Button>
                            <Button size="sm" variant="ghost" className="text-xs">Export to Dashboard</Button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Workflow Section */}
      <section id="workflow" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl font-bold mb-6">Smart Workflow Architecture</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">See how ContentAI orchestrates complex generations through automated pipelines.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4 relative">
            {workflow.map((w, i) => (
              <motion.div 
                key={w.step} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative mb-8 flex justify-center">
                  <div className="h-20 w-20 rounded-full bg-black border border-white/10 flex items-center justify-center font-display text-2xl font-bold text-primary transition-all group-hover:scale-110 group-hover:border-primary group-hover:shadow-glow translate-z-0">
                    {w.step}
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent z-0 overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="h-full w-20 bg-primary shadow-[0_0_10px_#fff]"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative">
        <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-xl">Scalable plans for creators, startups, and enterprises.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricing.map((plan, i) => (
              <motion.div 
                key={plan.name} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-[2.5rem] border bg-[#0A0A0A] p-10 flex flex-col ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold font-display">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.price !== "Custom" && "/month"}</span>
                  </div>
                </div>
                <div className="space-y-5 flex-1 mb-10">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Button variant={plan.popular ? "hero" : "heroOutline"} size="xl" className="rounded-2xl w-full">
                  {plan.name === "Free" ? "Get Started" : "Select Plan"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-24">Loved by Innovators</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-left p-10 rounded-3xl border border-white/5 bg-[#080808] relative group"
              >
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-lg mb-8 leading-relaxed italic text-white/90">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[4rem] overflow-hidden p-24"
          >
            <div className="absolute inset-0 gradient-primary animate-pulse-slow opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-5xl font-bold mb-8 md:text-7xl">Ready to Automate <br /> Your Content?</h2>
              <p className="text-2xl text-white/80 max-w-2xl mx-auto mb-12">Join 10,000+ creators using ContentAI to ship content faster than ever before.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="heroOutline" size="xl" className="bg-white text-black hover:bg-white/90 border-none rounded-full px-12" asChild>
                  <Link to="/signup">Get Started for Free</Link>
                </Button>
                <Button size="xl" variant="ghost" className="text-white hover:bg-white/10 rounded-full px-12 font-bold" asChild>
                  <Link to="/login">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Cases section */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-12">Infinite Possibilities</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["For Students", "For YouTubers", "For Startups", "For Marketers", "For Copywriters", "For Podcasters"].map(usecase => (
              <span key={usecase} className="px-8 py-3 rounded-full border border-white/5 bg-white/[0.02] text-muted-foreground text-sm font-medium hover:border-primary/30 hover:text-primary transition-all cursor-default">
                {usecase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-4 mb-24">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-white">ContentAI</span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-8">The next-generation AI content platform designed for modern creators and enterprises looking for speed and quality.</p>
              <div className="flex gap-4">
                {[Play, Share2, Download, Users].map((Icon, idx) => (
                  <div key={idx} className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-all">
                    <Icon className="h-5 w-5 text-white/40 group-hover:text-primary" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Tools</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                <li><Link to="/dashboard/text" className="hover:text-primary">Text Generator</Link></li>
                <li><Link to="/dashboard/image" className="hover:text-primary">Image Generator</Link></li>
                <li><Link to="/dashboard/video" className="hover:text-primary">Video Creator</Link></li>
                <li><Link to="/dashboard/summarizer" className="hover:text-primary">Smart Summarizer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Integrations</a></li>
                <li><a href="#" className="hover:text-primary">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
              © 2026 ContentAI. Built with AI-powered workflows.
            </div>
            <div className="flex gap-8 text-xs text-muted-foreground uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
