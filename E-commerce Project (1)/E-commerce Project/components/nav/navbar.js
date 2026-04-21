import { logo } from "./logo.js";

export function Navbar() {
  return `
        <section class="w-full fixed top-0 backdrop-blur-sm z-50">
      <div
        class="flex w-full h-full mx-auto max-w-400 gap-5 items-center justify-between px-4 py-5"
      >
        ${logo()}

        <nav class="hidden md:flex gap-8 text-base h-full font-semibold">
          <ul class="flex gap-7 h-full">
            <li class="h-full">
              <a
                href=""
                class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                >Feature</a
              >
            </li>
            <li class="h-full">
              <a
                href=""
                class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                >Products</a
              >
            </li>
            <li class="h-full">
              <a
                href=""
                class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>

        <div class="block md:hidden">
          <div
            id="menu-bar"
            class="p-2 border border-dashed hover:border-green-600 group/bar"
          >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

          </div>

          <div
            id="mobile-menu"
            class="hidden fixed w-full left-0 top-25 backdrop-blur-sm h-200 bg-stone-400/40"
          >
            <nav class="flex flex-col gap-8 text-2xl h-full w-full p-10 items-center font-semibold">
              <ul class="flex flex-col gap-10 w-full items-center">
                <li class="h-full">
                  <a
                    href="index.html#feature"
                    class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                    >Feature</a
                  >
                </li>
                <li class="h-full">
                  <a
                    href="index.html#products"
                    class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                    >Products</a
                  >
                </li>
                <li class="h-full">
                  <a
                    href="index.html#contactUs"
                    class="h-full inline-flex items-center px-2 hover:text-lg hover:text-green-600 transition-all duration-300"
                    >Contact Us</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    
    `;
}
