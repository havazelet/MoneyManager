import { ComponentType } from "react";

export default interface MenuItem {
    text: string;
    icon: ComponentType;
    path: string;
}