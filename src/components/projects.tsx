export default function Projects() {
  const projects = [
    {
      title: "eVisit Affiliate App",
      description: "React app to onboard physicians, integrated REST APIs, family accounts, and SIP calls."
    },
    {
      title: "Bells App Dashboard",
      description: "Dashboard with charts and graphs, optimized DB schema."
    },
    {
      title: "CollagOrg Platform",
      description: "Webinar integration with BigBlueButton, Eventbrite, Google Calendar, and Pusher."
    },
    {
      title: "React Performance Optimization",
      description: "Reduced unnecessary re-renders by 60% and improved JavaScript payload by 70%."
    }
  ];

  return (
    <section className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((proj, i) => (
          <div key={i} className="p-4 bg-white dark:bg-gray-700 rounded shadow">
            <h3 className="text-xl font-medium">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
