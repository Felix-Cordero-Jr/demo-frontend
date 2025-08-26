import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
