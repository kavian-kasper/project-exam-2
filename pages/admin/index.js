import Thumbnail from "../../components/common/Thumbnail";
import { setCategoryName } from "../../utilities/setCategoryName";
import AdminNav from "../../components/nav/AdminNav";
import { checkAuth } from "../../utilities/checkAuth";
import { blogpostUrl } from "../api/api";

export async function getStaticProps(context)  {
  const response = await fetch(blogpostUrl);
  const data = await response.json();
  setCategoryName(data)

  return {
    props: {data}
  }
}

const Admin = ({data}) => {

  checkAuth();

  return (
    <div>
      <AdminNav />
      <main>
          <div className="thumbnail-grid">
            { data.map((blog) => (
            <Thumbnail blog={blog} key={blog.id} route={"/admin/"} />
            ))}
        </div>
      </main>
    </div>
      )
  }

export default Admin
