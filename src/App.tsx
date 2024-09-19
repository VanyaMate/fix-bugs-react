import { ComponentPropsWithoutRef, FC, memo } from 'react';
import {
    HhTooltipBaseWithFix,
} from './fixes/hh/TooltipBase/HhTooltipBaseWithFix.tsx';


export type AppProps =
    {}
    & ComponentPropsWithoutRef<'div'>;

export const App: FC<AppProps> = memo(function App (props) {
    const { className, ...other } = props;

    return (
        <div { ...other }>
            {
                new Array(1000).fill(0).map((_, index) => (
                    <HhTooltipBaseWithFix key={ index }/>
                ))
            }
        </div>
    );
});