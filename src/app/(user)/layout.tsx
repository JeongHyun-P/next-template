export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
