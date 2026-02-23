export function AlecerLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-8 w-8">
        <span className="absolute left-0 top-2 h-5 w-5 -rotate-[35deg] rounded-sm bg-[#2EC5CE]" />
        <span className="absolute right-0 top-0 h-6 w-4 rotate-[18deg] rounded-sm bg-[#1477E7]" />
      </div>
      <span className="text-[33px] font-semibold tracking-[-0.02em] text-brand-blue leading-none">
        AlecerPay
      </span>
    </div>
  );
}
