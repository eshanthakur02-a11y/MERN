import GeneratorPage from "@/components/GeneratorPage";

export default function ScriptGeneratorPage() {
  return (
    <GeneratorPage
      title="Video Script Generator"
      description="Create structured video scripts for any topic."
      contentType="script"
      promptPlaceholder="e.g. How to start a side hustle in 2026"
      extraFields={[
        { label: "Target Duration", placeholder: "e.g. 5 minutes", key: "duration" },
      ]}
    />
  );
}
