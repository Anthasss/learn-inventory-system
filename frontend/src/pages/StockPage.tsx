import type { Product } from "@inventory/shared";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  const [searchKeyword, setSearchKeyword] = useState("");
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  const totalProducts = products.length;

  const lowStock = products.filter((product) => {
    return product.quantity <= product.minimumStock;
  }).length;

  const searchResult = filteredProducts.length;

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
          <CardContent className="flex flex-col gap-4">
            <Input
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
              placeholder="Cari berdasarkan nama barang..."
            />

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Nama Barang</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Stok</TableHead>
                  <TableHead>Satuan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="h-24 text-center text-muted-foreground"
                    >
                      Barang Tidak Ditemukan.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.unit}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
