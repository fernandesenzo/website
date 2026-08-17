import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";
import { ThemeToggle } from "../ui/ThemeToggle/ThemeToggle";

export default function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 z-40 bg-surface border-r border-border md:hidden">
            <nav className="flex flex-col gap-2 items-start">
                <div className="ml-2">
                    <ThemeToggle />
                </div>

                {NAV_ITEMS.map((item) => (
                    <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                            isActive ? 'font-semibold underline pl-2' : 'font-medium hover:underline pl-2'

                        }
                        end={item.to === "/"}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}