@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,500&display=swap');

:root {
  --background: #030303;
  --text: #f7f7f7;
  --muted: #d4d4d4;
  --accent: #e5a17e;
  --blue: #0879bc;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 24px;
}

body {
  background: var(--background);
  color: var(--text);
  font-family: 'DM Sans', Arial, sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

.hero {
  min-height: 390px;
  background:
    radial-gradient(
      ellipse at 90% 100%,
      rgba(0, 110, 177, 0.8) 0%,
      rgba(0, 66, 111, 0.48) 29%,
      transparent 62%
    ),
    #030303;
}

.hero-inner {
  width: min(100% - 48px, 850px);
  min-height: 390px;
  margin: 0 auto;
  padding: 65px 0 35px;
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  grid-template-rows: 1fr auto;
  align-items: start;
  column-gap: 45px;
}

.intro {
  padding-top: 20px;
}

.eyebrow {
  display: none;
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--accent);
}

.intro h1 {
  font-size: clamp(30px, 4vw, 38px);
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -1.8px;
}

.subtitle {
  margin-top: 4px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(17px, 2.1vw, 21px);
  font-style: italic;
  line-height: 1.5;
}

.platforms {
  margin-top: 2px;
  font-size: clamp(14px, 1.7vw, 19px);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.7px;
}

.platforms span {
  color: var(--accent);
}

.description {
  max-width: 430px;
  margin-top: 8px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.portrait-wrap {
  width: 100%;
  max-width: 180px;
  aspect-ratio: 0.8;
  justify-self: center;
  overflow: hidden;
  border-radius: 44% 44% 40% 40%;
  background: #42a9ec;
}

.portrait {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.scroll-cue {
  align-self: end;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  width: fit-content;
  font-size: 12px;
  transition: color 0.2s ease;
}

.arrow {
  color: #f18a28;
  font-size: 34px;
  line-height: 1;
}

.scroll-cue:hover,
.linkedin:hover,
.footer a:hover {
  color: var(--accent);
}

.linkedin {
  justify-self: center;
  align-self: end;
  font-size: 11px;
  transition: color 0.2s ease;
}

.linkedin span {
  color: #0a9be8;
  font-weight: 700;
  margin-right: 5px;
}

.section {
  padding: 48px 24px 65px;
}

.about-inner {
  width: min(100%, 650px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 35px;
}

.about h2 {
  color: #e9b49a;
  font-size: 22px;
  line-height: 1.4;
  font-weight: 600;
}

.about-copy {
  color: #dedede;
  font-size: 12px;
  line-height: 1.75;
}

.about-copy p + p {
  margin-top: 10px;
}

.footer {
  width: min(100% - 48px, 850px);
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid #222;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: #999;
  font-size: 12px;
}

@media (min-width: 1100px) {
  .hero-inner {
    width: min(100% - 80px, 850px);
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: auto;
  }

  .hero-inner {
    width: min(100% - 40px, 420px);
    min-height: auto;
    padding: 55px 0 28px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 28px;
  }

  .intro {
    padding-top: 0;
    order: 1;
  }

  .portrait-wrap {
    order: 0;
    width: 145px;
    justify-self: start;
  }

  .intro h1 {
    font-size: 34px;
  }

  .description {
    font-size: 13px;
  }

  .scroll-cue {
    order: 2;
  }

  .linkedin {
    justify-self: start;
    order: 3;
    margin-top: -18px;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .about h2 {
    font-size: 24px;
  }

  .about-copy {
    font-size: 14px;
  }

  .section {
    padding: 38px 20px 50px;
  }

  .footer {
    width: calc(100% - 40px);
    font-size: 11px;
  }
}
