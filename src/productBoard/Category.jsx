const CategoryComponent = () => {
  const clothingCategories = [
    "All Category",
    "Electronics",
    "Home & Lifestyle",
    "Men Fashion",
    "Women Fashion",
  ];

  return (
    <div className="container mx-6 mb-4">
      <ul className="flex  gap-4">
        {clothingCategories.map((category, index) => (
          <li
            key={index}
            className="bg-gray-200 rounded-md px-3 py-2 text-center font-semibold text-gray-500"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryComponent;
