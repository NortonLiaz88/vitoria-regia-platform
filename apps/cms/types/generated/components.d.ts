import type { Schema, Struct } from '@strapi/strapi';

export interface ExampleCategoryExample extends Struct.ComponentSchema {
  collectionName: 'components_example_category_examples';
  info: {
    displayName: 'Example';
    icon: 'alien';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'example-category.example': ExampleCategoryExample;
    }
  }
}
