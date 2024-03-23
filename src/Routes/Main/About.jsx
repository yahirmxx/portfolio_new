import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Tooltip,
  ButtonGroup,
  Button,
} from "@material-tailwind/react";
import "./Styles/About.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div>
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="container mx-auto p-4 lg:flex lg:items-center lg:justify-between mtp">
            <div className="lg:w-1/2 lg:mr-4 mb-4 img-container">
              <Typography variant="paragraph">
                My name is Alan Yahir Morfin. I am a musician and music producer
                with a decade of experience playing the piano, skilled in
                various genres such as jazz, pop, funk, latin rhythms, and
                regional Mexican music. As a satisfied user of your products,
                particularly your MIDI controllers.
              </Typography>
              <br />
              <Typography variant="paragraph">
                With two years of experience in software development, I have
                honed my skills in various programming languages and
                methodologies, making significant contributions to projects in
                both individual and team settings.
              </Typography>
              <br />

              <Typography variant="paragraph">
                Over the years, I have honed my skills in graphic design, video
                editing, and multimedia production, leveraging these tools to
                create captivating content that resonates with audiences across
                various platforms.
              </Typography>
            </div>

            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="">
                <h1 className="about">About me</h1>
              </div>

              <Card className="w-96">
                <CardHeader floated={false} className="h-70">
                  <img
                    src={getImageUrl("Images/me.jpg")}
                    alt="profile-picture"
                  />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Yahir Morfin
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                    Ingeniero de Software
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Like">
                    <Typography
                      as="a"
                      href="#facebook"
                      variant="lead"
                      color="blue"
                      textGradient
                    >
                      <i className="fab fa-facebook" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#twitter"
                      variant="lead"
                      color="light-blue"
                      textGradient
                    >
                      <i className="fab fa-twitter" />
                    </Typography>
                  </Tooltip>
                  <Tooltip content="Follow">
                    <Typography
                      as="a"
                      href="#instagram"
                      variant="lead"
                      color="purple"
                      textGradient
                    >
                      <i className="fab fa-instagram" />
                    </Typography>
                  </Tooltip>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
