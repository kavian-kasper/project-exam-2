import Head from 'next/head'
import BlogList from '../../components/blog/BlogList';
import TopNav from '../../components/nav/TopNav';
import { setCategoryName } from '../../utilities/setCategoryName';
import { useState } from 'react';
import CategoryFilter from '../../components/blog/CategoryFilter';


export async function getStaticProps(context)  {
  const response = await fetch("https://braanaas.org/semester-assignment/wp-json/wp/v2/posts");
  const data = await response.json();
  setCategoryName(data);
  console.log(data)

  return {
    props: {data}
  }
}

const Blog = ({data}) => {

  const [selectedValue, setSelectedValue] = useState("all blogposts")

  const setCategory = (event) => {
    setSelectedValue(event.target.value)
  }

return (
  <div>
      <Head>
        <title>Blog - Kunal Sharda</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
        Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
        to try a free class and experience Kunal&apos;s therapeutic and individual approach to Yoga."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

    <TopNav />
    <main>
      <div className="w-full text-center py-3">
        <h1 className="text-black">Kunal&apos;s Blog</h1>
        <h2 className="text-xl">Lorem ipsum dolor si amet</h2>
        <CategoryFilter setCategory={setCategory}/>
      </div>
    <BlogList route={"/blog/"} blogs={data.filter((blog) => {
      if (  blog.blogHasCategory[0] === selectedValue ||
            blog.blogHasCategory[1] === selectedValue)
            {return true}
      else if (selectedValue ==="all blogposts")
            {return true}
      }
      )}/>
    </main>
  </div>
  )
}

export default Blog