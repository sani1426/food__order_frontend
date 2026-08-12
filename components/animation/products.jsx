import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Pepperoni",
    description: "Pepperoni, mozzarella and tomato sauce",
    price: 14,
    image: "/images/pizza/pepperoni.jpg",
  },
  {
    id: 2,
    name: "Margherita",
    description: "Fresh tomato, mozzarella and basil",
    price: 12,
    image: "/images/pizza/margherita.jpg",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Chicken, BBQ sauce and mozzarella",
    price: 16,
    image: "/images/pizza/bbq.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Our Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
