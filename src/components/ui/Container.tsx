import { ReactNode } from "react";

const Container = ({children}: {children:ReactNode}) => {
    return (
        <div className="w-full max-w-3xl mx-auto rounded-xl">
            {children}
        </div>
    );
};

export default Container;