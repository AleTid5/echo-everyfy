const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-4 bg-neutral-200 dark:bg-neutral-600">
      <span className="text-sm text-gray-500 dark:text-gray-400">
        © {year} EchoEveryfy. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
