import GeneratorPage from "@/components/GeneratorPage";

export default function TextGeneratorPage() {
  return (
    <GeneratorPage
      title="AI Text Generator"
      description="Generate articles, social posts, and marketing copy."
      contentType="text"
      promptPlaceholder="e.g. Write a LinkedIn post about AI innovation"
    />
  );
}
