const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: `Hexashop - ${product.title}`,
    description: product.description,
  };
}
