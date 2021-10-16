import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
  <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
  <meta name="author" content="SemiColonWeb" />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
    integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
  <link rel="stylesheet" href="style.css" type="text/css" />
  <link rel="stylesheet" href="css/dark.css" type="text/css" />
  <link rel="stylesheet" href="custom.css" type="text/css" />
  <link rel="stylesheet" href="css/fonts.css" type="text/css" />
  <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
  <link rel="stylesheet" href="css/animate.css" type="text/css" />
  <link rel="stylesheet" href="css/custom.css" type="text/css" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="css/colors.php?color=f0a540" type="text/css" />
  <title>The Treehouse</title>
  {/* Document Wrapper
	============================================= */}
  <div id="wrapper" className="clearfix">
    {/* Header
		============================================= */}
    <header
      id="header"
      className="transparent-header dark"
      data-sticky-class="not-dark"
    >
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            {/* Logo
						============================================= */}
            <div id="logo">
              <a
                href="index.html"
                className="standard-logo"
                data-dark-logo="images/logo-dark.png"
              >
                <img src="images/logo.png" alt="Canvas Logo" />
              </a>
              <a
                href="index.html"
                className="retina-logo"
                data-dark-logo="images/logo-dark@2x.png"
              >
                <img src="images/logo@2x.png" alt="Canvas Logo" />
              </a>
            </div>
            {/* #logo end */}
            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100">
                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                <path d="m 30,50 h 40" />
                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
              </svg>
            </div>
            {/* Primary Navigation
						============================================= */}
            <nav className="primary-menu not-dark">
              <ul className="menu-container">
                <li className="menu-item">
                  <a className="menu-link" href="#content">
                    <div>Roadmap</div>
                  </a>
                </li>
                <li className="menu-item bg-color">
                  <a className="menu-link" href="#">
                    <div>Mint Now</div>
                  </a>
                </li>
              </ul>
            </nav>
            {/* #primary-menu end */}
          </div>
        </div>
      </div>
      <div className="header-wrap-clone" />
    </header>
    {/* #header end */}
    {/* Slider
		============================================= */}
    <section
      id="slider"
      className="slider-element min-vh-60 min-vh-md-100 include-header"
      style={{
        background: 'url("images/hero-image.jpg") center right no-repeat',
        backgroundSize: "cover"
      }}
    >
      <div className="slider-inner">
        <div className="vertical-middle">
          <div className="container py-5">
            <div className="emphasis-title dark m-0">
              <h2
                style={{
                  fontSize: 80,
                  lineHeight: "1.4",
                  fontWeight: 600,
                  textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
                }}
              >
                The Treehouse.
              </h2>
              <br />
              <p
                className="font-weight-light d-none d-md-block"
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
                }}
              >
                Coming Soon!
              </p>
              <a href="#" className="button button-large button-rounded ml-0">
                Mint Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content
		============================================= */}
    <section id="content">
      <div className="content-wrap pt-0 clearfix">
        <div className="section m-0 bg-transparent clearfix">
          <div className="container clearfix">
            <div
              className="heading-block center border-bottom-0 mx-auto"
              style={{ maxWidth: 640 }}
            >
              <h3
                className="nott font-secondary font-weight-normal"
                style={{ fontSize: 36 }}
              >
                Roadmap
              </h3>
              <span>
                Whats on the horizon for The Treehouse Club? Find out below.
              </span>
            </div>
            {/* Post Content
						============================================= */}
            <div className="postcontent col-lg-12 order-lg-last">
              {/* Posts
							============================================= */}
              <div id="posts" className="post-timeline">
                <div className="entry">
                  <div className="entry-timeline">
                    <i className="fa-solid fa-building fa-1xl" />
                    <div className="timeline-divider" />
                  </div>
                  <div className="entry-image">
                    <div className="card">
                      <div className="card-body">
                        After Public Mint the Treehouse Club (DAO) will be
                        formed. 1 week after the launch All Gen1 members (anyone
                        who minted an NFT) will automatically become a member of
                        the DAO and will enjoy special benefits like airdrops,
                        giveaways, Collabs with other projects (More info will
                        be shared) soon 👀), and a special discord role verified
                        by grape protocol bot.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <div className="entry-timeline">
                    <i className="fa-solid fa-tree fa-1xl" />
                    <div className="timeline-divider" />
                  </div>
                  <div className="entry-image">
                    <div className="card">
                      <div className="card-body">
                        <b>1 Mint = 1 🌳</b> <br /> For every NFT minted, we
                        will work with onetreeplanted.org to plant an equal
                        number of trees. Our way of giving back to nature.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <div className="entry-timeline">
                    <i className="fa-solid fa-cube fa-1xl" />
                    <div className="timeline-divider" />
                  </div>
                  <div className="entry-image">
                    <div className="card">
                      <div className="card-body">
                        The Treehouse Club Team will be working with experienced
                        3D artists and designers to model 3D versions of each
                        NFT. These will be made available in the metaverse and
                        will be airdropping to the Gen1 minters for free.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <div className="entry-timeline">
                    <i className="fa-solid fa-coins fa-1xl" />
                    <div className="timeline-divider" />
                  </div>
                  <div className="entry-image">
                    <div className="card">
                      <div className="card-body">
                        Our own marketplace this will be one of our primary
                        focus after launch -why? The percentage % royalties
                        taken by secondary marketplaces like Solanart &amp;
                        Digitaleyes will be kept by the DAO and can be put to
                        more uses on things the Club members decide by
                        consensus.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <div className="entry-timeline">
                    <i className="fa-solid fa-question fa-1xl" />
                    <div className="timeline-divider" />
                  </div>
                  <div className="entry-image">
                    <div className="card">
                      <div className="card-body">
                        We plan to launch many more Projects supporting various
                        charities and artists under the Treehouse Club brand in
                        future. We want to be the all in one NFT launchpad of
                        Solana with inbuilt marketplace. All Gen-1 NFT holders
                        will receive royalties from all the future projects
                        launched under the Treehouse Club Brand.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #posts end */}
            </div>
            {/* .postcontent end */}
          </div>
        </div>
        <div
          className="section dark parallax m-0"
          style={{
            backgroundImage: 'url("images/others/section-bg.jpg")',
            padding: "140px 0"
          }}
          data-bottom-top="background-position:0px 50px;"
          data-top-bottom="background-position:0px -300px;"
        >
          <div className="container center clearfix">
            <div className="row clearfix">
              <div className="col-lg-6">
                <div className="heading-block border-bottom-0 mb-0">
                  <div
                    className="before-heading text-lowercase ls1"
                    style={{ color: "rgb(0, 0, 0)", fontStyle: "normal" }}
                  >
                    want to know more?
                  </div>
                  <h3
                    className="nott font-secondary font-weight-normal"
                    style={{ fontSize: 32, color: "rgb(0, 0, 0)" }}
                  >
                    Drop into Discord and follow us on Twitter.
                  </h3>
                  <a
                    href="https://discord.gg/4x4tMZaHhZ"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-large button-circle button-border button-grey button-light topmargin-sm ml-0"
                  >
                    JOIN NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content
		============================================= */}
      </div>
    </section>
    {/* #content end */}
  </div>
  {/* #content end */}
  {/* Footer
		============================================= */}
  <footer id="footer" className="dark">
    <div className="line m-0" />
    {/* Copyrights
			============================================= */}
    <div id="copyrights" className="dark">
      <div className="container">
        <div className="row justify-content-between align-items-center col-mb-30">
          <div className="col-12 col-lg-auto text-center text-lg-left">
            Copyrights © 2021 All Rights Reserved by The Treehouse.
          </div>
          <div className="col-12 col-lg-auto text-center text-lg-right">
            <a
              href="https://twitter.com/TreehouseNFT"
              className="social-icon inline-block si-small si-borderless si-twitter"
            >
              <i className="icon-twitter" />
              <i className="icon-twitter" />
            </a>
            <a
              href="mailto:solanatreehouseclub@gmail.com"
              className="social-icon inline-block si-small si-borderless si-mail"
            >
              <i className="icon-mail" />
              <i className="icon-mail" />
            </a>
            <a
              href="https://discord.gg/4x4tMZaHhZ"
              className="social-icon inline-block si-small si-borderless si-discord"
            >
              <i className="icon-discord" />
              <i className="icon-discord" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* #copyrights end */}
  </footer>
  {/* #footer end */}
  {/* #wrapper end */}
  {/* Go To Top
	============================================= */}
  <div id="gotoTop" className="icon-angle-up" />
  <script async src="js/jquery.js"></script>
	<script async src="js/plugins.min.js"></script>
	<script async src="js/functions.js"></script>
</>

  )
}
