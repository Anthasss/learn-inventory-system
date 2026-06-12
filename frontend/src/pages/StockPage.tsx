import type { Product } from "@inventory/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products: Product[] = [
  {
    id: 1,
    name: "Beras Ramos",
    category: "Sembako",
    quantity: 12,
    unit: "kg",
    price: 15000,
    minimumStock: 5,
  },
  {
    id: 2,
    name: "Minyak Goreng",
    category: "Sembako",
    quantity: 3,
    unit: "liter",
    price: 18000,
    minimumStock: 5,
  },
  {
    id: 3,
    name: "Sabun Mandi",
    category: "Kebutuhan Harian",
    quantity: 20,
    unit: "pcs",
    price: 5000,
    minimumStock: 10,
  },
  {
    id: 4,
    name: "Gula Pasir",
    category: "Sembako",
    quantity: 4,
    unit: "kg",
    price: 16000,
    minimumStock: 8,
  },
];

export function StockPage() {
  const totalProducts = products.length;

  const lowStock = products.filter((product) => {
    return product.quantity <= product.minimumStock;
  }).length;

  const searchResult = products.length;

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground">
            Inventaris
          </p>
          <h1 className="text-3xl font-bold">Stok Barang</h1>
          <p className="max-w-2xl text-sm leading-5 text-muted-foreground">
            Daftar barang dan jumlah stok saat ini.
          </p>
        </header>

        <section className="flex flex-col gap-4 md:flex-row">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Barang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{totalProducts}</p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Stok Rendah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{lowStock}</p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Hasil Pencarian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{searchResult}</p>
            </CardContent>
          </Card>
        </section>
        <Card>
          <CardHeader>
            <CardTitle>Daftar Stok</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tabel stok barang akan ditampilkan di sini.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
