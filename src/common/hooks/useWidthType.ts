import { useMediaQuery } from '@mui/material';

const useWidthType = () => {
    const isPhone = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');
    const isDesktop = useMediaQuery('(min-width:1200px)');

    let widthType: 'phone' | 'tablet' | 'desktop' | 'laptop' = 'laptop';

    if (isPhone) {
        widthType = 'phone';
    } else if (isTablet) {
        widthType = 'tablet';
    } else if (isDesktop) {
        widthType = 'desktop';
    } else {
        widthType = 'laptop';
    }

    return widthType;
};

export default useWidthType;
