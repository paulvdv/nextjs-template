import "../styles/Button.css";

export default function ButtonLink({
  text,
  href,
  children,
}: React.PropsWithChildren<{
  text: string;
  href: string;
}>): JSX.Element {
  return (
    <a
      className='btn btn-primary'
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
      {text}
    </a>
  );
}
