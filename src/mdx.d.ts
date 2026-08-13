declare module '*.mdx' {
  import type { ComponentType } from 'react'
  export const meta: {
    title: string
    titleEn: string
    date: string
    tags: string[]
    summary: string
  }
  const MDXComponent: ComponentType<Record<string, unknown>>
  export default MDXComponent
}
