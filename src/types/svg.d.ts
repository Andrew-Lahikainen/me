type BrowserSpriteSymbol = {
  id: string
  viewBox: string
  content: string
  node: SVGSymbolElement
}

declare module '*.svg' {
  const content: BrowserSpriteSymbol
  export default content
}
