export default function Button({
  text,
  onClick = () => {},
}: React.PropsWithChildren<{
  text: string;
  onClick?: () => void;
}>): JSX.Element {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
}
