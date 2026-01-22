import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-12 text-center md:text-left">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <h4 className="mb-4 font-sans text-sm font-black tracking-widest text-black uppercase">
              The White Line.
            </h4>
            <p className="font-serif text-sm text-neutral-500">
              An independent archive dedicated to harm reduction, humanizing the
              user, and dismantling the stigma of addiction through science and
              history.
            </p>
          </div>

          {/* Emergency Links */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-bold tracking-widest text-black uppercase">
              External Support
            </h4>
            <ul className="space-y-2 font-serif text-sm text-neutral-500">
              <li>
                <a
                  href="https://www.na.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black hover:underline"
                >
                  Narcotics Anonymous (Global)
                </a>
              </li>
              <li>
                <a
                  href="https://harmreduction.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black hover:underline"
                >
                  National Harm Reduction Coalition
                </a>
              </li>
              <li>
                <a
                  href="https://dancesafe.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black hover:underline"
                >
                  DanceSafe (Testing Kits)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 border-t border-neutral-100 pt-8 text-center">
          <p className="mx-auto max-w-4xl font-sans text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
            Disclaimer: The content provided on this platform is for educational
            and harm reduction purposes only. It is not medical advice, nor does
            it encourage the use of illegal substances. If you are in immediate
            danger, please contact emergency services.
          </p>
          <p className="mt-4 font-sans text-[10px] text-neutral-300">
            © {new Date().getFullYear()} The White Line Archive. Open Source.
          </p>
        </div>
      </div>
    </footer>
  );
}
