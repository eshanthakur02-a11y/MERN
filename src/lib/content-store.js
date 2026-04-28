// Local content store (will be replaced with Supabase when Cloud is enabled)

const STORAGE_KEY = "ai_content_history";

export function getHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addToHistory(item) {
  const entry = {
    ...item,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const history = getHistory();
  history.unshift(entry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 100)));
  } catch (error) {
    console.warn("localStorage quota exceeded, reducing history size", error);
    try {
    
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 5)));
    } catch {
      
    }
  }
  return entry;
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
}

const WEBHOOK_URLS = {
  text: import.meta.env.VITE_N8N_TEXT_WEBHOOK || "",
  image: import.meta.env.VITE_N8N_IMAGE_WEBHOOK || "",
  video: import.meta.env.VITE_N8N_VIDEO_WEBHOOK || "",
  summary: import.meta.env.VITE_N8N_SUMMARY_WEBHOOK || "",
  script: import.meta.env.VITE_N8N_SCRIPT_WEBHOOK || "",
};

export async function callWebhook(type, prompt, extra) {
  const webhookUrl = WEBHOOK_URLS[type] || "";

  
  if (!webhookUrl) {
    await new Promise((r) => setTimeout(r, 2000));
    const responses = {
      text: `Here's your AI-generated content about "${prompt}":\n\nArtificial intelligence continues to reshape how we create, collaborate, and innovate. The intersection of human creativity and machine learning opens up unprecedented possibilities for content creators worldwide.\n\nKey insights:\n• AI tools enhance productivity by 40%\n• Content personalization drives 3x engagement\n• Automation frees creators to focus on strategy\n\nThe future of content creation is hybrid — combining human insight with AI efficiency.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      video: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
      summary: `Summary of your text:\n\n${prompt.substring(0, 100)}...\n\nKey Points:\n1. The main argument centers around the evolution of technology\n2. Supporting evidence suggests rapid adoption across industries\n3. The conclusion emphasizes the need for balanced implementation`,
      script: `Video Script: "${prompt}"\n\n[INTRO - 0:00-0:15]\nHost: "Welcome back! Today we're diving into ${prompt}"\n\n[SECTION 1 - 0:15-1:00]\nHost: "Let's start with the basics..."\n[B-ROLL: Related visuals]\n\n[SECTION 2 - 1:00-2:00]\nHost: "Now here's where it gets interesting..."\n[GRAPHICS: Key statistics]\n\n[OUTRO - 2:00-2:30]\nHost: "Thanks for watching! Don't forget to like and subscribe."`,
    };
    return responses[type] || "Content generated successfully.";
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, prompt, ...extra }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const contentTypeHeader = res.headers.get("content-type") || "";

  if (contentTypeHeader.includes("application/json")) {
    const data = await res.json();
    return data.result || data.output || JSON.stringify(data);
  } else if (contentTypeHeader.includes("text/")) {
    return await res.text();
  } else {
    
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
