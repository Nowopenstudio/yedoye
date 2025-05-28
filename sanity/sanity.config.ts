import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './deskStucture'
import {muxInput} from "sanity-plugin-mux-input"

export default defineConfig({
  name: 'yedoye',
  title: 'Yedoye',

  projectId: 'yinykyma',
  dataset: 'production',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),muxInput()],

  schema: {
    types: schemaTypes,
  },
})
