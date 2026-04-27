
function parseYoastHeadSSR(html: string | undefined): any {
  if (!html) return { title: '', meta: [], link: [], script: [] };


  let title = '';

  // Parse meta tags
  const metaRegex = /<meta\b([^>]*)>/gi;
  let metaMatch;
  while ((metaMatch = metaRegex.exec(html)) !== null) {
    const attrs = metaMatch[1] || '';
    const nameMatch = /name=["']([^"']+)["']/i.exec(attrs);
    const propertyMatch = /property=["']([^"']+)["']/i.exec(attrs);
    const contentMatch = /content=["']([^"']+)["']/i.exec(attrs);

    if (contentMatch?.[1]) {

    }
  }

  // Parse link tags
  const linkRegex = /<link\b([^>]*)>/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const attrs = linkMatch[1] || '';
    const relMatch = /rel=["']([^"']+)["']/i.exec(attrs);
    const hrefMatch = /href=["']([^"']+)["']/i.exec(attrs);

    if (relMatch?.[1] && hrefMatch?.[1]) {

    }
  }

  // Parse script tags
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let scriptMatch;
  while ((scriptMatch = scriptRegex.exec(html)) !== null) {
    const attrs = scriptMatch[1] || '';
    const typeMatch = /type=["']([^"']+)["']/i.exec(attrs);
    const innerHTML = scriptMatch[2] || '';

  }

  // Parse title tag
  const titleRegex = /<title>([\s\S]*?)<\/title>/i;
  const titleMatch = titleRegex.exec(html);
  if (titleMatch?.[1]) {
    title = titleMatch[1];
  }

  return { title };
}

export function useYoastHead(fullYoastHead: string | undefined) {
  return parseYoastHeadSSR(fullYoastHead);
}
