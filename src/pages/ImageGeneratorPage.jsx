import GeneratorPage from "@/components/GeneratorPage";

export default function ImageGeneratorPage() {
  return (
    <GeneratorPage
      title="AI Image Generator"
      description="Create stunning images from text prompts."
      contentType="image"
      promptPlaceholder="e.g. A futuristic cityscape at sunset, cyberpunk style"
    />
  );
}
