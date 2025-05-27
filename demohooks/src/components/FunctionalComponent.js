import React from "react";
import useLogger from "../hooks/useLogger";

function FunctionalComponent({ count, onAlert }) {
    useLogger("FunctionalComponent", { count, onAlert });

    const now = performance.now();
    while (performance.now() - now < 500) { }

    return (
        <div>
            <div>Functional Component render with count: {count}</div>
            <button onClick={onAlert}>Call Parent Function</button>
        </div>
    );
}

export default React.memo(FunctionalComponent);


