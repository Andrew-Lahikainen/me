import React from 'react'

export type IconProps = {
  height?: number
  width?: number
  fill?: string
  className?: string
  style?: Record<string, string | number>
}

const DefaultProps: IconProps = {
  height: 24,
  width: 24,
  style: { verticalAlign: 'middle' },
}

export const createIconComponent = (
  svg: BrowserSpriteSymbol
): React.FunctionComponent<IconProps> => (props: IconProps) => {
  props = { ...DefaultProps, ...props }
  props.style = { ...DefaultProps.style, ...props.style }

  return (
    <svg
      className={props.className ?? ''}
      fill={props.fill}
      height={props.height}
      width={props.width}
      style={props.style}
    >
      <use xlinkHref={`#${svg.id}`}></use>
    </svg>
  )
}
