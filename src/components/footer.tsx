export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row">
        <span>© {new Date().getFullYear()} StrategAI. All rights reserved.</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300">
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
};
