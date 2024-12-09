import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'guest',
  title: 'Guest',
  type: 'document',
  fields: [
    defineField({
      name: 'first_name',
      title: 'First Name',
      type: 'string',
      description: 'First name of the guest',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      description: 'Last name of the guest',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email_address',
      title: 'Email Address',
      type: 'string',
      description: 'Email address of the guest',
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
      description: 'Phone number of the guest',
      validation: (Rule) =>
        Rule.regex(/^\+?[1-9]\d{1,14}$/, {
          name: 'phone number',
          message: 'Invalid phone number format',
        }),
    }),
  ],
});
