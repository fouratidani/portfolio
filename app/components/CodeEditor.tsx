'use client';

import React from 'react';

interface CodeEditorProps {
    fileName: string;
    content: string;
    language: string;
}

export default function CodeEditor({ fileName, content, language }: CodeEditorProps) {
    const lines = content.split('\n');

    const renderContent = () => {
        if (language === 'markdown') {
            const isReadme = fileName.toLowerCase().includes('readme');
            return (
                <div className={`markdown-content ${isReadme ? 'readme-signature' : ''}`}>
                    {renderMarkdown(content)}
                </div>
            );
        } else if (language === 'json') {
            return (
                <div className="json-content">
                    {renderJSON(content)}
                </div>
            );
        } else {
            return (
                <div className="code-editor">
                    <div className="line-numbers">
                        {lines.map((_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <div className="code-content">
                        {renderCode(content, language)}
                    </div>
                </div>
            );
        }
    };

    const renderMarkdown = (text: string) => {
        const parts = text.split('\n');
        const elements: React.JSX.Element[] = [];
        let listItems: React.JSX.Element[] = [];
        let key = 0;

        const flushList = () => {
            if (listItems.length > 0) {
                elements.push(<ul key={`list-${key++}`} style={{ marginLeft: '20px', marginBottom: '16px' }}>{listItems}</ul>);
                listItems = [];
            }
        };

        parts.forEach((line) => {
            if (line.startsWith('# ')) {
                flushList();
                elements.push(<h1 key={key++} className="fade-in" style={{ marginBottom: '16px', fontSize: '32px', fontWeight: 'bold' }}>{line.substring(2)}</h1>);
            } else if (line.startsWith('## ')) {
                flushList();
                elements.push(<h2 key={key++} className="fade-in" style={{ marginTop: '24px', marginBottom: '12px', fontSize: '24px', fontWeight: '600' }}>{line.substring(3)}</h2>);
            } else if (line.startsWith('### ')) {
                flushList();
                elements.push(<h3 key={key++} className="fade-in" style={{ marginTop: '20px', marginBottom: '10px', fontSize: '18px', fontWeight: '600' }}>{line.substring(4)}</h3>);
            } else if (line.startsWith('- ')) {
                listItems.push(<li key={key++} className="fade-in" style={{ marginBottom: '8px' }}>{parseInlineMarkdown(line.substring(2))}</li>);
            } else if (line.trim() === '---') {
                flushList();
                elements.push(<hr key={key++} style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border-primary)' }} />);
            } else if (line.trim() === '') {
                flushList();
                elements.push(<div key={key++} style={{ height: '8px' }} />);
            } else {
                flushList();
                elements.push(<p key={key++} className="fade-in" style={{ marginBottom: '12px', lineHeight: '1.6' }}>{parseInlineMarkdown(line)}</p>);
            }
        });

        flushList();
        return elements;
    };

    const parseInlineMarkdown = (text: string) => {
        const parts: (string | React.JSX.Element)[] = [];
        let currentText = text;
        let key = 0;

        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(currentText)) !== null) {
            if (match.index > lastIndex) {
                const beforeText = currentText.substring(lastIndex, match.index);
                parts.push(...parseBoldText(beforeText, key++));
            }

            const linkText = match[1];
            const url = match[2];
            parts.push(
                <a
                    key={`link-${key++}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="markdown-link"
                    style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}
                >
                    {linkText}
                </a>
            );

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < currentText.length) {
            const remainingText = currentText.substring(lastIndex);
            parts.push(...parseBoldText(remainingText, key++));
        }

        return parts.length > 0 ? parts : currentText;
    };

    const parseBoldText = (text: string, startKey: number): (string | React.JSX.Element)[] => {
        const parts: (string | React.JSX.Element)[] = [];
        const boldRegex = /\*\*([^*]+)\*\*/g;
        let lastIndex = 0;
        let match;
        let key = startKey;

        while ((match = boldRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push(text.substring(lastIndex, match.index));
            }

            parts.push(
                <strong key={`bold-${key++}`} className="markdown-bold" style={{ fontWeight: '600' }}>
                    {match[1]}
                </strong>
            );

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [text];
    };

    const renderJSON = (text: string) => {
        try {
            const parsed = JSON.parse(text);
            return (
                <div className="code-editor">
                    <div className="line-numbers">
                        {text.split('\n').map((_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>
                    <div className="code-content">
                        <pre>{syntaxHighlightJSON(parsed, 0)}</pre>
                    </div>
                </div>
            );
        } catch {
            return <pre>{text}</pre>;
        }
    };

    const syntaxHighlightJSON = (obj: any, indent: number): any => {
        const indentStr = '  '.repeat(indent);

        if (typeof obj === 'string') {
            return <span className="json-string">"{obj}"</span>;
        } else if (typeof obj === 'number') {
            return <span className="json-number">{obj}</span>;
        } else if (typeof obj === 'boolean') {
            return <span className="json-boolean">{obj.toString()}</span>;
        } else if (Array.isArray(obj)) {
            return (
                <>
                    {'[\n'}
                    {obj.map((item, i) => (
                        <span key={i}>
                            {indentStr}  {syntaxHighlightJSON(item, indent + 1)}
                            {i < obj.length - 1 ? ',\n' : '\n'}
                        </span>
                    ))}
                    {indentStr}{']'}
                </>
            );
        } else if (typeof obj === 'object' && obj !== null) {
            const keys = Object.keys(obj);
            return (
                <>
                    {'{\n'}
                    {keys.map((key, i) => (
                        <span key={key}>
                            {indentStr}  <span className="json-key">"{key}"</span>: {syntaxHighlightJSON(obj[key], indent + 1)}
                            {i < keys.length - 1 ? ',\n' : '\n'}
                        </span>
                    ))}
                    {indentStr}{'}'}
                </>
            );
        }
        return String(obj);
    };

    const renderCode = (text: string, lang: string) => {
        if (lang === 'tsx' || lang === 'ts') {
            return renderTypeScript(text);
        }
        return <pre>{text}</pre>;
    };

    const renderTypeScript = (text: string) => {
        return text.split('\n').map((line, i) => {
            // If line is empty, return empty div
            if (!line) return <div key={i}>&nbsp;</div>;

            // Tokenize the line
            const tokens: { type: string; value: string }[] = [];
            let remaining = line;

            while (remaining.length > 0) {
                // Comments
                if (remaining.match(/^\s*\/\/.*/)) {
                    tokens.push({ type: 'comment', value: remaining });
                    remaining = '';
                    continue;
                }

                // Strings (single, double, backtick)
                const stringMatch = remaining.match(/^(['"`])(.*?)\1/);
                if (stringMatch) {
                    tokens.push({ type: 'string', value: stringMatch[0] });
                    remaining = remaining.slice(stringMatch[0].length);
                    continue;
                }

                // Keywords
                const keywords = /^(interface|const|let|var|function|return|import|export|type|class|extends|implements|from|default)\b/;
                const keywordMatch = remaining.match(keywords);
                if (keywordMatch) {
                    tokens.push({ type: 'keyword', value: keywordMatch[0] });
                    remaining = remaining.slice(keywordMatch[0].length);
                    continue;
                }

                // Booleans
                const booleans = /^(true|false)\b/;
                const booleanMatch = remaining.match(booleans);
                if (booleanMatch) {
                    tokens.push({ type: 'boolean', value: booleanMatch[0] });
                    remaining = remaining.slice(booleanMatch[0].length);
                    continue;
                }

                // Numbers
                const numbers = /^\d+(\.\d+)?/;
                const numberMatch = remaining.match(numbers);
                if (numberMatch) {
                    tokens.push({ type: 'number', value: numberMatch[0] });
                    remaining = remaining.slice(numberMatch[0].length);
                    continue;
                }

                // Object keys (word followed by colon)
                const keyMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=:)/);
                if (keyMatch) {
                    tokens.push({ type: 'property', value: keyMatch[0] });
                    remaining = remaining.slice(keyMatch[0].length);
                    continue;
                }

                // Function calls
                const funcMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\()/);
                if (funcMatch) {
                    tokens.push({ type: 'function', value: funcMatch[0] });
                    remaining = remaining.slice(funcMatch[0].length);
                    continue;
                }

                // Types/Classes (Capitalized words)
                const typeMatch = remaining.match(/^[A-Z][a-zA-Z0-9_$]*/);
                if (typeMatch) {
                    tokens.push({ type: 'type', value: typeMatch[0] });
                    remaining = remaining.slice(typeMatch[0].length);
                    continue;
                }

                // Regular words/identifiers
                const wordMatch = remaining.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*/);
                if (wordMatch) {
                    tokens.push({ type: 'variable', value: wordMatch[0] });
                    remaining = remaining.slice(wordMatch[0].length);
                    continue;
                }

                // Whitespace
                const spaceMatch = remaining.match(/^\s+/);
                if (spaceMatch) {
                    tokens.push({ type: 'whitespace', value: spaceMatch[0] });
                    remaining = remaining.slice(spaceMatch[0].length);
                    continue;
                }

                // Operators/Punctuation (take one char)
                tokens.push({ type: 'punctuation', value: remaining[0] });
                remaining = remaining.slice(1);
            }

            return (
                <div key={i}>
                    {tokens.map((token, idx) => {
                        let className = '';
                        switch (token.type) {
                            case 'keyword': className = 'keyword'; break;
                            case 'string': className = 'string'; break;
                            case 'comment': className = 'comment'; break;
                            case 'number': className = 'number'; break;
                            case 'boolean': className = 'boolean'; break;
                            case 'property': className = 'property'; break;
                            case 'function': className = 'function'; break;
                            case 'type': className = 'type'; break;
                            default: className = '';
                        }
                        return <span key={idx} className={className}>{token.value}</span>;
                    })}
                </div>
            );
        });
    };

    return (
        <div className="editor-content">
            {renderContent()}
        </div>
    );
}
