import { ReactNode } from "react";
import { FooterComponent } from "../footer/component";
import { HeaderComponent } from "../header/component";

export const LayoutComponent: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div>
            <HeaderComponent/>
            <div>{children}</div>
            <FooterComponent/>
        </div>
    );
};