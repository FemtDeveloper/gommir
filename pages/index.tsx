import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Layout from "../layouts";

export default function Home() {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <Layout
      title="Home - Summer"
      pageDescription="This is the home of our page"
    >
      {/* <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel> */}
    </Layout>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
