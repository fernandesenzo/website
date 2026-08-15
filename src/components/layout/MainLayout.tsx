import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function MainLayout() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <>
            <Header />
            {!isSideMenuOpen && (
                <button
                    onClick={() => setIsSideMenuOpen(true)}
                    className="fixed top-4 left-4 z-50 md:hidden"
                >
                    🍔
                </button>
            )}

            {isSideMenuOpen && (
                <>
                    <Sidebar />

                    <div
                        className="fixed inset-0 dark:bg-black/50 bg-black/20 z-30"
                        onClick={() => setIsSideMenuOpen(false)}
                    />
                </>
            )}

            <main className="flex-1 p-4 md:p-8">
                <Outlet />
            </main>
        </>
    );
}