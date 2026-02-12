import { Card } from "../Card/Card";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card type="secondary">
      <p>{title}</p>
      <span>{description}</span>
    </Card>
  );
}
