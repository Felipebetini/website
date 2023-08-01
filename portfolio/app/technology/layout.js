import './style.css';

export default function Technology({
  children, // will be a page or nested layout
}) {
  return <section>{children}</section>;
}
