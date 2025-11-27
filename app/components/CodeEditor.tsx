'use client';

interface CodeEditorProps {
    fileName: string;
    content: string;
    language: string;
}

export default function CodeEditor({ fileName, content, language }: CodeEditorProps) {
    const lines = content.split('\n');

    const renderContent = () => {
        if (language === 'markdown') {
            return (
                <div className="markdown-content">
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
        const elements: JSX.Element[] = [];
        let listItems: JSX.Element[] = [];
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
        const parts: (string | JSX.Element)[] = [];
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

    const parseBoldText = (text: string, startKey: number): (string | JSX.Element)[] => {
        const parts: (string | JSX.Element)[] = [];
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
        const keywords = ['interface', 'const', 'let', 'var', 'function', 'return', 'import', 'export', 'type', 'class', 'extends', 'implements'];

        return text.split('\n').map((line, i) => {
            let highlighted = line;

            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'g');
                highlighted = highlighted.replace(regex, `<span className="keyword">${keyword}</span>`);
            });

            highlighted = highlighted.replace(/(["` ])(.*?)\1/g, '<span className="string">$1$2$1</span>');
            highlighted = highlighted.replace(/(\/\/.*$)/g, '<span className="comment">$1</span>');

            return <div key={i} dangerouslySetInnerHTML={{ __html: highlighted }} />;
        });
    };

    return (
        <div className="editor-content">
            {renderContent()}
        </div>
    );
}
