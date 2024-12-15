import Grid from "./grid";
import { GridTileImage } from "./grid/tile";
import { Machinery } from "@/lib/arigato/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
  locale,
}: {
  products: Machinery[];
  locale: string;
}) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
            className="relative inline-block h-full w-full"
            href={`/${locale}/product/${product.id}`} // Directly use template string
            prefetch={true}
          >
            <GridTileImage
              alt={product.title}
              label={{
                title: product.title,
                availability: product.availability,
              }}
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
