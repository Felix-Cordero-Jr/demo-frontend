import Section from "@/components/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Project 2</h3>
          <p className="text-gray-600">Description of the project.</p>
        </div>
      </div>
    </Section>
  );
}
