"use client";

import BinaryCursor from "binary-cursor";

export default function BinaryCursorBlog() {
  return (
    <div className="relative px-6 py-10 max-w-3xl mx-auto text-white bg-[#0a0a0a] min-h-screen font-mono">
      <BinaryCursor />

      <h1 className="text-4xl font-bold mb-6 text-green-400">
        🧬 Binary Cursor – React & Next.js Cursor Effect
      </h1>

      <p className="mb-4">
        <strong>Binary Cursor</strong> is a lightweight React and Next.js
        component that emits floating <code>0</code>s and <code>1</code>s while
        the user moves the mouse, adding a slick cyber aesthetic to your site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        🚀 Installation
      </h2>
      <pre className="bg-black p-4 rounded text-green-200 mb-4">
        npm install binary-cursor
        <br />
        # or
        <br />
        yarn add binary-cursor
        <br />
        # or
        <br />
        pnpm add binary-cursor
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        ⚙️ Usage (Next.js)
      </h2>
      <p className="mb-4">
        Since this is a client-side only effect, you&apos;ll need to import it
        dynamically or use the <code>&apos;use client&apos;</code> directive.
      </p>

      <h3 className="text-xl font-semibold text-green-200 mb-2">
        Option 1: Dynamic Import (Recommended)
      </h3>
      <pre className="bg-black p-4 rounded text-green-200 mb-4">
        import dynamic from &apos;next/dynamic&apos;;
        <br />
        <br />
        const BinaryCursor = dynamic(() =&gt; import(&apos;binary-cursor&apos;),
        &#123; ssr: false &#125;);
        <br />
        <br />
        export default function Page() &#123;
        <br />
        &nbsp;&nbsp;return &lt;&gt;&lt;BinaryCursor /&gt;&lt;/&gt;;
        <br />
        &#125;
      </pre>

      <h3 className="text-xl font-semibold text-green-200 mb-2">
        Option 2: Use in Client Component
      </h3>
      <pre className="bg-black p-4 rounded text-green-200 mb-4">
        &apos;use client&apos;;
        <br />
        import BinaryCursor from &apos;binary-cursor&apos;;
        <br />
        <br />
        export default function Page() &#123;
        <br />
        &nbsp;&nbsp;return &lt;BinaryCursor /&gt;;
        <br />
        &#125;
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        🧩 Props
      </h2>
      <ul className="list-disc ml-6 text-green-100 space-y-1">
        <li>
          <strong>color</strong>: Particle color (default <code>#12E193</code>)
        </li>
        <li>
          <strong>size</strong>: Font size of binary (default <code>13</code>)
        </li>
        <li>
          <strong>count</strong>: Particles per emission (default <code>2</code>
          )
        </li>
        <li>
          <strong>spread</strong>: Spread radius (default <code>2</code>)
        </li>
        <li>
          <strong>duration</strong>: Particle lifespan (default{" "}
          <code>1100ms</code>)
        </li>
        <li>
          <strong>frequency</strong>: Delay between emissions (default{" "}
          <code>80ms</code>)
        </li>
        <li>
          <strong>movementThreshold</strong>: Minimum movement (default{" "}
          <code>5px</code>)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        🎨 Custom Example
      </h2>
      <pre className="bg-black p-4 rounded text-green-200 mb-4">
        &lt;BinaryCursor
        <br />
        &nbsp;&nbsp;color=&apos;rgba(0,255,255,0.8)&apos;
        <br />
        &nbsp;&nbsp;size=&#123;18&#125;
        <br />
        &nbsp;&nbsp;count=&#123;4&#125;
        <br />
        &nbsp;&nbsp;spread=&#123;2.5&#125;
        <br />
        &nbsp;&nbsp;duration=&#123;2000&#125;
        <br />
        &nbsp;&nbsp;frequency=&#123;40&#125;
        <br />
        &nbsp;&nbsp;movementThreshold=&#123;10&#125;
        <br />
        /&gt;
      </pre>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        🧯 Troubleshooting
      </h2>
      <ul className="list-disc ml-6 text-green-100 space-y-1">
        <li>
          🛑 <strong>Not working?</strong> Add{" "}
          <code>&apos;use client&apos;</code> or use dynamic import.
        </li>
        <li>
          🐢 <strong>Laggy?</strong> Reduce <code>count</code> or increase{" "}
          <code>frequency</code>.
        </li>
        <li>
          🎯 <strong>Hidden?</strong> Check for <code>overflow: hidden</code> on{" "}
          <code>html</code> or <code>body</code>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-300">
        🧑‍💻 About the Author
      </h2>
      <p className="text-green-100">
        Created by <strong>Tarun Sai Srinivas</strong> — a developer passionate
        about clean UI, micro-interactions, and developer tools.
        <br />
        🔗{" "}
        <a
          className="underline"
          href="https://linkedin.com/in/tarun-sai-srinivas"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        | 🐙{" "}
        <a
          className="underline"
          href="https://github.com/tarunsaisrinivas"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
