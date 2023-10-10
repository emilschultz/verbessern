
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "lcx1et8p",
  dataset: "production",
  useCdn: false
});