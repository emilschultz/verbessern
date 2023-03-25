export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'pretitle',
      type: 'string',
      title: 'Pretitle',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body',
    },
  ],
}
