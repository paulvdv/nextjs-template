import "../styles/Button.css";

export default function Button({
  text,
  onClick = () => {},
  children,
}: React.PropsWithChildren<{
  text: string;
  onClick?: () => void;
}>): JSX.Element {
  return (
    <button className={`btn btn-primary`} onClick={onClick}>
      {children}
      {text}
    </button>
  );
}
