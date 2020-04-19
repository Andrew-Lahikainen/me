import React from 'react'

export type IconProps = {
  height?: number
  width?: number
  fill?: string
  className?: string
}

const DefaultProps: IconProps = {
  height: 24,
  width: 24,
}

export const createIconComponent = (
  svg: BrowserSpriteSymbol
): React.FunctionComponent<IconProps> => ({
  height = DefaultProps.height,
  width = DefaultProps.width,
  fill,
  className,
}: IconProps) => (
  <svg
    className={className ?? ''}
    fill={fill}
    height={height}
    width={width}
    style={{ verticalAlign: 'middle' }}
  >
    <use xlinkHref={`#${svg.id}`}></use>
  </svg>
)
