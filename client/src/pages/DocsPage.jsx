import DocsSection from "../components/DocsSection";

const DocsPage = () => {
  const sections = [
    {
      title: "Getting Started",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Installation",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Usage",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      {sections.map((section, index) => (
        <DocsSection key={index} {...section} />
      ))}
    </div>
  );
};

export default DocsPage;
