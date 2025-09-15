import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState } from "react"


export interface Product {   // 👈 ahora exportada
    id: number
    name: string
    href: string
    price: string
    imageSrc: string
    imageAlt: string
}

const products = [
  // 🍔 Hamburguesas
  {
    id: 1,
    name: "Hamburguesa Clásica",
    href: "#",
    price: "$10",
    category: "hamburguesas",
    imageSrc:
      "https://media.istockphoto.com/id/840902892/es/foto/hamburguesa-aislado-en-blanco.jpg?s=612x612&w=0&k=20&c=uQIMRE1GPy8nh_WiCmK70qg30fjUaxnStPLVR2KLJHU=",
    imageAlt: "Hamburguesa clásica con queso, lechuga y tomate",
  },
  {
    id: 2,
    name: "Hamburguesa Doble",
    href: "#",
    price: "$15",
    category: "hamburguesas",
    imageSrc:
      "https://media.istockphoto.com/id/1130865856/es/foto/hamburguesa-con-queso-y-carne.jpg?s=612x612&w=0&k=20&c=Crz1_qwd7RkTBrzP9mrIQbWxDr2j7oV7B4dFZAvSr-M=",
    imageAlt: "Hamburguesa doble con queso y bacon",
  },
  {
    id: 3,
    name: "Hamburguesa Veggie",
    href: "#",
    price: "$12",
    category: "hamburguesas",
    imageSrc:
      "https://media.istockphoto.com/id/1315035442/es/foto/hamburguesa-de-garbanzos.jpg?s=612x612&w=0&k=20&c=O4oTwvVfRk0Po4b6ngCJST6sP9QyH1ef0PBR2KxLOtE=",
    imageAlt: "Hamburguesa vegetariana con lechuga y tomate",
  },
  {
    id: 4,
    name: "Hamburguesa BBQ",
    href: "#",
    price: "$14",
    category: "hamburguesas",
    imageSrc:
      "https://media.istockphoto.com/id/1211105873/es/foto/hamburguesa-con-salsa-bbq.jpg?s=612x612&w=0&k=20&c=RtLP_44v7VfORFZg5NuvMyWWjeh7A6DJ0X3ZruLbf4g=",
    imageAlt: "Hamburguesa con salsa BBQ y cebolla caramelizada",
  },

  // 🍟 Papas fritas
  {
    id: 5,
    name: "Papas Fritas Chicas",
    href: "#",
    price: "$5",
    category: "papas",
    imageSrc:
      "https://media.istockphoto.com/id/471748896/es/foto/papas-fritas.jpg?s=612x612&w=0&k=20&c=brnEhS2yPC2fTFzLhzK-5wPIL4bC0slO_mnqHWz31Rg=",
    imageAlt: "Porción chica de papas fritas",
  },
  {
    id: 6,
    name: "Papas Fritas Medianas",
    href: "#",
    price: "$7",
    category: "papas",
    imageSrc:
      "https://media.istockphoto.com/id/1213419557/es/foto/papas-fritas.jpg?s=612x612&w=0&k=20&c=lYFymMTDE8spD1aOGz1bgSRBql2MzyUmxYgUIv2aHtY=",
    imageAlt: "Porción mediana de papas fritas",
  },
  {
    id: 7,
    name: "Papas Fritas Grandes",
    href: "#",
    price: "$9",
    category: "papas",
    imageSrc:
      "https://media.istockphoto.com/id/621681802/es/foto/papas-fritas-en-una-caja.jpg?s=612x612&w=0&k=20&c=zYl4dZuP19xxLr_7E9yP7hHZH3IufGB7LbCj7E4uQzQ=",
    imageAlt: "Porción grande de papas fritas",
  },

  // 🥤 Bebidas
  {
    id: 8,
    name: "Coca-Cola 500ml",
    href: "#",
    price: "$4",
    category: "bebidas",
    imageSrc:
      "https://media.istockphoto.com/id/458749181/es/foto/botella-de-coca-cola.jpg?s=612x612&w=0&k=20&c=Enn3NMTwOshvUomShESkQl9A69Lwo02HzfI15okDJfM=",
    imageAlt: "Botella de Coca-Cola 500ml",
  },
  {
    id: 9,
    name: "Agua Mineral 500ml",
    href: "#",
    price: "$3",
    category: "bebidas",
    imageSrc:
      "https://media.istockphoto.com/id/1402164564/es/foto/botella-de-agua.jpg?s=612x612&w=0&k=20&c=RwTEKHAgd1N0vT1u_YlU5Ql8pH5QGdJkAPln3NRfjO4=",
    imageAlt: "Botella de agua mineral 500ml",
  },
  {
    id: 10,
    name: "Sprite 500ml",
    href: "#",
    price: "$4",
    category: "bebidas",
    imageSrc:
      "https://media.istockphoto.com/id/458748235/es/foto/botella-de-sprite.jpg?s=612x612&w=0&k=20&c=3fCNR1mEmtSPgyu4paObPugydHEyiQdgkA6l2zbfTn0=",
    imageAlt: "Botella de Sprite 500ml",
  },
]




export default function ProductList({ onProductClick }: { onProductClick?: (product: any) => void }) {
    return (
        <div className="w-auto">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className="cursor-pointer group overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                        onClick={() => {
                            console.log(`Producto clickeado: ${product.name}`) // 👉 acá se loguea
                            onProductClick?.(product) // 👉 si pasás callback desde el padre
                        }}

                    // 👉 pasa el producto clickeado
                    >
                        <div className="relative">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className=" aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300 hover:pointer"
                            />
                        </div>



                        <div className="p-4">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg font-bold text-primary">
                                        {product.price}
                                    </p>
                                </div>
                            </div>

                            <Button
                                size="sm"
                                className="w-full h-8 text-xs font-medium bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <Plus className="h-3 w-3 mr-1" />
                                Agregar
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

