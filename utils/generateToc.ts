import GithubSlugger from "github-slugger";
// @ts-ignore
import mdToc from "markdown-toc-unlazy";

interface Toc {
  level: number;
  title: string;
  id: string;
}

interface mdTocProps {
  lvl: number;
  content: string;
}

const slugger = new GithubSlugger();

/**
 * Creates a table of contents from a markdown file.
 * @param md Markdown content
 * @returns Table of contents
 */
function generateToc(md: string): Array<Toc> {
  slugger.reset();

  const parseToc = ({ lvl, content }: mdTocProps): Toc => ({
    level: lvl,
    title: content,
    id: encodeURI(slugger.slug(content)),
  });

  const toc = mdToc(md).json.map(parseToc);

  return toc;
}

export default generateToc;
