# Portfolio

This folders includes a react + typescript + vite app with two pages `/` (accessible) and `/inaccessible` where you can find a portfolio example. One accessible and the other one with a lot of errors.

Now, we will talk about the main errors.

## 1.1.1 Non-text Content

All non-text content that is presented to the user has a text alternative that serves the equivalent purpose.

In this portfolio images does not have the correct "alt" property.

**solution**

```tsx
// Avatar.tsx
// Adding a correct alt describing the image
import avatar from "../../../../assets/avatar.jpg";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center mb-4">
      <img
        className="border-slate-600 border-2 rounded-full"
        src={avatar}
        width={200}
        height={200}
        alt="ByteMystique IA generated avatar"
      />
    </div>
  );
}
```

```tsx
/// Languages.tsx
// Don't use the alt with the name to repeat the same value as the text
// The image is described by the next text
import LANGUAGES from "../../../../data/languages";
import { Badge } from "../Badge";
import Section from "../Section";

export default function Languages() {
  return (
    <Section title="Languages">
      <div className="flex flex-wrap gap-1">
        {LANGUAGES.map((language) => (
          <Badge
            key={language.name}
            content={
              <>
                <img
                  className="mr-1"
                  src={language.imagePath}
                  width={25}
                  height={25}
                  alt={language.name}
                />
                <span id={language.name}>{language.name}</span> <span>({language.level})</span>
                
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
}
```

```tsx
// NavLinks.tsx
// remove the alt in the image and include aria-label with a descriptive value like:
// Follow me on "LinkedIn", "Github", "Medium"
import NAV_LINKS from "../../../../data/nav-links";

export default function NavLinks() {
  return (
    <div className="flex justify-center gap-4 mt-4 opacity-60">
      {NAV_LINKS.map((link) => (
        <a key={link.name} href={link.url} aria-label={`Follow me on ${link.name}`} target="_blank">
          <img src={link.imagePath} width={40} height={40} alt="" />
        </a>
      ))}
    </div>
  );
}
```

## 1.3.1 Info and Relationships

Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

Our form does not have `<label>` tags. It uses `<p>` instead. That's a problem as we are not describing our inputs. We need to change the tag and include the `for` attribute, in react `htmlFor` and also the IDs on each input.

```tsx
// Add the correct label tag and the htmlFor
import Section from "../Section";

export default function Contact() {
  return (
    <Section title="Contact">
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-2 border-2 rounded border-slate-600 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </Section>
  );
}
```

Related to this criteria. There are some problems with the headings. We have h3, h4 but we don't have h1 and h2. We can fix that adding h2 to each Section and h1 in the Header component. Also we could improve semantics of the html using section tag.

**solution**

```tsx
// adding section tag and h2
export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-bold border-b-2 border-slate-600 leading-8 mb-4">
        {title}
      </h2>
      {children ?? <></>}
    </section>
  );
}
```

```tsx
// Header/index.tsx
// Use h1 instead
import Arrow from "./Arrow";
import NavLinks from "./NavLinks";
import Avatar from "./Avatar";

export function Header() {
  return (
    <header className="text-center mb-10 h-screen bg-gradient-to-b flex justify-center items-center flex-col rounded-md p-4">
      <Avatar />
      <h1 className="font-bold">ByteMystique</h1>
      <p className="text-lg font-semibold text-neutral-300">Senior Developer</p>
      <p className="text-lg">📍 Palo alto, CA</p>
      <NavLinks />
      <Arrow />
    </header>
  );
}
```

## 1.4 Distinguishable

Make it easier for users to see and hear content including separating foreground from background. [WCAG](https://www.w3.org/TR/WCAG22/#distinguishable).

## 1.4.3 Contrast (Minimum)

(Level AA)
The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:

**Large Text**
Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

In these portfolio there are a lot of errors with the contrast. Most of the texts and the background are not valid and you can check that using the [wave extesion](https://wave.webaim.org/extension/) or this [contrast checker](https://webaim.org/resources/contrastchecker/).

**Solution**

```tsx
// Add better background bg-slate-800 text-white pb-12
import Content from "./components/Content";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="bg-slate-800 text-white pb-12">
      <Header />
      <div>
        <Content />
      </div>
    </div>
  );
}
```

We also need to fix the color of our inputs when we type. That's something we have to test manually wave nor lighthouse will give us that info.

We have to change the class name `text-slate-400` to `text-black`.

⚠ This will not be [AAA compliance](https://www.w3.org/TR/WCAG22/#contrast-enhanced) for the submit button in the form ⚠ 
 
## 2.1.1 Keyboard

All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

In this page we have an arrow key that is not accessible with keyboard and it is not working. We need to add a link to an id, and then we have to add the aria-label to describe what's the purpose of the link.

**solution**

```tsx
// add link and aria-label
export default function Arrow() {
  return (
    <a
      href="#content"
      className="absolute bottom-5"
      aria-label="go to my experience"
    >
      <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[16px] border-white cursor-pointer animate-bounce"></div>
    </a>
  );
}
```

## 2.4.2 Page Titled

(Level A)
Web pages have titles that describe topic or purpose.

**solution**

We need to include a title to our page.

```html
<title>ByteMystique portfolio</title>
```

## 3.1.1 Language of Page

(Level A)
The default human language of each Web page can be programmatically determined.

**Solution**

We need to add the lang to the index.html file.

```html
<!doctype html>
<html className="scroll-smooth" lang="en">
```

Fix blog form

1.1.1 Non-text Content (Level A)
1.3.1 Info and Relationships (Level A)
2.4.6 Headings and Labels (Level AA)
3.3.2 Labels or Instructions (Level A)

Ajustar contrastes cambiando el del button y el const communInputStyle = "p-2 border-2 rounded border-slate-600 text-slate-500";
añadir required, añadir label, añadir mensajes de error (ocultar *) para SR

Fix blog items

1.4.3 Contrast (Minimum) (Level AA)
Icon index
2.4.4 Link Purpose (In Context) (Level A)
Icon index


añadir lista para las cards, añadir alt para las cards y mejorar contraste del link text-blue-600
Arreglar links con el mismo texto, añadir prop para el link ya que es el mismo