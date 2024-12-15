import Grid from "./grid";
import { GridTileImage } from "./grid/tile";
import { Machinery, Product } from "@/lib/arigato/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Machinery[];
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/product/${product.id}`}
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              src={product.image}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
