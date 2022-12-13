import { Button, Paper } from "@mui/material";
import Slider from "../Components/Slide";
import Layout from "../layouts";

export default function Home() {
  return (
    <Layout
      title="Home - Summer"
      pageDescription="This is the home of our page"
    >
      <Slider />
    </Layout>
  );
}
