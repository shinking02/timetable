import React from 'react';
import { motion } from 'framer-motion';

export default class Create extends React.Component {
    render() {
        return (
            <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <p>this it create</p>
            </motion.div>
        )
    }
}