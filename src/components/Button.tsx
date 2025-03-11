import { type ComponentPropsWithoutRef } from "react";

type ButtonPropType = ComponentPropsWithoutRef<"button"> & { href?: never };
type LinkPropType = ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(
  props: ButtonPropType | LinkPropType
): props is LinkPropType {
  return "href" in props;
}
const Button = (props: ButtonPropType | LinkPropType) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
