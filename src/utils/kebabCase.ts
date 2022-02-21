const slug = require('github-slugger').slug;

const kebabCase = (str: string) => slug(str);

export default kebabCase;
