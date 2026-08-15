import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";
import { NAV_ITEMS } from "../../config/navigation";

export default function Header() {
    return (
        <header className="hidden md:flex justify-between items-center border-b border-border py-0.5 px-10">
            <div className="w-12" />

            <nav className="flex gap-6">
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive ? 'font-semibold underline' : 'font-medium hover:underline'
                        }
                        end={item.to === "/"}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <ThemeToggle />
        </header>
    )

}

