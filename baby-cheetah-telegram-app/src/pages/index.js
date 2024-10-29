import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Baby Cheetah Telegram App</title>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <main>
        <h1>Welcome to Baby Cheetah</h1>
        {/* Your game content goes here */}
      </main>
      <script dangerouslySetInnerHTML={{__html: `
        const tg = window.Telegram.WebApp;
        tg.expand();
        tg.ready();
      `}} />
    </div>
  )
}