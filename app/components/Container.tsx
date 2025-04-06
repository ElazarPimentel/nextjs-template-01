import { HTMLAttributes, ReactNode } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hasBorder?: boolean;
  align?: 'left' | 'center';
};

export default function Container({
  children,
  className = '',
  hasBorder = false,
  align,
  ...props
}: ContainerProps) {
  const baseClass = hasBorder ? 'container-basic-border' : 'container-basic';
  const alignClass = align === 'center' 
    ? 'container-basic-center' 
    : align === 'left' 
      ? 'container-basic-left' 
      : '';
  
  const combinedClassName = `${baseClass} ${alignClass} ${className}`.trim();
  
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
} 