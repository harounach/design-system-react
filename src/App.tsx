import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Appbar from "./components/Appbar/Appbar";
import Button from "./components/Button/Button";
import LinkButton from "./components/Button/LinkButton";
import Icon from "./components/Button/Icon";
import Grid from "./components/Grid/Grid";
import Column from "./components/Grid/Column";
import Box from "./components/Box/Box";
import Flex from "./components/Flex/Flex";

function App() {
  return (
    <div>
      <section>
        <Appbar />
      </section>
      <section className="container p-1">
        <section>
          <h2>Buttons</h2>
          <div>
            <div className="mb-1">
              <Button primary>Primary Button</Button>
            </div>
            <div className="mb-1">
              <Button secondary>Secondary Button</Button>
            </div>
            <div className="mb-1">
              <Button center full>
                Center Button
              </Button>
            </div>
            <div className="mb-1">
              <Button full>Full Button</Button>
            </div>
            <div className="mb-1">
              <Button search>
                <Icon type={faSearch} />
              </Button>
            </div>
          </div>
        </section>
        <section>
          <h2>Link Buttons</h2>
          <div>
            <div className="mb-1">
              <LinkButton url="#" primary>
                Primary Button
              </LinkButton>
            </div>
            <div className="mb-1">
              <LinkButton url="#" secondary>
                Secondary Button
              </LinkButton>
            </div>
            <div className="mb-1">
              <LinkButton url="#" center full>
                Center Button
              </LinkButton>
            </div>
            <div className="mb-1">
              <LinkButton url="#" full>
                Full Button
              </LinkButton>
            </div>
            <div className="mb-1">
              <LinkButton url="#" search>
                <Icon type={faSearch} />
              </LinkButton>
            </div>
          </div>
        </section>

        <section>
          <h2>Grid System</h2>
          <div>
            <Grid gap="1">
              <Column col={12} colSM={6} colMD={4} colLG={3}>
                <Box customclasses="p-2">Box 1</Box>
              </Column>
              <Column col={12} colSM={6} colMD={4} colLG={3}>
                <Box customclasses="p-2">Box 2</Box>
              </Column>
              <Column col={12} colSM={6} colMD={4} colLG={3}>
                <Box customclasses="p-2">Box 3</Box>
              </Column>
              <Column col={12} colSM={6} colMD={4} colLG={3}>
                <Box customclasses="p-2">Box 4</Box>
              </Column>
            </Grid>
          </div>
        </section>

        <section>
          <h2>Flexbox</h2>
          <div>
            <Flex display="flex" wrap="wrap">
              <Box customclasses="p-2">Box 1</Box>
              <Box customclasses="p-2">Box 1</Box>
              <Box customclasses="p-2">Box 1</Box>
            </Flex>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
