import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'payment_status',
  title: 'Payment Status',
  type: 'document',
  fields: [
    defineField({
      name: 'payment_status_name',
      title: 'Payment Status Name',
      type: 'string',
      description: 'Name of the payment status',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
