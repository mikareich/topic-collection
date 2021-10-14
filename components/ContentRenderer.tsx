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
  const components: Partial<NormalComponents & SpecialComponents> = {
    a: ({ children, href }) => <Link href={href!}>{children}</Link>,
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
