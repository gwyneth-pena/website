export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-center py-12">
      <p>&copy; {year} All rights reserved.</p>
    </footer>
  );
}
