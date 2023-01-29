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
import { LoremIpsum } from "lorem-ipsum";
import { useEffect, useState } from "react";

export default function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [loremParagraph, setLoremParagraph] = useState("");
  const [loremSentence, setLoremSentence] = useState("");
  const [loremWord, setLoremWord] = useState("");

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  useEffect(() => {
    if (loremWord === "") {
      setLoremWord(lorem.generateWords(3));
    }
    if (loremSentence === "") {
      setLoremSentence(lorem.generateSentences(1));
    }
    if (loremParagraph === "") {
      setLoremParagraph(lorem.generateParagraphs(1));
    }
  });

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
              <Link href="https://www.netbil.com.br/">
                <Image src={logoImg} alt="Netbil educacional." width={180} />
              </Link>
            </Grid>
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

      {tabValue === 0 ? (
        <Grid
          container
          spacing={2}
          paddingLeft="15vh"
          paddingRight="15vh"
          align="justify"
        >
          <Grid item xs={9} paddingRight="10vh">
            <Box spacing={5} marginBottom={4}>
              <Stack spacing={5} direction="row">
                <Box marginTop={1}>
                  <Link href="#">
                    <Image src={postImg} alt="Imagem aleatória." width={350} />
                  </Link>
                </Box>
                <Stack spacing={2}>
                  <Link href="#" variant="h4" underline="hover" color="inherit">
                    {loremWord}
                  </Link>
                  <Typography>{loremParagraph}</Typography>
                </Stack>
              </Stack>
            </Box>

            <Divider />

            <Stack spacing={6} marginBottom={4} marginTop={4} direction="row">
              <Box>
                <Stack spacing={3}>
                  <Box marginTop={1}>
                    <Link href="#">
                      <Image
                        src={postImg}
                        alt="Imagem aleatória."
                        width={300}
                      />
                    </Link>
                  </Box>
                  <Stack spacing={2}>
                    <Link
                      href="#"
                      variant="h5"
                      underline="hover"
                      color="inherit"
                    >
                      {loremWord}
                    </Link>
                    <Typography>{loremParagraph}</Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box>
                <Stack spacing={3}>
                  <Box marginTop={1}>
                    <Link href="#">
                      <Image
                        src={postImg}
                        alt="Imagem aleatória."
                        width={300}
                      />
                    </Link>
                  </Box>
                  <Stack spacing={2}>
                    <Link
                      href="#"
                      variant="h5"
                      underline="hover"
                      color="inherit"
                    >
                      {loremWord}
                    </Link>
                    <Typography>{loremParagraph}</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={3} align="justify">
            <Typography variant="h4">Veja também:</Typography>
            <Stack spacing={2} paddingTop="4vh">
              <Box>
                <Box marginTop={1} marginBottom={2} align="center">
                  <Link href="#">
                    <Image src={postImg} alt="Imagem aleatória." width={300} />
                  </Link>
                </Box>
                <Link href="#" variant="h5" underline="hover" color="inherit">
                  {loremWord}
                </Link>
                <Typography>{loremSentence}</Typography>
              </Box>

              <Divider />

              <Box>
                <Box marginTop={1} marginBottom={2} align="center">
                  <Link href="#">
                    <Image src={postImg} alt="Imagem aleatória." width={300} />
                  </Link>
                </Box>
                <Link href="#" variant="h5" underline="hover" color="inherit">
                  {loremWord}
                </Link>
                <Typography>{loremSentence}</Typography>
              </Box>
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
