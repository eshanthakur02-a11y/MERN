import GeneratorPage from "@/components/GeneratorPage";

export default function SummarizerPage() {
  return (
    <GeneratorPage
      title="Content Summarizer"
      description="Paste long text and get a concise summary."
      contentType="summary"
      promptLabel="Text to Summarize"
      promptPlaceholder="Paste your long text here..."
      useTextarea
    />
  );
}
