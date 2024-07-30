import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'sanity-sunrise-medika',

  projectId: '62ypl7jk',
  dataset: 'production',
  basePath: "/studio",

  plugins: [ 
    structureTool({
      structure: myStructure
      }), 
    visionTool(),

  ],

  schema: {
    types: schemaTypes,
  },
})
