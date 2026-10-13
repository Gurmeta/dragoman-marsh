import { motion } from "motion/react";
import { Leaf, Bird } from "lucide-react";
import { useLanguage } from "../i18n";

export default function About() {
  const { t, isRtl } = useLanguage();

  const features = [
    {
      icon: <Bird className="w-6 h-6 text-emerald-600" />,
      title: t.about.f1_t,
      description: t.about.f1_d,
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: t.about.f2_t,
      description: t.about.f2_d,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div
        className={`absolute top-0 ${isRtl ? "left-0 rounded-r-[100px]" : "right-0 rounded-l-[100px]"} w-1/3 h-full bg-emerald-50/50 -z-10`}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1543419082-cececb654ce4?auto=format&fit=crop&q=80&w=1200"
                alt="Marsh path"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-emerald-600 block" />
              {t.about.title_small}
            </h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
              {t.about.title1}{" "}
              <span className="italic text-emerald-700">{t.about.title2}</span>
            </h3>

            <p className="text-stone-600 text-lg mb-10 font-light leading-relaxed">
              {t.about.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-stone-50 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-100 hover:bg-white transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-100/50 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-stone-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed font-light text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
