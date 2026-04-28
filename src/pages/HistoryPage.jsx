import { useState } from "react";
import { getHistory, clearHistory } from "@/lib/content-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, FileText, Image, Video, Wand2, Sparkles, Clock, Calendar } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const typeIcons = {
  text: FileText,
  image: Image,
  video: Video,
  summary: Wand2,
  script: Sparkles,
};

const typeColors = {
  text: "bg-primary/20 text-primary border-primary/20",
  image: "bg-accent/20 text-accent border-accent/20",
  video: "bg-destructive/20 text-destructive border-destructive/20",
  summary: "bg-primary/20 text-primary border-primary/20",
  script: "bg-accent/20 text-accent border-accent/20",
};

export default function HistoryPage() {
  const [items, setItems] = useState(getHistory());

  const handleClear = () => {
    clearHistory();
    setItems([]);
    toast.success("History successfully cleared");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-2 text-primary font-bold tracking-[0.2em] uppercase text-[10px]">
            <Clock className="h-3 w-3" />
            Generation Archive
          </div>
          <h1 className="font-display text-4xl font-extrabold text-white">Content Library</h1>
          <p className="mt-2 text-muted-foreground">{items.length} items synthesized by ContentAI</p>
        </motion.div>
        
        {items.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button 
              variant="heroOutline" 
              size="sm" 
              onClick={handleClear}
              className="rounded-xl border-white/10 text-white/40 hover:text-destructive hover:border-destructive/30 hover:bg-destructive/5"
            >
              <Trash2 className="mr-2 h-4 w-4" /> Purge History
            </Button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-20 text-center py-20 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl"
          >
            <div className="h-20 w-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-white/10">
              <Wand2 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No generations found</h3>
            <p className="text-muted-foreground">Start creating to build your digital asset library.</p>
          </motion.div>
        ) : (
          <div className="grid gap-6">
            {items.map((item, i) => {
              const Icon = typeIcons[item.contentType] || FileText;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-3xl hover:bg-white/[0.04] hover:border-primary/20 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="h-20 w-20 text-primary" />
                  </div>
                  
                  <div className="flex items-start justify-between gap-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${typeColors[item.contentType]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={`${typeColors[item.contentType]} border-none font-bold uppercase text-[10px] tracking-widest px-3 py-0.5 rounded-full`}>
                            {item.contentType}
                          </Badge>
                          <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                            <Calendar className="h-3 w-3" />
                            {new Date(item.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-lg font-bold text-white mb-4 line-clamp-1 group-hover:text-primary transition-colors">{item.prompt}</p>
                        
                        <div className="rounded-2xl bg-black/40 border border-white/5 p-5 text-sm text-white/70 leading-relaxed font-body">
                          {item.contentType === "image" ? (
                            <div className="overflow-hidden rounded-xl shadow-lg border border-white/5 max-w-md">
                              <img src={item.result} alt="" className="w-full opacity-90 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ) : (
                            <p className="line-clamp-3">{item.result}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
