export default function Button({
  text,
}: Readonly<{
  text: string;
}>) {
  return <button>{text}</button>;
}
