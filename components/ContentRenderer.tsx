import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";

import Link from "./Link";

interface ContentRendererProps {
  content: string;
}

function ContentRenderer({ content }: ContentRendererProps) {
  interface HeadingProps {
    children: React.ReactNode | React.ReactNode[];
    id: string;
  }

  const components: Partial<NormalComponents & SpecialComponents> = {
    a: ({ children, href }) => <Link href={href!}>{children}</Link>,
    // @ts-ignore
    h1: ({ children, id, ...props }: HeadingProps) => (
      <h1 id={encodeURI(id)} {...props}>
        {children}
      </h1>
    ),
    // @ts-ignore
    h2: ({ children, id, ...props }: HeadingProps) => (
      <h2 id={encodeURI(id)} {...props}>
        {children}
      </h2>
    ),
    // @ts-ignore
    h3: ({ children, id, ...props }: HeadingProps) => (
      <h3 id={encodeURI(id)} {...props}>
        {children}
      </h3>
    ),
    // @ts-ignore
    h4: ({ children, id, ...props }: HeadingProps) => (
      <h4 id={encodeURI(id)} {...props}>
        {children}
      </h4>
    ),
    // @ts-ignore
    h5: ({ children, id, ...props }: HeadingProps) => (
      <h5 id={encodeURI(id)} {...props}>
        {children}
      </h5>
    ),
    // @ts-ignore
    h6: ({ children, id, ...props }: HeadingProps) => (
      <h6 id={encodeURI(id)} {...props}>
        {children}
      </h6>
    ),
  };

  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, remarkSlug]}
    >
      {content}
    </ReactMarkdown>
  );
}

export default ContentRenderer;
