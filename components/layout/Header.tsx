export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <h1>Autism Care</h1>
        </div>
        <nav>{/* Navigation items akan ditambahkan di sini */}</nav>
      </div>
    </header>
  );
} 