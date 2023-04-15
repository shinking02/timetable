import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

const Layout = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #333333;
    width: 100%;
    height: 100%;
`;

export default class Top extends React.Component {
    render() {
        return (
            <motion.div
                style={{ width: "100%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Layout>
                    <h2>かんたんに時間割を作成</h2>
                    <Button
                        label="つくってみる"
                        href="/create"
                    />
                </Layout>
            </motion.div>
        )
    }
}