import Layout from "@components/Layout";
import SavedImageList from "@components/Lists/SavedImageList";

const MyImages = () => {
  return (
    <Layout heading="Mis imágenes">
      <SavedImageList />
    </Layout>
  );
};

export default MyImages;