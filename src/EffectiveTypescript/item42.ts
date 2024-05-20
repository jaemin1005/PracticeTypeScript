interface Book {
  name: string;
  author: string;
}

function parseYAML(yaml : string) : any {

}

function safeParseYAML(yaml: string) : unknown {
  return parseYAML(yaml)
}

const book = safeParseYAML(`
  name: The Tenant of Wildfell Hall
  author : Anne Bronte
`) as Book

alert(book.title);
book("read");

