import React from 'react';
import { IConditionalRenderProps } from '../../utils/interfaces';

const ConditionalRender = ({ isVisible, children }: IConditionalRenderProps) =>  (
    <>
        {
            isVisible? children : null
        }
    </>
);

export { ConditionalRender };