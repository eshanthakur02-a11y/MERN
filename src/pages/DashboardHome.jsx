import { Link } from "react-router-dom";
import { FileText, Image as ImageIcon, Video, Wand2, Sparkles, ArrowRight, Zap, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { getHistory } from "@/lib/content-store";
import { Button } from "@/components/ui/button";

const tools = [
  { title: "Text Generator", desc: "Create articles, posts, and copy", icon: FileText, url: "/dashboard/text", color: "from-primary to-primary-glow" },
  { title: "Image Creator", desc: "Generate images from prompts", icon: ImageIcon, url: "/dashboard/image", color: "from-accent to-accent-glow" },
  { title: "Video Studio", desc: "Produce AI-powered videos", icon: Video, url: "/dashboard/video", color: "from-destructive to-destructive-glow" },
  { title: "Summarizer", desc: "Condense long content", icon: Wand2, url: "/dashboard/summarizer", color: "from-primary to-accent" },
  { title: "Script Master", desc: "Create structured scripts", icon: Sparkles, url: "/dashboard/script", color: "from-primary-glow to-primary" },
];

const templates = [
  { title: "SEO Blog Post", type: "text", prompt: "Write a 1000-word SEO optimized blog post about..." },
  { title: "Instagram Caption", type: "text", prompt: "Generate 5 engaging Instagram captions for..." },
  { title: "YouTube Script", type: "script", prompt: "Create a 10-minute video script for a tech review on..." },
  { title: "Product Image", type: "image", prompt: "Professional product photography of a [product] in a studio setting..." },
];

export default function DashboardHome() {
  const history = getHistory().slice(0, 3);

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-2">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white">Welcome back!</h1>
        <p className="text-muted-foreground text-lg">What will you create today?</p>
      </header>

      {/* Quick Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Generations", value: "128", icon: Zap, color: "text-primary" },
          { label: "Time Saved", value: "12h", icon: Clock, color: "text-accent" },
          { label: "Content Quality", value: "98%", icon: Star, color: "text-yellow-500" },
          { label: "Active Plan", value: "Free", icon: Sparkles, color: "text-primary-glow" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group glass-card rounded-2xl p-6 transition-all hover:bg-white/[0.05] border border-white/5 bg-white/[0.02]"
          >
            < stat.icon className={`h-5 w-5 mb-4 ${stat.color}`} />
            <div className="text-2xl font-bold font-display text-white">{stat.value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold text-white">AI Engineering Tools</h2>
          <Link to="/dashboard/history" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View all history <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={tool.url}
                className="group relative block rounded-3xl border border-white/5 bg-[#080808] p-8 transition-all hover:bg-white/[0.02] hover:border-primary/20 hover:shadow-glow"
              >
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} shadow-lg transition-transform group-hover:scale-110`}>
                  <tool.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-white">{tool.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Templates */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-8 text-white">Prompt Templates</h2>
          <div className="space-y-4">
            {templates.map((template, i) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="group flex items-center justify-between glass-card p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-white truncate">{template.title}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{template.prompt}</div>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-8 text-white">Recent Activity</h2>
          <div className="space-y-4">
            {history.length > 0 ? (
              history.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="glass-card p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex gap-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 tracking-tighter uppercase font-bold text-[10px] text-white/40">
                    {item.contentType}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-white truncate">{item.prompt}</div>
                    <div className="text-xs text-muted-foreground truncate">{new Date(item.createdAt).toLocaleDateString()}</div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="glass-card p-12 rounded-3xl border border-white/5 bg-white/[0.01] text-center flex flex-col items-center">
                <Zap className="h-8 w-8 text-white/10 mb-4" />
                <p className="text-muted-foreground text-sm">No recent generations yet.</p>
                <Button variant="link" className="text-primary mt-2" asChild>
                  <Link to="/dashboard/text">Create your first content</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
