import PricingPlan from "../components/PricingPlan";

const PricingPage = () => {
  const plans = [
    {
      title: "Free Plan",
      price: 0,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Standard Plan",
      price: 19.99,
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Premium Plan",
      price: 39.99,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Choose a Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingPlan key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
