import prism from 'prismjs'
import { marked } from 'marked'

marked.setOptions({
  highlight: function(code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
  langPrefix: 'language-',
});

export const parseMarkdown = (content: string) => ({ __html: marked.parse(content) })
