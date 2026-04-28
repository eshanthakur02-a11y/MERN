import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Download, Sparkles, Wand2, Copy, CheckCircle2 } from "lucide-react";
import { callWebhook, addToHistory } from "@/lib/content-store";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function GeneratorPage({
  title,
  description,
  contentType,
  promptLabel = "Prompt",
  promptPlaceholder = "Enter your prompt...",
  useTextarea = false,
  extraFields = [],
}) {
  const [prompt, setPrompt] = useState("");
  const [extras, setExtras] = useState({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    if (result && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [result]);

  const handleGenerate = async () => {
    if (!prompt.trim()) { toast.error("Please enter a prompt"); return; }
    setLoading(true);
    setResult("");
    try {
      const res = await callWebhook(contentType, prompt, extras);
      setResult(res);
      addToHistory({ contentType, prompt, result: res });
      toast.success("Content generated successfully!");
    } catch {
      toast.error("Failed to generate content. Please check your connection.");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    let url = result;
    let filename = `${contentType}-${Date.now()}`;
    
    if (contentType === "text" || contentType === "summary" || contentType === "script") {
      const blob = new Blob([result], { type: "text/plain" });
      url = URL.createObjectURL(blob);
      filename += ".txt";
    } else if (contentType === "image") {
      filename += ".png";
    } else if (contentType === "video") {
      filename += ".mp4";
    }

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    if (url !== result) {
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4 text-primary font-bold tracking-widest uppercase text-xs">
          <Sparkles className="h-4 w-4" />
          Powered by Advanced AI
        </div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-white mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-10 shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Wand2 className="h-32 w-32 text-primary" />
        </div>
        
        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <Label className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 ml-1">
              {promptLabel}
            </Label>
            {useTextarea ? (
              <Textarea 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder={promptPlaceholder} 
                className="min-h-[200px] rounded-3xl border-white/10 bg-black/40 px-8 py-6 text-lg text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all resize-none shadow-inner" 
              />
            ) : (
              <Input 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder={promptPlaceholder} 
                className="h-16 rounded-2xl border-white/10 bg-black/40 px-8 text-lg text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all shadow-inner" 
              />
            )}
          </div>
          
          {extraFields.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {extraFields.map((f) => (
                <div key={f.key} className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">{f.label}</Label>
                  <Input 
                    value={extras[f.key] || ""} 
                    onChange={(e) => setExtras((p) => ({ ...p, [f.key]: e.target.value }))} 
                    placeholder={f.placeholder} 
                    className="h-14 rounded-xl border-white/5 bg-black/20 px-6 text-white placeholder:text-white/10 focus:border-primary/30 focus:ring-primary/10 transition-all" 
                  />
                </div>
              ))}
            </div>
          )}

          <Button 
            onClick={handleGenerate} 
            disabled={loading} 
            variant="hero"
            className="h-16 w-full rounded-2xl text-xl font-bold shadow-glow-lg transition-all active:scale-[0.98]"
          >
            {loading ? (
              <><Loader2 className="mr-3 h-6 w-6 animate-spin" /> Orchestrating AI...</>
            ) : (
              <><Sparkles className="mr-3 h-6 w-6" /> Generate Magic</>
            )}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {result && (
          <motion.div 
            ref={resultRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-16"
          >
            <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-md p-10 md:p-12 shadow-2xl">
              <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-primary uppercase tracking-[0.3em]">
                    <CheckCircle2 className="h-4 w-4" /> Result Ready
                  </div>
                  <h2 className="font-display text-3xl font-bold text-white">Engineered Masterpiece</h2>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button 
                    variant="heroOutline" 
                    size="lg" 
                    onClick={handleCopy}
                    className="flex-1 md:flex-none rounded-xl border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                  >
                    {copied ? <CheckCircle2 className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                  <Button 
                    variant="heroOutline" 
                    size="lg" 
                    onClick={handleDownload}
                    className="flex-1 md:flex-none rounded-xl border-white/10 text-white/60 hover:text-white hover:bg-white/5"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              </div>
              
              <div className="relative rounded-[2.5rem] bg-black/40 border border-white/5 p-8 md:p-12 group transition-all hover:border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
                
                {contentType === "image" ? (
                  <div className="overflow-hidden rounded-3xl shadow-glow relative z-10">
                    <img src={result} alt="Generated" className="w-full transition-transform hover:scale-[1.01] duration-700" />
                  </div>
                ) : contentType === "video" ? (
                  <div className="overflow-hidden rounded-3xl shadow-glow bg-black relative z-10">
                    <video src={result} controls className="w-full" />
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none relative z-10">
                    <div className="whitespace-pre-wrap text-xl leading-relaxed text-white/80 font-medium font-body">
                      {result}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
