import React from "react";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";

import Heading from "./Heading";
import Link from "./Link";

interface ContentRendererProps {
  content: string;
}

function ContentRenderer({ content }: ContentRendererProps) {
  const components: Partial<NormalComponents & SpecialComponents> = {
    a: ({ children, href }) => <Link href={href!}>{children}</Link>,
    // @ts-ignore
    h1: Heading,
    // @ts-ignore
    h2: Heading,
    // @ts-ignore
    h3: Heading,
    // @ts-ignore
    h4: Heading,
    // @ts-ignore
    h5: Heading,
    // @ts-ignore
    h6: Heading,
    // @ts-ignore
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          customStyle={{ background: "none" }}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, remarkSlug]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
}

export default ContentRenderer;
