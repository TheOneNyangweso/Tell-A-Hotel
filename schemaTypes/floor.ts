import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'floor',
  title: 'Floor',
  type: 'document',
  fields: [
    defineField({
      name: 'floor_number',
      title: 'Floor Number',
      type: 'number',
      description: 'Number of the floor',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
