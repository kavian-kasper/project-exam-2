import Head from "next/head";
import Banner from "../components/common/Banner"
import TopNav from "../components/nav/TopNav";

const Yoga = () => {

    const bannerStyle = {
        backgroundImage: "url(https://braanaas.org/semester-assignment/wp-content/uploads/2021/09/mysore_lg.jpg)",
        height: "32rem",
        backgroundPosition: "bottom"
    }
    return (
        <div>
            <Head>
                <title>Yoga - Kunal Sharda</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
                Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
                to try a free class and experience Kunal's therapeutic and individual approach to Yoga."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

        <TopNav />
            <Banner assistiveText="People practicing yoga in Kunal's studio. Kunal is guiding a resting practicioner in the foreground." title="Yoga" banner={bannerStyle} />
            <main>
                <article className="article">
                <h2 className="article text-2xl text-center">
                    Lorem Ipsum dolor si amet. Lorem Ipsum dolor si amet. Lorem Ipsum dolor si amet.
                </h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed
                libero. Habitant morbi tristique senectus et netus et malesuada.
                Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin.
                Euismod in pellentesque massa placerat duis ultricies. Aliquet enim
                tortor at auctor urna nunc id. Ultricies integer quis auctor elit.
                Elementum sagittis vitae et leo. Sem viverra aliquet eget sit. Congue
                mauris rhoncus aenean vel elit scelerisque. Scelerisque varius morbi
                enim nunc faucibus a pellentesque. Varius sit amet mattis vulputate enim.
                Risus pretium quam vulputate dignissim suspendisse in est. A cras semper
                auctor neque vitae tempus quam.
                </article>
            </main>
        </div>
    )
}

export default Yoga
