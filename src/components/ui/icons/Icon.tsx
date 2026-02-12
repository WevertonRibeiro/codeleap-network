import { EditIcon } from "./icons/EditIcon/EditIcon";
import { DeleteIcon } from "./icons/DeleteIcon/DeleteIcon";
import type { IconName } from "./types/icon.types";

const icons = {
  edit: EditIcon,
  delete: DeleteIcon,
};

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 30, className }: Props) {
  const Component = icons[name];
  return <Component width={size} height={size} className={className} />;
}
