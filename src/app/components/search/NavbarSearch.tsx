import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function NavbarSearch() {

    return (
        <div className="relative w-full">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-light" />
            <Input
                type="search"
                placeholder=""
                className="pl-8 h-9 ring-1 ring-ring/10 bg-background focus:ring-2 focus:ring-ring/80 ring-offset-0 shadow-none"
            />
        </div>
    )
}
