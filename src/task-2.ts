function task2() {
  interface Product {
    readonly id: number;
    title: string;
    description?: string;
  }
  const milk: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and fast",
  };
  console.log(`Product: ${JSON.stringify(milk)}`);
}

export default task2;
