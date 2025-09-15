
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo_mcraulo.svg"

// Iconos SVG para cada categoría


const HamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-burger"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 15h16a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 4c3.783 0 6.953 2.133 7.786 5h-15.572c.833 -2.867 4.003 -5 7.786 -5z" /><path d="M5 12h14" /></svg>
)

const FriesIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.5 2h-1c-.276 0-.5.224-.5.5v19c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-19c0-.276-.224-.5-.5-.5zm-3 1h-1c-.276 0-.5.224-.5.5v18c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-18c0-.276-.224-.5-.5-.5zm-3 2h-1c-.276 0-.5.224-.5.5v16c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-16c0-.276-.224-.5-.5-.5zm-3-1h-1c-.276 0-.5.224-.5.5v17c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-17c0-.276-.224-.5-.5-.5zm-3-1h-1c-.276 0-.5.224-.5.5v18c0 .276.224.5.5.5h1c.276 0 .5-.224.5-.5v-18c0-.276-.224-.5-.5-.5z" />
    </svg>
)

const DrinkIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 2v6h.5L6 20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2L18.5 8H19V2H5zm2.5 6h9l-.5 12H8l-.5-12zM7 4h10v2H7V4z" />
    </svg>
)



const UserIcon = () => (
    <img
        src="https://pbs.twimg.com/profile_images/1505286562895982594/_el7rYSf_400x400.jpg"
        alt="Usuario"
        className="w-10 h-10 rounded-full object-cover"
    />
)

const LogoIcon = () => (
    <img className="scale-130" src={logo} alt="logo mcraulo" />
)

const categories = [
    {
        id: "hamburguesas",
        name: "Hamburguesas",
        icon: HamburgerIcon,
    },
    {
        id: "papas",
        name: "Papas",
        icon: FriesIcon,
    },
    {
        id: "bebidas",
        name: "Bebidas",
        icon: DrinkIcon,
    },

]



export function SideBar() {
    const [activeCategory, setActiveCategory] = useState<string>("")

    return (
        <div className="w-80 bg-emerald-900 text-white flex flex-col shadow-2xl">
            <div className="p-6 border-b border-emerald-800">
                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-emerald-800 p-6 rounded-full">
                        <LogoIcon />
                    </div>
                </div>

                {/* Usuario */}
                <div className="flex items-center gap-3 bg-emerald-800 p-3 rounded-lg">
                    <div className="bg-emerald-600 p-0.5 rounded-full">
                        <UserIcon />
                    </div>
                    <div>
                        <p className="font-medium text-sm">Momo Benavidez</p>
                        <p className="text-xs text-emerald-200">Socio</p>
                    </div>
                </div>
            </div>

            {/* Header de categorias */}
            <div className="p-4 bg-red-800" >
                <h2 className="text-lg font-bold text-center">Menú</h2>
                <p className="text-sm text-primary-foreground text-center mt-1">Selecciona una categoría</p>
            </div>

            {/* Categories */}
            <div className="flex-1 p-4 space-y-3">
                {categories.map((category) => {
                    const IconComponent = category.icon
                    const isActive = activeCategory === category.id

                    return (
                        <Button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "bg-white active:text-white active:bg-red-800 hover:bg-red-800 hover:text-white cursor-pointer w-full h-20 flex flex-col items-center justify-center gap-2 text-stone-900 font-semibold transition-all duration-150 transform hover:scale-105 active:scale-105",
                            )}
                        >
                            <IconComponent />
                            <span className="text-sm">{category.name}</span>
                        </Button>
                    )
                })}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-emerald-800">
                <div className="text-xs text-emerald-200 text-center">
                    {activeCategory ? (
                        <span className="text-white font-medium">
                            Categoría: {categories.find((c) => c.id === activeCategory)?.name}
                        </span>
                    ) : (
                        "Ninguna categoría seleccionada"
                    )}
                </div>
            </div>
        </div>
    )
}
