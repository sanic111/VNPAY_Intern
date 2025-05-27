import { useEffect, useRef } from "react";

export default function useLogger(componentName, props) {
    const previousProps = useRef(props);

    useEffect(() => {
        console.log(`[${componentName}] Rendered`);

        const changedProps = {};
        Object.keys(props).forEach((key) => {
            if (props[key] !== previousProps.current[key]) {
                changedProps[key] = {
                    from: previousProps.current[key],
                    to: props[key],
                };
            }
        });

        if (Object.keys(changedProps).length > 0) {
            console.log(`[${componentName}] Props changed:`, changedProps);
        }

        previousProps.current = props;
    });
}
