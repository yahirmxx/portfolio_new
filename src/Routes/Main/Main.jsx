import React from "react";
import { Button, ButtonGroup } from "@material-tailwind/react";
import "./Styles/Main.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
import { About } from "./About";
import { Skills } from "./Skills";

export const Main = () => {
  return (
    <>
      <div>
        <div className="bg-black min-h-screen flex items-center justify-center">
          <div className="container mx-auto p-4 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 lg:mr-4 mb-4 img-container">
              <img
                className="w-full"
                src={getImageUrl("Images/hero.png")}
                alt="hero"
              />
              <div className="text-overlay text-white text-center font-bold">
                <p>
                  Soy programador egresado de la Universidad Tecnologica de
                  SLRC, con experiencia en diversos proyectos como diseñador y
                  programador full-stack
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col items-center">
              <div className="text-center font-bold my-4">
                <h1 className="text-white">Alan Yahir Morfin Samaniego</h1>
              </div>

              <div className="text-center font-bold my-4">
                <h1 className="title">My Portfolio</h1>
              </div>

              <div className="grid p-5">
                <ButtonGroup variant="text">
                  <Button className="text-white">
                    <Link to="dev">Development</Link>
                  </Button>
                  <Button className="text-white">
                    <Link to="video">Video</Link>
                  </Button>
                  <Button className="text-white">
                    <Link to="design">Design</Link>
                  </Button>
                  <Button className="text-white">
                    <Link to="audio">Audio</Link>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <About />
      <Skills />
    </>
  );
};
