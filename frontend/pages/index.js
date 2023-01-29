import {
  Tab,
  Tabs,
  Grid,
  Box,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import postImg from "../public/img/pieces.jpg";
import logoImg from "../public/img/netbil-logo.png";
import { useState } from "react";

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Box>
      <Box
        sx={{
          height: "15vh",
          padding: "15vh",
          paddingTop: "5vh",
        }}
      >
        <Stack direction="row">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Image
                src={logoImg}
                alt="Imagem aleatória."
                width={188}
                height={78}
              />
            </Grid>{" "}
            <Grid item xs={8}>
              <Tabs value={tabValue} centered>
                <Tab
                  label="Home"
                  sx={{
                    fontSize: "3vh",
                  }}
                  onClick={() => setTabValue(0)}
                />
                <Tab
                  label="Colaboradores"
                  sx={{
                    fontSize: "3vh",
                  }}
                  onClick={() => setTabValue(1)}
                />
                <Tab
                  label="Contato"
                  sx={{
                    fontSize: "3vh",
                  }}
                  onClick={() => setTabValue(2)}
                />
              </Tabs>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      {/* Home */}
      {tabValue === 0 ? (
        <Grid
          container
          spacing={2}
          paddingLeft="15vh"
          paddingRight="15vh"
          align="justify"
        >
          <Grid item xs={8} paddingRight="5vh">
            <Box spacing={5} marginBottom={4}>
              <Stack spacing={5} direction="row">
                <Box marginTop={1}>
                  <Image
                    src={postImg}
                    alt="Imagem aleatória."
                    width={350}
                    height={250}
                  />
                </Box>
                <Stack spacing={2}>
                  <Link href="#" variant="h4" underline="hover" color="inherit">
                    Lorem Ipsum.
                  </Link>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Divider />
            <Stack spacing={10} marginBottom={4} marginTop={4} direction="row">
              <Box>
                <Stack spacing={5}>
                  <Box marginTop={1}>
                    <Image
                      src={postImg}
                      alt="Imagem aleatória."
                      width={300}
                      height={214}
                    />
                  </Box>
                  <Stack spacing={2}>
                    <Typography variant="h4" component="h2">
                      Lorem Ipsum.
                    </Typography>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              <Box>
                <Stack spacing={5}>
                  <Box marginTop={1}>
                    <Image
                      src={postImg}
                      alt="Imagem aleatória."
                      width={300}
                      height={214}
                    />
                  </Box>
                  <Stack spacing={2}>
                    <Typography variant="h4" component="h2">
                      Lorem Ipsum.
                    </Typography>
                    <Typography>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4} align="justify">
            <Typography variant="h4" component="h3">
              Veja também:
            </Typography>
            <Stack spacing={2} paddingTop="4vh">
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ) : tabValue === 1 ? (
        <Grid
          container
          spacing={6}
          align="center"
          padding="15vh"
          paddingTop="5vh"
        >
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Shrimp and Chorizo Paella" />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Shrimp and Chorizo Paella" />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Shrimp and Chorizo Paella" />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader title="Shrimp and Chorizo Paella" />
              <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Stack
          spacing={2}
          paddingLeft="15vh"
          paddingRight="4vh"
          align="justify"
        >
          <Typography>Dúvidas? Sugestões? Entre em contato conosco!</Typography>
        </Stack>
      )}
      <Stack
        direction="row"
        paddingRight="15vh"
        paddingBottom="5vh"
        paddingTop="10vh"
        justifyContent="right"
      >
        <Typography fontSize={12}>
          Feito por&nbsp;
          <Link
            href="https://www.linkedin.com/in/hugocostadev/"
            underline="hover"
            color="red"
          >
            Hugo
          </Link>
          &nbsp;com&nbsp;
          <AiOutlineHeart color="red" />
        </Typography>
      </Stack>
    </Box>
  );
}
