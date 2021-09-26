import Head from "next/head";
import Banner from "../../components/common/Banner";
import TopNav from "../../components/nav/TopNav";

export async function getStaticPaths() {

    const response = await fetch("https://braanaas.org/semester-assignment/wp-json/wp/v2/posts");
    const data = await response.json();
    const paths =  data.map(blogPost  => {
        return {
            params: { id: blogPost.id.toString() }
        }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch("https://braanaas.org/semester-assignment/wp-json/wp/v2/posts/" + id);
    const data = await response.json();
    console.log(data)

    return {
      props: { data },
      revalidate: 30
    }
  }

export const Details =  ({ data }) => {

  console.log(data.jetpack_featured_media_url)
  const bannerUrl = `url(` + data.jetpack_featured_media_url + `)`

  const bannerStyle= {
    backgroundImage: bannerUrl,
    height: "32rem"
}

    return (
        <div>
      <Head>
        <title>Blog - Kunal Sharda</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
        Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
        to try a free class and experience Kunal's therapeutic and individual approach to Yoga."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

          <TopNav/>
          <Banner banner={bannerStyle} title={data.title.rendered} />
          <h2 className="article text-2xl text-center">Lorem Ipsum dolor si amet. Lorem Ipsum dolor si amet. Lorem Ipsum dolor si amet.</h2>
          <article className="article" dangerouslySetInnerHTML={{__html: data.content.rendered}}></article>
        </div>
    )
}

export default Details