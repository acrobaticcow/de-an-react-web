import { Link } from "react-router-dom";

interface Props {
  className?: string,
  to?: string,
  name?: string,
}

export default ({ className, to, name }: Props) => {
  return (
    <Link className={className} to={to ?? "/"}>
      <div>{name}</div>
    </Link>
  );
};
