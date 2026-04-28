import GeneratorPage from "@/components/GeneratorPage";

export default function VideoGeneratorPage() {
  return (
    <GeneratorPage
      title="AI Video Generator"
      description="Generate AI-powered videos from your prompts."
      contentType="video"
      promptPlaceholder="e.g. Create a 30-second explainer about climate change"
    />
  );
}
