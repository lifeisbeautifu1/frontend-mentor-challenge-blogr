import { Navbar, Header, Section, Article, Footer } from './components';
import firstSectionImage from './images/illustration-editor-desktop.svg';
import secondSectionImage from './images/illustration-laptop-desktop.svg';

function App() {
  return (
    <div className="font-primary text-white">
      <div className="w-screen header-bg relative overflow-hidden rounded-bl-[100px]">
        <Navbar />
        <Header />
        <svg
          className="absolute z-0 -right-[1300px] -bottom-[1200px]"
          xmlns="http://www.w3.org/2000/svg"
          width="3175"
          height="3174"
        >
          <defs>
            <linearGradient id="a" x1=".639%" x2="99.361%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF8F71" />
              <stop offset="100%" stop-color="#FF3E55" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            fill-rule="evenodd"
            d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z"
            transform="rotate(22 162.072 2556.164)"
          />
        </svg>
      </div>
      <Section
        heading="Designed for the future"
        firstHeading="Introducing an extensible editor"
        firstParagraph="  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog."
        secondHeading="Robust content management"
        secondParagraph="Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
        image={firstSectionImage}
      />
      <Article />
      <Section
        reverse
        firstHeading="Free, open, simple"
        firstParagraph="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        secondHeading="Powerful tooling"
        secondParagraph="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites."
        image={secondSectionImage}
      />
      <Footer />
    </div>
  );
}

export default App;
