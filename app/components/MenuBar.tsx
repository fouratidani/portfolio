'use client';

import { useState } from 'react';

interface MenuBarProps {
    onMenuAction?: (action: string) => void;
    onSearch?: (query: string) => void;
}

export default function MenuBar({ onMenuAction, onSearch }: MenuBarProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState('');

    const menuItems = [
        { label: 'File', items: ['Save', 'Close'] },
        { label: 'Edit', items: ['Find'] },
        { label: 'View', items: ['Explorer', 'Search'] },
        { label: 'Terminal', items: ['New Terminal'] },
    ];

    const handleMenuClick = (label: string) => {
        setActiveMenu(activeMenu === label ? null : label);
    };

    const handleMenuItemClick = (item: string) => {
        console.log(`Menu item clicked: ${item}`);
        if (onMenuAction) {
            onMenuAction(item);
        }
        setActiveMenu(null);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onSearch) {
            onSearch(searchValue);
        }
    };

    return (
        <div className="menu-bar">
            <div className="menu-left">
                <div className="app-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M14.5 1L9 3.5 3.5 1 1 3.5v9L3.5 15 9 12.5 14.5 15 16 12.5v-9L14.5 1z" />
                    </svg>
                </div>
                {menuItems.map((menu) => (
                    <div key={menu.label} className="menu-item-wrapper">
                        <div
                            className={`menu-item ${activeMenu === menu.label ? 'active' : ''}`}
                            onClick={() => handleMenuClick(menu.label)}
                        >
                            {menu.label}
                        </div>
                        {activeMenu === menu.label && (
                            <div className="menu-dropdown">
                                {menu.items.map((item) => (
                                    <div
                                        key={item}
                                        className="menu-dropdown-item"
                                        onClick={() => handleMenuItemClick(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="menu-center">
                <div className="search-container">
                    <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM7 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm4.5-.5a5.5 5.5 0 1 1 1.1-1.1l3 3-.8.8-3-3z" />
                    </svg>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search files (Ctrl+P)"
                        value={searchValue}
                        onChange={handleSearchChange}
                        onKeyPress={handleSearchKeyPress}
                    />
                    <div className="search-shortcut">⌘ P</div>
                </div>
            </div>

            <div className="menu-right">
                <div className="window-controls">
                    <button className="window-button minimize" title="Minimize">
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <rect x="2" y="5" width="8" height="1" fill="currentColor" />
                        </svg>
                    </button>
                    <button className="window-button maximize" title="Maximize">
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <rect x="2" y="2" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </button>
                    <button className="window-button close" title="Close">
                        <svg width="12" height="12" viewBox="0 0 12 12">
                            <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
