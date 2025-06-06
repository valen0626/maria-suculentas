import Enlaces from "./Enlaces";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white px-6 py-8 flex flex-col items-center gap-4 text-sm sm:text-base">
      <Enlaces />
      <p className="text-center">
        © 2025 | Medellín - Colombia
      </p>
    </footer>
  );
};

export default Footer;
