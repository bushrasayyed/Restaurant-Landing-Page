export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} SipNSavor. All rights reserved.
        <p className="font-medium">
          Developer — <span className="text-slate-900">Bushra Sayyed</span>
        </p>
      </div>
    </footer>
  );
}
