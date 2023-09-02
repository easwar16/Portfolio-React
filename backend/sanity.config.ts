import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import testimonials from './schemas/testimonials'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: "easwar's_portfolio",

  projectId: 'dz009swe',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
