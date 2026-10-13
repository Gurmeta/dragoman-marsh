import { Leaf, Bird } from "lucide-react";

export const Logo = ({ className }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Leaf
      className="absolute w-full h-full text-emerald-500"
      strokeWidth={1.5}
    />
    <Bird
      className="absolute w-[45%] h-[45%] text-white translate-x-1 -translate-y-1"
      strokeWidth={2.5}
    />
  </div>
);
