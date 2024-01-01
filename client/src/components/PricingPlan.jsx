const PricingPlan = ({ title, price, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">${price} per month</p>
      <ul className="list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
        Select Plan
      </button>
    </div>
  );
};

export default PricingPlan;
