// @ts-ignore
import mdToc from "markdown-toc-unlazy";

interface Toc {
  level: number;
  title: string;
  slug: string;
}

interface mdTocProps {
  lvl: number;
  content: string;
  slug: string;
}

function generateToc(md: string): Array<Toc> {
  const parseToc = ({ lvl, content, slug }: mdTocProps): Toc => ({
    level: lvl,
    title: content,
    slug,
  });

  const toc = mdToc(md).json.map(parseToc);

  return toc;
}

export default generateToc;
