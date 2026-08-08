export default function Features() {
  const list = [
    { title: "Right of Use", color: "from-[#0f3558] to-[#1c4f7f]" },
    { title: "Clarity", color: "from-[#1c4f7f] to-[#274c66]" },
    { title: "Compliance", color: "from-[#123b5a] to-[#1f4f85]" },
    { title: "Confidence", color: "from-[#f2a33b] to-[#e6c08f]" },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#094a8a] mb-12">
          Why Choose Us
        </h2>

        <ul className="grid md:grid-cols-2 gap-8">
          {list.map((item, i) => (
            <li
              key={i}
              className={`bg-gradient-to-r ${item.color} text-white rounded-xl shadow-lg p-6 font-bold text-center transform transition duration-500 hover:scale-105 animate-fadeIn`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
