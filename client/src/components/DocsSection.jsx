const DocsSection = ({ title, content }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default DocsSection;
