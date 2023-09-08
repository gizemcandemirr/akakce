import Discount from "~/components/discount/Discount";
import ImageSlider from "~/components/image-slider/ImageSlider";
import Layout from "~/components/layout/index";

export default function Index() {
  return (
    <Layout>
      <ImageSlider />
      <Discount />
    </Layout>
  );
}
