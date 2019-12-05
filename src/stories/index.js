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
