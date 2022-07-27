import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { motion, AnimatePresence } from "framer-motion";

import * as S from './styles';

interface AccordionProps {
    title: string;
    titleColor?: string;
    titleBackground?: string;
    children: string | JSX.Element;
}

const Accordion = ({ title, titleColor, titleBackground, children }: AccordionProps) => {

    const [open, isOpen] = useState(false);

    const handleOpenAccordion = () => {
        isOpen(!open);
    }

    return (
        <S.Container>

            <S.Title 
                onClick={() => handleOpenAccordion()} 
                color={titleColor} 
                background={titleBackground}
            >
                {title}
                <S.Status>
                    { open ? 
                        <AiFillMinusCircle /> : 
                        <AiFillPlusCircle /> 
                    }
                </S.Status>
            </S.Title>

            <S.Content>
                <AnimatePresence initial={false}>
                    {open &&
                        <motion.div 
                            initial="collapsed" 
                            animate="show" 
                            exit="collapsed" 
                            variants={{
                                collapsed: {
                                    opacity: 0,
                                    height: 0,
                                },
                                show: {
                                    opacity: 1,
                                    height: 'auto',
                                }
                            }} 
                            transition={{ duration: 0.8 }}
                        >
                                <p>{children}</p>
                        </motion.div>
                    }
                </AnimatePresence>
            </S.Content>
        </S.Container>
    );
}

export default Accordion;