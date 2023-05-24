import React, { useEffect, useState } from "react";
import logoPikachu from "../../Assets/Images/logo.png";
import { Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  function logoutHandler(e) {
    localStorage.removeItem("loggedUser");
    navigate("/");
  }

  return (
    <Navbar
      className=" px-5 items-center shadow-2xl bg-opacity-50 bg-slate-300"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/pokemon">
        <img src={logoPikachu} className="mr-3 h-16" alt="Pokedex" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokedex
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline={true}
          label={
            <img
              src={loggedUser.image}
              alt="profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{loggedUser.alias}</span>
            <span className="block truncate text-sm font-medium">
              {loggedUser.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Perfil</Dropdown.Item>
          <Dropdown.Item>Configuraciones</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item onClick={(e) => logoutHandler(e)}>
            Cerrar Sesión
          </Dropdown.Item>
        </Dropdown>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/pokemon/create" >
          Crear Pokemon
        </Navbar.Link>
        {/* <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
