export default function Button(
  props: React.PropsWithChildren<{ text: string; onClick: () => void }>,
): JSX.Element {
  return (
    <button className='btn' onClick={props.onClick}>
      {props.text}
    </button>
  );
}
