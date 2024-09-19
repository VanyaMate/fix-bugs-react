import { ComponentPropsWithoutRef, FC, memo, useEffect } from 'react';
import css from './HhTooltipBaseWithoutFix.module.css';


export type HhTooltipBaseWithoutFixProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const HhTooltipBaseWithoutFix: FC<HhTooltipBaseWithoutFixProps> = memo(function HhTooltipBaseWithoutFix (props) {
    const { className, ...other } = props;

    useEffect(() => {
        const div = document.createElement('div');
        div.classList.add(css.container);
        document.body.appendChild(div);
        console.log(parseInt(window.getComputedStyle(div).getPropertyValue('width'), 10));
        document.body.removeChild(div);
    }, []);

    return (
        <div { ...other }>
            HhTooltipBaseWithoutFix Component
        </div>
    );
});