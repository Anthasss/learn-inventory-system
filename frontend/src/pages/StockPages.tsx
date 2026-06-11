import { useMemo, useState } from "react";
import type { Product } from "@inventory/shared";

import { Badge } from "@/components/ui/badge";
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

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [searchKeyword]);

  const lowStockCount = products.filter(
    (product) => product.quantity <= product.minimumStock,
  ).length;

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Inventaris
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Stok Barang</h1>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Pantau daftar barang, jumlah stok saat ini, kategori, dan satuan
            barang yang tersedia.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Barang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{products.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Stok Rendah
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-destructive">
                {lowStockCount}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Hasil Pencarian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{filteredProducts.length}</p>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader className="space-y-3">
            <CardTitle>Daftar Stok</CardTitle>
            <Input
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
              placeholder="Cari berdasarkan nama barang..."
            />
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Barang</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Stok</TableHead>
                    <TableHead>Satuan</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredProducts.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="h-24 text-center text-muted-foreground"
                      >
                        Barang tidak ditemukan.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredProducts.map((product) => {
                      const isLowStock =
                        product.quantity <= product.minimumStock;

                      return (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.quantity}</TableCell>
                          <TableCell>{product.unit}</TableCell>
                          <TableCell>
                            {isLowStock ? (
                              <Badge variant="destructive">Stok Rendah</Badge>
                            ) : (
                              <Badge variant="secondary">Aman</Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
