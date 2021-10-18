import React from "react";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
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
