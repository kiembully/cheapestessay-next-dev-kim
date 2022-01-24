import { useRouter } from "next/router";

export function useBasePath() {
    const { basePath } = useRouter();
    return basePath;
}

//wrapper for the react img component that will check for locally sourced images and prepend the basePath
const Img = (props) => {
    const basePath = useBasePath();
    const finalSrc = basePath?.charAt(0) === "/" ? basePath + props.src : props.src;
    return (
        <img
            {...props}
            src={finalSrc}
        />
    )
}

export default Img;