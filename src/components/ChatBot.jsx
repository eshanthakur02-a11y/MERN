import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export function ChatBot() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    // Only initialize on landing page
    if (!isLandingPage) return;
    
    // Check for initialization to prevent duplicates
    if (window.__N8N_CHAT_INITIALIZED__) return;
    window.__N8N_CHAT_INITIALIZED__ = true;

    try {
      createChat({
        webhookUrl: import.meta.env.VITE_N8N_CHAT_WEBHOOK || "https://admin91.app.n8n.cloud/webhook/9a092ef6-a1af-4f8c-bc3a-6fc8fce4bbb0/chat",
        mode: "window", 
        showWelcomeScreen: true,
        title: "ContentAI Assistant",
        subtitle: "How can we help you today?",
        footer: "Powered by ContentAI",
        initialMessages: [
          "Hi! I'm your AI content assistant. Feel free to ask me anything about generating blogs, images, or videos!",
        ],
        i18n: {
          en: {
            title: "ContentAI Assistant",
            inputPlaceholder: "Type your message here...",
            sendButtonTooltip: "Send Message",
          }
        },
        theme: {
          button: {
            backgroundColor: "#6366f1", // Indigo-500
            size: "large",
          }
        },
        metadata: {
          location: window.location.href
        }
      });
    } catch (err) {
      console.error("Failed to initialize n8n chat:", err);
      window.__N8N_CHAT_INITIALIZED__ = false;
    }
  }, [isLandingPage]);

  // Handle visibility based on route
  useEffect(() => {
    // Select all potential n8n chat elements
    const selectors = [
      '.n8n-chat-widget',
      '.n8n-chat-button',
      '#n8n-chat',
      '.n8n-chat-container'
    ];
    
    const toggleVisibility = () => {
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          el.style.display = isLandingPage ? 'block' : 'none';
          el.style.visibility = isLandingPage ? 'visible' : 'hidden';
          el.style.opacity = isLandingPage ? '1' : '0';
          el.style.pointerEvents = isLandingPage ? 'auto' : 'none';
        });
      });
    };

    toggleVisibility();
    
    // Also use an interval to catch elements that might be re-rendered by the library
    const interval = setInterval(toggleVisibility, 500);
    return () => clearInterval(interval);
  }, [isLandingPage, location.pathname]);

  return null;
}
