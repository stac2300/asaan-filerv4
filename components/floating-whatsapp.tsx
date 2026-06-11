import { MessageCircle } from "lucide-react";
import { contact } from "@/components/site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white shadow-soft transition hover:bg-brand-dark"
    >
      <MessageCircle size={26} />
    </a>
  );
}
