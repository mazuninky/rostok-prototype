import React from "react";

import "./stories.css";

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {linkTo} from "@storybook/addon-links";

import {Button, Welcome} from "@storybook/react/demo";

import ClubCard from "../pages/clubs/club-card"

const club = {
    name: "Гей клуб",
    img: "https://moika78.ru/news2/2019/01/itmo.jpg"
};

storiesOf("Club", module)
    .add("club card", () => (
        <ClubCard item={club}> </ClubCard>
    ));

// storiesOf("Welcome", module).add("to Storybook", () => (
//     <Welcome showApp={linkTo("Button")} />
// ));
//
// storiesOf("Button", module)
//     .add("with text", () => (
//         <Button onClick={action("clicked")}>
//             Hello Button
//         </Button>
//     ))
//     .add("with some emoji", () => (
//         <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
//     ));
