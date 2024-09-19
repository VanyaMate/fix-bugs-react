import { ComponentPropsWithoutRef, FC, memo, useEffect } from 'react';
import css from './HhTooltipBaseWithoutFix.module.css';
import { scheduler } from './scheduler.ts';


export type HhTooltipBaseWithFixProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const HhTooltipBaseWithFix: FC<HhTooltipBaseWithFixProps> = memo(function HhTooltipBaseWithFix (props) {
    const { className, ...other } = props;

    useEffect(() => {
        const div = document.createElement('div');

        scheduler.mutate(() => {
            div.classList.add(css.container);
            document.body.appendChild(div);
        });

        scheduler.calculate(() => {
            console.log(parseInt(window.getComputedStyle(div).getPropertyValue('width'), 10));
        });

        scheduler.afterAll(() => {
            document.body.removeChild(div);
        });
    }, []);

    return (
        <div { ...other }>
            HhTooltipBaseWithFix Component
        </div>
    );
});