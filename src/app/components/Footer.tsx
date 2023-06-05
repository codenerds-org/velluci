const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white py-12">
      <div className="flex flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Velluci</h1>
          <p className="text-sm">Street-style luxury</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Contact</h1>
          <p className="text-sm">
            <a href="mailto:contact@codenerds.tech">contact@codenerds.tech</a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">Social</h1>
          <p className="text-sm">
            <a href="https://www.instagram.com/velluci_official/">Instagram</a>
          </p>
        </div>
      </div>
      <p className="text-sm mt-8">
        © {new Date().getFullYear()} Velluci. All rights reserved.
      </p>
      <p className="text-sm">
        Designed by <a href="https://codenerds.tech">Code Nerds</a>
      </p>
    </footer>
  );
};

export default Footer;
