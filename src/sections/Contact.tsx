import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-lg text-gray-700 mb-6 text-center">
        Let’s build something amazing together! 🚀
      </p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded" />
        <textarea placeholder="Your Message" rows={5} className="p-3 border rounded"></textarea>
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </Section>
  );
}
