'use client';

import { useState } from 'react';

interface FileItem {
    name: string;
    type: 'file' | 'folder';
    extension?: string;
    children?: FileItem[];
    content?: string;
}

interface FileExplorerProps {
    onFileSelect: (file: FileItem) => void;
    activeFile: string;
    filterQuery?: string;
}

export default function FileExplorer({ onFileSelect, activeFile, filterQuery = '' }: FileExplorerProps) {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['portfolio']));

    const fileStructure: FileItem[] = [
        {
            name: 'portfolio',
            type: 'folder',
            children: [
                { name: 'README.md', type: 'file', extension: 'md' },
                { name: 'about.md', type: 'file', extension: 'md' },
                { name: 'skills.json', type: 'file', extension: 'json' },
                { name: 'projects.tsx', type: 'file', extension: 'tsx' },
                { name: 'contact.ts', type: 'file', extension: 'ts' },
            ],
        },
    ];

    const toggleFolder = (folderName: string) => {
        const newExpanded = new Set(expandedFolders);
        if (newExpanded.has(folderName)) {
            newExpanded.delete(folderName);
        } else {
            newExpanded.add(folderName);
        }
        setExpandedFolders(newExpanded);
    };

    const getFileIcon = (extension?: string) => {
        switch (extension) {
            case 'md':
                return '📄';
            case 'json':
                return '{}';
            case 'tsx':
            case 'ts':
                return 'TS';
            case 'js':
                return 'JS';
            default:
                return '📄';
        }
    };

    const renderFolder = (folder: FileItem, level: number = 0) => {
        const isExpanded = expandedFolders.has(folder.name);

        // Filter children based on search query
        const filteredChildren = folder.children?.filter(child => {
            if (!filterQuery) return true;
            return child.name.toLowerCase().includes(filterQuery.toLowerCase());
        });

        // Don't render folder if no children match the filter
        if (filterQuery && filteredChildren?.length === 0) {
            return null;
        }

        return (
            <div key={folder.name} className="folder">
                <div
                    className="folder-header"
                    onClick={() => toggleFolder(folder.name)}
                    style={{ paddingLeft: `${level * 12 + 8}px` }}
                >
                    <span className={`folder-icon ${isExpanded ? '' : 'collapsed'}`}>▼</span>
                    <span>📁 {folder.name}</span>
                </div>
                {isExpanded && filteredChildren && (
                    <div className="folder-files">
                        {filteredChildren.map((child) =>
                            child.type === 'folder' ? (
                                renderFolder(child, level + 1)
                            ) : (
                                <div
                                    key={child.name}
                                    className={`file-item ${activeFile === child.name ? 'active' : ''}`}
                                    onClick={() => onFileSelect(child)}
                                    style={{ paddingLeft: `${(level + 1) * 12 + 8}px` }}
                                >
                                    <span className={`file-icon ${child.extension}`}>
                                        {getFileIcon(child.extension)}
                                    </span>
                                    <span className="file-name">{child.name}</span>
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="file-explorer">
            {fileStructure.map((item) => renderFolder(item))}
        </div>
    );
}
