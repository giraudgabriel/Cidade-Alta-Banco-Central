import React from "react";
import {motion} from 'framer-motion';

export default function Error() {
    return <motion initial={{opacity: 0}} animate={{opacity: 1}}
                   exit={{opacity: 0}}>
        <h1 className={"m-5"}>
            Página não encontrada!
        </h1>
    </motion>
}