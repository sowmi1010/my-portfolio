export default function Footer() {
  return (
    <footer className="bg-purple-700 dark:bg-gray-900 text-white dark:text-yellow-300 p-4 text-center transition-colors duration-300">
      &copy; {new Date().getFullYear()} Sowmiya Thangadurai. All rights reserved.
    </footer>
  );
}
