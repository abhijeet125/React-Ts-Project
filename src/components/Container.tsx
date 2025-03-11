import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

type ContainerProp<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;
function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProp<C>) {
  const ConComp = as;
  return <ConComp {...props}>{children}</ConComp>;
}

export default Container;
