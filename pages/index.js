import Axios from "axios";
import { useEffect, useState } from "react";
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
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSend,
  AiOutlineUser,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import Image from "next/image";
import mockImage1 from "../public/img/mock-image-1.jpg";
import mockImage2 from "../public/img/mock-image-2.jpg";
import mockImage3 from "../public/img/mock-image-3.jpg";
import mockImage4 from "../public/img/mock-image-4.jpg";
import mockImage5 from "../public/img/mock-image-5.jpg";
import logoImg from "../public/img/netbil-logo.png";
import { LoremIpsum } from "lorem-ipsum";
import { Chip, Input, Modal, ModalClose, ModalDialog } from "@mui/joy";

export default function Home() {
  const [contactModal, setContactModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactMail, setContactMail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactLocation, setContactLocation] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [employeeData, setEmployeeData] = useState(undefined);
  const [feedbackError, setFeedbackError] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [loremParagraph, setLoremParagraph] = useState("");
  const [loremSentence, setLoremSentence] = useState("");
  const [loremWord, setLoremWord] = useState("");
  const [tabValue, setTabValue] = useState(0);

  const dateToday = new Date().toLocaleDateString();

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

  const getEmployeeData = async () => {
    await Axios.get(
      "https://netbil.com.br/api_netbil/api-teste-programacao/colaboradores",
      {
        headers: { Authorization: "LF22023L0TKCIZMAHNETR572022PG9BILIDNHR" },
      }
    )
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const postContact = async (name, mail, phone, location, message) => {
    await Axios.post(
      "https://netbil.com.br/api_netbil/api-teste-programacao/contato",
      {
        nome: name,
        email: mail,
        telefone: phone,
        cidade: location,
        mensagem: message,
      },
      {
        headers: { Authorization: "LF22023L0TKCIZMAHNETR572022PG9BILIDNHR" },
      }
    )
      .then((res) => {
        setContactModal(false);
        setFeedbackSuccess(true);
        console.log(res);
      })
      .catch((err) => {
        setContactModal(false);
        setFeedbackError(true);
        console.log(err);
      });
  };

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
    if (employeeData === undefined) {
      getEmployeeData();
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
              </Tabs>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Button variant="outlined" onClick={() => setContactModal(true)}>
                <AiOutlinePhone />
                &nbsp;Contato
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      {tabValue === 0 ? (
        ////// Home

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
                    <Image
                      src={mockImage1}
                      alt="Imagem aleatória."
                      width={350}
                    />
                  </Link>
                </Box>
                <Stack>
                  <Link href="#" variant="h4" underline="hover" color="inherit">
                    {loremWord}
                  </Link>
                  <Typography marginBottom={2}>{dateToday}</Typography>
                  <Typography>{loremParagraph}</Typography>

                  <Stack direction="row" marginTop={1}>
                    <Typography variant="body2" marginTop={1}>
                      Tags:
                    </Typography>
                    <Link href="#" color="inherit" underline="none">
                      <Chip
                        variant="outlined"
                        size="sm"
                        sx={{
                          borderColor: "cornflowerblue",
                          borderWidth: "2px",
                          margin: "1vh",
                          marginBottom: "0",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Educação
                      </Chip>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                      <Chip
                        variant="outlined"
                        size="sm"
                        sx={{
                          borderColor: "cornflowerblue",
                          borderWidth: "2px",
                          margin: "1vh",
                          marginBottom: "0",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Família
                      </Chip>
                    </Link>
                    <Link href="#" color="inherit" underline="none">
                      <Chip
                        variant="outlined"
                        size="sm"
                        sx={{
                          borderColor: "cornflowerblue",
                          borderWidth: "2px",
                          margin: "1vh",
                          marginBottom: "0",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Auto-conhecimento
                      </Chip>
                    </Link>
                  </Stack>
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
                        src={mockImage2}
                        alt="Imagem aleatória."
                        width={300}
                      />
                    </Link>
                  </Box>
                  <Stack>
                    <Link
                      href="#"
                      variant="h5"
                      underline="hover"
                      color="inherit"
                    >
                      {loremWord}
                    </Link>
                    <Typography marginBottom={2}>{dateToday}</Typography>
                    <Typography>{loremParagraph}</Typography>

                    <Stack direction="row" marginTop={1}>
                      <Typography variant="body2" marginTop={1}>
                        Tags:
                      </Typography>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Educação
                        </Chip>
                      </Link>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Família
                        </Chip>
                      </Link>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Auto-conhecimento
                        </Chip>
                      </Link>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>

              <Box>
                <Stack spacing={3}>
                  <Box marginTop={1}>
                    <Link href="#">
                      <Image
                        src={mockImage3}
                        alt="Imagem aleatória."
                        width={300}
                      />
                    </Link>
                  </Box>
                  <Stack>
                    <Link
                      href="#"
                      variant="h5"
                      underline="hover"
                      color="inherit"
                    >
                      {loremWord}
                    </Link>
                    <Typography marginBottom={2}>{dateToday}</Typography>
                    <Typography>{loremParagraph}</Typography>

                    <Stack direction="row" marginTop={1}>
                      <Typography variant="body2" marginTop={1}>
                        Tags:
                      </Typography>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Educação
                        </Chip>
                      </Link>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Família
                        </Chip>
                      </Link>
                      <Link href="#" color="inherit" underline="none">
                        <Chip
                          variant="outlined"
                          size="sm"
                          sx={{
                            borderColor: "cornflowerblue",
                            borderWidth: "2px",
                            margin: "1vh",
                            marginBottom: "0",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Auto-conhecimento
                        </Chip>
                      </Link>
                    </Stack>
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
                    <Image
                      src={mockImage4}
                      alt="Imagem aleatória."
                      width={300}
                    />
                  </Link>
                </Box>
                <Link href="#" variant="h5" underline="hover" color="inherit">
                  {loremWord}
                </Link>
                <Typography>{loremSentence}</Typography>

                <Stack direction="row" marginTop={1}>
                  <Typography variant="body2" marginTop={1}>
                    Tags:
                  </Typography>
                  <Link href="#" color="inherit" underline="none">
                    <Chip
                      variant="outlined"
                      size="sm"
                      sx={{
                        borderColor: "cornflowerblue",
                        borderWidth: "2px",
                        margin: "1vh",
                        marginBottom: "0",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Educação
                    </Chip>
                  </Link>
                  <Link href="#" color="inherit" underline="none">
                    <Chip
                      variant="outlined"
                      size="sm"
                      sx={{
                        borderColor: "cornflowerblue",
                        borderWidth: "2px",
                        margin: "1vh",
                        marginBottom: "0",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Família
                    </Chip>
                  </Link>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Box marginTop={1} marginBottom={2} align="center">
                  <Link href="#">
                    <Image
                      src={mockImage5}
                      alt="Imagem aleatória."
                      width={300}
                    />
                  </Link>
                </Box>
                <Link href="#" variant="h5" underline="hover" color="inherit">
                  {loremWord}
                </Link>
                <Typography>{loremSentence}</Typography>

                <Stack direction="row" marginTop={1}>
                  <Typography variant="body2" marginTop={1}>
                    Tags:
                  </Typography>
                  <Link href="#" color="inherit" underline="none">
                    <Chip
                      variant="outlined"
                      size="sm"
                      sx={{
                        borderColor: "cornflowerblue",
                        borderWidth: "2px",
                        margin: "1vh",
                        marginBottom: "0",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Educação
                    </Chip>
                  </Link>
                  <Link href="#" color="inherit" underline="none">
                    <Chip
                      variant="outlined"
                      size="sm"
                      sx={{
                        borderColor: "cornflowerblue",
                        borderWidth: "2px",
                        margin: "1vh",
                        marginBottom: "0",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Família
                    </Chip>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      ) : (
        ////// Colaboradores

        <Grid
          container
          spacing={5}
          align="center"
          padding="15vh"
          paddingTop="5vh"
        >
          {employeeData.map((employee) => (
            <Grid item xs={3}>
              <Card>
                <CardHeader title={employee.Nome} />
                <CardMedia
                  component="img"
                  height="250"
                  image={employee.Foto}
                  alt={employee.Nome}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {employee.Sobre}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {contactModal ? (
        ////// Contato

        <Modal open={contactModal} onClose={() => setContactModal(false)}>
          <ModalDialog
            aria-labelledby="variant-modal-title"
            aria-describedby="variant-modal-description"
            variant="outlined"
            sx={{
              backgroundColor: "snow",
              borderRadius: "sm",
              borderWidth: "2px",
            }}
          >
            <ModalClose />
            <Image src={logoImg} alt="Netbil educacional." width={100} />

            <Typography marginBottom={2} marginTop={1}>
              Entre em contato conosco! O tempo médio de resposta é de x a y
              dias.
            </Typography>
            <form
              method="post"
              onSubmit={(e) => {
                postContact(
                  contactName,
                  contactMail,
                  contactPhone,
                  contactLocation,
                  contactMessage
                );
                e.preventDefault();
              }}
            >
              <Input
                startDecorator={<AiOutlineUser />}
                placeholder="Nome"
                type="text"
                required
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
                spacing={2}
                sx={{ fontFamily: "sans-serif", marginBottom: "1vh" }}
              />
              <Input
                startDecorator={<AiOutlineMail />}
                placeholder="E-mail"
                type="email"
                required
                onChange={(e) => {
                  setContactMail(e.target.value);
                }}
                sx={{ fontFamily: "sans-serif", marginBottom: "1vh" }}
              />
              <Input
                startDecorator={<AiOutlinePhone />}
                placeholder="Telefone"
                type="tel"
                required
                onChange={(e) => {
                  setContactPhone(e.target.value);
                }}
                sx={{ fontFamily: "sans-serif", marginBottom: "1vh" }}
              />
              <Input
                startDecorator={<SlLocationPin />}
                placeholder="Cidade"
                type="text"
                required
                onChange={(e) => {
                  setContactLocation(e.target.value);
                }}
                sx={{ fontFamily: "sans-serif", marginBottom: "1vh" }}
              />
              <Input
                startDecorator={<AiOutlineComment />}
                placeholder="Mensagem"
                type="text"
                required
                onChange={(e) => {
                  setContactMessage(e.target.value);
                }}
                sx={{ fontFamily: "sans-serif", marginBottom: "2vh" }}
              />

              <Button type="submit">
                <AiOutlineSend />
                &nbsp;Enviar
              </Button>
            </form>
          </ModalDialog>
        </Modal>
      ) : (
        ""
      )}

      <Snackbar
        open={feedbackError || feedbackSuccess}
        autoHideDuration={6000}
        onClose={() => {
          setFeedbackError(false);
          setFeedbackSuccess(false);
        }}
      >
        {feedbackError ? (
          <Alert variant="filled" severity="error">
            Erro ao enviar contato. Tente novamente mais tarde.
          </Alert>
        ) : (
          <Alert variant="filled" severity="success">
            Seu contato foi enviado com sucesso!
          </Alert>
        )}
      </Snackbar>

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
