import { useState, useEffect } from "react";

export default function Resources() {
  const stats = [
    { label: "Articles", count: 100 },
    { label: "Tax Updates", count: 30 },
    { label: "Compliance Alerts", count: 10 },
    { label: "Financial Insights", count: 100 },
    { label: "Downloadable Guides", count: 10 },
  ];

  const publications = [
    { title: "Understanding Nepal's Tax Compliance Framework 2026", type: "Tax Updates", date: "Jan 2026" },
    { title: "Digital Transformation in Audit: A Practical Guide", type: "Articles", date: "Dec 2025" },
    { title: "Recovery Audit: How Businesses Recover Lost Revenue", type: "Financial Insights", date: "Nov 2025" },
    { title: "FDI Regulations Update for Nepal-Based Companies", type: "Compliance Alerts", date: "Oct 2025" },
    { title: "Cloud Accounting: Migration Best Practices", type: "Articles", date: "Sep 2025" },
    { title: "Startup Tax Planning: What Founders Need to Know", type: "Tax Updates", date: "Aug 2025" },
  ];

  // Counts animate automatically
  const [counts, setCounts] = useState(stats.map(() => 0));
  useEffect(() => {
    const intervals = stats.map((stat, index) =>
      setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          if (next[index] < stat.count) next[index] += 1;
          return next;
        });
      }, 50) // faster count
    );

    return () => intervals.forEach(i => clearInterval(i));
  }, [stats]);

  // Hover state only for color change
  const [hovered, setHovered] = useState(stats.map(() => false));

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#123c5a] mb-4">Knowledge Hub</h1>
          <p className="text-lg text-gray-700">
            Stay informed with our latest articles, tax updates, compliance alerts, and industry insights.
          </p>
        </div>

        {/* Stats Cards with Hover Color */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow text-center cursor-pointer transition duration-300
                          ${hovered[index] ? "bg-blue-500 text-white shadow-lg" : "bg-white text-gray-800"}`}
              onMouseEnter={() =>
                setHovered(prev => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                })
              }
              onMouseLeave={() =>
                setHovered(prev => {
                  const next = [...prev];
                  next[index] = false;
                  return next;
                })
              }
              onTouchStart={() =>
                setHovered(prev => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                })
              }
            >
              <div className="text-3xl font-bold mb-2">{counts[index]}</div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Latest Publications */}
        <div>
          <h2 className="text-3xl font-bold text-[#123c5a] mb-6">Latest Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#123c5a]">{pub.title}</h3>
                <p className="text-sm text-gray-500">{pub.type} • {pub.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}