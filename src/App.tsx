import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Appbar from "./components/Appbar/Appbar";
import AppbarBrand from "./components/Appbar/AppbarBrand";
import AppbarNav from "./components/Appbar/AppbarNav";
import AppbarItems from "./components/Appbar/AppbarItems";
import AppbarItem from "./components/Appbar/AppbarItem";
import MenuButton from "./components/Button/MenuButton";
import AppbarLink from "./components/Appbar/AppbarLink";
import AppbarMenu from "./components/Appbar/AppbarMenu";
import SearchForm from "./components/SearchForm/SearchForm";
import Button from "./components/Button/Button";
import LinkButton from "./components/Button/LinkButton";
import Icon from "./components/Button/Icon";
import Grid from "./components/Grid/Grid";
import Column from "./components/Grid/Column";
import Box from "./components/Box/Box";
import Flex from "./components/Flex/Flex";
import FlexItem from "./components/Flex/FlexItem";

function App() {
  return (
    <div>
      <section>
        <Appbar customclasses="mb-15">
          <AppbarBrand customclasses="appbar__brand" />
          <MenuButton customclasses="appbar__menu" />
          <AppbarNav>
            <AppbarItems>
              <AppbarItem>
                <AppbarLink label="Link 1" url="#" />
              </AppbarItem>

              <AppbarItem>
                <AppbarLink label="Link 2" url="#" />
              </AppbarItem>

              {/* Dropdown */}
              <AppbarItem dropdown>
                <AppbarLink label="Link 3" toggle url="#" />

                <AppbarMenu>
                  <AppbarItem>
                    <AppbarLink label="Sublink 1" url="#" />
                  </AppbarItem>

                  {/* Dropdown */}
                  <AppbarItem dropdown>
                    <AppbarLink label="Sublink 2" toggle url="#" />

                    <AppbarMenu>
                      {/* Dropdown */}
                      <AppbarItem dropdown>
                        <AppbarLink label="Sub Sublink 1" toggle url="#" />
                        <AppbarMenu>
                          <AppbarItem>
                            <AppbarLink label="Sub sub sublink 1" url="#" />
                          </AppbarItem>
                          <AppbarItem>
                            <AppbarLink label="Sub sub sublink 2" url="#" />
                          </AppbarItem>
                          <AppbarItem>
                            <AppbarLink label="Sub sub sublink 3" url="#" />
                          </AppbarItem>
                        </AppbarMenu>
                      </AppbarItem>

                      <AppbarItem>
                        <AppbarLink label="Sub Sublink 2" url="#" />
                      </AppbarItem>

                      <AppbarItem>
                        <AppbarLink label="Sub Sublink 3" url="#" />
                      </AppbarItem>
                    </AppbarMenu>
                  </AppbarItem>

                  <AppbarItem>
                    <AppbarLink label="Sublink 3" url="#" />
                  </AppbarItem>

                  <AppbarItem>
                    <AppbarLink label="Sublink 4" url="#" />
                  </AppbarItem>
                </AppbarMenu>
              </AppbarItem>

              <AppbarItem>
                <AppbarLink label="Link 4" url="#" />
              </AppbarItem>
            </AppbarItems>
            {/* Search form */}
            <SearchForm customclasses="appbar__search" />
          </AppbarNav>
        </Appbar>
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
              <FlexItem flex="1">
                <Box customclasses="p-2">Box 1</Box>
              </FlexItem>
              <FlexItem order="2">
                <Box customclasses="p-2">Box 2</Box>
              </FlexItem>
              <FlexItem alignSelf="end">
                <Box customclasses="p-2">Box 3</Box>
              </FlexItem>
            </Flex>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
