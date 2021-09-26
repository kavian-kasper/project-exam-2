import Head from "next/head"
import TopNav from "../components/nav/TopNav";
import Card from "../components/common/Card";
import Banner from "../components/common/Banner";
import Link from "next/link";

export default function Home() {

  const bannerStyle= {
    backgroundImage: "url(https://braanaas.org/semester-assignment/wp-content/uploads/2021/09/home-banner-wide.jpg)",
    height: "40rem",
    backgroundPosition: "top center"
  };

  const button = <Link href="/classes"><a><button className="btn-primary ml-3">Classes</button></a></Link>

  return (
    <div>
      <Head>
        <title>Kunal Sharda</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
        Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
        to try a free class and experience Kunal&apos;s therapeutic and individual approach to Yoga."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TopNav />
      <Banner banner={bannerStyle} title={"Kunal Sharda"} button={button} />

      <main className="thumbnail-grid">
        <Link href="/accupuncture">
          <a>
            <Card src={"/assets/accup_sm.jpg"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            buttonTitle={"Accupuncture"} />
          </a>
        </Link>
        <Link href="/therapy">
          <a>
            <Card src={"/assets/therapy_sm.jpg"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            buttonTitle={"Therapy"} />
          </a>
        </Link>
        <Link href="/yoga">
          <a>
            <Card src={"/assets/mysore_sm.jpg"}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            buttonTitle={"Yoga"} />
          </a>
        </Link>
      </main>
    </div>
  )
}
